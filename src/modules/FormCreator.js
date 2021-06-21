import styles from './form.module.css';

class FormCreator extends HTMLElement {
  // Принимает два аргумента: дата - входные данные (JSON-формат) и второй аргумент - это селектор(строка),
  // где форма должна быть размещена.
  constructor(data, placeForTheForm) {
    super();
    this.inputs = data.inputs;
    this.submit = data.submit;
    this.headers = data.headers;
    this.placeForTheForm = placeForTheForm;
  }
  // Инициализация формы.
  _formInit() {
    const customForm = document.getElementsByTagName('custom-form')[0];
    const form = document.createElement('FORM');
    form.className = styles.form;
    form.name = this.headers.name;
    form.id = this.headers.id;
    form.action = this.submit.url;
    customForm.prepend(form);
    return customForm;
  }

  // Инициализация инпутов.
  _inputsInit() {
    const inputs = this.inputs.map((item) => {
      const input = document.createElement('INPUT');
      const label = document.createElement('LABEL');

      input.type = item.type;
      label.textContent = item.label;
      input.id = item.id;
      label.htmlFor = item.id;
      input.placeholder = item.placeholder;

      const inputContainer = { input, label };
      return inputContainer;
    });
    return inputs;
  }
  // Создание разметкми и её рендер.
  _createMarkUp() {
    const place = document.querySelector(`${this.placeForTheForm}`);
    place.prepend(this._formInit());

    const form = document.getElementById(`${this.headers.id}`);
    const submitButton = document.createElement('BUTTON');
    const darkThemeButton = document.createElement('BUTTON');
    const title = document.createElement('SPAN');

    title.textContent = this.headers.name;
    title.className = styles.title;
    darkThemeButton.id = 'change_theme';
    darkThemeButton.type = 'button';
    darkThemeButton.className = styles.button_toggle_theme;
    submitButton.id = 'submit';
    submitButton.type = 'submit';
    submitButton.textContent = this.submit.text;
    submitButton.className = styles.submitButton;

    this._inputsInit().forEach((item) => {
      const wrapper = document.createElement('DIV');
      wrapper.className = styles.wrapper;
      item.input.className = styles.input;
      item.label.className = styles.label;
      wrapper.append(item.label);
      wrapper.append(item.input);
      form.append(wrapper);
    });
    form.append(submitButton);
    form.prepend(darkThemeButton);
    form.prepend(title);
  }

  connectedCallback() {
    this._createMarkUp();
    this._eventListeners();
  }

  submitForm(data) {
    console.log('Your data request was succeeded');
  }

  _toggleTheme() {
    const form = document.querySelector('form');
    form.classList.toggle(styles.form_dark_theme);
  }

  _eventListeners() {
    const changeTheme = document.getElementById('change_theme');
    const submitButton = document.getElementById('submit');

    changeTheme.addEventListener('click', () => {
      this._toggleTheme();
    });

    submitButton.addEventListener('click', (e) => {
      e.preventDefault();

      this.submitForm();
    });
  }
}

customElements.define('custom-form', FormCreator);

export default FormCreator;
