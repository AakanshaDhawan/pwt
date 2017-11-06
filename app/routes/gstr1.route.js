
(function () {
    const gstr1Routing = function() {
        const express = require('express');
        const gstr1Model = require('../models/gstr1.model');
        const processCntrl = require("../controller/method.controller")(gstr1Model);
        const selectMiddleware  = require('../controller/common/middleware')(gstr1Model);
        const gstr1Routes = express.Router();

        gstr1Routes.route('/gstr1')
            .get(processCntrl.loadData)
            .post(processCntrl.createNode);

        gstr1Routes.use('/gstr1/:id', selectMiddleware.getById);

        gstr1Routes.route('/gstr1/:id')
            .get(processCntrl.getNode)
            .put(processCntrl.updateNode)
            .delete(processCntrl.deleteNode);
        /*returning product and service routes*/
        return gstr1Routes;
    };
    module.exports = gstr1Routing();

})();