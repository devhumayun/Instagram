import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import AuthFooter from '../AuthFooter/AuthFooter';
import './Tem_auth.scss';


const Tem_auth = () => {
  return (
    
    <div className="auth_login_container">

      <div className="auth_main">

        <div className="auth_left">
          <img src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" alt="" />
        </div>
        <div className="auth_right">
        <div className="auth_container">
              
              <div className="login_wrapper">
                <a href="#" className="login_logo_link">
                  <img className='login_logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                </a>

                <form action="#" className="login_form">
                  <input type="text" className="login_input" placeholder='Phone number, username or email' />
                  <input type="text" className="login_input" placeholder='Password' />
                  <button className='submit_button'>Log in</button>
                </form>

                <div className="divider">
                    OR
                  </div>

                  <a href="#" className="login_with_fb"> <span className='fb_icon'> <AiFillFacebook /> </span> Log in with Facebook </a>

                  <a href="#" className="forget_password">Forget your password?</a>

              </div>

              <div className="signup_wrapper">
                <span> Don't have an account? <a href="#">  Sign up </a> </span>
              </div>

              <div className="get_app_wrapper">
                <span> Get the app. </span>
                <div className="app_logo">
                  <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" /> </a>
                  <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" /> </a>
                </div>
              </div>

              

        </div>
        </div>

      </div>

        <AuthFooter />


    </div>

  )
}

export default Tem_auth