const allWorkshops = require("../db_queries/all_workshops");

exports.get = (req, res) => {
  allWorkshops()
    .then(workshops=>{
      res.send(workshops);
    });
};
