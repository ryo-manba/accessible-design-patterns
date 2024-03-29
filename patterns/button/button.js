import './button.css';
/**
 * reference: https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
class Button extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', '0');

    this.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  handleKeyDown(e) {
    if (e.key === ' ') {
      // To prevent long presses, use keyup to switch state
      e.preventDefault();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      this.click();
    }
  }

  handleKeyUp(e) {
    if (e.key === ' ') {
      this.click();
      e.preventDefault();
    }
  }
}

window.customElements.define('my-button', Button);
