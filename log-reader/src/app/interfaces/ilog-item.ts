/**
 * Interface for log items
 */
export interface ILogItem {
    /**
     * Log item date
     */
    date: Date;
    
    /**
     * Log item message
     */
    message: string;
    
    /**
     * Log item type
     */
    type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    
    /**
     * Log item level
     */
    level: "info" | "warning" | "error" | "debug"
}
