import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule } from './shared/components';
import {  ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxChartModule, DxDataGridModule, DxPieChartModule, DxSchedulerModule, DxSelectBoxModule} from 'devextreme-angular';
import { SectorsComponent } from './sectors/sectors.component';
import { DatagridComponent } from './datagrid/datagrid.component'; 
import {FormsStoreModule} from './Store/store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule, DatePipe } from '@angular/common';
import { StandardChartComponent } from './graphs/standard-chart/standard-chart.component';
import { JsonTableComponent } from './graphs/jsonTable/jsonTable.component';
import { HttpClientModule } from '@angular/common/http';
import { StackedChartComponent } from './graphs/stackedChart/stackedChart.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
      SectorsComponent,
      DatagridComponent,
      StandardChartComponent,
      JsonTableComponent,
      StackedChartComponent,
      CalendarComponent,
   ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    FormsStoreModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    DxChartModule,
    CommonModule,
    HttpClientModule,
    DxSelectBoxModule,
    DxPieChartModule,
    DxSchedulerModule,

  ],
  providers: [ ScreenService, AppInfoService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
