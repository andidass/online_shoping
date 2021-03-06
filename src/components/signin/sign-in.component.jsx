import React from 'react';

import FormInput from '../../components/signform/sign-form.component';
import CustomButton from '../../components/button-custom/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Saya Memiliki Akun</h2>
        <span>Masuk dengan email dan password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <div className='button'>
            <CustomButton type='submit'>Masuk</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Masuk dengan Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
