import "./layer.scss";

const createTags = function() {
  const tag = `
  <div class="layer-box">
    <div class="layer-title">填写图形验证码</div>
    <div class="layer-content">
      <input type="text" class="layer-input">
      <img class="layer-code">
    </div>
    <div class="layer-action">
      <div class="action no layer-close">取消</div>
      <div class="action yes layer-submit">确定</div>
    </div>
  </div>
  `;

  return tag;
};

/**
 * @param phone
 */
export default class Layer {
  constructor(params) {
    this.option = { ...params };

    //append
    const el = document.createElement("div");
    el.className = "layer-overlay";
    el.innerHTML = createTags();
    document.body.appendChild(el);

    //ref
    this.el = el;
    this.input = el.querySelector("input");
    this.img = el.querySelector("img");

    //event

    this.img.addEventListener("click", () => {
      const src = this._getImageCode();
      this.img.src = src;
    });

    this.el.addEventListener("click", e => {
      const name = e.target.className;
      const isClose = name.indexOf("layer-close") >= 0;
      const isSubmit = name.indexOf("layer-submit") >= 0;
      if (isClose) {
        this.hide();
      }
      if (isSubmit) {
        if (!this.input.value.trim()) {
          alert("请填写图形验证码");
          return;
        }
        this.hide();
        if (typeof this.option.callback == "function") {
          this.option.callback(this.input.value);
        }
      }
    });
  }

  hide() {
    this.el.style.display = "none";
  }

  render(params) {
    this.option = { ...this.option, ...params };
    this._reset();
    this.el.style.display = "block";
  }

  _reset() {
    this.input.value = "";
    this.img.src = this._getImageCode();
  }

  _getImageCode() {
    const base = "http://rs.zx0093.com/rs/validCode.html?";
    return base + `phone=${this.option.phone}&t=${Date.now()}`;
  }
}
