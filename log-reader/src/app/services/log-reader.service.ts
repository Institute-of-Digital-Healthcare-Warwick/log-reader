import { Injectable } from '@angular/core';
import { ILogItem } from '../interfaces/ilog-item';
import { join } from 'path';
import { log } from 'console';

/**
 * Log reader service
 */
@Injectable({
    providedIn: 'root'
})
export class LogReaderService {
    constructor() { }

    /**
     * Parse log text to log items
     * @param logText 
     */
    parseLog(logText: any): ILogItem[] {
        let logItems: ILogItem[] = [];
        let logLines: string[] = logText.split('\n');
        for (let logLine of logLines) {
            let logItem = this.parseLogLine(logLine);
            if (logItem) {
                logItems.push(logItem);
            }
        }
        return logItems;
    }

    /**
     * Parse log line to log item
     * 
     * @param logLine 
     */
    parseLogLine(logLine: string): ILogItem | null {
        // Ignore empty lines
        if (logLine.length === 0) {
            return null;
        }
        
        // Date, hour and minute should be first 3 parts of first item
        // ToDo: don't split on : in json parts
        const parts = logLine.split(':');
        if(parts.length < 4) {
            // We do not have a debug tools log line
            return {
                //@ts-ignore test
                date: null,
                message: parts.join(':'),
                type: 'undefined',
                level: 'debug'
            };
        }
        let itemDate = parts.slice(0, 3).join(':');

        // message part is the rest of the line
        const messagePart = parts.slice(3).join(':');
        // The first type marker should be the part 3 of the first item
        let typePart = "undefined";
        if (messagePart.includes('[') && messagePart.includes(']')) {
            // take the type name from between the brackets
            typePart = messagePart.split('[')[1].split(']')[0];
        }
        
        // ToDo: split json and other objects in the message part

        let logItem: ILogItem = {
            //@ts-ignore test
            date: itemDate,
            message: messagePart,
            // @ts-ignore typePart from string
            type: typePart,
            level: 'debug'
        };
        
        return logItem;
    }
}
