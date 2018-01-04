import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
// import { DataTablesModule } from 'angular-datatables';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { FileUploadModule } from 'ng2-file-upload';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { LoadersCssModule } from 'angular2-loaders-css';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CookieService } from 'ng2-cookies';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { SlimScrollModule } from 'ng2-slimscroll';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ModalModule } from 'ngx-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Config } from './app.config';
import { AuthGuard } from './auth.guard';
import { AuthCheckService } from './auth-check.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LinksComponent } from './links/links.component';
import { RolesComponent } from './roles/roles.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardRoleShowdoctorecgannouncementtableComponent } from './dashboard-role-showdoctorecgannouncementtable/dashboard-role-showdoctorecgannouncementtable.component';
import { DashboardShowecgfiletableComponent } from './dashboard-showecgfiletable/dashboard-showecgfiletable.component';
import { DashboardRoleShowecgcurrentdayreporttableComponent } from './dashboard-role-showecgcurrentdayreporttable/dashboard-role-showecgcurrentdayreporttable.component';
import { DashboardRoleShowsurgeonworkstatusComponent } from './dashboard-role-showsurgeonworkstatus/dashboard-role-showsurgeonworkstatus.component';
import { HaShowalertsDashboardComponent } from './ha-showalerts-dashboard/ha-showalerts-dashboard.component';
import { HaShowcurrentdayallocationComponent } from './ha-showcurrentdayallocation/ha-showcurrentdayallocation.component';
import { RoleShowmaworkstatusComponent } from './role-showmaworkstatus/role-showmaworkstatus.component';
import { AsstAllocationComponent } from './asst-allocation/asst-allocation.component';
import { EcgtypenameComponent } from './ecgtypename/ecgtypename.component';
import { DoctorprovidersComponent } from './doctorproviders/doctorproviders.component';
import { DoctorreportComponent } from './doctorreport/doctorreport.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ReportpriorityComponent } from './reportpriority/reportpriority.component';
import { LocationComponent } from './location/location.component';
import { RolecompletedComponent } from './rolecompleted/rolecompleted.component';
import { AssistantreportComponent } from './assistantreport/assistantreport.component';
import { SublocationComponent } from './sublocation/sublocation.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { FilepatternComponent } from './filepattern/filepattern.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { EcgfilesComponent } from './ecgfiles/ecgfiles.component';
import { PoolusersComponent } from './poolusers/poolusers.component';
import { AssignedfilesettingsComponent } from './assignedfilesettings/assignedfilesettings.component';
import { EchosComponent } from './echos/echos.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AddassistanceComponent } from './addassistance/addassistance.component';
import { UserselectComponent } from './userselect/userselect.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { AsstallocreportComponent } from './asstallocreport/asstallocreport.component';
import { TechniciansettingsComponent } from './techniciansettings/techniciansettings.component';
import { CountsettingComponent } from './countsetting/countsetting.component';
import { EchofeaturesComponent } from './echofeatures/echofeatures.component';
import { EchohoslogoComponent } from './echohoslogo/echohoslogo.component';
import { SublocrepwardsComponent } from './sublocrepwards/sublocrepwards.component';
import { DefultallocComponent } from './defultalloc/defultalloc.component';
import { DefultallocationComponent } from './defultallocation/defultallocation.component';
import { DaywiseallocationComponent } from './daywiseallocation/daywiseallocation.component';
import { MonthwiseallocationComponent } from './monthwiseallocation/monthwiseallocation.component';
import { VerificaionComponent } from './verificaion/verificaion.component';
import { RecordsComponent } from './records/records.component';
import { SharedrecordsComponent } from './sharedrecords/sharedrecords.component';
import { EcgclaimreportComponent } from './ecgclaimreport/ecgclaimreport.component';
import { VarificationfilesComponent } from './varificationfiles/varificationfiles.component';
import { RedirectfilesComponent } from './redirectfiles/redirectfiles.component';
import { AutotypeComponent } from './autotype/autotype.component';
import { TechnicianreportComponent } from './technicianreport/technicianreport.component';
import { AllocationreportComponent } from './allocationreport/allocationreport.component';
import { DownloadedreportComponent } from './downloadedreport/downloadedreport.component';
import { PendingreportComponent } from './pendingreport/pendingreport.component';
import { CancelledreportComponent } from './cancelledreport/cancelledreport.component';
import { UploadedfilesreportComponent } from './uploadedfilesreport/uploadedfilesreport.component';
import { RejectedechoreportComponent } from './rejectedechoreport/rejectedechoreport.component';
import { TechniciancompletedechosComponent } from './techniciancompletedechos/techniciancompletedechos.component';
import { PoolfilesComponent } from './poolfiles/poolfiles.component';
import { PrioritywisereportComponent } from './prioritywisereport/prioritywisereport.component';
import { LoginComponent } from './login/login.component';
import { EchodisplayComponent } from './echodisplay/echodisplay.component';
export function configLoad(){
 return Config.getInstance('config.json');
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LinksComponent,
    RolesComponent,
    FooterComponent,
    DashboardRoleShowdoctorecgannouncementtableComponent,
    DashboardShowecgfiletableComponent,
    DashboardRoleShowecgcurrentdayreporttableComponent,
    DashboardRoleShowsurgeonworkstatusComponent,
    HaShowalertsDashboardComponent,
    HaShowcurrentdayallocationComponent,
    RoleShowmaworkstatusComponent,
    AsstAllocationComponent,
    EcgtypenameComponent,
    DoctorprovidersComponent,
    DoctorreportComponent,
    AvailabilityComponent,
    ReportpriorityComponent,
    LocationComponent,
    RolecompletedComponent,
    AssistantreportComponent,
    SublocationComponent,
    ConfigurationsComponent,
    FilepatternComponent,
    PdfViewerComponent,
    EcgfilesComponent,
    PoolusersComponent,
    AssignedfilesettingsComponent,
    EchosComponent,
    ScheduleComponent,
    AddassistanceComponent,
    UserselectComponent,
    UploadComponent,
    DownloadComponent,
    AsstallocreportComponent,
    TechniciansettingsComponent,
    CountsettingComponent,
    EchofeaturesComponent,
    EchohoslogoComponent,
    SublocrepwardsComponent,
    DefultallocComponent,
    DefultallocationComponent,
    DaywiseallocationComponent,
    MonthwiseallocationComponent,
    VerificaionComponent,
    RecordsComponent,
    SharedrecordsComponent,
    EcgclaimreportComponent,
    VarificationfilesComponent,
    RedirectfilesComponent,
    AutotypeComponent,
    TechnicianreportComponent,
    AllocationreportComponent,
    DownloadedreportComponent,
    PendingreportComponent,
    CancelledreportComponent,
    UploadedfilesreportComponent,
    RejectedechoreportComponent,
    TechniciancompletedechosComponent,
    PoolfilesComponent,
    PrioritywisereportComponent,
    LoginComponent,
    EchodisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FileUploadModule,
    MyDateRangePickerModule,
    TypeaheadModule.forRoot(),
    // DataTablesModule,
    AngularDualListBoxModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    SlimScrollModule,
    SlimLoadingBarModule.forRoot(),
    ModalModule.forRoot(),
    MyDatePickerModule,
    PaginationModule.forRoot(),
    LoadersCssModule,
    AccordionModule.forRoot()
  ],
  providers: [CookieService, AuthGuard, AuthCheckService,{provide: Config, useFactory:configLoad}, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }