
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SocialMediaService } from '../../../core/services/social-media.service';
import {Post} from "../../../models/post.model";

@Component({
  selector: 'app-post-scheduler',
  template: `
  `
})
export class PostSchedulerComponent implements OnInit {
  postForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private socialMediaService: SocialMediaService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.postForm = this.fb.group({
      content: ['', [Validators.required, Validators.maxLength(280)]],
      platforms: this.fb.group({
        twitter: [false],
        linkedin: [false]
      }, {
        validators: [this.atLeastOnePlatformSelected]
      }),
      scheduledTime: ['', [Validators.required, this.futureDateValidator]]
    });
  }

  private atLeastOnePlatformSelected(group: FormGroup) {
    const platforms = group.value;
    return Object.values(platforms).some(Boolean)
      ? null
      : { noPlatformSelected: true };
  }

  private futureDateValidator(control: AbstractControl) {
    if (!control.value) return null;

    const scheduledDate = new Date(control.value);
    const now = new Date();

    return scheduledDate > now ? null : { pastDate: true };
  }

  onSubmit() {
    if (this.postForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      const formValue = this.postForm.value;
      const post: Post = {
        content: formValue.content.trim(),
        targetPlatforms: Object.entries(formValue.platforms)
          .filter(([_, selected]) => selected)
          .map(([platform]) => platform),
        scheduledTime: new Date(formValue.scheduledTime),
        mediaUrls: [], // Optional: Add media handling later
      };

      this.socialMediaService.schedulePost(post).subscribe({
        next: (response) => {
          console.log('Post scheduled successfully', response);
          this.postForm.reset();
          // TODO: Add success notification
        },
        error: (error) => {
          console.error('Error scheduling post', error);
          // TODO: Add error notification
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}
