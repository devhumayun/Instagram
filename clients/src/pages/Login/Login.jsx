import React from 'react'
import axios from 'axios'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { useState } from 'react';
import cookie from 'js-cookie'
import swal from 'sweetalert';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import LoaderContext from '../../Context/LoaderContext';
import { createToast } from '../../utility/toast';

const Login = () => {

  // use auth context
  const { dispatch } = useContext(AuthContext)

  // use loader context
  const { loaderDispatch } = useContext(LoaderContext)

  // use navegaite
  const navigate = useNavigate()

  // state for login fields
  const [ input, setInput ] = useState({
    auth : '',
    password : ''
  })

  // Handle user login
  const handleUserLoginFields = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }))
  }

  // User login form
  const handleUserLoginForm = async (e) => {

    e.preventDefault();

    try {

      if( !input.auth || !input.password ){
        createToast('All fields are requried')
      }else{
        
        await axios.post('http://localhost:5050/api/user/login', { email : input.auth, password : input.password }).then( res => {

    
        if(res.data.user_info.isVerified){

          cookie.set('token', res.data.token);
          dispatch({ type : "LOGIN_USER_SUCCESS", payload : res.data.user_info })
          navigate('/')
          loaderDispatch({ type : "LOADER_START" })

        }else{
          createToast('Verify your account')
        }

        })

      }
      
    } catch (error) {
      swal("Danger", "Invalid email or password", "error");
    }


  }


  return (
    <>
        <div className="auth_container">
            
            <div className="login_wrapper">
              <a href="#" className="login_logo_link">
                <img className='login_logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
              </a>

              <form onSubmit={ handleUserLoginForm } className="login_form">
                <input type="email" value={input.auth} name="auth" onChange={ handleUserLoginFields }  className="login_input" placeholder='Phone number, username or email' />
                <input type="text" value={input.password} name="password" onChange={ handleUserLoginFields } className="login_input" placeholder='Password' />
                <button className='submit_button'>Log in</button>
              </form>

              <div className="divider">
                  OR
                </div>

                <a href="#" className="login_with_fb"> <span className='fb_icon'> <AiFillFacebook /> </span> Log in with Facebook </a>

                <a href="#" className="forget_password">Forget your password?</a>

            </div>

            <div className="signup_wrapper">
              <span> Don't have an account? <Link to='/register'>  Sign up </Link> </span>
            </div>

            <div className="get_app_wrapper">
              <span> Get the app. </span>
              <div className="app_logo">
                <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" /> </a>
                <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" /> </a>
              </div>
            </div>

            

        </div>
        <AuthFooter />
    </>
  )
}

export default Login