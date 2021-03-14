import React, {useState} from 'react';

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

  return (
    <div>
      <p>feedback-app</p>
    </div>
  );
};

export default Feedback;
