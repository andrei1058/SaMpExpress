# SaMp Panel BackEnd
Click ![here](https://github.com/andrei1058/SaMpReactPanel) to see the front-end.


# API

# Routes
## /api/users/count/:type
types: online, total, offline, admin, helper, leader, admin_online, helper_online, leader_online

## /api/cars/count/:type
types: owned, models

## /api/houses/count/:type
types: owned, total

## /api/factions/history
Will return last 10 actions.



# Contributing

Once you've cloned it create a file called .env and put this key value followed by your db connection:
```env
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#using-environment-variables

# Prisma supports the native connection string format for PostgreSQL, MySQL and SQLite.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://user:pass@ip:3306/dbName"
```