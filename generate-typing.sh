#!/usr/bin/env bash

openapi-generator generate \
 -i https://kulturfindertest.dsecurecloud.de/api/swagger/v1/swagger.json \
 -g typescript-node \
 -t ./templates/typescript \
 -o ./typescript/ \
 --global-property models \
 --additional-properties \
 skipApiGeneration=true,
 modelOnly=true,
 supportsES6=true,
 useSingleRequestParameter=true,
 withInterfaces=true
