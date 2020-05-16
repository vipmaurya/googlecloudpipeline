#!/bin/bash

knex migrate:latest --env development --knexfile app/knexfile.js
knex seed:run --env development --knexfile app/knexfile.js
npm start
