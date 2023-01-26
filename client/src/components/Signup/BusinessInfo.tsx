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
import { BusinessType, UserInterface } from '../../interfaces/UserInterface';

export default function BusinessInfo({
  register,
  errors
}: {
  register: UseFormRegister<UserInterface>;
  errors: Partial<FieldErrorsImpl<UserInterface>>;
}) {
  return (
    <AccordionItem>
      <AccordionHeader targetId="3">Business Information</AccordionHeader>
      <AccordionBody accordionId="3">
        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="businessType">Business Type: </label>
              <select
                {...register('businessInfo.businessType')}
                id="businessType"
                placeholder="Business Type"
                className="mb-4 form-control"
                aria-invalid={
                  errors.businessInfo?.businessType?.message ? 'true' : 'false'
                }
              >
                <option key="choose" value="">
                  Choose Business Type
                </option>
                {Object.values(BusinessType).map(business => (
                  <option key={business.toString()} value={business}>
                    {business}
                  </option>
                ))}
              </select>
              <span className="text-danger input-error">
                {errors.businessInfo?.businessType?.message}
              </span>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="companyName">Company Name: </label>
              <input
                {...register('businessInfo.companyName')}
                id="companyName"
                placeholder="Company Name"
                className="mb-4 form-control"
                aria-invalid={
                  errors.businessInfo?.companyName ? 'true' : 'false'
                }
              />
              <span className="text-danger input-error">
                {errors.businessInfo?.companyName?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="companyEmail">Company Email: </label>
              <input
                {...register('businessInfo.companyEmail')}
                id="companyEmail"
                placeholder="Company Email"
                className="mb-4 form-control"
                aria-invalid={
                  errors.businessInfo?.companyEmail ? 'true' : 'false'
                }
              />
              <span className="text-danger input-error">
                {errors.businessInfo?.companyEmail?.message}
              </span>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="companyPhone">Company Phone: </label>
              <input
                {...register('businessInfo.companyPhone')}
                id="companyPhone"
                placeholder="Company Phone"
                className="mb-4 form-control"
                aria-invalid={
                  errors.businessInfo?.companyPhone ? 'true' : 'false'
                }
              />
              <span className="text-danger input-error">
                {errors.businessInfo?.companyPhone?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="companyAddress">Company Address: </label>
              <input
                {...register('businessInfo.companyAddress')}
                id="companyAddress"
                placeholder="Company Address"
                className="mb-4 form-control"
                aria-invalid={
                  errors.businessInfo?.companyAddress ? 'true' : 'false'
                }
              />
              <span className="text-danger input-error">
                {errors.businessInfo?.companyAddress?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>
      </AccordionBody>
    </AccordionItem>
  );
}
