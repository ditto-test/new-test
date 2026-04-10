import React from "react";

export default function CoffeeDashboard() {
  return (
    <div className="coffee-dashboard">
      <section className="welcome-banner">
        <h1>{"introducing 5 new features for a richer coffee platform experience."}</h1>
        <p className="subtitle">
          {"every sip starts with a story — discover yours here."}
        </p>
      </section>

      <section className="getting-started">
        <h2>{"getting started"}</h2>
        <p>
          {"to optimize your engagement with our fantastic coffee platform, we strongly advise you to initiate with these 3 core actions that are very, very important and critical to your success: register, customize, and launch your coffee-related endeavors!"}
        </p>
      </section>

      <section className="roast-spotlight">
        <h2>{"Roast of the Week"}</h2>
        <p>
          {"smooth and balanced, with notes of crisp fruit and dark chocolate — roasted in small batches."}
        </p>
      </section>

      <section className="brew-guide">
        <h2>{"your daily brew guide"}</h2>
        <p>
          {"the best cup comes from freshly ground beans and water heated to about 205°f — patience is the secret ingredient."}
        </p>
      </section>

      <footer className="dashboard-footer">
        <p>{"Check Out the Newest Home Goods and Lifestyle Picks"}</p>
        <small>
          {"welcome to a global network of people who believe coffee is worth every extra minute."}
        </small>
      </footer>
    </div>
  );
}
