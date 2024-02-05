import './radio-button.js';
import './radio-group.js';

export default {
  title: 'Patterns/RadioGroup',
};

export const RadioGroupExample = () => {
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

// TODO: unimplemented
export const ToolbarContainedRadioGroup = () => {
  return `
    <div style="padding: 10px; background-color: #f0f0f0;">
      <div role="toolbar" aria-label="Toolbar with Radio Group">
        <div class="group characteristics">
          <button type="button" class="item bold" aria-pressed="false" value="bold" tabindex="0">
            <span class="icon bold" aria-hidden="true"></span>
            <span class="label">Bold</span>
          </button>
          <button type="button" class="item italic" aria-pressed="false" value="italic" tabindex="-1">
            <span class="icon italic" aria-hidden="true"></span>
            <span class="label">Italic</span>
          </button>
          <button type="button" class="item underline" aria-pressed="false" value="underline" tabindex="-1">
            <span class="icon underline" aria-hidden="true"></span>
            <span class="label">Underline</span>
          </button>
        </div>
        <!-- Custom Radio Group for Text Alignment -->
        <radio-group aria-label="Text Alignment">
          <radio-button>
            <span>Text Align Left</span>
          </radio-button>
          <radio-button>
            <span class="label">Text Align Center</span>
          </radio-button>
          <radio-button>
            <span class="label">Text Align Right</span>
          </radio-button>
        </radio-group>
        <button type="button">Copy</button>
        <button type="button">Paste</button>
        <button type="button">Cut</button>
      </div>
      <!-- Textarea Element -->
      <textarea id="textarea1" aria-label="Text Area" rows="4" cols="50"></textarea>
    </div>
  `;
};

export const RadioGroupWithStandardInputs = () => {
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
