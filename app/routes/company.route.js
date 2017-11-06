
(function () {
    const companyRouting = function() {
        const express = require('express');
        const companyModel = require('../models/company.model');
        const processCntrl = require("../controller/method.controller")(companyModel);
        const selectMiddleware  = require('../controller/common/middleware')(companyModel);
        const companyRoutes = express.Router();

        companyRoutes.route('/company')
            .get(processCntrl.loadData)
            .post(processCntrl.createNode);

        companyRoutes.use('/company/:id', selectMiddleware.getById);

        companyRoutes.route('/company/:id')
            .get(processCntrl.getNode)
            .put(processCntrl.updateNode)
            .delete(processCntrl.deleteNode);
        /*returning product and service routes*/
        return companyRoutes;
    };
    module.exports = companyRouting();

})();