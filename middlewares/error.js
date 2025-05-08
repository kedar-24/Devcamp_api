const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // log error to console
  console.log(err.stack.red);

  // console.log(err);

  // Mongoose bad objectId
  console.log(err.name);
  if (err.name == "CastError") {
    const message = `Resourse is not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate error
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  return res.status(error.statusCode || 500).json({
    status: false,
    error: error.message || " Server error ",
  });
};

module.exports = errorHandler;
