# [react-twitter-conversion-tracker-plus](https://npm.im/react-twitter-conversion-tracker-plus)
React JS component for [Twitter's conversion tracking.](https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites.html)

** NOTE **
This package is forked from [react-twitter-conversation-tracker](https://github.com/evankyle/react-twitter-conversion-tracker). The only addition to this
package is the ability to [track any event](#twitterconvtrkrtrackaction).

## Install
```
npm install --save react-twitter-conversion-tracker-plus
```

## Setup
```js
import TwitterConvTrkr from "react-twitter-conversion-tracker-plus";

const TWITTER_CONVERSATION_ID = process.env.TWITTER_CONVERSATION_ID;

TwitterConvTrkr.init(init);
```

## API

### `TwitterConvTrkr.pageView()`

Tracks the page a user is currently on.

### `TwitterConvTrkr.track(action)`

Tracks the action provided to function.

> _YourTwitterConversionId_ is found in _twq('init','x3id')_ when you create the tailored audience.

