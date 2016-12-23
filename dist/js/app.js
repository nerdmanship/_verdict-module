"use strict";

var initAnimation = function initAnimation() {

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
  var endofroundEmph = view.querySelectorAll("[data-endofroundEmph]");
  var zero = view.querySelector("[data-zero]");
  var one = view.querySelector("[data-one]");
  var two = view.querySelector("[data-two]");
  var three = view.querySelector("[data-three]");
  var four = view.querySelector("[data-four]");

  var hero = view.querySelector("[data-hero]");
  var backdrop = view.querySelector("[data-backdrop]");
  var leftArm = view.querySelector("[data-left=arm]");
  var leftHand = view.querySelector("[data-left=hand]");
  var rightHand = view.querySelector("[data-right=hand]");
  var finger = view.querySelector("[data-right=finger]");

  var notificationContainer = view.querySelector("[data-notification=container]");
  var notificationBackdrop = view.querySelector("[data-notification=backdrop]");
  var notification = view.querySelector("[data-notification=content]");
  var notificationModule = view.querySelectorAll("[data-notification=module]");
  var notificationAffordability = view.querySelectorAll("[data-notification=affordability]");
  var notificationTopic = view.querySelector("[data-notification=topic]");
  var notificationMessage = view.querySelector("[data-notification=message]");
  var notificationEmphasis = view.querySelectorAll("[data-notification=emphasis]");

  var scoreContainer = view.querySelector("[data-score=container]");
  var score = view.querySelector("[data-score=content]");

  var scoreRedOverlay = view.querySelector("[data-score=redOverlay]");
  var scoreRedActive = view.querySelector("[data-score=redActive]");
  var scoreBlueOverlay = view.querySelector("[data-score=blueOverlay]");
  var scoreBlueActive = view.querySelector("[data-score=blueActive]");

  var leaderContainer = view.querySelector("[data-leader=container]");
  var leader = view.querySelector("[data-leader=content]");
  var xp = view.querySelectorAll("[data-leader=xp]");
  var you = view.querySelector("[data-leader=you]");
  var player = view.querySelectorAll("[data-leader=player]");

  var featuresContainer = view.querySelector("[data-features=container]");
  var features = view.querySelector("[data-features=content]");

  // variables
  var dur = 0.5;
  var pos = '0 0 2512 2055';

  // Timelines
  // Main
  var tl = new TimelineMax({ paused: true });
  // Sub-level 1
  var tlCam = new TimelineMax({ paused: true });
  var tlTitle = new TimelineMax({ paused: true });
  var tlArena = new TimelineMax({ paused: true });
  var tlHero = new TimelineMax({ paused: true });
  // Sub-level 2
  var tlLogo = new TimelineMax({ paused: true });
  var tlTagline = new TimelineMax({ paused: true });
  var tlCage = new TimelineMax({ paused: true });
  var tlCountdown = new TimelineMax({ paused: true });
  var tlEmph = new TimelineMax({ paused: true }); // change this to function
  var tlFight = new TimelineMax({ repeat: 15 });

  var tlLeft = new TimelineMax({ paused: true });
  var tlRight = new TimelineMax({ paused: true });

  var tlUI = new TimelineMax({ paused: true });
  var tlNotification = new TimelineMax({ paused: true });
  var tlScore = new TimelineMax({ paused: true });
  var tlLeader = new TimelineMax({ paused: true });
  var tlFeatures = new TimelineMax({ paused: true });

  // Main
  tl
  //.add(tlCam)
  //.add(tlTitle.play(), 0)
  //.add(tlArena.play(), 5)
  .add(tlHero.play(), 0);

  // Sub-Level 1
  tlCam;

  tlTitle.add("title").add(tlLogo.play(), "title").add(tlTagline.play(), "title =+1.5");

  tlArena.add("arena").add(tlCage.play(), "arena").add(tlCountdown.play(), "arena =+2").add(tlFight.play(), "arena =+2");

  tlHero.add("hero").add(tlLeft.play()).add(tlRight.play()).add(tlUI.play(), "hero =+1");

  // Sub-Level 2  
  tlLogo.set(logo, { autoAlpha: 1 }).from(logo, 0.4, { scale: 0, transformOrigin: "center", ease: Power4.easeIn }, 0).from(logo, 0.6, { rotation: 180, transformOrigin: "center", ease: Back.easeOut.config(0.3) }, 0) // add shaking ease
  .fromTo(logo, 0.4, { y: 200 }, { y: 0, ease: Power2.easeOut }, 0);

  tlTagline.to(tagline, 3, { autoAlpha: 1, ease: Linear.easeNone });

  tlCage.add("cage").to(logoGradient, 0.5, { autoAlpha: 1, ease: Linear.easeNone }, "cage").to([cage, logoShadow], 0.5, { autoAlpha: 1, ease: Linear.easeNone }, "cage =+0.5");

  tlCountdown.set(timer, { y: -50 }).from(four, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }).to(four, 0.01, { autoAlpha: 0 }, 1).to(three, 0.01, { autoAlpha: 1 }, 1).fromTo(three, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 1).to(three, 0.01, { autoAlpha: 0 }, 2).to(two, 0.01, { autoAlpha: 1 }, 2).fromTo(two, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 2).to(two, 0.01, { autoAlpha: 0 }, 3).to(one, 0.01, { autoAlpha: 1 }, 3).fromTo(one, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 3).to(one, 0.01, { autoAlpha: 0 }, 4).to(zero, 0.01, { autoAlpha: 1 }, 4).fromTo(zero, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 4).to(timer, 1, { y: 0, ease: Power4.easeInOut }, 4.5).to(zero, 0.5, { fill: "#D5756A" }, 4.7).to(endofround, 0.75, { autoAlpha: 1, ease: Power4.easeInOut }, 4.8).add(tlEmph, 5);

  tlEmph.set(endofroundEmph[0], { drawSVG: 0, autoAlpha: 1 }, 0).set(endofroundEmph[1], { drawSVG: "100% 100%", autoAlpha: 1 }, 0).to(endofroundEmph[0], 0.4, { drawSVG: "20% 50%" }, 0.1).to(endofroundEmph[1], 0.4, { drawSVG: "50% 80%" }, 0.1).to(endofroundEmph[0], 0.5, { drawSVG: "100% 100%" }, 0.5).to(endofroundEmph[1], 0.5, { drawSVG: 0 }, 0.5).set(endofroundEmph, { autoAlpha: 0 }, 1);

  tlFight.fromTo(fighters, 0.3, { x: -450 }, { x: -430 });

  tlLeft.set([hero, leftArm], { autoAlpha: 1 }).set(hero, { y: -500 }).fromTo(leftArm, 0.5, { x: -400, y: 500, rotation: 30, transformOrigin: "left bottom" }, { x: 0, y: 0, rotation: 0, ease: Power3.easeOut }, 0);

  tlRight.set(rightHand, { autoAlpha: 1, y: 400, x: 500, rotation: -15, transformOrigin: "right bottom" }).set(finger, { rotation: -5, transformOrigin: "right bottom" })

  //hand to neutral
  .to(rightHand, 1, { rotation: 0, y: 450, x: 150, ease: Power1.easeOut }, 1)

  //tap notification
  .add("tapNote", 3.4).to(finger, 0.6, { bezier: [{ rotation: -5 }, { rotation: 2 }, { rotation: -5 }], transformOrigin: "right bottom", ease: SlowMo.ease.config(0.1, 0.5, true) }, "tapNote").to(rightHand, 0.6, { bezier: [{ rotation: 0, x: 150, y: 450 }, { rotation: 3, x: 75, y: 300 }, { rotation: 0, x: 0, y: 50 }], transformOrigin: "right bottom", ease: SlowMo.ease.config(0.1, 0.5, true) }, "tapNote").to(leftArm, 0.3, { scale: 0.997, transformOrigin: "left bottom", ease: SlowMo.ease.config(0.1, 0.5, true) }, "tapNote =+0.20")

  //tap score
  .add("tapScore", 5.2).to(finger, 0.2, { rotation: 0, transformOrigin: "right bottom", ease: Power1.easeInOut }, "tapScore").to(finger, 0.2, { rotation: -3, transformOrigin: "right bottom", ease: SlowMo.ease.config(0.1, 0.1, true) }, "tapScore =+0.5").to(finger, 0.15, { rotation: -3, transformOrigin: "right bottom", ease: SlowMo.ease.config(0.1, 0.1, true) }, "tapScore =+2").to(leftArm, 0.2, { scale: 0.997, transformOrigin: "left bottom", ease: SlowMo.ease.config(0.1, 0.5, true) }, "tapScore =+0.6").to(leftArm, 0.2, { scale: 0.997, transformOrigin: "left bottom", ease: SlowMo.ease.config(0.1, 0.5, true) }, "tapScore =+2.08").to(rightHand, 0.6, { bezier: [{ rotation: 0, x: 150, y: 450 }, { rotation: 3, x: 50, y: 350 }, { rotation: 0, x: -30, y: 150 }], transformOrigin: "right bottom", ease: Power1.easeInOut }, "tapScore").to(rightHand, 1.5, { bezier: [{ rotation: 0, x: -30, y: 140 }, { rotation: 3, x: 30, y: 250 }, { rotation: 3, x: 70, y: 300 }, { rotation: 3, x: 60, y: 200 }, { rotation: 0, x: 60, y: 100 }], transformOrigin: "right bottom", ease: Power1.easeNone }, "tapScore =+0.6").to(rightHand, 2, { rotation: 0, y: 450, x: 150, ease: Power3.easeOut });

  tlUI.add(tlNotification.play(), 0).add(tlScore.play(), "tlNotification =+3.3").add(tlLeader.play(), "tlScore =+4.4").add(tlFeatures.play(), "tlLeader =+3");

  tlNotification.set(notificationContainer, { autoAlpha: 1 }, 0).set(notificationModule, { scaleY: 0.5, transformOrigin: "center top" }).set(notificationAffordability, { y: -110 }).set([notificationTopic, notificationEmphasis], { y: 65 }).set(notificationEmphasis[0], { drawSVG: 0, autoAlpha: 1 }).set(notificationEmphasis[1], { drawSVG: "100% 100%", autoAlpha: 1 }).set(notification, { x: 9, y: -220 }, 0).to(notificationBackdrop, 0.3, { autoAlpha: 0.5, ease: Power3.easeOut }, 0).to(notification, 0.5, { y: 16, ease: Back.easeOut }, 0).to(notificationModule, 0.5, { scaleY: 1, ease: Back.easeOut }, 0.1).to(notificationAffordability, 0.5, { y: 0, ease: Back.easeOut }, 0.1).to(notificationEmphasis[0], 0.4, { drawSVG: "20% 50%" }, 0.1).to(notificationEmphasis[1], 0.4, { drawSVG: "50% 80%" }, 0.1).to(notificationEmphasis[0], 0.5, { drawSVG: "100% 100%" }, 0.5).to(notificationEmphasis[1], 0.5, { drawSVG: 0 }, 0.5).set(notificationEmphasis, { autoAlpha: 0 }, 1).to(notificationTopic, 0.3, { autoAlpha: 1 }, 0.5).to(notificationTopic, 0.3, { y: 0, ease: Back.easeIn }, 1).to(notificationMessage, 0.3, { autoAlpha: 1 }, 1.3).from(notificationMessage, 0.3, { y: 40 }, 1.1).to([notification, notificationBackdrop], 0.3, { autoAlpha: 0 }, 3);

  ;
  tlScore.set(scoreContainer, { autoAlpha: 1, scale: 0, transformOrigin: "center" }).to(scoreContainer, 0.3, { scale: 1 }).add("redTap", 1.5).to(scoreRedActive, 0.3, { autoAlpha: 1 }, "redTap").fromTo(scoreRedOverlay, 0.3, { scale: 0, autoAlpha: 0, y: 150, transformOrigin: "center" }, { scale: 1, autoAlpha: 1, y: 0 }, "redTap =+0.1").add("blueTap", 3).to(scoreBlueActive, 0.3, { autoAlpha: 1 }, "blueTap").fromTo(scoreBlueOverlay, 0.3, { scale: 0, autoAlpha: 0, y: 100, transformOrigin: "center" }, { scale: 1, autoAlpha: 1, y: 0 }, "blueTap =+0.1");

  tlLeader.set(leader, { x: 240 }).set(leaderContainer, { autoAlpha: 1 }).set(you, { y: 275 }).set(player[0], { y: 235 }).set(player[1], { y: 195 }).set(player[2], { y: 155 }).to(leader, 0.5, { x: 0 }).staggerFromTo(xp, 2.5, { y: 70, scale: 0, autoAlpha: 1, transformOrigin: "center" }, { y: -50, scale: 5, autoAlpha: 0 }, -0.2, 0.5).to(xp[0], 2.5, { bezier: { curviness: 2, values: [{ x: 0 }, { x: 20 }, { x: -20 }, { x: 20 }] } }, 0.5).to(xp[1], 2.5, { bezier: { curviness: 2, values: [{ x: 0 }, { x: -10 }, { x: 30 }, { x: -20 }] } }, 0.5).to(xp[2], 2.5, { bezier: { curviness: 2, values: [{ x: 0 }, { x: 30 }, { x: -10 }, { x: 30 }] } }, 0.5).to(you, 0.7, { y: 153, ease: Back.easeInOut }, 1).staggerTo(player, 0.3, { y: "+=40", ease: Power3.easeOut }, 0.1, 1.2);

  tlFeatures.set(features, { x: 240 }).set(featuresContainer, { autoAlpha: 1 }).to(features, 0.5, { x: 0 });

  tl.restart();
};

initAnimation();
"use strict";
"use strict";
