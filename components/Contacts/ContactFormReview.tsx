import _ from 'lodash';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions';
class ContactFormReview extends React.Component {
  reviewFields() {
    const array = this.props.t('contact.formFields', { returnObjects: true });
    if (array !== 'contact.formFields') {
      return _.map(array, ({ label, name }) => {
        return (
          <div className="mb-4" key={name}>
            <label className="font-bold">{label}</label>
            <div className="mt-4 italic">{this.props.formValues[name]}</div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="flex flex-col items-center">
        <div className="mt-5 flex w-full lg:justify-center">{this.props.t('contact.remind')}</div>
        <div className="w-5/6 lg:w-2/3">
          <div className="mt-5">{this.reviewFields()}</div>
        </div>
        <div className="mt-8 flex flex-col-reverse lg:flex-row lg:justify-center">
          <button
            className="text-base font-bold py-4 lg:py-2 px-6 lg:mr-24
            focus:outline-none focus:shadow-outline rounded flex justify-center items-center"
            onClick={this.props.onCancel}
          >
            <span className="material-icons mr-1">
              edit
            </span>
            {this.props.t('contact.button.edit')}
          </button>
          <button
            className="bg-blue-900 text-white text-base font-bold py-4 px-24 mb-5 lg:mb-0
                flex items-center rounded justify-center transition duration-500"
            onClick={() => {
              this.props.sendEmail(this.props.formValues);
              this.props.onEmailSend();
            }}
          >
            {this.props.t('contact.button.send')}
            <span className="material-icons ml-2">
              mail
            </span>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};

const formReview = withTranslation()(ContactFormReview);

export default connect(mapStateToProps, { sendEmail })(formReview);