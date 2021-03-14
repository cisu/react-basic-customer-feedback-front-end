import React, {useState, Fragment} from 'react';

const Feedback = () => {
  // values: is the variable name
  // setValues: is a method to update the values
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    uploadedFiles: '',
    buttonText: 'Submit',
    uploadPhotosButtonText: 'Upload files',
  });

  // destructuring state variables
  const {
    name,
    email,
    message,
    phone,
    uploadedFiles,
    buttonText,
    uploadPhotosButtonText,
  } = values;

  //   event handler
  const handleChange = () => {
    console.log('handle change');
  };

  const handleSubmit = () => {
    console.log('handle submit');
  };

  const feedbackForm = () => (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='text-muted'>Description</label>

          <textarea
            onChange={handleChange('message')}
            type='text'
            className='form-control'
            value={message}
            required
          ></textarea>
        </div>

        <div className='form-group'>
          <label className='text-muted'>Your Name</label>

          <input
            className='form-control'
            type='text'
            onChange={handleChange('name')}
            value={name}
            required
          />
        </div>

        <div className='form-group'>
          <label className='text-muted'>Your email</label>

          <input
            className='form-control'
            type='text'
            onChange={handleChange('email')}
            value={email}
            required
          />
        </div>

        <div className='form-group'>
          <label className='text-muted'>Your Phone</label>

          <input
            className='form-control'
            type='number'
            onChange={handleChange('phone')}
            value={phone}
            required
          />
        </div>

        <button className='btn btn-outline btn-primary btn-block'>
          {buttonText}
        </button>
      </form>
    </Fragment>
  );

  return <div>{feedbackForm()}</div>;
};

export default Feedback;
