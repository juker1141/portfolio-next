import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Trans, withTranslation } from 'react-i18next';
import ContactField from './ContactField';
import validateEmail from '../../utils/validateEmail';

class ContactForm extends React.Component {
  renderFields() {
    const array = this.props.t('contact.formFields', { returnObjects: true });

    if (array !== 'contact.formFields') {
      return _.map(array, ({ label, name }) => {
        return (
          <Field key={name} component={ContactField} type="text" label={label} name={name} />
        );
      });
    }

  };

  render() {
    return (
      <form
        className="flex flex-col mt-10"
        onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
      // handleSubmit 是 reduxForm 的函式
      >
        {this.renderFields()}
        <div className="mt-4 lg:mt-8 flex flex-col-reverse lg:flex-row lg:justify-between lg:mx-8 xl:mx-16">
          <button
            className="text-base font-bold py-4 lg:py-2 px-6
                focus:outline-none focus:shadow-outline rounded flex justify-center items-center
                disabled:opacity-80"
            type="button"
            onClick={this.props.reset}
            disabled={this.props.pristine || this.props.submitting}
          >
            {this.props.t('contact.button.cancel')}
            <span className="material-icons ml-1">
              clear
            </span>
          </button>
          <button
            className="bg-blue-900 text-white text-base font-bold py-4 px-24
              flex items-center rounded justify-center disabled:opacity-70 mb-5 lg:mb-0"
            disabled={this.props.invalid || this.props.pristine}
          >
            {this.props.t('contact.button.next')}
            <span className="material-icons ml-1">
              done
            </span>
          </button>
        </div>
      </form>
    );
  }
}

function validate(values, props) {
  const errors = {};
  const array = props.t('contact.formFields', { returnObjects: true });

  errors.email = validateEmail(values.email || '');
  if (errors.email) {
    errors.email = <Trans>{props.t('contact.error.email', { email: values.email })}</Trans>
  }
  if (array !== 'contact.formFields') {
    _.each(array, ({ label, name }) => {
      if (!values[name]) {
        errors[name] = <Trans>{props.t('contact.error.required', { name: label })}</Trans>;
      }
    });
  }

  return errors;
};

const form = reduxForm({
  validate, // 驗證用戶輸入的資料
  form: 'surveyForm',
  destroyOnUnmount: false
})(ContactForm);

export default withTranslation()(form);