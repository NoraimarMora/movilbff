'use strict'

module.exports = {
	// jsonwebtoken errors in decode function
	TOKEN_EXPIRED_ERROR: 'TokenExpiredError',
	JSON_WEB_TOKEN_ERROR: 'JsonWebTokenError',
	NOT_BEFORE_ERROR: 'NotBeforeError',

	// Message of not access to API
	PERMISSION_DENEGADE: "You don't have permission to access",

	// Data Base Connections and tests
	TEST_MESSAGE_RESPONSE: 'Test controller method: ',
	ERROR_DATA_BASE_CONNECTION: "Can't connect to data base",

	// Editing Documents
	SAVE_ERROR: 'error to save document',
	UPDATE_SUCCESS: 'document updated',
	UPDATE_ERROR: 'error to update document',
	DELETE_SUCCESS: 'document removed',
	DELETE_ERROR: 'error to remove document',

	// Show and listing
	GET_ERROR: "Can't find the document",
	GET_VARIOUS_ERROR: "Can't find documents",

	// Login and Register
	LOGIN_SUCCESS: 'Login successful',
	LOGIN_ERROR: 'Email/username not found',
	LOGIN_ERROR_PASS: 'Password error',
	REGISTER_SUCCESS: 'Register successful',
	REGISTER_ERROR_EMAIL: 'Email already exist'
};
