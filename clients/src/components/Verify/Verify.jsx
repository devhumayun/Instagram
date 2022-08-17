import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createToast } from '../../utility/toast'


const Verify = () => {

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {

    try {
      
      axios.post('http://localhost:5050/api/user/verify', params)
      .then(res => {
        createToast('Account verification successfull')
        navigate('/login')
      })
      .catch(error => {
        createToast('Account Varification Faield')
      });

    } catch (error) {
      createToast('Invalid URL') 
    }

  })

  return (
    <div>
        <h1> Verify your account </h1>
    </div>
  )
}

export default Verify