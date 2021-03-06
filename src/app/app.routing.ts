import { WelcomeComponent }  from './welcome/welcome.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostNewComponent } from './post-new/post-new.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthGuardService } from './auth-guard.service';

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
    component: PostNewComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'posts/:id/edit',
    component: PostEditComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
