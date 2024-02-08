# API Adapters

This folder contains adapters for your server's API.

## What goes here

In this folder you may store all your API adapters:

- These adapters should export functions and/or hooks that allow your app to interact with your server's APIs
- These adapters may export types definitions your server's APIs use
- These adapters should NOT export schemas to validate types or objects, those belong in `src/schemas`
- These adapters should NOT export utility functions UNLESS they are can only be used with the the API
- These adapters should NOT export components that wrap your API, those belong in `src/components/complex` or directly in `src/app`

## Recommendations

Each file should target a model on your API and export functions to perform queries and mutations through the server's API.

We recommend that you use Axios or fetch for making requests.

If you want to make a preconfigured wrapper against Axios or Fetch, you should do so as a file in `src/lib` folder and then import it your adapters (`src/adapters`)

You can export the functions for making the async requests and/or hooks that wrap [React Query](https://tanstack.com/query/v4/docs/react/guides/queries) (already setup).

React Query is the recommended way of doing async requests. And is already setup including ESLint rules and DevTools support.

As an alternative for React Query, you could use React Router loaders and actions (already setup) but those are more complex and should only be used if the project grows in complexity.

Use schemas defined in `src/schemas` if you need to make sure that the input and output types of your API match your pre-established requirements. This will make it easier for you to spot errors.

## Naming convention

> **Note**
> There is no strict naming convention, but you can define one for your project in this section.
> These will help your team be aligned on how files are managed

Rules:

- Make subfolders when ...
- Name your file in this pattern ...
