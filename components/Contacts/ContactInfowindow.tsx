import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { toggleModal } from '../../actions';
import Modal from '../Modal';

class ContactInfowindow extends React.Component {
  renderContent() {
    if (this.props.modal === 'success') {
      return (
        <React.Fragment>
          <div className="text-xl font-black mb-5">{this.props.t('infowindow.success.title')}</div>
          <div className="mb-3 font-bold">{this.props.t('infowindow.success.description')}</div>
          <div className="font-bold">{this.props.t('infowindow.success.content')}</div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <div className="text-xl font-black mb-5">{this.props.t('infowindow.warning.title')}</div>
        <div className="mb-3 font-bold">{this.props.t('infowindow.warning.description')}</div>
        <div>{this.props.t('infowindow.warning.content')}</div>
      </React.Fragment>
    );
  }

  renderActions(status) {
    return (
      <React.Fragment>
        <button
          onClick={() => { this.handleClick() }}
          className="bg-blue-900 text-white text-base font-bold py-2 lg:py-2 px-8 flex items-center rounded justify-center mb-3 lg:mb-2"
        >
          {this.props.t('infowindow.closebutton')}
        </button>
      </React.Fragment>
    )
  };

  handleClick() {
    if (this.props.modal === 'success') {
      this.props.onClick();
    }
    this.props.toggleModal(false)
  }

  render() {
    if (this.props.modal === 'loading') {
      return (
        <Modal
          status={'loading'}
        />
      )
    }
    return (
      <Modal
        status={this.props.modal === 'success' ? 'success' : 'error'}
        content={this.renderContent()}
        actions={this.renderActions(this.props.modal)}
        onClose={() => { this.props.toggleModal(false) }}
      />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps, { toggleModal })(withTranslation()(ContactInfowindow));