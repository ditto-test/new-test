import React from "react";

const ONBOARDING_STRINGS = {
  welcomeHeading: "welcome to the daily grind — your new coffee companion",
  welcomeSubtext:
    "we're brewing up 5 fresh features for an even richer coffee platform experience.",
  stepPrompt:
    "to get the most out of your coffee journey, start with these 3 key steps: sign up, personalize your profile, and kick off your first brew.",
  tipOfTheDay:
    "try pairing your morning espresso with a crisp fruit pastry for the perfect start.",
  notificationLabel: "get alerts when your favorite roast is back in stock",
  footerNote: "crafted with love and way too much caffeine",
  Apple_Cider_Promo:
    "Fall Special: Try Our New Apple Cider Latte Before It's Gone!",
  settingsDescription:
    "customize your dashboard to match your perfect coffee ritual",
};

interface CoffeeOnboardingProps {
  username?: string;
}

export default function CoffeeOnboarding({
  username = "friend",
}: CoffeeOnboardingProps) {
  return (
    <div className="onboarding-container">
      <header className="onboarding-header">
        <h1>{ONBOARDING_STRINGS.welcomeHeading}</h1>
        <p>{ONBOARDING_STRINGS.welcomeSubtext}</p>
      </header>

      <section className="onboarding-steps">
        <p>{ONBOARDING_STRINGS.stepPrompt}</p>
      </section>

      <aside className="onboarding-tip">
        <span role="img" aria-label="coffee">
          ☕
        </span>
        <p>{ONBOARDING_STRINGS.tipOfTheDay}</p>
      </aside>

      <div className="onboarding-settings">
        <p>{ONBOARDING_STRINGS.settingsDescription}</p>
        <label>
          <input type="checkbox" defaultChecked />
          {ONBOARDING_STRINGS.notificationLabel}
        </label>
      </div>

      <div className="onboarding-promo">
        <p>{ONBOARDING_STRINGS.Apple_Cider_Promo}</p>
      </div>

      <footer className="onboarding-footer">
        <small>
          {ONBOARDING_STRINGS.footerNote} — hey {username}, Check out our cute
          dog mascot!
        </small>
      </footer>
    </div>
  );
}
