# Loghouse

Loghouse is a simple logleveling library.
It possesses `console` object.

## Install(Browsers)

Copy `build/loghouse.min.js` to your project.
Then import in your HTML.

```
<script src="loghouse.min.js"></script>
<script>
  // Write your code here.
</script>
```

## Install(Node.js)

Install with npm.

```
npm install loghouse --save
```

Then, import it.

```
const { Loghouse, LoghouseLevel } = require('loghouse');
```

## Usage

All you need is create `Loghouse` and possessing `console` object.

```
const loghouse = new Loghouse({ outputLevel: LoghouseLevel.WARN });
loghouse.possess(console);
```

It's all.

Then whenever you use `console`, Loghouse levels outputs.

```
console.log('You cannot see me!');
console.info('You cannot see me!');
console.warn('You found me...');
console.error('You found me...');
```

## Usage(Detailed)

Loghouse has four levels.

```
LoghouseLevel.LOG
LoghouseLevel.INFO
LoghouseLevel.WARN
LoghouseLevel.ERROR
```

You can set it to Loghouse.

```
const loghouse = new Loghouse({ outputLevel: LoghouseLevel.WARN });
```

If you want to change level, set `loghouse.outputLevel` value.

```
loghouse.outputLevel = LoghouseLevel.ERROR;
```

If you don't like possessing console, you can use Loghouse without it.

```
const loghouse = new Loghouse({ outputLevel: LoghouseLevel.INFO });

loghouse.log('Hi');
loghouse.info('Hi');
loghouse.warn('Hi');
loghouse.error('Hi');
```