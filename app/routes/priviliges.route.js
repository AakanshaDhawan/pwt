
(function () {
    const priviligesRouting = function() {
        const express = require('express');
        const priviligesModel = require('../models/priviliges.model');
        const processCntrl = require("../controller/method.controller")(priviligesModel);
        const selectMiddleware  = require('../controller/common/middleware')(priviligesModel);
        const priviligesRoutes = express.Router();

        priviligesRoutes.route('/priviliges')
            .get(processCntrl.loadData)
            .post(processCntrl.createNode);

        priviligesRoutes.use('/priviliges/:id', selectMiddleware.getById);

        priviligesRoutes.route('/priviliges/:id')
            .get(processCntrl.getNode)
            .put(processCntrl.updateNode)
            .delete(processCntrl.deleteNode);
        /*returning product and service routes*/
        return priviligesRoutes;
    };
    module.exports = priviligesRouting();

})();