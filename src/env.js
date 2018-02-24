
'use strict';

const sqlEnv = {
  DATABASE_NAME: process.env.DATABASE_NAME || 'comiclearner',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'comiclearner',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'comiclearner',
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
  NODE_ENV: process.env.NODE_ENV || 'development',
};


module.exports = {sqlEnv};