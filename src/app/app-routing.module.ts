import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { ControlComponent } from './control/control.component';
import { BuilderComponent } from './builder/builder.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '' , redirectTo: 'form', pathMatch: 'full'
  },
  {
    path: 'group' , component: GroupComponent
  },
  {
    path: 'control' , component: ControlComponent
  },
  {
    path: 'builder' , component: BuilderComponent
  },
  {
    path: 'form' , component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
