#!/bin/sh

export PATH="/usr/local/bin:$PATH"
npm install
grunt production
if [ -n "$BUILD_ENV" ]; then
    target="deploy-$BUILD_ENV"
    grunt $target
fi