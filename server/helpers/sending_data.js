const dataSent = (res, code, data, type) =>
  res.status(code).send({
    type,
    message: data
  });


  
module.exports = dataSent;
