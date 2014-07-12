var integrant = require('../../src/integrant'),
    schema    = require('./schema');

var form = document.createElement('form');

form.innerHTML = integrant.generate(schema);
document.body.appendChild(form);
