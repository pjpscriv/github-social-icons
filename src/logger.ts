const LOGGER_ENABLED = false;

class Logger {
    private static enabled = LOGGER_ENABLED;
    private static logName = '[GH Profile Social Icons]';

    public log(message: string): void {
        if (Logger.enabled) {
            console.log(`${Logger.logName}: ${message}`);
        }
    }
}

export const logger = new Logger();
