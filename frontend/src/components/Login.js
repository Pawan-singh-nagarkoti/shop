import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const initialValue = {
    email: '',
    password: '',
  };

  const [login, setLogin] = useState(initialValue);
  const { email, password } = login;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };
  const loginData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };
  const login_data_submit = async (e) => {
    e.preventDefault();

    const res = await fetch('api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert('invalid login');
    } else {
      window.alert('login successfull');
      navigate('/');
    }
  };

  return (
    <>
      <section className="login_container">
        <article className="logoin_wraper">
          <img src="./images/bg.jpg" alt="login_image" />
          <h3>WELCOME</h3>
          <p>Sign in by entering the information below</p>
          <form className="login_input_box">
            <input
              type="email"
              placeholder="enter your email"
              value={email}
              name="email"
              onChange={loginData}
              required
            />
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              name="password"
              onChange={loginData}
              required
            />
            <button type="submit" value="Submit" onClick={login_data_submit}>
              login
            </button>
          </form>
          <p>Don't have an account?</p>
          <p className="sign_UP" onClick={(e) => handleClick()}>
            SIGN UP
          </p>
        </article>
      </section>
    </>
  );
};

export default Login;
