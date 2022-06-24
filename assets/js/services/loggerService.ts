import {Subject} from "rxjs";
import {NsLogLevel} from "../object-definitions/logger-object";
import {environment} from "../environments/environment";

export class LoggerService {
    subject = null;
    name: string;
    level: number = environment.logger.level;
    // level: number = 4;
    date = Date();
    returnData: string;
    // authObject: AuthObject;

    constructor() {
        this.subject = new Subject();
    }

    private buildLogMsg(...logMsg): string {
        let msg: string;
        let timeNow: string;

        timeNow = new Date().toLocaleString();
        msg = timeNow + ' ' + logMsg.join(' ');

        return msg;
    }

    private consoleLogger(level: string, ...logMsg) {
        const timeNow = new Date().toLocaleString();
        const msg = `${level} ${timeNow} ${logMsg[0]}`;
        if (logMsg.length > 1) {
            logMsg.shift();
            console.log(msg, ...logMsg);
        } else {
            console.log(msg);
        }
    }

    debug(...logMsg) {
        if (environment.logger.level <= this.level) {
            let msg: string;
            msg = 'Debug: ' + this.buildLogMsg(logMsg);
            if (environment.logger.outputTo === 'console') {
                this.consoleLogger('Debug', ...logMsg);
            } else {
                msg = 'Debug: ' + this.buildLogMsg(logMsg);
                this.subject.next(msg);
            }
        }
    }

    info(...logMsg) {
        if (environment.logger.level <= this.level) {
            let msg: string;
            msg = 'Info: ' + this.buildLogMsg(logMsg);
            if (environment.logger.outputTo === 'console') {
                this.consoleLogger('Info', ...logMsg);
            } else {
                this.subject.next(msg);
            }
        }
    }

    warning(...logMsg) {
        if (environment.logger.level <= this.level) {
            let msg: string;
            msg = 'Warning: ' + this.buildLogMsg(logMsg);
            if (environment.logger.outputTo === 'console') {
                this.consoleLogger('Warning', ...logMsg);
            } else {
                this.subject.next(msg);
            }
        }
    }

    error(...logMsg) {
        if (environment.logger.level <= this.level) {
            let msg: string;
            msg = 'Error: ' + this.buildLogMsg(logMsg);
            if (environment.logger.outputTo === 'console') {
                this.consoleLogger('Error', ...logMsg);
            } else {
                this.subject.next(msg);
            }
        }
    }

    max(...logMsg) {
        if (environment.logger.level <= this.level) {
            if (environment.logger.outputTo === 'console') {
                this.consoleLogger('Max', ...logMsg);
            } else {
                this.subject.next(logMsg);
            }
        }

    }

}
