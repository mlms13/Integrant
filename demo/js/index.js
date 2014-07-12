var Integrant = require('../../src/integrant'),
    schema    = require('./schema'),
    $         = require('jquery');

var $form = $('<form />')
    .html(Integrant.generate(schema))
    .append('<button>Submit</button>');

// set up validation
$form.find('[type=number]').on('keyup', function () {
    var $this = $(this),
        // TODO: test the non-input.validity method in old IE
        valid = $this[0].validity ? $this[0].validity.valid : Integrant.validate('number', $this.val());

    // conditionally add or remove the `invalid` class
    $this[valid ? 'removeClass' : 'addClass']('invalid');
});

$('body').append($form);
