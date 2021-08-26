import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchRepositoryComponent } from './search-repository/search-repository.component';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search-user', component: SearchUserComponent },
  { path: 'search-repository', component: SearchRepositoryComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
