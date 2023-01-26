import React from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import {
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Row,
  Col,
  FormGroup
} from 'reactstrap';
import { UserInterface } from '../../interfaces/UserInterface';

export default function ProfessionalInfo({
  register,
  errors
}: {
  register: UseFormRegister<UserInterface>;
  errors: Partial<FieldErrorsImpl<UserInterface>>;
}) {
  return (
    <AccordionItem>
      <AccordionHeader targetId="4">Professional Information</AccordionHeader>
      <AccordionBody accordionId="4">
        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="job">Job: </label>
              <input
                {...register('professionalInfo.job')}
                id="job"
                placeholder="Job"
                className="mb-4 form-control"
                aria-invalid={errors.professionalInfo?.job ? 'true' : 'false'}
              />
              <span className="text-danger input-error">
                {errors.professionalInfo?.job?.message}
              </span>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="education">Education: </label>
              <input
                {...register('professionalInfo.education')}
                id="education"
                placeholder="Education"
                className="mb-4 form-control"
                aria-invalid={
                  errors.professionalInfo?.education ? 'true' : 'false'
                }
              />
              <span className="text-danger input-error">
                {errors.professionalInfo?.education?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="school">School: </label>
              <input
                {...register('professionalInfo.school')}
                id="school"
                placeholder="School"
                className="mb-4 form-control"
                aria-invalid={
                  errors.professionalInfo?.school ? 'true' : 'false'
                }
              />
              <span className="text-danger input-error">
                {errors.professionalInfo?.school?.message}
              </span>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="graduationYear">Graduation Year: </label>
              <input
                {...register('professionalInfo.graduationYear')}
                id="companyPhone"
                placeholder="Company Phone"
                className="mb-4 form-control"
                aria-invalid={
                  errors.professionalInfo?.graduationYear ? 'true' : 'false'
                }
              />
              <span className="text-danger input-error">
                {errors.professionalInfo?.graduationYear?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>
      </AccordionBody>
    </AccordionItem>
  );
}
