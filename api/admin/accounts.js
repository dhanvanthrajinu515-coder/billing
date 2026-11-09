'use strict';
// Explicit Vercel function for listing and creating shop accounts.
// Keeping this route explicit avoids catch-all routing differences on deployment.
const { run } = require('../../lib/easybill');
module.exports = run;
