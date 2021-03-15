import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import { register } from '../../actions/auth';
import { Form, FormTitle } from './styles';
import Button from '../../components/Button';
import { toast } from 'react-toastify';

const initialFormData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Register() {
  const [formData, setFormData] = useState(initialFormData);
  const error = useSelector((state) => state.auth.error);
  const authData = useSelector((state) => state.auth.authData);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(formData));
  };

  useEffect(() => {
    if (Object.keys(authData).length) {
      toast.success('Registration success');
      history.push('/login');
    }
  }, [authData, history]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form>
      <FormTitle>REGISTER</FormTitle>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            name="username"
            placeholder="Username"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            name="confirmPassword"
            placeholder="Password Repeat"
            type="password"
            onChange={handleChange}
          />
        </div>
        <Button color="primary" font bigFont type="submit">
          Register
        </Button>
      </form>
    </Form>
  );
}

export default Register;
