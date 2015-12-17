BUILD_CLIENT = node_modules/.bin/skewc src/*.sk --target=js --define:BUILD=CLIENT --output-file=www/client.js
BUILD_SERVER = node_modules/.bin/skewc src/*.sk --target=js --define:BUILD=SERVER --output-file=www/server.js

debug: | node_modules
	$(BUILD_CLIENT) --inline-functions --js-source-map
	$(BUILD_SERVER) --inline-functions --js-source-map

profile: | node_modules
	$(BUILD_CLIENT) --inline-functions --fold-constants --globalize-functions --define:PROFILE=true
	$(BUILD_SERVER) --inline-functions --fold-constants --globalize-functions --define:PROFILE=true

release: | node_modules
	$(BUILD_CLIENT) --release
	$(BUILD_SERVER) --release

watch: | node_modules
	node_modules/.bin/watch src 'clear && make debug && echo done'

watch-profile: | node_modules
	node_modules/.bin/watch src 'clear && make profile && echo done'

watch-release: | node_modules
	node_modules/.bin/watch src 'clear && make release && echo done'

node_modules:
	npm install
