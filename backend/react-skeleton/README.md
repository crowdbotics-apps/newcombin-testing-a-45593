![New Combin](/src/assets/newcombin.svg)

# Skeleton

This project serves as a React Skeleton to kick-off projects quickly

## Folder Structure

### `./public`

Contains assets that will be exposed publicly, you can include favicon and other resources that may be exposed as part of your `index.html`

### `./src`

You will spend most of your time working in the folders inside of `src`

Each folder has its own `README.md` but here is a short summary of each:

#### [`./src/app`](./src/app/README.md)

The screens that make up your app ([Read More](./src/app/README.md))

#### [`./src/schemas`](./src/schemas/README.md)

The schemas used to validate types ([Read More](./src/schemas/README.md))

#### [`./src/adapters`](./src/adapters/README.md)

The adapters that wrap your API calls ([Read More](./src/adapters/README.md))

#### [`./src/lib`](./src/lib/README.md)

The libraries and utilities you use throughout your app ([Read More](./src/lib/README.md))

#### [`./src/components`](./src/components/README.md)

All the components that make up your app's screens ([Read More](./src/components/README.md))

#### [`./src/assets`](./src/assets/README.md)

All the assets you may import in your application ([Read More](./src/assets/README.md))

## Setup

To test your app in development first run

```shell
npm install
```

Then make a copy of `.example.env` and rename it to `.env` or `.env.local` ([Read more on Environment Variables in Vite's Documentation](https://vitejs.dev/guide/env-and-mode))

Finally you can run you development server with the following command:

```shell
npm run dev
```

This will start your app at `http://localhost:5137` (The actual link will be available in your CLI)

## Linting and Formatting

When you open this repository in VSCode you will see a pop-up in your bottom left corner that will suggest you to install the recommended extensions for the repository. These extensions will help you lint, typecheck and format your files.

But you may also do so using the following commands:

```shell
# Lint
npm run lint

# Lint and fix all fixable errors
npm run lint-fix

# Format
npm run fmt

# Typecheck
npm run typecheck
```

## Deployment

This is still WIP

Currently you can create a static build and run a server that shows the resulting app using:

```shell
# Create a static build in /dist
npm run build

# Run a server and load the /dist folder
npm run preview
```

There are [multiple deployment targets](https://vitejs.dev/guide/static-deploy.html) including Github Pages, Vercel, Netlify, Cloudflare Pages, Google Firebase, Surge, Render, AWS Amplify, Flightcontrol, and others.

The Engineer team has also successfully deployed to AWS S3 + CloudFront through Gitlab CI.

Feel free to ask for setup instructions from the team.

## Adding Environment variables

To add an environment variable you must add it to your `.env` (or `.env.local` or similar).

```env
ENVRIONMENT_VARIABLE=VALUE # Remember to use comments to document your variable
```

This variable will only be available during build time. If you want to persist the variable so that you can access the value at runtime your variable name needs to start with `VITE_`

```env
VITE_ENVIRONMENT_VARIABLE=VALUE # This variable can be accesed by your React code at anytime
```

Lastly if you want to have types for your environment variables, you must add the variable to `src/env.d.ts`

```ts
interface ImportMetaEnv {
  // ...
  readonly VITE_ENVIRONMENT_VARIABLE: string; // Environment variables are ALWAYS strings, you can parse and validate them with Zod later on.
  // ...
}
```
