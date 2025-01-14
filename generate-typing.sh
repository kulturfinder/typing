#!/usr/bin/env bash

openapi-generator generate \
  -i https://kulturfindertest.dsecurecloud.de/api/swagger/v1/swagger.json \
  -g typescript-fetch \
  -t ./templates/typescript \
  -o ./typescript/ \
  --additional-properties=skipApiGeneration=true,supportsES6=true

