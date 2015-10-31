BUILD = skewc src/*.sk --target=js --output-file=www/compiled.js

debug:
	$(BUILD) --inline-functions

release:
	$(BUILD) --release

watch:
	watch src 'clear && make debug && echo done'
