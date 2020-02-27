const express = require('express'), 
    router = express.Router();

router.get(`/`, (req, res) => {
    const snippet = '<h1>Hello World</h1>';
    res.render(`template`, {
        locals: {
            title: 'Hello World'
        },
        partials: {
            partial: 'partial-index'
        }
    });
});

module.exports = router;
