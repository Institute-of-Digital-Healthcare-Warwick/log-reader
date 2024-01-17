import { Component } from '@angular/core';
import { ILogItem } from '../../interfaces/ilog-item';
import { CommonModule } from '@angular/common';
import { LogReaderService } from '../../services/log-reader.service';

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
    constructor(public logReaderService: LogReaderService) { 
        
    }
    
    /**
     * Log items
     */
    public logItems: ILogItem[] = [];
    
    /**
     * Open log file
     */
    async OpenFileFromInput() {
        const inputNode: any = document.querySelector('#inputFile');
        try {
            if (typeof (FileReader) !== 'undefined') {
                const reader = new FileReader();
                reader.onload = async (e: any) => {
                    try {
                        // Get log file as text
                        const logText = e.target.result;
                        // Parse log file
                        const logItems = this.logReaderService.parseLog(logText);
                        // Set log items on component
                        this.ClearLogItems();
                        for (let logItem of logItems) {
                            this.logItems.push(logItem);
                        }                    
                    } catch (error: any) {
                        throw "Error reading log file";
                    }
                };
                reader.readAsText(inputNode.files[0]);
            }
        } catch (error: any) {
            throw "Error opening log file";
        }
    }
    
    /**
     * Clear log items
     */
    ClearLogItems() {
        this.logItems.length = 0;
    }
}
