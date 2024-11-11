import { Component } from '@angular/core';
import { StatsCardComponent } from '../../components/stats-card/stats-card.component';
import { RecentPostsComponent } from '../../components/recent-posts/recent-posts.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [StatsCardComponent, RecentPostsComponent],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Dashboard</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <app-stats-card
          title="Total Posts"
          value="1,234"
          trend="+12%"
        />
        <app-stats-card
          title="Engagement Rate"
          value="5.7%"
          trend="+3.2%"
        />
        <app-stats-card
          title="Followers"
          value="45.2K"
          trend="+8.5%"
        />
      </div>

      <app-recent-posts />
    </div>
  `
})
export class DashboardHomeComponent {}
