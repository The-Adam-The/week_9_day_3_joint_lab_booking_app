const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

    const router = express.Router();
    
    //Index
    router.get('/', (req, res) => {
        collection   
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status:500, error: err})    
         });
    });

    // CREATE
    router.post('/', (req, res) => {
        const newData = req.body;
        collection
            .insertOne(newData)
            .then( (result) => { 
                console.log(res)
                res.json(result) 
            } )
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({status:500, error: err})    
             });
    });

    // DELETE
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .deleteOne({_id: ObjectId(id)})
            .then((result) => res.json(result))
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({status:500, error: err})    
             });
    });
    
    return router
};



module.exports = createRouter;