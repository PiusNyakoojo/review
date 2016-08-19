let configValues = require('./config');

module.exports = {
    getDbConnectionString: () => {
        return `mongodb://${
            configValues.uname
        }:${
            configValues.pwd
        }@ds139645.mlab.com:39645/nodetodosample`
    }
}