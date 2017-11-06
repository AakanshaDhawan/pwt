
(function () {
    const signatoryRouting = function() {
        const express = require('express');
        const signatoryModel = require('../models/signatory.model');
        const processCntrl = require("../controller/method.controller")(signatoryModel);
        const selectMiddleware  = require('../controller/common/middleware')(signatoryModel);
        const signatoryRoutes = express.Router();

        signatoryRoutes.route('/signatory')
            .get(processCntrl.loadData)
            .post(processCntrl.createNode);

        signatoryRoutes.use('/signatory/:id', selectMiddleware.getById);

        signatoryRoutes.route('/signatory/:id')
            .get(processCntrl.getNode)
            .put(processCntrl.updateNode)
            .delete(processCntrl.deleteNode);
        /*returning product and service routes*/
        return signatoryRoutes;
    };
    module.exports = signatoryRouting();

})();