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
 * 3.client side axios setting
 * */