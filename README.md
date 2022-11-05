# NextJS Error

This git repo is a reproducible error for NextJS 13.

It was taken from my real project, please let me know if any sensitive information should be removed.

## Usage

First, clone the repository.

```sh
git clone https://github.com/BlazingFire007/nextjs_error && cd nextjs_error
```

Then, start the redis server.

```sh
docker compose up -d
```

Install dependencies. (NOTE: npm will throw an error due to a package upstream issue)

```sh
yarn
```

Populate the redis data.

```sh
node init-redis.js
```

**Observe: `dev` mode works fine.**

```sh
yarn dev
```

Build the web app.

```sh
yarn build
```

Start the web app.

```sh
yarn start
```

**Observe: nextjs is unhappy**

![error image](https://i.imgur.com/uY4fT9r.png)
