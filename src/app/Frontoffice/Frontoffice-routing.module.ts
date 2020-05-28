import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AdmissionComponent } from './Admission/Admission.component';
import { VisitorbookComponent } from './visitorbook/visitorbook.component';
import { calllogComponent} from './calllog/calllog.component';
import { PostaldispatchComponent } from './postaldispatch/postaldispatch.component';
import { PostalreceiveComponent } from './postalreceive/postalreceive.component';
import { ComplainComponent } from './complain/complain.component';
import { SetupComponent } from './setup/setup.component';
import { ComplainttypeComponent } from './setup/complainttype/complainttype.component';
import { VisitorsPurposeComponent } from './setup/visitors-purpose/visitors-purpose.component';
import { SourceComponent } from './setup/source/source.component';
import { ReferenceComponent } from './setup/reference/reference.component';





const routes: Routes = [
   { path: 'Admission', component: AdmissionComponent},
  { path: 'visitorbook', component: VisitorbookComponent},
  { path: 'calllog', component: calllogComponent},
  {path : 'complain', component: ComplainComponent},
  {path : 'postaldispatch', component: PostaldispatchComponent},
  {path : 'postalreceive', component: PostalreceiveComponent},
  {path : 'setup', component: SetupComponent},
  { path: 'complainttype', component: ComplainttypeComponent },
  { path: 'visitors-purpose', component: VisitorsPurposeComponent },
  { path: 'source', component: SourceComponent },
  { path: 'reference', component: ReferenceComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FrontofficeRoutingModule {
}


