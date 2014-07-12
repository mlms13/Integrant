var Integrant = require('../../src/integrant'),
    schema    = require('./schema'),
    $         = require('jquery');

var $form = $('<form />')
    .html(Integrant.generate(schema))
    .append('<button>Submit</button>');

$('body').append($form);
