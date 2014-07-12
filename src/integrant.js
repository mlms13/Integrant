var _ = require('lodash');

// treat this object as a collection of public static methods
// we will expose this entire object to clients of this library
var Integrant = {};

// everything that isn't attached to integrant is private
var types = {};

Integrant.registerType = function (name, definition) {
    // ignore case for type names
    name = name.toLowerCase();

    // throw an error if the type has already been defined
    if (name in types) throw new Error('Type name ' + name + ' has already been registered.');

    // otherwise add the type and definition
    types[name] = definition;
};

Integrant.validate = function (type, value) {
    // throw an error if an invalid type was given
    if (!types[type]) throw new Error('Cannot validate unknown type ' + type);

    // if no validation function is defined for this type, assume input value is OK
    // otherwise, return the result of calling the validate function
    return types[type].validate ? types[type].validate(value) : true;
};

Integrant.generate = function (schema) {
    if (!schema || typeof schema !== "object" || schema instanceof Array) throw new Error("Schema must be an object");

    var output = '';

    _.forIn(schema, function (value, key) {
        // if the value uses the shorthand notation, convert it to a full object
        if (typeof value !== 'object') {
            value = {label: key, type: value};
        }

        // if an unknown type is requested, complain about it
        if (!types[value.type]) throw new Error('Cannot generate HTML for unknown type ' + value.type);

        // add an ID parameter to each object
        value = _.assign({id: 'field-' + Math.random().toString(36).substr(2, 5)}, value);

        // otherwise, compile the appropriate template
        output += '<div class="intgrnt-field">' + types[value.type].template(value) + '</div>';
    });

    return output;
};

// register default types
Integrant.registerType('string', require('./types/string'));
Integrant.registerType('number', require('./types/number'));
Integrant.registerType('date', require('./types/date'));

module.exports = Integrant;
