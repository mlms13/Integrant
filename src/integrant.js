var getInputHtml = function (label, type) {
    var html = '<label>' + label + '</label>';
    switch (type) {
        case String:
            return html + '<input type="text" />';
        case Number:
            return html + '<input type="number" />';
        case Date:
            return html + '<input type="date" />';
        default:
            return html + '<input />';
    }
};

module.exports.generate = function (schema) {
    if (!schema || typeof schema !== "object" || schema instanceof Array) throw new Error("Schema must be an object");

    var output = '';

    Object.keys(schema).forEach(function (key) {
        output += getInputHtml(key, schema[key]);
    });

    return output;
};