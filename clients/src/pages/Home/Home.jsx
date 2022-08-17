import Tem_auth from '../../components/Tem_auth/Tem_auth'
import TobBar from '../../components/Tob_bar/TobBar'
import './Home.scss'
import cookie from 'js-cookie'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../Context/AuthContext'


const Home = () => {

  //  use context
  const { dispatch, user_info } = useContext(AuthContext)

  // Handle user log out
  const handleUserLogout = () => {

    cookie.remove('token')
    cookie.remove('user_info')
    dispatch({ type : "USER_LOGOUT" })
    Navigate('/login')

  }

  return (
    <>


        {/* <Tem_auth /> */}


       <TobBar /> 
        <div className="home_container">
            <div className="home_wrapper">

              <div className="post_card_area">
                <div className="post_header">
                  <div className="user_info">
                    <div className="user_profile_photo">
                      <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" />
                    </div>
                    <div className="user_details">
                        <a href="#"> humayunkabiroficial </a>
                        <span> Cumilla, Syedpur </span>
                      </div>
                  </div>
                  <div className="post_btn">
                    <a href="#"> 
                      <svg aria-label="More Options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                    </a>
                  </div>
                </div>
                <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" />

                <div className="user_time_line_content">
                  <div className="timeline_icons">
                    <div className="icons_left">
                      <a href="#">
                        <svg aria-label="Like" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                      </a>
                      <a href="#">
                        <svg aria-label="Comment" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                      </a>
                      <a href="#">
                        <svg aria-label="Share Post" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                      </a>
                    </div>
                    <div className="icons_right">
                      <a href="#">
                        <svg aria-label="Save" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                      </a>
                    </div>
                  </div>
                  <div className="likes">
                    <span> 12,100 likes </span>
                  </div>
                  <div className="description">
                    <p> <a href="#">humayunkabiroficial</a> Anota aí na agenda pra você não perder nenhum jogo do craque Neymar Jr na temporada! 🗓️ </p>
                  </div>
                  <div className="comments">
                    <span> View all 120 comments </span>
                  </div>
                  <div className="time">
                    <span> 2 days ago </span>
                  </div>
                </div>
                <div className="write_comments">
                  <a href="#">
                    <svg aria-label="Emoji" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                  </a>
                  <input type="text" placeholder='Add a comment..' />
                  <button> Post </button>
                </div>

              </div>

              <div className="user_profile_info">
                  <div className="user_profile">
                    <img src='https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg' alt="" />
                    <div className="user_info">
                      <span className='username'> humayun </span>
                      <span className='name'>  Md Humayun </span>
                    </div>
                  </div>
                  <span onClick={ handleUserLogout } className='switch_account'> Log out </span>
              </div>
            </div>
        </div>


    </>
  )
}

export default Home