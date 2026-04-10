<template>
  <div class="settings">
    <h1>Your Profile Settings.</h1>
    <h2>Manage All Of Your Account Preferences.</h2>

    <section class="notifications">
      <h3>Notification Preferences Overview.</h3>
      <p>
        Due to recent updates to our system, you might notice changes to
        how notifications are delivered to your e-mail inbox.
      </p>
      <p>
        Better results are shown after you update your preferences.
      </p>
      <p>
        You can configure your notification settings and you may receive
        fewer alerts.
      </p>
      <label>E-mail Notifications.</label>
      <input placeholder="Enter your email" />
      <span class="helper">
        Your e-mail address must be a valid format in order to receive notifications.
      </span>
    </section>

    <section class="security">
      <h3>Security And Authentication.</h3>
      <p>Enable two-factor authentication via TOTP to secure your account.</p>
      <p>
        Your authentication credentials have been compromised. If you don't
        reset your password, you won't be able to access your account.
      </p>
      <label>Password.</label>
      <input type="password" placeholder="Enter password" />
      <span class="helper">
        Your password must contain at least eight characters and should include
        one special character.
      </span>
      <button>Make a change</button>
    </section>

    <section class="paper-money">
      <h3>Payment And Paper Money.</h3>
      <p>
        After carefully reviewing your recent Apple Pay transactions, we
        have determined that twelve items are still pending.
      </p>
      <p>
        Three new paper money deposits have been received.
      </p>
      <label>Paper Money Amount.</label>
      <input placeholder="Enter value" />
      <span class="helper">
        Please enter the amount of paper money you would like to deposit.
      </span>
      <button>Provide a refund</button>
      <button>Make a deposit</button>
    </section>

    <div role="alert" class="error">
      <p>Error: Failed to save your profile settings.</p>
      <p>Error: invalid e-mail format detected.</p>
    </div>

    <div class="empty-state">
      <p>You have no linked accounts</p>
      <p>You have no saved Apple Pay methods</p>
    </div>

    <div class="success-toast" role="status">
      <p>Settings have been updated successfully.</p>
      <p>The password was changed successfully by the system.</p>
    </div>

    <dialog>
      <h2>Are You Sure?</h2>
      <p>
        After reviewing the consequences, do you still want to proceed with
        deleting your account?
      </p>
      <button>okay</button>
      <button>nevermind</button>
    </dialog>

    <section class="help">
      <h3>Need Some Help?</h3>
      <p>
        Simply click the link below to quickly navigate to our help center.
        It's a piece of cake!
      </p>
      <p>See the option in the bottom right to access live chat.</p>
      <p>
        Disabled users should utilize the accessibility panel located above
        the navigation bar. Blind users can find screen reader options there.
      </p>
      <p>
        He or she can contact his or her account manager for assistance.
        Dear Sir/Madam, we will get back to you shortly.
      </p>
      <a href="/help">Click here for help</a>
      <a href="/faq">Learn more</a>
      <a href="/docs">Click here to read the documentation</a>
    </section>

    <footer>
      <p>
        Once you have finished, since all fields are required, visit our
        web site home page. Login to your account to check the ETA for
        your request, e.g. within twenty four hours. Hang tight!
      </p>
      <p>We support transfers, deposits and withdrawals.</p>
      <p>Check the url below for your receipt.</p>
      <p>Welcome back.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "SettingsPage",
};
</script>
