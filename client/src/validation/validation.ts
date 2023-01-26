import * as yup from 'yup';
import { date } from 'yup';
import { CustomerType } from '../interfaces/UserInterface';

const userSchema = (customerType: CustomerType) => {
  return yup.object().shape({
    email: yup
      .string()
      .email('Enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol')
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm your password'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    address: yup.string().required('Address is required'),
    birthDate: date()
      .typeError('Invalid date')
      .max(
        new Date(`1-1-${new Date().getFullYear() - 18}`),
        'Should be older than 18'
      )
      .required('Birth Date is required'),
    gender: yup
      .string()
      .oneOf(['male', 'female', 'other'], 'Gender is required'),
    phone: yup.string().required('Phone is required'),
    customerType: yup
      .string()
      .oneOf(['individual', 'business', 'professional']),
    businessInfo:
      customerType == CustomerType.Business &&
      yup
        .object()
        .shape({
          businessType: yup.string().required('Business Type is required'),
          companyName: yup.string().required('Company Name is required'),
          companyEmail: yup.string().email('Enter valid company email'),
          companyPhone: yup.string(),
          companyAddress: yup.string()
        })
        .required(),
    professionalInfo:
      customerType == CustomerType.Professional &&
      yup
        .object()
        .shape({
          job: yup.string().required('Job is required'),
          education: yup.string().required('Education is required'),
          school: yup.string(),
          graduationYear: yup
            .string()
            .matches(/^[0-9]*$/, 'Year is not valid')
            .max(4, 'Year is not valid')
        })
        .required()
  });
};
export default userSchema;
