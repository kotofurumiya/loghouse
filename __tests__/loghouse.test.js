const { Loghouse, LoghouseLevel } = require('../lib/index');

const loghouse = new Loghouse({ outputLevel: LoghouseLevel.LOG });
loghouse.possess(console);

console.log('This message should be displayed');
console.info('This message should be displayed');
console.warn('This message should be displayed');
console.error('This message should be displayed');

loghouse.log('This message should be displayed');
loghouse.info('This message should be displayed');
loghouse.warn('This message should be displayed');
loghouse.error('This message should be displayed');

loghouse.outputLevel = LoghouseLevel.WARN;

console.log('This message should **not** be displayed');
console.info('This message should **not** be displayed');
console.warn('This message should be displayed');
console.error('This message should be displayed');

loghouse.log('This message should **not** be displayed');
loghouse.info('This message should **not** be displayed');
loghouse.warn('This message should be displayed');
loghouse.error('This message should be displayed');

loghouse.outputLevel = LoghouseLevel.NONE;

console.log('This message should **not** be displayed');
console.info('This message should **not** be displayed');
console.warn('This message should **not** be displayed');
console.error('This message should **not** be displayed');

loghouse.log('This message should **not** be displayed');
loghouse.info('This message should **not** be displayed');
loghouse.warn('This message should **not** be displayed');
loghouse.error('This message should **not** be displayed');