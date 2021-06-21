import './index.css';
import FormCreator from './modules/FormCreator';
import data from './data.json';



function turnOnForm() {
  const options = {
    data: data,
    place: '.content',
    customFormTag: 'custom-form',
    changeThemeSelector: 'change_theme',
  };

  const form = new FormCreator(
    options.data,
    options.place,
    options.customFormTag,
    options.changeThemeSelector
  );
  form.connectedCallback();
}
window.addEventListener('DOMContentLoaded', function (event) {
  turnOnForm();
});
