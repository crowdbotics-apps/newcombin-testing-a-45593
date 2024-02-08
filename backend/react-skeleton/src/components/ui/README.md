# Reusable Components

This folder should contain ALL of your reusable components.

Whenever a generic component appears in one of your screens (`src/app`) or more complex components (`src/components/complex`) you should move the definition over to a file in this folder.

This will allow you to keep your design system consistent across the page and reuse as much code as possible.

## What goes here

In this folder you may store components that meet the following criteria:

- These components are generic and could potentially be reused in other places throughout the app
- These components are NOT screens since those belong in `src/app`
- These components do NOT have a limited use case in the app since those belong in `src/components/complex`
- These components do NOT rely on queries or mutations to work
- These components do NOT rely on custom data types defined in API adapters (`src/adapters`)

## Recommendations

You can easily install components from [shadcn-ui](https://ui.shadcn.com/docs/components/accordion) (already setup)

- We recommend [headless components](https://github.com/jxom/awesome-react-headless-components) to avoid fighting against the styles already applied in UI libraries (our favorites: [shadcn-ui](https://ui.shadcn.com/docs/components/accordion), [HeadlessUI](https://headlessui.com/), [TailwindUI](https://tailwindui.com/), [daisyUI](https://daisyui.com/))
- We recommend you use [TailwindCSS](https://tailwindcss.com/docs/installation) for styles (already setup). CSS modules are also supported.
- These components may be styled directly in their definition
- Try to keep their content as customizable as possible through the use of properly named props
- Avoid adding styles that position the component in specific places let the user define that through their layout or through the addition of `classNames` through props

## Naming convention

> **Note**
> There is no strict naming convention, but you can define one for your project in this section.
> These will help your team be aligned on how files are managed

Rules:

- Make subfolders when ...
- Name your file in this pattern ...
