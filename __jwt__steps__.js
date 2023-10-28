/**
 * 1.Install jsonwebtoken
 * 2.const jwt = require('jsonwebtoken')
 * 3.jwt.sign(payload,secret,{expiresIn:})
 * 4.token client
 */



/**
 * How to store token in the client side
 * 1.Memory --->( store variable or state) --> ok type
 * 2.local storage --->ok type (XSS)
 * 3.cookies: http only
*/

/** 
 * 1.set cookies with http only. For development secure : false,
 * 2.cors
 *  app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
    }));

 * 3.client side axios setting
    in axios set withCredentials : true

 * */

/**
 * 1.to send cookies from the client make sure you added withCredential:true for the api call using axios
 * 2.use cookie parser as middleware in backend for getting cookies from client to server side
*/