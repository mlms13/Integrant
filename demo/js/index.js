var integrant = require('../../src/integrant'),
    schema    = require('./schema');

var div = document.createElement('div');

div.innerHTML = integrant.generate(schema);
document.body.appendChild(div);
