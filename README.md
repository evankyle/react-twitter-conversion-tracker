# react-twitter-conversion-tracker
React JS component for [Twitter's conversion tracking.](https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites.html)

## Install
```
npm install --save react-twitter-conversion-tracker
```

## Example Use
```js
import TwitterConvTrkr from "react-twitter-conversion-tracking";
TwitterConvTrkr.init("YourTwitterConversionId");
TwitterConvTrkr.pageView();
```
> _YourTwitterConversionId_ is found in _twq('init','x3id')_ when you create the tailored audience.

### Connect with me [@evanmichaelkyle](https://twitter.com/evanmichaelkyle)