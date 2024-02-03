import './radio-button.js';
import './radio-group.js';

export default {
  title: 'patterns/RadioGroup',
};

export const Default = () => {
  return `
    <style>
    radio-group {
      display: flex;
      flex-flow: column;
      padding-left: 20px;
    }

    radio-button {
      position: relative;
    }

    radio-button::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border: 1px solid #000;
      position: absolute;
      left: -18px;
      top: 3px;
      border-radius: 50%;
    }
    radio-button[aria-checked='true']::after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      background: blue;
      position: absolute;
      left: -16px;
      top: 5px;
      border-radius: 50%;
    }

    </style>
    <div>
      <h2 id="drink-options-label">What is your favorite drink?(Original Radio Input)</h2>
      <div id="drink-options-desc">Each option may contain caffeine.</div>
      <form>
        <input type=text placeholder="Other">
        <radio-group aria-labelledby="drink-options-label" aria-describedby="drink-options-desc">
          <radio-button>Water</radio-button>
          <radio-button>Coffee</radio-button>
          <radio-button>Tea</radio-button>
          <radio-button>Cola</radio-button>
          <radio-button>Ginger Ale</radio-button>
        </radio-group>
        <button type="submit">Submit</button>
      </form>        
    </div>
    <div>
    <h2 id="drink-options-label">What is your favorite drink? (Standard Radio Input)</h2>
    <div id="drink-options-desc">Each option may contain caffeine.</div>
    <form>
      <input type="text" placeholder="Other">
      <div role="radio-group" aria-labelledby="drink-options-label" aria-describedby="drink-options-desc">
        <input type="radio" id="water" name="drink" value="Water">
        <label for="water">Water</label><br>
        <input type="radio" id="coffee" name="drink" value="Coffee">
        <label for="coffee">Coffee</label><br>
        <input type="radio" id="tea" name="drink" value="Tea">
        <label for="tea">Tea</label><br>
        <input type="radio" id="cola" name="drink" value="Cola">
        <label for="cola">Cola</label><br>
        <input type="radio" id="ginger-ale" name="drink" value="Ginger Ale">
        <label for="ginger-ale">Ginger Ale</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  `;
};

export const InputTypeRadio = () => {
  return `
    <div>
      <h2>What is your favorite drink? (Standard Radio Input)</h2>
      <form>
        <input type="text" placeholder="Other">
        <div>
          <input type="radio" id="water" name="drink" value="Water">
          <label for="water">Water</label><br>
          <input type="radio" id="coffee" name="drink" value="Coffee">
          <label for="coffee">Coffee</label><br>
          <input type="radio" id="tea" name="drink" value="Tea">
          <label for="tea">Tea</label><br>
          <input type="radio" id="cola" name="drink" value="Cola">
          <label for="cola">Cola</label><br>
          <input type="radio" id="ginger-ale" name="drink" value="Ginger Ale">
          <label for="ginger-ale">Ginger Ale</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  `;
};
