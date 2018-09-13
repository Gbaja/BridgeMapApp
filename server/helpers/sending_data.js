const successData = (res, data) =>
  res.status(200).send({
    type: "success",
    data
  });

const wrongInfoData = (res, message) =>
  res.status(422).send({
    type: "error",
    message
  });
  
module.exports = { successData, wrongInfoData };
