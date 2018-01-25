
'use strict';

const env = {
  DATABASE_NAME: process.env.DATABASE_NAME || 'comiclearner',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'teltech',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'teltech',
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;