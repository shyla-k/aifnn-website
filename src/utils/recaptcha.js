export async function getRecaptchaToken() {
  const SITE_KEY = "6LdgwBssAAAAAE55OYqRjG2I2leFetVfSYUejE0N";

  console.log("⚡ getRecaptchaToken() called");

  return new Promise((resolve) => {
    const loop = () => {
      if (window.grecaptcha && window.grecaptcha.execute) {
        console.log("⚡ grecaptcha is ready. Executing...");

        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(SITE_KEY, { action: "submit" })
            .then((token) => {
              console.log("⚡ reCAPTCHA TOKEN GENERATED:", token);
              resolve(token);
            })
            .catch((err) => {
              console.log("❌ reCAPTCHA EXECUTE ERROR:", err);
              resolve(null);
            });
        });
      } else {
        console.log("⏳ Waiting for recaptcha to load...");
        setTimeout(loop, 500);
      }
    };

    loop();
  });
}
