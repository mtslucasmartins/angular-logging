import { Component } from '@angular/core';
import { LogService } from '@app/services/logger/log.service';

@Component({
    selector: 'app-testing-component',
    templateUrl: './testing.component.html',
    styleUrls: ['./testing.component.scss']
})
export class TestingComponent {

    constructor(public logger: LogService) { }


    log() {
        this.logger.log('Log is working just fine!');
    }

}
