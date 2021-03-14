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

  //  destructuring env variables
  const {
    REACT_APP_API,
    REACT_APP_CLOUDINARY_CLOUND_NAME,
    REACT_APP_CLOUDINARY_UPLOAD_SECRET,
  } = process.env;

  //   event handler
  // We have a function returning another function
  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();

    setValues({...values, buttonText: '...sending'});

    // send to backend for email
    console.table({name, email, phone, message, uploadedFiles});
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: REACT_APP_CLOUDINARY_CLOUND_NAME,
        upload_preset: REACT_APP_CLOUDINARY_UPLOAD_SECRET,
        tags: ['ebooks'],
      },
      function (error, result) {
        // console.log(result);

        setValues({
          ...values,
          uploadedFiles: result,
          uploadPhotosButtonText: `${
            result ? result.length : 0
          } Photos uploaded`,
        });
      }
    );
  };

  const feedbackForm = () => (
    <Fragment>
      <div className='form-group-pt-5'>
        <button
          onClick={() => uploadWidget()}
          className='btn-outline-secondary btn-block p-5'
        >
          {uploadPhotosButtonText}
        </button>
      </div>

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

        <button className='btn btn-outline-primary btn-block'>
          {buttonText}
        </button>
      </form>
    </Fragment>
  );

  return <div>{feedbackForm()}</div>;
};

export default Feedback;
