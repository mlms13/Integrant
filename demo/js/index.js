var Integrant = require('../../src/integrant'),
    schema    = require('./schema');

var form = document.createElement('form');

form.innerHTML = Integrant.generate(schema);
document.body.appendChild(form);
