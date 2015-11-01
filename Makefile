BUILD = node_modules/.bin/skewc src/*.sk --target=js --output-file=www/compiled.js

debug: | node_modules
	$(BUILD) --inline-functions

release: | node_modules
	$(BUILD) --release

watch: | node_modules
	node_modules/.bin/watch src 'clear && make debug && echo done'

node_modules:
	npm install
