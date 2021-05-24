#!/usr/bin/env node
const fs = require('fs');

// Obtain environment passed to the node script
const environment = process.argv[2];
const envFile = `${__dirname}/env.${environment}.json`;

fs.copyFileSync(envFile, `${__dirname}/env.json`);

console.log(`Environment set to ${environment}`);
