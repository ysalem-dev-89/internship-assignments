import { Document } from 'mongoose';

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export enum CustomerType {
  Individual = 'individual',
  Business = 'business',
  Professional = 'professional'
}

export interface BusinessType extends Document {
  businessType: string;
  companyName: string;
  companyEmail: string;
  companyPhone?: string;
  companyAddress?: string;
}

export interface ProfessionalType extends Document {
  job: string;
  education: string;
  school?: string;
  graduationYear?: string;
}

export interface UserInterface extends Document {
  id: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  customerType: CustomerType;
  businessInfo?: BusinessType;
  professionalInfo?: ProfessionalType;
}
