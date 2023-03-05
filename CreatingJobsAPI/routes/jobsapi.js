const express = require('express');
const router = express.Router();

router.get('/jobsapi',(req, res)=> {
    res.status(200).json({
        success: true,
        messge: "this route is going to display all the jobs"
    });
});




module.exports = router;