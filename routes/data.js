const express = require('express');
const router = express.Router();
const Data = require('../models/data');


/* GET users listing. */
router.route('/data')
    .get((req, res ) => {

            Data.find({},{ _id: 0,__v:0})
                .then((data)=> {
                    res.json(data)
                })
                .catch((err)=> {
                    console.error(err)
                })
        })
    .post((req, res) => {

        Data.create(req.body)
            .then(() => {
                res.json({message:"Data had been added succesfully"});
            })
            .catch((err) => {
                res.json(err);
            })
    });


module.exports = router;
