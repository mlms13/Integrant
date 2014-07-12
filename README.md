# Integrant

Integrant is a form generator for Node.js and the browser. Inspired by [Mongoose Schema Types](http://mongoosejs.com/docs/schematypes.html), you can define your data structure with JSON, and Integrant will generate forms to populate the data.

## Getting Started

Integrant is built around CommonJS modules. To use Integrant in the browser, include the entire `src` folder from this repository in your project. Using [Browserify](http://browserify.org/), require `src/integrant.js`.

```javascript
var Integrant = require('./src/integrant.js');
```

To create HTML from a JSON schema, run Integrant's `generate` function, passing in your schema as the only parameter.

```javascript
var html = Integrant.generate({
    "title": "string",
    "pubDate": "date"
    // ...
});
```

See the `demo` folder for a more complete example.

## Creating Custom Types

Currently, Integrant only supports `"string"`, `"number"`, and `"date"` out of the box. You can add your own custom types by passing a type name and a definition object to Integrant's `registerType` method.

```javascript
Integrant.registerType("primayColor", {
    template: require('color.hbs')
});
```

You aren't required to use handlebars for you templates. Any templating language that compiles to produce a string of HTML will work. See `src/types` for examples of templates.

## Changelog

### 0.1

- Proof of conecpt with three basic types (string, number, date)
- Ability to register new types