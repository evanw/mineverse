BUILD = ../node_modules/.bin/skewc src/*.sk src/*/*.sk ../src/typedarray.sk --target=js --output-file=compiled.js

debug: | ../node_modules
	$(BUILD) --js-source-map

release: | ../node_modules
	$(BUILD) --release

watch-debug: | ../node_modules
	../node_modules/.bin/watch src 'clear && make debug && echo done'

watch-release: | ../node_modules
	../node_modules/.bin/watch src 'clear && make release && echo done'

../node_modules:
	cd .. && npm install
