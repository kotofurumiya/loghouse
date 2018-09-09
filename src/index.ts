export enum LoghouseLevel {
  LOG = 300,
  INFO = 400,
  WARN = 500,
  ERROR = 600,
  NONE = Number.MAX_SAFE_INTEGER
}

export interface LoghouseOption {
  outputLevel?: LoghouseLevel;
}

export class Loghouse {
  public outputLevel: LoghouseLevel;

  constructor(option: LoghouseOption = {}) {
    this.outputLevel = 'outputLevel' in option ? option.outputLevel! : LoghouseLevel.LOG;
  }

  possess(consoleObj: Console): Console {
    const oldConsoleLog = consoleObj.log;
    const oldConsoleInfo = consoleObj.info;
    const oldConsoleWarn = consoleObj.warn;
    const oldConsoleError = consoleObj.error;

    consoleObj.log = (...args: any[]) => {
      if (this.outputLevel <= LoghouseLevel.LOG) {
        oldConsoleLog(...args);
      }
    };

    consoleObj.info = (...args: any[]) => {
      if (this.outputLevel <= LoghouseLevel.INFO) {
        oldConsoleInfo(...args);
      }
    };

    consoleObj.warn = (...args: any[]) => {
      if (this.outputLevel <= LoghouseLevel.WARN) {
        oldConsoleWarn(...args);
      }
    };

    consoleObj.error = (...args: any[]) => {
      if (this.outputLevel <= LoghouseLevel.ERROR) {
        oldConsoleError(...args);
      }
    };

    return consoleObj;
  }

  log(...args: any[]): void {
    if (this.outputLevel <= LoghouseLevel.LOG) {
      console.log(...args);
    }
  }

  info(...args: any[]): void {
    if (this.outputLevel <= LoghouseLevel.INFO) {
      console.info(...args);
    }
  }

  warn(...args: any[]): void {
    if (this.outputLevel <= LoghouseLevel.WARN) {
      console.warn(...args);
    }
  }

  error(...args: any[]): void {
    if (this.outputLevel <= LoghouseLevel.ERROR) {
      console.error(...args);
    }
  }
}
