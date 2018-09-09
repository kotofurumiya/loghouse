export declare enum LoghouseLevel {
    LOG = 300,
    INFO = 400,
    WARN = 500,
    ERROR = 600,
    NONE
}
export interface LoghouseOption {
    outputLevel?: LoghouseLevel;
}
export declare class Loghouse {
    outputLevel: LoghouseLevel;
    constructor(option?: LoghouseOption);
    possess(consoleObj: Console): Console;
    log(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
}
