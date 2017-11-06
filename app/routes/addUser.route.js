
(function () {
    const addUserRouting = function() {
        const express = require('express');
        const addUserModel = require('../models/addUser.model');
        const processCntrl = require("../controller/method.controller")(addUserModel);
        const selectMiddleware  = require('../controller/common/middleware')(addUserModel);
        const addUserRoutes = express.Router();

        addUserRoutes.route('/addUser')
            .get(processCntrl.loadData)
            .post(processCntrl.createNode);

        addUserRoutes.use('/addUser/:id', selectMiddleware.getById);

        addUserRoutes.route('/addUser/:id')
            .get(processCntrl.getNode)
            .put(processCntrl.updateNode)
            .delete(processCntrl.deleteNode);
        /*returning product and service routes*/
        return addUserRoutes;
    };
    module.exports = addUserRouting();

})();