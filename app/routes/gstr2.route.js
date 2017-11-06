
(function () {
    const gstr2Routing = function() {
        const express = require('express');
        const gstr2Model = require('../models/gstr2.model');
        const processCntrl = require("../controller/method.controller")(gstr2Model);
        const selectMiddleware  = require('../controller/common/middleware')(gstr2Model);
        const gstr2Routes = express.Router();

        gstr2Routes.route('/gstr2')
            .get(processCntrl.loadData)
            .post(processCntrl.createNode);

        gstr2Routes.use('/gstr2/:id', selectMiddleware.getById);

        gstr2Routes.route('/gstr2/:id')
            .get(processCntrl.getNode)
            .put(processCntrl.updateNode)
            .delete(processCntrl.deleteNode);
        /*returning product and service routes*/
        return gstr2Routes;
    };
    module.exports = gstr2Routing();

})();