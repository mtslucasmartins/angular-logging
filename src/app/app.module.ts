import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingModule } from './modules/testing/testing.module';
import { environment } from '@env';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, ScreenTrackingService, AngularFireAnalytics } from '@angular/fire/analytics';
import { NoAuthGuard } from '@app/guard/no-auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    TestingModule,

    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule
  ],
  providers: [
    NoAuthGuard,
    ScreenTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
