import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/news/form/form.component';
import { ListAllComponent } from './components/news/list-all/list-all.component';
import { ViewComponent } from './components/news/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'viewnews/:id',
    component: ViewComponent
  },
  {
    path: 'listallnews',
    component: ListAllComponent,
  },
  {
    path: 'listallnews/createnews',
    component: FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
