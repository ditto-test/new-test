import React from "react";

export default function CoffeeHub() {
  return (
    <div className="coffee-hub">
      <section className="hero">
        <h1>{"we just rolled out 5 upgrades to bring you a richer coffee platform."}</h1>
        <p className="tagline">
          {"from bean to cup, everything here is brewed with care."}
        </p>
      </section>

      <section className="onboarding-steps">
        <h2>{"before you dive in"}</h2>
        <p>
          {"for the absolute best results on our amazing coffee platform, you really need to tackle these 3 crucial steps first — they're incredibly vital to getting everything right: create your account, dial in your preferences, and start exploring all the coffee possibilities!"}
        </p>
      </section>

      <section className="featured-roast">
        <h2>{"this week's featured roast"}</h2>
        <p>
          {"a velvety medium roast with hints of apple and toasted walnut, sourced from small-batch farms."}
        </p>
      </section>

      <section className="brewing-tip">
        <h2>{"quick brewing tip"}</h2>
        <p>
          {"water just off the boil — around 205°f — pulls the best flavors from a fresh grind."}
        </p>
      </section>

      <footer className="hub-footer">
        <p>{"Browse Our Latest Furniture and Decor Collections"}</p>
        <small>
          {"you're part of a worldwide community of people who think coffee is worth obsessing over."}
        </small>
      </footer>
    </div>
  );
}
