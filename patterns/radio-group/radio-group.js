/**
 * reference: https://www.w3.org/WAI/ARIA/apg/patterns/radio/
 */
class RadioGroup extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute('role', 'radiogroup');
    this.radios = Array.from(this.querySelectorAll('radio-button'));

    // Setup initial state
    if (this.hasAttribute('selected')) {
      const selected = this.getAttribute('selected');
      this._selected = selected;
      this.radios[selected].setAttribute('aria-checked', 'true');
      this.radios[selected].setAttribute('tabindex', '0');
    } else {
      this.radios[0].setAttribute('tabindex', 0);
    }
    this.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.addEventListener('click', this.handleClick.bind(this));
  }

  handleKeyDown(e) {
    const target = e.target;
    const targetIndex = this.radios.indexOf(target);
    switch (e.key) {
      case ' ': {
        if (this.selected === undefined) {
          this.selected = targetIndex;
        }
        break;
      }
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault();

        if (targetIndex === 0) {
          this.selected = this.radios.length - 1;
        } else {
          this.selected = targetIndex - 1;
        }
        break;
      }

      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault();

        if (targetIndex === this.radios.length - 1) {
          this.selected = 0;
        } else {
          this.selected = targetIndex + 1;
        }
        break;
      }
    }
  }

  handleClick(e) {
    const idx = this.radios.indexOf(e.target);
    if (idx === -1) {
      return;
    }
    this.selected = idx;
  }

  set selected(idx) {
    if (isFinite(this.selected)) {
      // Set the old button to tabindex -1
      let previousSelected = this.radios[this.selected];
      previousSelected.tabIndex = -1;
      previousSelected.setAttribute('aria-checked', false);
    }

    // Set the new button to tabindex 0 and focus it
    let newSelected = this.radios[idx];
    newSelected.tabIndex = 0;
    newSelected.focus();
    newSelected.setAttribute('aria-checked', true);

    this.setAttribute('selected', idx);
    this._selected = idx;
  }

  get selected() {
    return this._selected;
  }
}

window.customElements.define('radio-group', RadioGroup);
