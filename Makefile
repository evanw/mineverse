BUILD = node_modules/.bin/skewc src/*.sk --target=js --output-file=www/compiled.js

debug: | node_modules
	$(BUILD) --inline-functions

profile: | node_modules
	$(BUILD) --inline-functions --fold-constants --globalize-functions --define:PROFILE=true

release: | node_modules
	$(BUILD) --release

watch: | node_modules
	node_modules/.bin/watch src 'clear && make debug && echo done'

watch-profile: | node_modules
	node_modules/.bin/watch src 'clear && make profile && echo done'

watch-release: | node_modules
	node_modules/.bin/watch src 'clear && make release && echo done'

node_modules:
	npm install
