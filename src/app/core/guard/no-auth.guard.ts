import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AngularFireAnalyticsModule, ScreenTrackingService, AngularFireAnalytics } from '@angular/fire/analytics';

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor(public analytics: AngularFireAnalytics) {
        this.analytics.setUserId('mts.lucasmartins@gmail.com');

        this.analytics.setUserProperties({
            gender: `male`
        });
    }

  canActivate(): boolean {
    return true;
  }
}
