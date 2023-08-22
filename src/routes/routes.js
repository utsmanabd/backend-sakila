var express = require('express');
var router = express.Router();
const path = require('path')

const masterRoutes = require('./master_routes/master.routes');
const auth_routes = require('./utility_routes/auth.routes');

const { verifyToken, accessControl } = require('../services/auth.service');

const UploadController = require('./../controller/master_controller/UploadController')

// upload file
router.get('/image/:filename', UploadController.getFile)

// not found route
router.get('/not-found', function(req, res) {
    res.status(404).sendFile(path.join(__dirname, '../views/not-found.html'));
});

// authentication routes usage 
router.use('/auth/', auth_routes);


// master data routes usage 
router.use('/master/', accessControl, verifyToken, masterRoutes);


//kecuali master, seharusnya routes dipisah per-table

module.exports = router;