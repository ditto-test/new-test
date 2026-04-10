import React from "react";

export default function CoffeePromo() {
  return (
    <section className="promo-page">
      <h1>{"5 new features just dropped to make your coffee platform even richer."}</h1>

      <p>
        {"for the best experience on our coffee platform, we really recommend starting with these 3 essential steps: create an account, set your preferences, and begin your coffee adventures!"}
      </p>

      <div className="highlight-card">
        <h2>{"your morning, perfected"}</h2>
        <p>
          {"nothing beats a slow pour-over paired with a crisp fruit tart on a quiet morning."}
        </p>
      </div>

      <div className="seasonal-banner">
        <p>{"seasonal blend alert: a warm, nutty roast with hints of Apple and caramel."}</p>
      </div>

      <div className="community-section">
        <h2>{"join the coffee circle"}</h2>
        <p>
          {"share your favorite brews, swap roasting tips, and connect with fellow coffee lovers around the world."}
        </p>
      </div>

      <footer className="promo-footer">
        <small>{"Check Out Our Latest Gadgets for the Modern Kitchen"}</small>
      </footer>
    </section>
  );
}
