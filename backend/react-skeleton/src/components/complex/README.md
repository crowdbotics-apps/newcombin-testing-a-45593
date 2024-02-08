# Complex Components

This folder should be used carefully and keeping it organized should be a primary focus.

It's very likely this folder will grow in size as the project goes on, keeping it clean will be useful as time goes on.

## What goes here

In this folder you may store components that meet the following criteria:

- These components will have a limited reusability since they will be custom made for specific use case
- These components are NOT screens since those belong in `src/app`
- These components are NOT generic components since those belong in `src/components/ui`

## Recommendations

- These components may make use of queries and mutations imported from `src/adapters`. They should not define queries or mutations in their code.

## Naming convention

> **Note**
> There is no strict naming convention, but you can define one for your project in this section

Rules:

- Make subfolders when ...
- Name your file in this pattern ...
