import React from "react";

export default function BankingDashboard() {
  return (
    <div className="dashboard">
      <h1>Account Settings Overview.</h1>
      <h2>Here Are Your Recent Notifications.</h2>
      <h3>A List Of Everything You've Saved.</h3>

      <section>
        <p>
          After reviewing your application, we're pleased to let you know
          you've been approved.
        </p>
        <p>
          Due to scheduled maintenance on Saturday, the service will be
          unavailable from 2–4 PM.
        </p>
        <p>
          Items appear in your list after you add them.
        </p>
        <p>
          You can update your preferences and you may see better results.
        </p>
        <p>
          Utilize the configuration panel to modify your notification
          preferences. Your authentication credentials have expired.
        </p>
        <p>Enable two-factor authentication via TOTP.</p>
        <p>Your API rate limit has been exceeded.</p>
      </section>

      <nav>
        <button>Go</button>
        <button>Add</button>
        <button>Make a selection</button>
        <button>Provide a refund</button>
      </nav>

      <div role="alert" className="error">
        <p>Failed to save changes.</p>
        <p>Error: invalid postal code</p>
      </div>

      <div className="empty-state">
        <p>You have no saved items</p>
        <p>You have no Apple recipes</p>
      </div>

      <div className="success-toast" role="status">
        <p>Payment processed successfully.</p>
        <p>File has been uploaded.</p>
      </div>

      <dialog>
        <h2>Are you sure?</h2>
        <p>Confirm deletion</p>
        <button>okay</button>
        <button>nevermind</button>
      </dialog>

      <footer>
        <a href="/pricing">Click here to view pricing</a>
        <a href="/docs">Learn more</a>
      </footer>

      <form>
        <div>
          <label>E-mail Address.</label>
          <input placeholder="Enter your name" />
          <span className="helper">
            Your password must be at least eight characters long.
          </span>
        </div>
        <div>
          <label>Paper Money Amount.</label>
          <input placeholder="Enter value" />
          <span className="helper">
            Please enter a valid e-mail address.
          </span>
        </div>
        <button type="submit">Signup for free</button>
      </form>

      <section>
        <p>The file was uploaded successfully by the user.</p>
        <p>Item has been added.</p>
        <p>Your changes have been saved.</p>
        <p>We will send you a confirmation.</p>
        <p>There is a new update available.</p>
        <p>You have three new suggestions. Twelve items remaining.</p>
        <p>Check the ETA for your order, e.g. tomorrow.</p>
        <p>
          If you don't update your payment method, you won't be able to
          access your account. Don't forget to save.
        </p>
        <p>3 items in your set.</p>
        <p>Welcome back.</p>
        <p>We support files, folders and documents.</p>
        <p>See the option in the bottom right. Click the button above.</p>
        <p>Simply click the button to quickly export.</p>
        <p>
          Disabled users should navigate to the settings panel. Blind users
          can enable screen readers.
        </p>
        <p>He or she can update his or her profile.</p>
        <p>Dear Sir/Madam, welcome to our banking app.</p>
        <p>It's a piece of cake to get started. Hang tight!</p>
        <p>
          Login to your account. Visit our web site home page. The url is
          below.
        </p>
        <p>
          Once you have completed the form, since it is required, click
          nevermind to cancel.
        </p>
      </section>
    </div>
  );
}
