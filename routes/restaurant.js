const express = require(`express`),
  router = express.Router();

const restaurantModel = require("../models/restaurantModel");

router.get(`/:id?`, async (req, res) => {
  const { id } = req.params;
  let restaurantData = [];

  if (!!id) {
    restaurantData = await restaurantModel.getById(id);
  } else {
    restaurantData = await restaurantModel.getAll();
  }
  res.render(`template`, {
    locals: {
      title: `Restaurant`,
      arrayOfData: restaurantData
    },
    partials: {
      partial: "partial-restaurant"
    }
  });
});

module.exports = router;
