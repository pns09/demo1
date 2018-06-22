import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Forminput1Component } from "src/app/forminput1/forminput1.component";
import { Forminput2Component } from "src/app/forminput2/forminput2.component";
import { FeedbackComponent } from "src/app/feedback/feedback.component";

const routes: Routes = [
  { path: '',component: Forminput1Component },
  { path: 'part2',component: Forminput2Component },
  { path: 'feedback',component: FeedbackComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
