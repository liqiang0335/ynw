import "./script";
import "./style.scss";

/**
 * Geetest drag detection
 *
 * @param data.gt
 * @param data.challenge
 * @param data.success
 * @return { geetest_challenge, geetest_validate, geetest_seccode }
 *
 * 需要提供一个DOM节点 <div id="popup-captcha"></div>
 */
export default function showGeetest(data) {
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
      container.style.display = "block";
      captchaObj.appendTo("#popup-captcha");
      captchaObj.onReady(captchaObj.show);
      if (container.style.display === "none") {
        container.style.display = "block";
      }

      captchaObj.onSuccess(function() {
        container.style.display = "none";
        const successElement = container.querySelector(
          ".geetest_ghost_success"
        );
        if (successElement) {
          successElement.style.display = "none";
        }
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
}
