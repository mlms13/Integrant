var _ = require('lodash');

module.exports = {
    template: require('./date.jade'),
    validate: function (input) {
        return _.isDate(input);
    }
};
