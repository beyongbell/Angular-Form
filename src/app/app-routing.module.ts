import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { FormComponent } from './form/form.component';
import { BuilderComponent } from './builder/builder.component';

const routes: Routes = [
  {
    path: '' , redirectTo: 'form', pathMatch: 'full'
  },
  {
    path: 'group' , component: GroupComponent
  },
  {
    path: 'form' , component: FormComponent
  },
  {
    path: 'builder' , component: BuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
