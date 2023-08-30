# E-Commerce Frontend

- A dynamic and engaging online shopping experience created powered by [E-commerce Admin](https://github.com/steezplusplus/ecommerce-admin).

## Built with

- [E-commerce Admin](https://github.com/steezplusplus/ecommerce-admin)
- [NextJS 13](https://nextjs.org/) (app/ router)
- [Tailwind](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Vercel](https://vercel.com/)
- [Supabase](https://supabase.com/)
- [Cloudinary](https://cloudinary.com/)
- [Clerk](https://clerk.com/)

## Features

- Search through a stores categories and products
- Filter items by their attributes
- Add items to your cart

## Setup

1. If not already done, set up [E-commerce Admin](https://github.com/steezplusplus/ecommerce-admin).

2. Clone this project

3. Install Dependencies

```shell
npm i
```

4. Get `NEXT_PUBLIC_API_URL` from [E-commerce Admin](https://github.com/steezplusplus/). Place it in `.env`

```shell
NEXT_PUBLIC_API_URL=
```

5. If not already running, start the Admin: [E-commerce Admin](https://github.com/steezplusplus/)

```shell
npm run dev
```

6. Start the frontend (this project)

```shell
npm run dev
```

## Available commands

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

### Entity Relationship Diagram

![ER Diagram](diagrams/er-diagram.svg)

### MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)
