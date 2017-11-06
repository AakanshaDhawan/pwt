(function () {
    module.exports = function (model) {
        const modelUtil = require('./common/util.update.js');
        const URL = require('./common/url.utility')();

        const allNodes = function (req, res) {
            let query = URL.processQuery(req);
            let projectionParam = URL.getProjection(req);
            model.find(query, projectionParam, function (err, events) {
                if (err) {
                    res.status(401).send(err);
                } else {
                    var returnProducts = [];
                    events.forEach((event) => {
                        var newProduct = event.toJSON();
                        newProduct.links = {};
                        newProduct.links.self = URL.generateSelfLink(req, newProduct._id);
                        returnProducts.push(newProduct);
                    });
                    res.json(returnProducts);
                }
            });
        };

        const getNode = function (req, res) {
            var productNode = req.dataInstance.toJSON();
            res.json(productNode);
        };

        const createNode = function (req, res) {
            const singleNode = new model(req.body);
            if (req.body) {
                singleNode.save(function (err) {
                    if(err){
                        res.send({status: 500, statusText: err.message});
                    }else{
                        res.status(201);
                        res.send(singleNode);
                    }
                });
            }
        };

        const removeNode = function (req, res) {
            const query = {};
            if(req.params.id){
                query._id = req.params.id;
            }
            model.remove(query, function (err, product) {
                if(err){
                    res.status(500).send(err)
                }
                res.send({ message : "product deleted successfully", product : product});
            });
        };

        const updateNode = function (req, res) {
            modelUtil.updateInstance(req.dataInstance, req.body );
            req.dataInstance.save(function (err) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.dataInstance);
                }
            });
        };

        return {
            loadData: allNodes,
            createNode: createNode,
            getNode: getNode,
            deleteNode : removeNode,
            updateNode : updateNode
        }
    };
})();