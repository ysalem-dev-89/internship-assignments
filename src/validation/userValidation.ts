import * as yup from 'yup';
import { date } from 'yup';

const userSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  address: yup.string().required(),
  birthDate: date().required(),
  gender: yup.string().oneOf(['male', 'female', 'other']),
  phone: yup.string().required(),
  customerType: yup.string().oneOf(['individual', 'business', 'professional']),
  businessInfo: yup.object().when('customerType', {
    is: 'business',
    then: yup
      .object()
      .shape({
        businessType: yup.string().required(),
        companyName: yup.string().required(),
        companyEmail: yup.string(),
        companyPhone: yup.string(),
        companyAddress: yup.string()
      })
      .required()
  }),
  professionalInfo: yup.object().when('customerType', {
    is: 'professional',
    then: yup
      .object()
      .shape({
        job: yup.string().required(),
        education: yup.string().required(),
        school: yup.string(),
        graduationYear: yup.string()
      })
      .required()
  })
});

export default userSchema;
