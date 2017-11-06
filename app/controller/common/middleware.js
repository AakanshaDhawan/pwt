(function () {
    module.exports = function (model) {
        var getById = function (req, res, next) {
            model.findById(req.params.id, function (err, dataInstance) {
                if(err){
                    res.status(401).send("data is not found");
                }else {
                    req.dataInstance = dataInstance;
                    next();
                }
            })

        };
        return {
            getById : getById
        }
    };
})();