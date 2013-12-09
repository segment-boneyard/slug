
build: node_modules components index.js
	@./node_modules/.bin/component build --dev

components: component.json
	@./node_modules/.bin/component install --dev

clean:
	@rm -fr build components node_modules

node_modules:
	@npm install

test: build
	@./node_modules/.bin/mocha --reporter spec

.PHONY: clean test
