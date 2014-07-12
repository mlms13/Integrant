var _ = require('lodash');

module.exports = {
    template: require('./number.jade'),
    // this validation is only for browsers that don't support type=number
    validate: function (input) {
        return !_.isNaN(input);
    }
};
