import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import { GoogleLogin } from 'react-google-login';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import * as type from '../../constants/actionTypes';
import { login } from '../../actions/auth';
import { Form, FormTitle, VisibilityIcon, GoogleIcon } from './styles';
import './index.css';

const initialFormData = {
  email: '',
  password: '',
};

function Login() {
  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector((state) => state.auth.error);
  const authData = useSelector((state) => state.auth.authData);
  const dispatch = useDispatch();
  const history = useHistory();

  const inputType = showPassword ? 'text' : 'password';

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));
  };

  useEffect(() => {
    if (Object.keys(authData).length) {
      history.push('/');
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

  const googleError = () => {
    toast.error('Google Sign In was unsuccessful. Try again later');
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: type.AUTH, payload: { result, token } });

      history.push('/');
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Form>
      <FormTitle>LOGIN</FormTitle>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="position">
          <Input
            type={inputType}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <VisibilityIcon
            className="position__abs"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <Button color="primary" font bigFont type="submit">
          Submit
        </Button>

        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT}
          render={(renderProps) => (
            <Button
              bigFont
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <GoogleIcon />
              Login with Google
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy="single_host_origin"
        />
      </form>
    </Form>
  );
}

export default Login;
