import {Analytics} from "@angular/cli/lib/config/workspace-schema";

export interface Post {
  id: string;
  userId: string;
  content: string;
  mediaUrls: string[];
  targetPlatforms: string[];
  scheduledTime: Date;
  //status: PostStatus;
  analytics: Analytics;

}

export interface PostAnalytics {
  likes?: number;
  shares?: number;
  comments?: number;
  reach?: number;
}
