# Nest.js CQRS tarter kit

This kit focuses on separating queries (fetch items) from commands (create item, edit item...).

# Installation

```bash
$ npm install
```

# Handle migrations

## Generate migrations

```bash
$ npm run typeorm:makemigrations "init"
```

## Run migrations

```bash
$ npm run typeorm:migrate
```

# Run

```bash
$ npm run start:dev
```

# Run with docker

```bash
$ docker-compose up build
```

# Accessing swagger documentation

[http://localhost:3000/docs/](http://localhost:3000/docs/)

## Have a special need ?

Mail me at: kayode.adechinan@gmail.com

Or open an issue!
