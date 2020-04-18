import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(9, 'Password must be 9 characters')
        .matches(/[a-z]/, 'Password invalid. Please enter at least one lowercase letter')
        .matches(/[A-Z]/, 'Password invalid. Please enter at least one uppercase letter')
        .matches(/[0-9]/, 'Password invalid. Please enter at least one number')
        .matches(/[~*!@$#%_+.?:,{}]/, 'Password invalid. Please enter at least one special character')
        .required('Please enter password') 
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-element">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className={
            formik.errors.firstName && formik.touched.firstName
              ? "text-input error"
              : "text-input"
          }
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="input-feedback">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="form-element">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className={
            formik.errors.lastName && formik.touched.lastName
              ? "text-input error"
              : "text-input"
          }
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="input-feedback">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className="form-element">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="input-feedback">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="form-element">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="input-feedback">{formik.errors.password}</div>
        ) : null}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;