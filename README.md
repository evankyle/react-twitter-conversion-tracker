# react-twitter-conversion-tracker
React JS component for [Twitter's conversion tracking.](https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites.html)

## Install
```
npm install --save react-twitter-conversion-tracker
```

## Setup
```js
import TwitterConvTrkr from "react-twitter-conversion-tracker";

const TWITTER_CONVERSATION_ID = process.env.TWITTER_CONVERSATION_ID;

TwitterConvTrkr.init(init);
```

## API

### `TwitterConvTrkr.pageView()`

Tracks the page a user is currently on.

### `TwitterConvTrkr.track(action)`

Tracks the action provided to function.

> _YourTwitterConversionId_ is found in _twq('init','x3id')_ when you create the tailored audience.

### Connect with me [@evanmichaelkyle](https://twitter.com/evanmichaelkyle)
