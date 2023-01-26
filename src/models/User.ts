import mongoose, { Schema } from 'mongoose';

import {
  Gender,
  UserInterface,
  BusinessType,
  ProfessionalType
} from '../interfaces/UserInterface';

const businessSchema = new mongoose.Schema<BusinessType>({
  businessType: { type: String },
  companyName: { type: String },
  companyEmail: { type: String },
  companyPhone: { type: String },
  companyAddress: { type: String }
});

const professionalInfo = new mongoose.Schema<ProfessionalType>({
  job: { type: String },
  education: { type: String },
  school: { type: String },
  graduationYear: { type: String }
});

const userSchema: Schema = new mongoose.Schema<UserInterface>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  birthDate: { type: Date, required: true },
  gender: { type: String, enum: Object.values(Gender), required: true },
  address: { type: String, required: true },
  businessInfo: { type: businessSchema, default: {} },
  professionalInfo: { type: professionalInfo, default: {} }
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export default mongoose.model<UserInterface>('User', userSchema);
