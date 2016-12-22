"use strict";

var verdictModule = function verdictModule() {

  // CacheDOM
  var view = document.querySelector("[data-view]");

  var logo = view.querySelector("[data-logo=vanilla]");
  var logoShadow = view.querySelector("[data-logo=shadow]");
  var logoGradient = view.querySelector("[data-logo=gradient]");
  var tagline = view.querySelector("[data-tagline=tagline]");

  var cage = view.querySelector("[data-cage]");
  var fighters = view.querySelector("[data-fighters]");

  var timer = view.querySelector("[data-timer]");
  var endofround = view.querySelector("[data-endofround]");
  var zero = view.querySelector("[data-zero]");
  var one = view.querySelector("[data-one]");
  var two = view.querySelector("[data-two]");
  var three = view.querySelector("[data-three]");
  var four = view.querySelector("[data-four]");

  // variables
  var dur = 0.5;
  var pos = '0 0 2512 2055';

  // Timelines
  // Main
  var tl = new TimelineMax({ paused: true });
  // Sub-level 1
  var tlCam = new TimelineMax({});
  var tlTitle = new TimelineMax({});
  var tlArena = new TimelineMax({});
  var tlHero = new TimelineMax({});
  // Sub-level 1
  var tlLogo = new TimelineMax({});
  var tlTagline = new TimelineMax({});
  var tlCage = new TimelineMax({});
  var tlCountdown = new TimelineMax({});
  var tlFight = new TimelineMax({ repeat: 15 });
  var tlLeft = new TimelineMax({});
  var tlRight = new TimelineMax({});
  var tlUI = new TimelineMax({});

  // Main
  tl
  //.add(tlCam)
  .add(tlTitle).add(tlArena)
  //.add(tlHero)
  ;

  // Sub-Level 1
  tlCam;

  tlTitle.add("title").add(tlLogo, "title").add(tlTagline, "title =+1.5");

  tlArena.add("arena", "title =+3").add(tlCage, "arena").add(tlCountdown, "arena").add(tlFight, "arena");

  tlHero.add(tlLeft).add(tlRight).add(tlUI);

  // Sub-Level 2  
  tlLogo.set(logo, { autoAlpha: 1 }).from(logo, 0.7, { scale: 0, transformOrigin: "center", ease: Power4.easeIn }, 0).from(logo, 1, { rotation: 180, transformOrigin: "center", ease: Back.easeOut.config(0.3) }, 0) // add shaking ease
  .fromTo(logo, 0.7, { y: 200 }, { y: 0, ease: Power2.easeOut }, 0);

  tlTagline.to(tagline, 1, { autoAlpha: 1 });

  tlCage.add("cage").to([cage, logoShadow, logoGradient], 2, { autoAlpha: 1, ease: Linear.easeNone }, "cage");

  tlCountdown.set(timer, { y: -50 }).from(four, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }).to(four, 0.01, { autoAlpha: 0 }, 1).to(three, 0.01, { autoAlpha: 1 }, 1).fromTo(three, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 1).to(three, 0.01, { autoAlpha: 0 }, 2).to(two, 0.01, { autoAlpha: 1 }, 2).fromTo(two, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 2).to(two, 0.01, { autoAlpha: 0 }, 3).to(one, 0.01, { autoAlpha: 1 }, 3).fromTo(one, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 3).to(one, 0.01, { autoAlpha: 0 }, 4).to(zero, 0.01, { autoAlpha: 1 }, 4).fromTo(zero, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 4).to(timer, 1, { y: 0, ease: Power4.easeInOut }, 4.5).to(endofround, 0.75, { autoAlpha: 1, ease: Power4.easeInOut }, 4.8)
  //.add(emph) // Install SVGdraw
  ;

  tlFight.fromTo(fighters, 0.3, { x: -450 }, { x: -430 });

  tlLeft;

  tlRight;

  tlUI;

  tl.restart();
};

verdictModule();
"use strict";
"use strict";
