declare var grecaptcha: any; // Just to make TS happy.

const RECAPTCHA_SITE_KEY = "6LeRsbQeAAAAAJsQqfPoDAr4SsCkUGMjqV0MOEK2";

export function generateCaptchaToken(action: string): Promise<string> {
  return new Promise((resolve, reject) => {
    grecaptcha.ready(async () => {
      let token = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: action });
      resolve(token);
    });
  });
}
