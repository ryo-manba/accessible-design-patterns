import './radio-button.js';
import './radio-group.js';

export default {
  title: 'patterns/RadioGroup',
};

export const Example = () => {
  return `
    <radio-group aria-labelledby="group_label_1" id="rg1">
      <h3 id="group_label_1">Pizza Crust</h3>
      <radio-button>Regular crust</radio-button>
      <radio-button>Thin crust</radio-button>
      <radio-button>Deep dish</radio-button>
    </radio-group>
    <radio-group aria-labelledby="group_label_2" id="rg2">
      <h3 id="group_label_2">Pizza Delivery</h3>
      <radio-button>Pickup</radio-button>
      <radio-button>Home Delivery</radio-button>
      <radio-button>Dine in</radio-button>
    </radio-group>
    `;
};

export const Default = () => {
  return `
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
