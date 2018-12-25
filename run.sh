#! /bin/bash

if [ -f /usr/local/bin/node ]; then
	# If node is installed via Homebrew, use it
	/usr/local/bin/node ./GithubActivity/src/generate.js
else
	# Fallback to normal
	node ./GithubActivity/src/generate.js
fi
