# study-auth-server-express-postgresql

### This repository was created to study the interaction of a Node js with a Database without any ORM, Passport js etc.

Only:
* Express, PostgreSQL, JWT token, Bcrypt
* authMiddleware and roleMiddleware

Roles: USER, ADMIN, SUPERUSER

# Features of Server

Server applications:
* Node js with Express + PostgreSQL

## Features of Server
* Node.js with Express

* PostgreSQL Database
  * entities: users

* Authentication
  * powered by JWT
  * Sign Up, Sign In, Sign Out

* Authorization
  * protected endpoint (e.g. get user info)
  * protected routes (role-based)

## Installation

* `git clone https://github.com/swooosh13/study-auth-service-express.git`
* `cd study-auth-service-express`
* `npm install`
* `npm start`
