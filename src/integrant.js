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

Integrant.generate = function (schema) {
    if (!schema || typeof schema !== "object" || schema instanceof Array) throw new Error("Schema must be an object");

    var output = '';

    _.forIn(schema, function (value, key) {
        if (!types[value]) throw new Error('Cannot generate HTML for unknown type ' + value);
        output += '<div class="intgrnt-field">' + types[value].template({label: key}) + '</div>';
    });

    return output;
};

// register default types
Integrant.registerType('string', require('./types/string'));
Integrant.registerType('number', require('./types/number'));
Integrant.registerType('date', require('./types/date'));

module.exports = Integrant;
