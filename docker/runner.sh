#!/usr/bin/env bash

until cd /usr/local/app/test-app && npm install
do
    echo "Retrying npm install"
done
npm run start:dev