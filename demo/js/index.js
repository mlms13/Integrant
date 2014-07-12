var Integrant = require('../../src/integrant'),
    schema    = require('./schema'),
    $         = require('jquery');

var $form = $('<form />')
    .html(Integrant.generate(schema))
    .append('<button>Submit</button>');

// set up validation
$form
    .find('[type=number]').on('keyup', function (e) {
        // TODO: test the non-input.validity method in old IE
        var valid = e.target.validity ? e.target.validity.valid : Integrant.validate('number', $this.val());

        // conditionally add or remove the `invalid` class
        $(e.target)[valid ? 'removeClass' : 'addClass']('invalid');
    })
    .find('[type=date]').on('keyup', function (e) {
        var valid = e.target.validity ? e.target.validity.valid : Integrant.validate('date', $this.val());
        $(e.target)[valid ? 'removeClass' : 'addClass']('invalid');
    });

$('body').append($form);
