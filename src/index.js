import './index.css';
import FormCreator from './modules/FormCreator';
import data from './data.json';

const json = data;
const place = '.content';
const form = new FormCreator(json, place);

function turnOnForm() {
  form.connectedCallback();
}
window.addEventListener('DOMContentLoaded', function (event) {
  turnOnForm();
});
