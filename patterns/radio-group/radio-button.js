import './radio-group.css';

/**
 * reference: https://www.w3.org/WAI/ARIA/apg/patterns/radio/
 */
class RadioButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('role', 'radio');
    // If tabindex is set by the parent element, do not change it
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '-1');
    }
    this.setAttribute('aria-checked', false);
  }
}

window.customElements.define('radio-button', RadioButton);
