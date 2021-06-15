export class Validation {
  constructor() {
    // DOM
    this.$form = document.querySelector('#formEl');
    this.$formAlert = document.querySelector('.form__alert');
    this.$formContainer = document.querySelector('.form-container');

    this.formData;
    this.formInputParams = ['name', 'last', 'email', 'password'];
    this.formEvent();
  }

  createFormObject() {
    const formEl = document.forms.formEl;
    return new FormData(formEl);
  }

  formEvent() {
    document.body.addEventListener('click', ({ target }) => {
      if (target.classList.contains('error')) {
        target.classList.remove('error');
        target.nextSibling.remove();
      }
    });

    this.$form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = this.createFormObject();

      const formObj = this.formInputParams.map((input) => {
        const inputVal = formData.get(input).trim();
        return {
          inputName: input,
          inputValue: inputVal,
          isEmpty: inputVal === '',
          alertText: this.getAlertText(input),
          hasError: this.checkForm({ type: input, string: inputVal }),
        };
      });
      this.displayAlert(formObj);
      console.log(formObj);
      this.$form.reset();
    });
  }

  getAlertText(input) {
    switch (input) {
      case 'name':
        return 'Must contain only letters';
      case 'last':
        return 'Must contain only letters';
      case 'email':
        return 'Incorrect email format';
      case 'password':
        return 'This password must be at least 7 characters long';
      default:
        return 'Error';
    }
  }

  displayAlert(form) {
    const anyEmpty = form.some((input) => input.isEmpty);

    if (anyEmpty) {
    //   this.$formAlert.classList.add('open');
      this.$formContainer.classList.add('error');
      return;
    }

    const inputsWithError = form
      .filter((input) => input.hasError)
      .forEach(({ inputName, alertText }) => {
        const $input = document.querySelector(`input[name='${inputName}']`);
        $input.insertAdjacentHTML('afterend', `<small class="error-message">${alertText}</small>`);
        $input.classList.add('error');
      });

    console.log('inputsWithError:', inputsWithError);
  }

  checkForm({ type = '', string = '' } = {}) {
    let regex = '';

    switch (type) {
      case 'name':
        regex = /^[a-zÀ-ÿ ,.'-]+$/i;
        break;
      case 'last':
        regex = /^[a-zÀ-ÿ ,.'-]+$/i;
        break;
      case 'email':
        regex =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        break;
      case 'password':
        regex = /^[A-Za-z]\w{7,14}$/;
        break;
      default:
        break;
    }
    const isCorrect = regex.test(string);
    return !isCorrect;
  }
}
