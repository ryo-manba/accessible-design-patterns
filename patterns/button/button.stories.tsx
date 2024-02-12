import './button.js';

const meta = {
  title: 'Patterns/Button',
  component: 'my-button',
};

export default meta;

export const Default = () => {
  return `
    <div>
      <h3>Custom Button</h3>
      <my-button id="custom-button1" onclick='handleCustomClick()''>Submit</my-button>
      <my-button id="custom-button2" onclick='handleCustomClick()''>Submit</my-button>
      <h3>Standard Button</h3>
      <button id="standard-button1" onclick='handleStandardClick()'>Submit</button>
      <button id="standard-button2" onclick='handleStandardClick()'>Submit</button>
    </div>
    <script>
      function handleStandardClick() {
        console.log('Standard button clicked');
      }
      function handleCustomClick() {
        console.log('Custom button clicked');
      }
    </script>
  `;
};
