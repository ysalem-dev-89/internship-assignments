import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import {
  Row,
  Col,
  Button,
  ButtonGroup,
  AccordionItem,
  AccordionBody,
  AccordionHeader
} from 'reactstrap';
import { CustomerType, UserInterface } from '../../interfaces/UserInterface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import UserState from '../../interfaces/UserState';
import { setCustomerType } from '../../features/usersSlice';

export default function ChooseCustomer({
  register
}: {
  register: UseFormRegister<UserInterface>;
  errors: Partial<FieldErrorsImpl<UserInterface>>;
}) {
  const { user } = useSelector(
    (state: { userReducer: UserState }) => state.userReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <AccordionItem>
      <AccordionHeader targetId="1">Customer Type</AccordionHeader>
      <AccordionBody accordionId="1">
        <Row className="d-flex justify-content-center">
          <Col>
            <ButtonGroup>
              {Object.values(CustomerType).map(type => (
                <Button
                  key={type.toString()}
                  {...register('customerType')}
                  color={type === user.customerType ? 'primary' : 'secondary'}
                  outline
                  onClick={() => dispatch(setCustomerType(type))}
                  active={type === user.customerType}
                  className="mb-4 form-control"
                >
                  {type}
                </Button>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
      </AccordionBody>
    </AccordionItem>
  );
}
