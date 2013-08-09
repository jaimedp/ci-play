#!/bin/sh

export PATH="/usr/local/bin:$PATH"
npm install
grunt production
grunt deploy-production
