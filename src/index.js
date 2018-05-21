/**
 * React Twitter Conversion Tracking
 * @package react-twitter-conversion-tracking
 * @author Evan Michael Kyle https://kyle.ventures
 */

var ConvId;

var TwitterConvTrkr = {

  init: function (convId) {
    ConvId = convId;
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');

    if (ConvId) twq('init',ConvId);
    else console.error('TwitterConvTrkr.init(convId) missing conversion id.');
  },

  pageView: function() {
    if (ConvId) twq('track','PageView');
    else console.error('TwitterConvTrkr init must be called first.');
  },

  track: function(action) {
    if (ConvId) twq('track', action);
    else console.error('TwitterConvTrkr init must be called first.');
  }
}

module.exports = TwitterConvTrkr;
