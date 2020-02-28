const express = require("express"),
  router = express.Router();

router.get(`/`, (req, res) => {
  const snippet = "<h1>Restaurant Info</h1>";
  res.render(`template`, {
    locals: {
      title: "Restaurant"
    },
    partials: {
      partial: "partial-index"
    }
  });
});

module.exports = router;
