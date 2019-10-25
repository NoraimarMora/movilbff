'use strict'

var jwt = require('jsonwebtoken');
const { SECRET_TOKEN, TIME_EXP_TOKEN } = require('../config');

function createToken (user) {
  return jwt.sign(user, SECRET_TOKEN, {expiresIn: TIME_EXP_TOKEN});
}

function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      var payload = jwt.verify(token, SECRET_TOKEN, (error, decoded) => {
          if (error) {
              throw error;
          }
      });
      resolve(payload);
    } catch(err) {
      reject(err);
    }
    
  });
  return decoded
}

module.exports = {
  createToken,
  decodeToken
}