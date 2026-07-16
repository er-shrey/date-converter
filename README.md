# date-converter

An AngularJS service (`dateConvert`) that converts a Unix timestamp (epoch, in seconds or
milliseconds) to a date/time string in a given timezone, using timezone info stored in
`$localStorage` (via `ngStorage`).

## Tech Stack

- AngularJS (`app.service`)
- `ngStorage` (`$localStorage`) for reading the configured timezone

## Prerequisites

- An existing AngularJS 1.x application with the `ngStorage` module installed, since
  `dateConvertService.js` expects `$localStorage.timezone` to already be populated with:
  - `timezone.hours` — hours offset relative to local time
  - `timezone.name` — timezone display name
  - `timezone.gmt` — hours offset relative to GMT

## Installation

Copy `dateConvertService.js` into your AngularJS project and include it as a script, then inject
`dateConvert` where needed:

```html
<script src="dateConvertService.js"></script>
```

```js
angular.module('yourApp', ['ngStorage'])
  .controller('SomeCtrl', function (dateConvert) {
    // use dateConvert.datePart(timestamp), etc.
  });
```

## API

All methods take a Unix epoch timestamp (seconds or milliseconds — it auto-detects length):

- `dateConvert.dateTimePart(timeStamp)` — returns `"YYYY-MM-DD HH:mm:ss"` in the configured timezone
- `dateConvert.datePart(timeStamp)` — returns `"YYYY-MM-DD"` only
- `dateConvert.timePart(timeStamp)` — returns `"HH:mm:ss"` only
- `dateConvert.timeZoneName()` — returns the configured timezone's name
- `dateConvert.timefromGMT()` — returns the configured timezone's offset from GMT
- `dateConvert.preferedDate(timeStamp)` — returns the epoch adjusted to the configured timezone

## Notes

This is a single-file utility service with no build step, test suite, or package manifest — drop
it into a host AngularJS app that already provides `$localStorage.timezone`.
