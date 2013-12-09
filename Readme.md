# slug

  The slugging function we use for Segment.io projects, usernames, etc.

## Installation

    $ component install segmentio/slug

## Example

```js
var slug = require('slug');

slug('Pets.com');          // "pets.com"
slug('American Airlines'); // "american-airlines"
slug('@mention');          // "mention"
```

## API

### slug(string)
  Convert the given `string` to a slug.

## License

  MIT
