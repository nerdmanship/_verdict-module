# Verdict MMA Promotional Website Animation

* Watch the animation [here](https://nerdmanship.github.io/_verdict-module/dist/)
* Live website here [here](https://verdictmma.com/)

## What is this?

### What is Verdict MMA?
Verdict MMA is an app concept - much like the popular Fantasy Football - where users interact with live Mixed Martial Arts events both by scoring rounds in real-time and making essential fight predictions before the events. The results of scoring and predictions are compared to friends and players around the world.

### Purpose of the animation
Promote the Verdict MMA application by grabbing the attention of potential users at the very first second. Get MMA fans excited with engaging and relatable content and show them the main use case and the context of which the app is used.

### About the animation and technology
This is vector animation with javascript. All graphics are inline SVG and all animation is javascript enabled by the Greensock Animation Platform – [GSAP](https://www.greensock.com).

An animation sequence like this is a technologically robust and experientially superior way to quickly show what an innovative product or service is about. It's made to be equally informative as entertaing.

On the technological end you have both graphics and animation that is purely made of code in languages that the browsers have spoken natively more or less since its birth – XML and JavaScript. Even ancient browsers understand it, making this new animation technique surprisingly backwards compatible, robust across platforms and easy to work with.

Since it's code-based it weighs virtually nothing and it loads instantly, which is the first pillar of an excellent user experience. Unlike video media it behaves consistently on both desktop and mobile devices.

To us, web-animation is a tool for great user experience. There is much more to say about both technological and experiential benefits of this animation technique. We are very keen to get in touch with fellow animators (since we still seem to be few around the world) and of course potential clients, so please [reach out (email)](mailto:johan@nerdmanship.com) if you feel like it.

### Quick facts
* **Total lenght:** 33 seconds
* **File size of graphics and animation:** 71 KB (compressed and gzipped)
* **Total file size including dependencies:** 117 KB (compressed and gzipped)
* **Loading time:** Less than 0.5 seconds
* **Time spent developing it:** ~100 hours
* **Other benefits:** Exportable to GIF and video to be shared across social media. Animation is reusable and updateable. Any element and aspect can be made interactive.

### File size breakdown
* **index.html 62673 KB**  - markup including all inline graphics
* **app.css 1321 KB**  - layout including Normalizr
* **app.js 7992 KB**  - all custom javascript including all animation
* **Tweenmax.js 36879 KB**  - dependency, javascript library for animation
* **DrawSVGplugin.js 1727 KB**  - dependency, extra features for TweenMax
* **Modernizr.js 6134 KB**  - dependency, feature detection, enables serving different code to different browsers
* Total 116 726 KB

[Read about gzipping your files](https://seesparkbox.com/foundry/gzip_is_really_good_at_like_compressing_repetitive_text_and_stuff)

## Want more web animation?

Graphics, animation and code by [Johan Strömqvist](https://www.linkedin.com/in/johanstromqvist) at [the Nerdmanship](https://nerdmanship.com/)

### Talk vector animation with the Nerdmanship

* [Stay updated with web animation on Facebook](http://www.facebook.com/nerdmanship)
* [Talk to me on Twitter](http://www.twitter.com/stromqvist)
* [Follow me on Dribbble](http://www.dribbble.com/nerdmanship)
* [Fiddle with experiments Codepen](http://www.codepen.io/nerdmanship)

## How to install
Follow these steps to implement the animation into an existing web page.

All code and assets is found in the [/dist](https://github.com/nerdmanship/_verdict-module/tree/master/dist) folder

### HTML
* Copy/paste the header and download section from index.html into your html document (see comments in the html)

![HTML Code](https://dl.dropboxusercontent.com/s/h2ixi2kefqr51wy/Screenshot%202017-01-18%2011.47.40.png)

* It's also important to add the class ".no-js" to the html tag. It triggers a fallback if the user client doesn't allow javascript. Modernizr removes the tag if the user client does allow javascript.

### Javascript
All custom code necessary to drive the header animation is bundled in the object verdictModule in app.js.
The button animation is one line of code located after the verdictModule in app.js.

Either put the /js folder in the root folder abnd link to app.js in the end of \<body\> after dependencies (see below),
or insert complete verdictModule and button animation into any existing javascript document.

Run the animation by calling verdicModule.detect() and verdictModule.init() in that order. These calls are already in the app.js document.

### CSS
Put the /css folder in the root folder and link to stylesheet app.css in the head or insert the contents into any existing document. Mind the path references (see below).

### Images
There are three images necessary for the project:
* appStore.svg
* googlePlay.png
* fallback.png

Either place complete /image folder in root folder or place image assets in any existing assets folder and update the path references.

### Path references that may need updating
Search for the following strings in the correlating document:
* app.css: "background: url(../images/appstore.svg) no-repeat;"
* app.css: "background: url(../images/googleplay.png) no-repeat;"
* app.js: "fallback.src = 'images/fallback.png';"
* index.html: "\<noscript\>\<img src="images/fallback.png" class="fallback"\>\</noscript\>"

## Dependencies

* Modernizr - Must be parsed before html, goes in \<head\>
* GSAP TweenMax - Goes in end of \<body\>
* GSAP DrawSVGplugin - Goes in end of \<body\> after GSAP TweenMax


## License

The code is available under the [MIT license](LICENSE.txt).


