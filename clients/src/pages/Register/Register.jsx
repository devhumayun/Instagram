import React from 'react';
import axios from 'axios'
import '../Login/Login.scss';
import './Register.scss';
import { Link } from 'react-router-dom'
import { AiOutlineFacebook } from "react-icons/ai";
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { useState } from 'react';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

  // create toast
  const createToast = (msg) => {
    return toast(msg)
  }

   // input state fields
   const [ input, setInput ] = useState({
    name : '',
    username : '',
    email: '',
    password : ''
   })


  //  handle user register fields
  const handleUserRegister = (e) => {

    setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }));

  }

  // Handle user register submitfrom
  const handleUserRegisterForm = async (e) => {

    e.preventDefault();

    try {

      if( !input.name || !input.email || !input.password || !input.username ){

        swal("Warning", "All fields are requried!", "error");

      }else{

        axios.post('http://localhost:5050/api/user/register', input)
        .then(res => {
          setInput((prev) => ({
            name : '',
            username : '',
            email: '',
            password : ''
          }))
        })

        swal("success", "Register success", "success");

      }
      
    } catch (error) {

      swal("Oops!", "Invalid email or password", "error");

    }

  }



  //  input handler
  // const handleInput = (e) => {

  //   setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }))

  // }

  // handle User Register
  // const handleUserRegister = async (e) => {

  //   e.preventDefault()

  //   try {
      
  //     if( !input.name || !input.email || !input.username || !input.password ){
  //       swal("Warning!", "All fields are requried!", "error");
  //     }else{
        
  //      await axios.post('http://localhost:5050/api/user/register', input).then(res => {
  //         setInput((prev) => ({
  //           name : '',
  //           username : '',
  //           email: '',
  //           password : ''
  //         }))

  //         swal("Congrets", "Registration successful", "Success");

  //       })

  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  return (

   
    <div className="auth_container">
            
            <div className="login_wrapper">
            <a href="#" className="login_logo_link">
                <img className='login_logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
              </a>

              <span className='signup_text'> Sign up to see photos and videos from your friends. </span>

              <a href="#" className="login_with_fb"> <span className='fb_icon'> <AiOutlineFacebook />  </span> Log in with Facebook </a>

              <div className="divider">
                  OR
              </div>

              <form onSubmit={ handleUserRegisterForm } className="login_form">
                <input name='email' value={ input.email } onChange={ handleUserRegister } type="text" className="login_input" placeholder='Phone number or email address' />
                <input name='name' value={ input.name } onChange={ handleUserRegister } type="text" className="login_input" placeholder='Full Name' />
                <input name='username' value={ input.username } onChange={ handleUserRegister } type="text" className="login_input" placeholder='Username' />
                <input name='password' value={ input.password } onChange={ handleUserRegister } type="text" className="login_input"  placeholder='Password' />
                <div className="register_condition">
                  <span> People who use our service may have uploaded your contact information to Instagram. <a href="#"> Learn more </a> </span>
                  <span> By signing up, you agree to our <a href="#"> Terms </a>, <a href="#"> Privacy Policy </a> and <a href="#"> Cookies Policy </a>. </span>
                </div>
                <button type='submit' className='submit_button'>Sign up</button>
              </form>

            </div>

            <div className="signup_wrapper">
              <span> Have an account? <Link to={'/login'}>  Sign up </Link> </span>
            </div>

            <div className="get_app_wrapper">
              <span> Get the app. </span>
              <div className="app_logo">
                <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" /> </a>
                <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" /> </a>
              </div>
            </div>

            <AuthFooter />

        </div>
  )
}

export default Register