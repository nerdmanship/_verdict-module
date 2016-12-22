const verdictModule = function() {

  // CacheDOM
  const view = document.querySelector("[data-view]");

  const logo = view.querySelector("[data-logo=vanilla]");
  const logoShadow = view.querySelector("[data-logo=shadow]");
  const logoGradient = view.querySelector("[data-logo=gradient]");
  const tagline = view.querySelector("[data-tagline=tagline]");

  const cage = view.querySelector("[data-cage]");
  const fighters = view.querySelector("[data-fighters]");
  
  const timer = view.querySelector("[data-timer]");
  const endofround = view.querySelector("[data-endofround]");
  const zero = view.querySelector("[data-zero]");
  const one = view.querySelector("[data-one]");
  const two = view.querySelector("[data-two]");
  const three = view.querySelector("[data-three]");
  const four = view.querySelector("[data-four]");
  
  // variables
  const dur = 0.5;
  const pos = '0 0 2512 2055';

  // Timelines
  // Main
  const tl = new TimelineMax({ paused: true });
  // Sub-level 1
  const tlCam = new TimelineMax({  });
  const tlTitle = new TimelineMax({  });
  const tlArena = new TimelineMax({  });
  const tlHero = new TimelineMax({  });
  // Sub-level 1
  const tlLogo = new TimelineMax({  });
  const tlTagline = new TimelineMax({  });
  const tlCage = new TimelineMax({  });
  const tlCountdown = new TimelineMax({  });
  const tlFight = new TimelineMax({ repeat: 15 });
  const tlLeft = new TimelineMax({  });
  const tlRight = new TimelineMax({  });
  const tlUI = new TimelineMax({  });
  
  // Main
  tl
    //.add(tlCam)
    .add(tlTitle)
    .add(tlArena)
    //.add(tlHero)
    ;


  // Sub-Level 1
    tlCam

  ;

  tlTitle
    .add("title")
    .add(tlLogo, "title")
    .add(tlTagline, "title =+1.5")
    ;

  tlArena
    .add("arena", "title =+3")
    .add(tlCage, "arena")
    .add(tlCountdown, "arena")
    .add(tlFight, "arena")
    ;

  tlHero
    .add(tlLeft)
    .add(tlRight)
    .add(tlUI)
    ;


// Sub-Level 2  
  tlLogo
    .set(logo, { autoAlpha: 1 })
    .from(logo, 0.7, { scale: 0, transformOrigin: "center", ease: Power4.easeIn }, 0)
    .from(logo, 1, { rotation: 180, transformOrigin: "center", ease: Back.easeOut.config(0.3) }, 0) // add shaking ease
    .fromTo(logo, 0.7, { y: 200 }, { y: 0, ease: Power2.easeOut }, 0)
  ;

  tlTagline
    .to(tagline, 1, { autoAlpha: 1 })
  ;

  tlCage
    .add("cage")
    .to([cage, logoShadow, logoGradient], 2, { autoAlpha: 1, ease: Linear.easeNone }, "cage")
  ;

  tlCountdown
    .set(timer, { y: -50 })
    .from(four, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut })
    .to(four, 0.01, { autoAlpha: 0 }, 1)
    .to(three, 0.01, { autoAlpha: 1 }, 1)
    .fromTo(three, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 1)
    .to(three, 0.01, { autoAlpha: 0 }, 2)
    .to(two, 0.01, { autoAlpha: 1 }, 2)
    .fromTo(two, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 2)
    .to(two, 0.01, { autoAlpha: 0 }, 3)
    .to(one, 0.01, { autoAlpha: 1 }, 3)
    .fromTo(one, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 3)
    .to(one, 0.01, { autoAlpha: 0 }, 4)
    .to(zero, 0.01, { autoAlpha: 1 }, 4)
    .fromTo(zero, 0.99, { scale: 0.9, transformOrigin: "center", ease: Power4.easeInOut }, { scale: 1 }, 4)
    .to(timer, 1, { y: 0, ease: Power4.easeInOut }, 4.5)
    .to(endofround, 0.75, { autoAlpha: 1, ease: Power4.easeInOut }, 4.8)
    //.add(emph) // Install SVGdraw
  ;

  
  tlFight
    .fromTo(fighters, 0.3, { x: -450 }, { x: -430 })
  ;

  
  tlLeft

  ;

  
  tlRight

  ;

  
  tlUI

  ;

  tl.restart(); 
}

verdictModule();