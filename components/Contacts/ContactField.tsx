import React from 'react';

class ContactField extends React.Component {
  render() {
    if (this.props.input.name === 'name' || this.props.input.name === 'email') {
      return (
        <div className="mb-4">
          <label className="block text-xl font-bold mb-4 pl-2">{this.props.label}</label>
          <input
            type="text"
            className={`text-xl bg-lightBlue border border-blue-900
                    p-2 px-3 rounded-lg focus:outline-none w-full
              ${this.props.meta.touched && this.props.meta.error ? 'border-red-500' : ''}`}
            {...this.props.input}
          />
          {this.props.meta.touched && this.props.meta.error ?
            <div className="text-red-500 text-sm pt-2">
              {this.props.meta.touched && this.props.meta.error}
            </div> : ''
          }
          {/* 如果用戶點擊了，並且也有 error 的訊息，那就顯示 error 的訊息 */}
        </div>
      );
    } else if (this.props.input.name === 'messages') {
      return (
        <div>
          <label className="block text-xl font-bold mb-4 pl-2">
            {this.props.label}
          </label>
          <textarea
            className={`text-xl bg-lightBlue border border-blue-900
                p-3 rounded-lg focus:outline-none h-48 w-full
            ${this.props.meta.touched && this.props.meta.error ? 'border-red-500' : ''}`}
            {...this.props.input}
          />
          {this.props.meta.touched && this.props.meta.error ?
            <div className="text-red-500 text-sm pt-2">
              {this.props.meta.touched && this.props.meta.error}
            </div> : ''
          }
        </div>
      );
    }
  };
};

export default ContactField;
