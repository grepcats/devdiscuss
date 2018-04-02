import { WelcomeComponent }  from './welcome/welcome.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostNewComponent } from './post-new/post-new.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'new',
    component: PostNewComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
