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

export enum BusinessType {
  Store = 'Store',
  Factory = 'Factory',
  Restaurant = 'Restaurant',
  Hotel = 'Hotel',
  Workshop = 'Workshop',
  Other = 'Other'
}

export interface BusinessInterface {
  businessType?: string;
  companyName?: string;
  companyEmail?: string;
  companyPhone?: string;
  companyAddress?: string;
}

export interface ProfessionalInterface {
  job?: string;
  education?: string;
  school?: string;
  graduationYear?: string;
}

export interface UserInterface {
  id: string;
  email: string;
  password?: string;
  confirmPassword: string;
  firstName?: string;
  lastName: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  customerType: CustomerType;
  businessInfo: BusinessInterface;
  professionalInfo: ProfessionalInterface;
}
