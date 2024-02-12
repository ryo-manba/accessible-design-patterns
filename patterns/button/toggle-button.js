import './button.css';
/**
 * reference: https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
class ToggleButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', '0');
    this.setAttribute('aria-pressed', 'false');

    this.addEventListener('click', this.handleClick.bind(this));
    this.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  handleKeyDown(e) {
    if (e.key === ' ') {
      // To prevent long presses, use keyup to switch state
      e.preventDefault();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      this.switchButtonState(e.currentTarget);
    }
  }

  handleKeyUp(e) {
    if (e.key === ' ') {
      e.preventDefault();
      this.switchButtonState(e.currentTarget);
    }
  }

  handleClick(e) {
    this.switchButtonState(e.currentTarget);
  }

  switchButtonState(button) {
    const isAriaPressed = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', !isAriaPressed);
  }
}

window.customElements.define('toggle-button', ToggleButton);
