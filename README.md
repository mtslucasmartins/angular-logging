# Logging in Angular Applications [Link](https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications)

By **Paul D. Sheriff**

Programmers frequently use console.log to record errors or other informational messages in their Angular applications. Although this is fine while debugging your application, it’s not a best practice for production applications. As Angular is all about services, it’s a better idea to create a logging service that you can call from other services and components. In this logging service, you can still call console.log, but you can also modify the service later to record messages to store them in local storage or a database table via the Web API.

In this article, you’ll build up the logging service in a series of steps. First, you create a simple log service class to log messages using console.log(). Next, you add some logging levels so you can report on debug, warning, error, and other types of log messages. Then you create a generic logging service class to call other classes to log to the console, local storage, and a Web API. Finally, you create a log publishing service that reads a JSON file to choose which log service classes to use.

## A Simple Logging Service

To get started, create a very simple logging service that only logs to the console. The point here is to replace all of your console.log statements in your Angular application with calls to a service. Bring up an existing Angular application or create a new one. If you don’t already have one, add a folder named shared under the \src\app folder. Create a new TypeScript file named log.service.ts. Add the code shown in the following snippet.

```
import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  log(msg: any) {
    console.log(new Date() + ": " + JSON.stringify(msg));
  }
}

```

 This code creates an injectable service that can be created by Angular and injected into any of your Angular classes. The log() method accepts a message that can be any type. A new date is created so each message can be logged to the console with the date and time attached to it. The date/time is not that important when just logging to the console, but once you start logging to local storage or to a database, you want the date/time attached so you know when the log messages was created. Notice the use of JSON.stringify around the msg parameter. This allows you to pass an object and it can be logged as a string.
