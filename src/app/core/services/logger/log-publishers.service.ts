import { Injectable } from "@angular/core";
import { LogPublisher, LogConsole } from './log-publishers';

@Injectable({
    providedIn: 'root'
})
export class LogPublishersService {

    publishers: LogPublisher[] = [];

    constructor() {
        // Build publishers arrays
        this.buildPublishers();
    }

    buildPublishers(): void {
        // Create instance of LogConsole class
        let logPub: LogPublisher = new LogConsole();
        // Add publisher to array
        this.publishers.push(logPub);
    }

}