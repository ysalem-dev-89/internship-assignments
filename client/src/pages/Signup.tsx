import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, Container, UncontrolledAccordion } from 'reactstrap';
import { CustomerType, UserInterface } from '../interfaces/UserInterface';
import BasicInfo from '../components/Signup/BasicInfo';
import BusinessInfo from '../components/Signup/BusinessInfo';
import ProfessionalInfo from '../components/Signup/ProfessionalInfo';
import ChooseCustomer from '../components/Signup/ChooseCustomer';
import { AppDispatch } from '../store';
import { postUser, clearState } from '../features/usersSlice';
import DataState from '../interfaces/DataState';
import Notification from '../components/Notification';
import UserState from '../interfaces/UserState';
import userSchema from '../validation/validation';

const Signup = () => {
  const [notification, setNotification] = useState({
    message: '',
    isError: false
  });

  const { user, status, error } = useSelector(
    (state: { userReducer: UserState }) => state.userReducer
  );

  const dispatch = useDispatch<AppDispatch>();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserInterface>({
    mode: 'onTouched',
    resolver: yupResolver(userSchema(user.customerType))
  });

  const onSubmit = async (data: UserInterface) => {
    try {
      const result = await dispatch(postUser(data));
      const payload = result.payload as DataState;
      if (payload?.message === 'Success') {
        setNotification({
          message: `${data.firstName} ${data.lastName} welcome to our website`,
          isError: false
        });
        reset();
        dispatch(clearState());
      }
    } catch (error: unknown) {
      setNotification({ message: 'something went wrong', isError: true });
    }
  };
  useEffect(() => {
    if (error) {
      setNotification({ message: error || 'error', isError: true });
    }
  }, [error, status]);

  return (
    <main>
      <Container className="py-5">
        <h2 className="h3">Signup</h2>
        <h4 className="h5">Please enter your information</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <UncontrolledAccordion defaultOpen={['1']} stayOpen>
            <ChooseCustomer register={register} errors={errors} />
            <BasicInfo register={register} errors={errors} />
            {user.customerType === CustomerType.Business && (
              <BusinessInfo register={register} errors={errors} />
            )}
            {user.customerType === CustomerType.Professional && (
              <ProfessionalInfo register={register} errors={errors} />
            )}
          </UncontrolledAccordion>

          <div className="my-4 d-flex flex-column gap-3">
            <Notification
              notification={notification}
              setNotification={setNotification}
            />
            <Button
              className="py-2 px-4 ms-auto"
              color="primary"
              disabled={status === 'loading' ? true : false}
            >
              Signup
            </Button>
          </div>
        </form>
      </Container>
    </main>
  );
};

export default Signup;
