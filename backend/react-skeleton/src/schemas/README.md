# Schemas

This folder contains schemas used for checking the validity of types and objects.

It's very likely you won't need that many of these but it's good to keep them in one place.

These are generally used in conjunction with API adapters.

## What goes here

In this folder you may store all your schemas:

- These schemas should export an schema or function that can be used to validate if an object matches the schema
- These schemas should export the type they are validating if the type is not defined elsewhere
- These schemas should NOT contain queries or mutations since those belong in `src/adapters`
- These schemas may import type definitions from API adapters (`src/adapters`)
- These schemas should NOT export hooks, context, providers, utility functions, classes or utility types since those belong in `src/lib`

## Recommendations

You can keep related schemas in one file, but keep different objects in separate files to make them easier to find.

Use [zod](https://zod.dev/) (already setup) or [yup](https://www.npmjs.com/package/yup) to define the schemas since they have great integration with TypeScript.

You can use schemas in conjunction with [react-hook-form](https://react-hook-form.com/docs/useform) (already setup) through the use of [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers#zod) (already setup) to validate form inputs in your app.

## Naming convention

> **Note**
> There is no strict naming convention, but you can define one for your project in this section.
> These will help your team be aligned on how files are managed

Rules:

- Make subfolders when ...
- Name your file in this pattern ...
