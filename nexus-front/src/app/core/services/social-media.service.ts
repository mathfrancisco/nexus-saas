import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  private apiUrl = 'api/social-media'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  schedulePost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/posts/schedule`, post);
  }

  getScheduledPosts(startDate: Date, endDate: Date): Observable<Post[]> {
    return this.http.get<Post[]>(`${(this.apiUrl)}/scheduled`, {
      params: {
        start: startDate.toISOString(),
        end: endDate.toISOString()
      }
    });
  }
}
