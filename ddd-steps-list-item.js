/**
 * Copyright 2025 mikeyo4480
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./ddd-steps-list-item.js";

/**
 * `ddd-steps-list-item`
 *
 * @demo index.html
 * @element ddd-steps-list-item
 */
export class DddStepsList extends DDDPulseEffectSuper(I18NMixin(DDD)) {
  static get tag() {
    return "ddd-steps-list-item";
  }

  constructor() {
    super();
    this.title = "";
    this.count = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      count: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;

          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          display: block;
          gap: var(--ddd-spacing-2);
          margin: 0 var(--ddd-spacing-2);
          padding: 0 var(--ddd-spacing-4);
        }
        .content {
          display: block;
          gap: var(--ddd-spacing-2);
        }
        h3 {
          margin: 0px 16px;
        }
        .header-content {
          display: inline-flex;
          align-items: center;
        }
        .count {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--ddd-theme-primary);
          color: white;
          font-size: 24px;
          font-weight: bold;
          margin-right: 8px;
        }
          .vl {
          border-left: 2px dashed black;
          height: 100%;
          width: 2px;
          margin-right: 16px;
          }
        @media (max-width: 600px) {
          .wrapper {
            padding: 0;
          }
          .header-content {
            display: inline-flex;
            flex-direction: row;
            text-align: center;
          }
          .count {
            margin: 0 auto;
          }
          h3 {
            margin: 0px;
          }
          .content {
            margin-left: 0px;
            padding: 0 16px;
          }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <div class="vl"></div>
      <div class="header-content">
        <div class="count">${this.count}</div>
        <h3>
          <div>${this.t.title}</div>
          ${this.title}
        </h3>
      </div>

      <div class="content">
        <slot></slot>
      </div>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddStepsList.tag, DddStepsList);
