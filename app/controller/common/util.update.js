/**
 * Created by kashetws on 03/09/17.
 */
module.exports = (function () {
    const updateModel = function (dataInstance, body) {
        for(let prop in body){
            if(!(typeof body[prop] === "object")){
                dataInstance[prop] = body[prop];
            }
            else {
                if(dataInstance[prop]){
                    updateModel(dataInstance[prop], body[prop])
                }
            }
        }
    };
    return {
        updateInstance: updateModel
    }
})();