

(function () {
    module.exports = function (app) {

        /*loading all the routes*/
        const companyRoutes = require("../routes/company.route");
        const addUserRoutes = require("../routes/addUser.route");
        const gstr1Routes = require("../routes/gstr1.route");
        const gstr2Routes = require("../routes/gstr2.route");
        const priviligesRoutes = require("../routes/priviliges.route");
		const signatoryRoutes = require("../routes/signatory.route");
		const csvCompanyRoutes = require("../csv_parser_company/index");
        const csvGstr1Routes = require("../csv_parser_gstr1/index");
		const csvGstrt2outes = require("../csv_parser_gstr2/index");
		
        /*Assigning all routes*/
        app.use('/api', caompanyRoutes);
        app.use('/api', addUserRoutes);
        app.use('/api', gstr1Routes);
        app.use('/api', gstr2Routes);
		app.use('/api', priviligesRoutes);
		app.use('/api', signatoryRoutes);
		app.use('/api', csvCompanyRoutes);
		app.use('/api', csvGstr1Routes);
		app.use('/api', csvGstrt2outes);


        app.get('/api',function(req, res){
            res.send("node rest api is under development");
        });
    };
})();