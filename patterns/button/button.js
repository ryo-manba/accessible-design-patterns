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
  }

  handleKeyDown(e) {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        this.click();
        break;
    }
  }
}

window.customElements.define('my-button', Button);
