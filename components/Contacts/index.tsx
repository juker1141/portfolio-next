import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { toggleModal, toggleFormReview } from '../../actions';
import ContactForm from './ContactForm';
import ContactFormReview from './ContactFormReview';
import ContactInfowindow from './ContactInfowindow';

class Contact extends React.Component {
  renderContent() {
    if (this.props.formReview) {
      return <ContactFormReview
        onCancel={() => this.props.toggleFormReview(false)}
        onEmailSend={() => this.props.toggleFormReview(false)}
      />;
    }

    return <ContactForm
      onFormSubmit={() => this.props.toggleFormReview(true)}
    />;
  };

  render() {
    return (
      <div className="w-full pb-4">
        <div className="w-full flex justify-center items-center mt-20 lg:mt-32" >
          <div className="flex flex-col items-center w-full lg:w-1/2 px-6 sm:px-24 lg:px-0">
            <div className="font-Raleway text-5xl lg:text-6xl w-full text-left lg:text-center relative">
              <span id="contact" className="absolute -top-36 lg:-top-52"></span>Contact
            </div>
            <div className="lg:text-xl w-full flex flex-col">
              {this.renderContent()}
            </div>
            {this.props.modal ?
              <ContactInfowindow onClick={() => { this.props.reset() }} />
              : ''}
          </div>
        </div >
      </div >
    );
  };
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
    formReview: state.formReview,
  }
}

const contact = connect(mapStateToProps, { toggleModal, toggleFormReview })(Contact);

export default reduxForm({
  form: 'surveyForm',
})(contact);