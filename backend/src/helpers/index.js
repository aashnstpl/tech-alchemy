export const successResponse = (req, res, data, count, unit, location) => res.send({
  count,
  unit,
  location,
  data,
  // success: true,
});

export const errorResponse = (
  req,
  res,
  errorMessage = 'Something went wrong',
  code = 500,
  error = {},
) => res.status(500).json({
  code,
  errorMessage,
  error,
  data: null,
  // success: false,
});

export const dateFormate = (date) => {
  var d = new Date(date);
  var formattedDate = d.toDateString();
  return formattedDate;
};
