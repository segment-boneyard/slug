
var assert = require('assert');
var slug = require('..');

describe('slug', function () {
  it('should return `foo.bar` for `foo.bar`', function () {
    assert(slug('foo.bar') === 'foo.bar');
  });

  it('should return `foo-bar` for `foo bar`', function () {
    assert(slug('foo bar') === 'foo-bar');
  });

  it('should return `foo-bar` for `foo ! bar`', function () {
    assert(slug('foo ! bar') === 'foo-bar');
  });

  it('should return `foo-bar` for `foo-bar`', function () {
    assert(slug('foo ! bar') === 'foo-bar');
  });

  it('should allow numbers and alphas only', function () {
    assert(slug('@!#!@#!@#foo bar1232') === 'foo-bar1232');
  });

  it('should trim', function () {
    assert(slug('   foo    ---') === 'foo');
  });
});