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
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--ddd-spacing-2);
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        .content {
          display: block;
          gap: var(--ddd-spacing-2);
        }
        h3 span {
          font-size: var(
            --ddd-steps-list-item-label-font-size,
            var(--ddd-font-size-s)
          );
        }
        .header-content {
          display: inline-flex;
          align-items: center;
        }
        .count {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--ddd-theme-default-beaverBlue);
          color: white;
          font-size: 16px;
          font-weight: bold;
          margin-right: 8px;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <div class="header-content">
        <span class="count">${this.count}</span>
        <h3><span>${this.t.title}</span> ${this.title}</h3>
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
