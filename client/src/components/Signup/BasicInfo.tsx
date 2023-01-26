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
import {
  CustomerType,
  Gender,
  UserInterface
} from '../../interfaces/UserInterface';

export default function BasicInfo({
  register,
  errors
}: {
  register: UseFormRegister<UserInterface>;
  errors: Partial<FieldErrorsImpl<UserInterface>>;
}) {
  return (
    <AccordionItem>
      <AccordionHeader targetId="2">Basic Information </AccordionHeader>
      <AccordionBody accordionId="2">
        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="username">Email: </label>
              <input
                {...register('email')}
                id="username"
                placeholder="Enter username"
                className="mb-4 form-control"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              <span className="text-danger input-error">
                {errors.email?.message}
              </span>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="phone">Phone: </label>
              <input
                {...register('phone', {
                  required: true
                })}
                id="phone"
                placeholder="Phone"
                className="mb-4 form-control"
                aria-invalid={errors.phone ? 'true' : 'false'}
              />
              <span className="text-danger input-error">
                {errors.phone?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="password">Password: </label>
              <input
                {...register('password')}
                id="password"
                type="password"
                placeholder="Enter password"
                className="mb-4 form-control"
                aria-invalid={errors.password ? 'true' : 'false'}
              />
              <span className="text-danger input-error">
                {errors.password?.message}
              </span>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <input
                {...register('confirmPassword')}
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="mb-4 form-control"
                aria-invalid={errors.confirmPassword ? 'true' : 'false'}
              />
              <span className="text-danger input-error">
                {errors.confirmPassword?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="firstName">First Name: </label>
              <input
                {...register('firstName', {
                  required: true
                })}
                id="firstName"
                placeholder="First Name"
                className="mb-4 form-control"
                aria-invalid={errors.firstName ? 'true' : 'false'}
              />
              <span className="text-danger input-error">
                {errors.firstName?.message}
              </span>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="lastName">Last Name: </label>
              <input
                {...register('lastName', {
                  required: true
                })}
                id="lastName"
                placeholder="Last Name"
                className="mb-4 form-control"
                aria-invalid={errors.lastName ? 'true' : 'false'}
              />
              <span className="text-danger input-error">
                {errors.lastName?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="birthDate">Birth Date: </label>
              <input
                {...register('birthDate', {
                  required: true
                })}
                type="date"
                id="birthDate"
                placeholder="Birth Date"
                className="mb-4 form-control"
                aria-invalid={errors.birthDate ? 'true' : 'false'}
              />
              <span className="text-danger input-error">
                {errors.birthDate?.message}
              </span>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label htmlFor="gender">Gender: </label>
              <select
                {...register('gender')}
                id="gender"
                placeholder="Gender"
                className="mb-4 form-control"
                aria-invalid={errors.gender ? 'true' : 'false'}
              >
                <option key="Choose Gender" value="">
                  Choose Gender
                </option>
                {Object.values(Gender).map(gender => (
                  <option key={gender.toString()} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
              <span className="text-danger input-error">
                {errors.gender?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <label htmlFor="address">Address: </label>
              <input
                {...register('address', {
                  required: true
                })}
                id="address"
                placeholder="Address"
                className="mb-4 form-control"
                aria-invalid={errors.address ? 'true' : 'false'}
              />
              <span className="text-danger input-error">
                {errors.address?.message}
              </span>
            </FormGroup>
          </Col>
        </Row>
      </AccordionBody>
    </AccordionItem>
  );
}
