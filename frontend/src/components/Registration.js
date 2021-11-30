import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const initialValue = {
    username: '',
    email: '',
    password: '',
    mobile: '',
  };
  const [register, setRegister] = useState(initialValue);
  const { username, email, password, mobile } = register;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  const register_data = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };
  const submit_register_data = async (e) => {
    e.preventDefault();

    const res = await fetch('api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        mobile,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert('invalid registration');
      console.log('invalid registration');
    } else {
      window.alert('registration successfull');
      console.log('registration successfull');
      navigate('/login');
    }
  };

  return (
    <>
      <section className="login_container">
        <article className="logoin_wraper">
          <img src="./images/bg.jpg" alt="login_image" />
          <h3>WELCOME</h3>
          <p>Sign UP by entering the information below</p>
          <form method="post" className="login_input_box">
            <input
              type="text"
              placeholder="enter your username"
              value={username}
              name="username"
              onChange={register_data}
              required
            />
            <input
              type="email"
              placeholder="enter your email"
              value={email}
              name="email"
              onChange={register_data}
              required
            />
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              name="password"
              onChange={register_data}
              required
            />
            <input
              type="text"
              placeholder="enter your mobile number"
              value={mobile}
              name="mobile"
              onChange={register_data}
              required
            />
            <button type="submit" value="Submit" onClick={submit_register_data}>
              sign up
            </button>
          </form>

          <p>I have an account?</p>
          <p className="sign_UP" onClick={(e) => handleClick()}>
            LOGIN
          </p>
        </article>
      </section>
    </>
  );
};

export default Registration;
