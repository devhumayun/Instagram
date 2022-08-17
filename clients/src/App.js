import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import AuthenticateUser from './middlewares/AuthenticateUser';
import AuthRedirectUser from './middlewares/AuthRedirectUser';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Cookies from 'js-cookie';
import AuthContext from './Context/AuthContext';
import LoadingBar from 'react-top-loading-bar'
import LoaderContext from './Context/LoaderContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createToast } from './utility/toast';
import Verify from './components/Verify/Verify';

function App() {

  // get auth context
  const { dispatch } = useContext(AuthContext);

  // get loader context
  const { loaderState, loaderDispatch } = useContext(LoaderContext)

  // Token
  const token = Cookies.get("token")

  useEffect(() => {

    try {
      
      axios.get('http://localhost:5050/api/user/me', {
          headers : {
            "Authorization" : `Bearer ${token}`
          }
      }).then( res => {

        if( res.data.isVerified ){
          dispatch({ type : "LOGIN_USER_SUCCESS", payload : res.data })
        }else{
          createToast('Verify your account')
          Cookies.remove('token')
        }
      
      }).catch( error =>  {
        dispatch({ type : "USER_LOGOUT" })
      })

    } catch (error) {
      
    }

  }, [token])


  return (
    <>

      <LoadingBar
        color='#f11946'
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch({ type : "LOADER_END" })}
      />

      <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />

      <Routes>
        <Route path='/' element={ <AuthenticateUser> <Home /> </AuthenticateUser> } />
        <Route path='/login' element={ <AuthRedirectUser> <Login /> </AuthRedirectUser> } />
        <Route path='/register' element={ <AuthRedirectUser> <Register /> </AuthRedirectUser> } />
        <Route path='/:id' element={ <AuthenticateUser> <Profile /> </AuthenticateUser> } />
        <Route path='/user/:id/verify/:token' element={ <Verify /> } />
      </Routes>
    </>
  );
}

export default App;
