//

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//  advance fxn

// const asyncHandler = () => {};
// const asyncHandler = (fn) => {() => {}};
// const asyncHandler = (fn) => {async () => {}};
// //ye dono same hai
// const asyncHandler = (fn) => async () => {};

// ye toh trycatch wala hai

/*
const asyncHandler = (fn) => async (req, res, next) => {
  try {
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};


search nodejs api error for....
*/
