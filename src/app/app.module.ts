import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { HttpModule }           from '@angular/http';

//import { AppRoutingModule }     from './app-routing/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetsComponent } from './assets/assets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetService } from './asset.service';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { OperationsComponent } from './operations/operations.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { DrawingsComponent } from './operations/drawings/drawings.component';
import { ProceduresComponent } from './operations/procedures/procedures.component';
import { ManualsComponent } from './operations/manuals/manuals.component';
import { ManagementComponent } from './management/management.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    AssetDetailComponent,
    AssetsComponent,
    DashboardComponent,
    NavComponent,
    LoginComponent,
    OperationsComponent,
    MaintenanceComponent,
    DrawingsComponent,
    ProceduresComponent,
    ManualsComponent,
    ManagementComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    MaterialModule
    //AppRoutingModule
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
