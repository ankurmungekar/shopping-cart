import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

const Signup = (props) => {
    return (
        <div className="container">
            <div className="signup-form">
            <h3>Create your account</h3>  
            <SignupForm />
            </div>
        </div>
    ) 
}

export default Signup;