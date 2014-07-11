// treat this object as a collection of public static methods
// we will expose this entire object to clients of this library
var integrant = {};

// everything that isn't attached to integrant is private
var types = {};

integrant.registerType = function (name, definition) {
    // ignore case for type names
    name = name.toLowerCase();

    // throw an error if the type has already been defined
    if (name in types) throw new Error('Type name ' + name + ' has already been registered.');

    // otherwise add the type and definition
    types[name] = definition;
};

integrant.generate = function (schema) {
    if (!schema || typeof schema !== "object" || schema instanceof Array) throw new Error("Schema must be an object");

    var output = '';

    Object.keys(schema).forEach(function (key) {
        if (!types[schema[key]]) throw new Error('Cannot generate HTML for unknown type ' + schema[key]);
        output += '<div>' + types[schema[key]].template({label: key}) + '</div>';
    });

    return output;
};

// register default types
integrant.registerType('string', require('./types/string'));
integrant.registerType('number', require('./types/number'));
integrant.registerType('date', require('./types/date'));

module.exports = integrant;
