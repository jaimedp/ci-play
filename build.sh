#!/bin/sh

export PATH="/usr/local/bin:$PATH"
npm install
grunt production
target="deploy-$BUILD_ENV"
grunt $target
