<div>
  <!-- Heading -->
  <section>
    <h1>
      <a href="https://ecommerce-store-steez.vercel.app/" target="_blank" >
        View an engaging shopping experience
      </a>
    </h1>
    <img src="diagrams/homepage-example.png" alt="picture of my store" />
    <h2>
      Powered by
      <a href="https://github.com/steezplusplus/ecommerce-admin">E-commerce Admin</a>.
    </h2>
  </section>
  <!-- Badges -->
  <section>
    <a href="https://github.com/steezplusplus/ecommerce-store/stargazers" target="_blank" >
      <img
        alt="E-commerce store number of stargazers"
        title="E-commerce store number of stargazers"
        src="https://custom-icon-badges.demolab.com/github/stars/steezplusplus/ecommerce-store?logo=star"
      />
    </a>
    <a href="https://github.com/steezplusplus/ecommerce-store/issues" target="_blank" >
      <img
        alt="E-commerce store number of issues"
        title="E-commerce store number of issues"
        src="https://custom-icon-badges.demolab.com/github/issues-raw/steezplusplus/ecommerce-store?logo=issue"
      />
    </a>
    <a href="/LICENSE" target="_blank" >
      <img
        alt="E-commerce store license"
        title="E-commerce store license"
        src="https://custom-icon-badges.demolab.com/github/license/steezplusplus/ecommerce-store?logo=law"
      />
    </a>
    <a href="#">
      <img
        alt="E-commerce store last commit time"
        title="E-commerce store last commit time"
        src="https://custom-icon-badges.demolab.com/github/last-commit/steezplusplus/ecommerce-store?logo=history&logoColor=white"
      />
    </a>
    <a href="#">
      <img
        alt="E-commerce store num of bytes"
        title="E-commerce store num of bytes"
        src="https://custom-icon-badges.demolab.com/github/languages/code-size/steezplusplus/ecommerce-store?logo=file-code&logoColor=white"
      />
    </a>
  </section>
  <!-- Tech Stack -->
  <section>
    <h2>Built with</h2>
    <p>typescript - postcss - eslint - prettier - tailwind - vercel - nextjs13 - cloudinary - clerk - prisma</p>
  </section>
  <!-- Support -->
  <section>
    <h2>Support me!</h2>
    <a href="https://ko-fi.com/W7W5PB4J9" target="_blank"> 
      <img src="https://ko-fi.com/img/githubbutton_sm.svg"/> 
    </a>
    <p>
      <i>Or leave a ⭐</i>
    </p>
  </section>
</div>

## Features

- Search through a stores categories and products
- Filter items by their attributes
- Add items to your cart

## Setup

1. If not already done, set up [E-commerce Admin](https://github.com/steezplusplus/ecommerce-admin).

2. Clone this project

```shell
git clone ...
```

3. Install Dependencies

```shell
npm install
```

4. Generate your dotenv file. Follow the instructions in the file to get the env variables.

```shell
cp .env.example .env
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

| command        | description                              |
| :------------- | :--------------------------------------- |
| `dev`          | Starts a development instance of the app |
| `build`        | Builds a production instance of the app  |
| `start`        | Starts a production instance of the app  |
| `lint`         | Runs ESLint                              |
| `lint:fix`     | Runs ESLint and fixes syntax             |
| `prettier`     | Runs Prettier                            |
| `prettier:fix` | Runs Prettier and fixes formatting       |
