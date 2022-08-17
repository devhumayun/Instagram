import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import Token from '../models/Token.js';
import User from "../models/User.js";
import { createToken } from '../utility/createToken.js';
import { sendEmail } from '../utility/sendEmail.js';
import { sendSMS } from '../utility/sendSMS.js';
import createError from './createError.js';

/**
 * @route /api/user
 * @desc get all user
 * @method get
 * @access public
*/

export const allUser = async ( req, res, next ) => {

    try{
        let users = await User.find()

        if( !users ){

           return  next(createError(404, 'Users Not Found'));

        }else{
            res.status(200).json(users);
        }

    }catch(error){
        next(error)
    }

};

/**
 * @route /api/user/:id
 * @desc get single user
 * @method get
 * @access public
*/

export const singleUser = async ( req, res, next ) => {

    try{

        let single_user = await User.findById(req.params.id);

        if(!single_user){

            return next(createError(404, 'User  Not Found'));

        }else{
            res.status(200).json(single_user);
        }
  
      }catch(error){
        next(error);
      }

};

/**
 * @route /api/user
 * @desc create new user
 * @method post
 * @access public
*/

export const createUser = async ( req, res, next ) => {

    const { password } = req.body
    // create solt
    const solt = await bcrypt.genSalt(10);

    // create hash password
    const hash_password = await bcrypt.hash( password, solt );

    try{

        const user = await User.create({ ...req.body, password : hash_password})

        // create token
        const token = createToken({ id : user._id })

        // update token
        await Token.create({ userId : user._id, token : token })

        // create account activition link
        const verify_link = `http://localhost:3000/user/${user._id}/verify/${token}`

       await sendEmail(user.email, 'Verify your account', verify_link)

        res.status(200).json({
            messeage : " User create successfull "
        });

    }catch(error){
        next(error)
    }


};

/**
 * @route /api/user/:id
 * @desc  update user
 * @method put or patch
 * @access private
*/

export const updateUser = async ( req, res, next ) => {

    try{

       let id = req.params.id
       let update_user = await User.findByIdAndUpdate(id, req.body, {
        new : true
     })

     if(!update_user){

        return next(createError(404, 'User  Not Found'));

     }else{

        res.status(200).json(update_user)

     }

    }catch(error){
        next(error)
    }

};


/**
 * @route /api/user/:id
 * @desc  delete user
 * @method delete
 * @access private
*/

export const deleteUser = async ( req, res, next ) => {

    
    try{

       let id = req.params.id
       let delete_user = await User.findByIdAndDelete(id)

     if(!delete_user){

        return next(createError(404, 'User Not Found'));

     }else{

        res.status(200).json(delete_user)

     }

    }catch(error){

        next(error)

    }

}


/**
 * @name user login
 * @route api/user/login
 * @method post
 * @access public
 */

export const userLogin = async ( req, res, next ) => {

    try{

        const login_user = await User.findOne({ email: req.body.email })

        if( !login_user ){

            return next(createError(404, 'E-mail Not Found'));
        }
            
         // check password
         const check_password = (await bcrypt.compare(req.body.password, login_user.password));

        if(!check_password){
            return next(createError(404, 'Invalid password'));
        }

        // create token
        const token = jwt.sign({ id : login_user._id, isAdmin : login_user.isAdmin }, process.env.TOKEN_SECRET);

        const { _id, password, isAdmin, ...user_info } = login_user._doc;

        res.cookie("access_token", token).status(200).json({
            token,
            user_info
        })

        
    }catch(error){
        next(error)
    }

}


/**
 * @name get logged in user
 * @route api/me
 * @method Get
 * @access public
 */
export const getLoggedInUser = async ( req, res, next ) => {

    try {
        
     //  Get Bearer token
     const bearer_token = req.headers.authorization;
     let token = ''

     if(bearer_token){

        // get user token
        token = bearer_token.split(' ')[1]

        // get logged in user
        const logged_in_user = jwt.verify(token, process.env.TOKEN_SECRET) 

        // check user
        if(logged_in_user){
            const user = await User.findById(logged_in_user.id)
            res.status(200).json(user)
        }

        if(!logged_in_user){
            next(createError(400, 'Invalid Token'))
        }
        
     }

     if(!bearer_token){
        next(createError(404, 'Token Not Found'))
     }

     console.log(bearer_token);

    } catch (error) {
       next(error) 
    }

}


export const userAccountVerified = async ( req, res, next ) => {

    try {
        
       const { id, token } = req.body

    //    check token
     const verify = await Token.findOne({ id : id, token : token })
     
    //  check verify
    if(!verify){
        next(createError(404, 'Token URL not match'))
    }

    if(verify){
        
        await User.findOneAndUpdate(id, {
            isVerified : true
        })
        res.status(200).json({
            messeage : "Account Verified Successful"
        })
        verify.remove()

    }

    } catch (error) {
        
    }

};
