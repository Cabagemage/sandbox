import './index.css';
import FormCreator from './modules/FormCreator';
import data from './data.json';

const place = '.content';
const form = new FormCreator(data, place);

form.connectedCallback();
