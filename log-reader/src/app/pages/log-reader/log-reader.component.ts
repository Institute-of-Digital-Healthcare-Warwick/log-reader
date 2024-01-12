import { Component } from '@angular/core';
import { ILogItem } from '../../interfaces/ilog-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-reader',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './log-reader.component.html',
  styleUrl: './log-reader.component.css'
})
export class LogReaderComponent {
    /**
     * Log items
     */
    public logItems: ILogItem[] = [
        {
            date: new Date(),
            message: 'Test message',
            type: 'string',
            level: 'info'
        },
        {
            date: new Date(),
            message: 'Test message',
            type: 'string',
            level: 'warning'
        },
        {
            date: new Date(),
            message: 'Test message',
            type: 'string',
            level: 'error'
        },
        {
            date: new Date(),
            message: 'Test message',
            type: 'string',
            level: 'debug'
        },
        {
            date: new Date(),
            message: '{ "test": "Test message" }',
            type: 'object',
            level: 'info'
        },
        {
            date: new Date(),
            message: "1234567890",
            type: 'number',
            level: 'info'
        }            
    ];
}
