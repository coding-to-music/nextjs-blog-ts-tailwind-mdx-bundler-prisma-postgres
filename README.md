# nextjs-blog-ts-tailwind-mdx-bundler-prisma-postgres

# 🚀 💠 Personal website and blog made using Next.js, TypeScript, Tailwind CSS, MDX Bundler, and Prisma with PostgreSQL 🚀

https://github.com/coding-to-music/nextjs-blog-ts-tailwind-mdx-bundler-prisma-postgres

https://nextjs-blog-ts-tailwind-mdx-bundler-prisma-postgres.vercel.app

From / By https://github.com/theodorusclarence/theodorusclarence.com

https://theodorusclarence.com/

## Helpful Prisma projects

https://github.com/coding-to-music/streets-prisma-postgresql-seed

https://github.com/coding-to-music/blogr-nextjs-prisma-postgres

https://github.com/coding-to-music/prisma-mongodb-cloudflare

https://github.com/coding-to-music/nestjs-prisma-multi-database

https://github.com/coding-to-music/vercel-postgres-prisma-serverless-cloud-database

## Environment variables:

see .env.example

```java
# View & likes tracking
FAUNA_SECRET=
DATABASE_URL="postgresql://clarence:@localhost:5432/theodorusclarence"
IP_ADDRESS_SALT=
DEVTO_KEY=

# Spotify Credentials
# used for /api/spotify widget
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=

# Dev tools page hidden route
ADMIN_PASSWORD=admin

# Revue Subscription
REVUE_TOKEN=

# Client .envs
# These envs are feature flagged in constants/env.ts. No need to fill them in if you dont use it
NEXT_PUBLIC_FEEDBACK_FISH_ID=
NEXT_PUBLIC_GISCUS_REPO=
NEXT_PUBLIC_GISCUS_REPO_ID=
NEXT_PUBLIC_BLOCK_DOMAIN_WHITELIST="theodorusclarence.com"
NEXT_PUBLIC_UMAMI_WEBSITE_ID=

```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/nextjs-blog-ts-tailwind-mdx-bundler-prisma-postgres.git
git push -u origin main
```

<div align="center">
  <h1>theodorusclarence.com</h1>
  <p>💠 Personal website and blog made using Next.js, TypeScript, Tailwind CSS, MDX Bundler, Prisma, and SWR.</p>
</div>

## Contributing & Project Setup

If you are interested in contributing or running this project on your local machine, please check the [contributing guide](CONTRIBUTING.md)

## Notable Features

This website was first initialized in January 2021, went through numerous changes and refactors, resulted to some notable features

### Dedicated Project Page

Each project is descriptively explained provided with my learnings.

![image](https://user-images.githubusercontent.com/55318172/132983591-63e495f1-fc5a-48d0-9e0a-ef3dddba6cad.png)

### Blogs & Library

I write to teach people how to rebuild and redefine fundamental concepts through mental models.

https://user-images.githubusercontent.com/55318172/132983558-55adf0a2-3ce5-43b2-8718-09fd1567e43f.mov

### Lazy Blur Loader

Images are hosted on Cloudinary

https://user-images.githubusercontent.com/55318172/132983757-135138db-6907-4951-a98f-e2a75c16fa01.mov

### Love Button Interaction

https://user-images.githubusercontent.com/55318172/132983796-9187857f-bbf2-4bb0-80ac-59cc1c4f3e87.mov

### Spotify Now Playing

Check out the [tutorial](https://theodorusclarence.com/blog/spotify-now-playing).

![image](https://user-images.githubusercontent.com/55318172/132983710-000cc6c8-a466-4314-ad3f-656d9dc1a1e4.png)

## Prisma Setup

in `.env` change `DATABASE_URL=`

from

DATABASE_URL="postgresql://clarence:@localhost:5432/theodorusclarence"

to

`your database connection string`

Then migrate the Prisma schema to the new database

```
npx prisma migrate dev --name init
```

Output

```
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "databasename", schema "public" at "servername"

Applying migration `20220731131832_init`
Applying migration `20220902063121_add_like_and_views_session_id`

The following migration(s) have been applied:

migrations/
  └─ 20220731131832_init/
    └─ migration.sql
  └─ 20220902063121_add_like_and_views_session_id/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.12.0 | library) to ./node_modules/@prisma/client in 240ms
```

## Spotify Setup

https://theodorusclarence.com/blog/spotify-now-playing

### Authenticate Your Account

To do authentication, we need to prepare CLIENT_ID and put it into this link below:

```
https://accounts.spotify.com/authorize?client_id=CLIENT_ID_HERE&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing
```

Output:

```
I was unable to get the `SPOTIFY_REFRESH_TOKEN` value, Spotify api just hung
```

When I did

```
yarn build
yarn start
```

and open the website in a browser (localhost:3000) I get this error:

```
    },
    data: {
      error: 'invalid_grant',
      error_description: 'Invalid refresh token'
    }
  },
  isAxiosError: true,
  toJSON: [Function: toJSON]
}
Segmentation fault (core dumped)
error Command failed with exit code 139.
```

Note that the original website has the Spotify widget removed, it is not visible (perhaps you need to be logged in to view it??)

##
