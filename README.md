# Poetry Fridge

A web app where users can earn words, arrange them to form poems, and share them with others.

## Install

```bash
npm install

```

## Setup

Database for local development:

```bash
docker-compose up -d

```

The database will be available at port 5433. Example:

```bash
psql -h localhost -p 5433 -U $username -d $dbname
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