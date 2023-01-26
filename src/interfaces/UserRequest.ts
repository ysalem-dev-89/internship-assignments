import { Request } from 'express';

export default interface UserRequest extends Request {
  body: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    birthDate: string;
    gender: 'male' | 'female' | 'other';
    address: string;
    customerType: 'individual' | 'business' | 'professional';
    businessInfo: {
      businessType: string;
      companyName: string;
      companyEmail: string;
      companyPhone?: string;
      companyAddress?: string;
    };
    professionalInfo: {
      job: string;
      education: string;
      school?: string;
      graduationYear?: string;
    };
  };
}
