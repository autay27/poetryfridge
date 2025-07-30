# Poetry Fridge

A web app where users can earn words, arrange them to form poems, and share them with others.

## Install

```bash
npm install

```

## Setup

First, create your `.env` file following `.env.example`.

Start up the Docker database for local development and perform migrations:

```bash
docker-compose up -d
npx kysely migrate:latest && npx kysely seed run
```

The database will be available at the port defined in the `.env` file. Example:

```bash
psql -h localhost -p 5432 -U $username -d $dbname
```

When you are done you can shut down the service:

```bash
docker-compose down
```

The database data will be persisted via a docker volume, which will be visible at `data/` and can be deleted for a fresh start. 

## Tests

Testing the Kysely database connection:

```bash
npx tsx --test kysely/*.test.ts  
```

## Run
```bash
npm run dev

```

The site will be visible at [http://localhost:3000](http://localhost:3000) 

## Migrate

```bash
npx kysely-ctl migrate:latest
```