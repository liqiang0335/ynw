/**
 * Geetest drag detection
 *
 * @param data.gt
 * @param data.challenge
 * @param data.success
 * @return { geetest_challenge, geetest_validate, geetest_seccode }
 */

export const showGeetest = function(data) {
  return new Promise(resolve => {
    const params = {
      gt: data.gt,
      challenge: data.challenge,
      product: "popup",
      offline: !data.success
    };
    window.initGeetest(params, function(captchaObj) {
      var container = document.getElementById("popup-captcha");
      if (!container) {
        container = document.createElement("div");
        container.id = "popup-captcha";
        document.body.appendChild(container);
      }
      captchaObj.appendTo("#popup-captcha");
      captchaObj.onReady(captchaObj.show);
      if (container.style.display === "none") {
        container.style.display = "block";
      }

      captchaObj.onSuccess(function() {
        container.style.display = "none";
        var validate = captchaObj.getValidate();
        const geetOption = {
          geetest_challenge: validate.geetest_challenge,
          geetest_validate: validate.geetest_validate,
          geetest_seccode: validate.geetest_seccode
        };
        resolve(geetOption);
      });
    });
  });
};

/**
 * Create form for submit
 * @param data: Object
 */
export const createForm = function(data) {
  return new Promise(resolve => {
    const form = document.createElement("form");
    form.setAttribute("action", data);
    form.setAttribute("method", "POST");
    document.body.appendChild(form);
    for (var key in data) {
      const value = data[key];
      const el = document.createElement("input");
      el.setAttribute("type", "hidden");
      el.setAttribute("name", key);
      el.setAttribute("value", value);
      form.appendChild(el);
    }
    resolve(form);
  });
};
