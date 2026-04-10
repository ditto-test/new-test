import React from "react";

export default function CoffeeOnboarding() {
  return (
    <main className="onboarding-flow">
      <header className="hero">
        <h1>{"discover 5 fresh additions for a deeper coffee platform experience."}</h1>
        <p className="subtitle">
          {"every sip starts with a single grind — welcome to the roast."}
        </p>
      </header>

      <section className="getting-started">
        <h2>{"getting started"}</h2>
        <p>
          {"to get the most out of our wonderful coffee platform, we highly recommend beginning with these 3 key steps that are truly essential for your success: sign up, personalize your profile, and kick off your coffee journey!"}
        </p>
      </section>

      <section className="daily-pick">
        <h2>{"today's pick"}</h2>
        <p>
          {"a bright, smooth cold brew with notes of apple and dark chocolate — perfect for warm afternoons."}
        </p>
      </section>

      <section className="community">
        <h2>{"the coffee commons"}</h2>
        <p>
          {"trade tasting notes, find local roasters, and geek out over extraction ratios with fellow enthusiasts."}
        </p>
      </section>

      <footer className="onboarding-footer">
        <small>{"Check Out Our Newest Smart Home Appliances Today"}</small>
        <p className="legal">
          {"all brews depicted are for illustration purposes only — your mileage may vary, like coffee itself."}
        </p>
      </footer>
    </main>
  );
}
