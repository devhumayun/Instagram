import React from 'react'
import './AuthFooter.scss'

const AuthFooter = () => {
  return (
    <div className="auth_footer_container">
        <ul>
            <li> <a href="#"> Meta </a> </li>
            <li> <a href="#"> About </a> </li>
            <li> <a href="#"> Blog </a> </li>
            <li> <a href="#"> Jobs </a> </li>
            <li> <a href="#"> Help </a> </li>
            <li> <a href="#"> API </a> </li>
            <li> <a href="#"> Privacy </a> </li>
            <li> <a href="#"> Terms </a> </li>
            <li> <a href="#"> Top accounts </a> </li>
            <li> <a href="#"> Hashtags </a> </li>
            <li> <a href="#"> Locations </a> </li>
            <li> <a href="#"> Instagram Lite </a> </li>
            <li> <a href="#"> Contact uploading and non-users </a> </li>
        </ul>
        <div className="copy_right_area">
            <select className='language_select' name="" id="">
                <option value=""> English(UK) </option>
                <option value=""> UK </option>
                <option value=""> Bangladesh </option>
                <option value=""> India </option>
            </select>
            <span className='copy_right_text'> © 2022 Instagram from Meta </span>
        </div>
    </div>
  )
}

export default AuthFooter