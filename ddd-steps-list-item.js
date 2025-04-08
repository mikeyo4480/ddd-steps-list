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
          color: var(--ddd-theme-default-white);
          font-size: var(--ddd-font-size-3xs);
          font-weight: var(--ddd-font-weight-bold);
          margin-right: var(--ddd-spacing-2);
        }
          .vl {
          border-left: 2px dashed var(--ddd-theme-default-limestoneGray);
          margin-left: var(--ddd-spacing-6);
          }
        @media (max-width: 600px) {
          .wrapper {
            padding: var(--ddd-spacing-0);
          }
          .header-content {
            display: inline-flex;
            flex-direction: row;
            text-align: center;
          }
          .count {
            margin: var(--ddd-spacing-0);
            margin-left: -30px;
          }
          h3 {
            margin: var(--ddd-spacing-0);
          }
          .content {
            margin-left: var(--ddd-spacing-0);
            padding: 0 16px;
          }
          img {
            margin: var(--ddd-spacing-0);
            width: 80%;
            height: auto;
          }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <div class="count">${this.count}</div>
      <div class="header-content">
        <h3>
          <div>${this.t.title}</div>
          ${this.title}
        </h3>
      </div>
      <div class="vl">
        <div class="content">
          <slot></slot>
        </div>
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
