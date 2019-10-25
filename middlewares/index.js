const services = require('../services');
const MESSAGE = require('../constants/messages');

function isAuth(request, response, next) {

	const bearerHeader = request.headers['authorization'];

	if (!request.headers.authorization) {
    	return response.status(403).send({
            status: 403,
            message: MESSAGE.PERMISSION_DENEGADE
        });
  	}

  	const token = bearerHeader.split(' ')[1];
	
  	services.decodeToken(token)
	    .then(res => {
            // adding userid to request
            request.sub = res;
            // Next middleware
            next();
	    })
	    .catch(err => {
	        var status = 500;
	      
            if(err.name == MESSAGE.TOKEN_EXPIRED_ERROR)
                status = 401;
            else if (err.name == MESSAGE.NOT_BEFORE_ERROR)
                status = 403;

	        return response.status(status).send({
                status: status,
                error: err
            });
	    });
};

module.exports = isAuth;