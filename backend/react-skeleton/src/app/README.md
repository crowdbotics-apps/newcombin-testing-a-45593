# App Screens

This folder contains all the screens that make up your app.

Each screen is one component with no props.

## What goes here

In this folder you may store all your API adapters:

- These screens MUST export a React component with NO props as their default export
- These screens may export a loader and/or an action async function but it's not recommended.
- These screen should NOT export other values

## Recommendations

Routing uses the [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) in combination with [React-Router](https://reactrouter.com/en/main/start/overview) to match each file to it's own route.

## Naming Convention

Naming conventions for files in the app folder follow [Remix conventions](https://remix.run/docs/en/main/file-conventions/routes) (be sure to read these doc for more info).

Here are some of the most basic ones:

### Parent - Children

Each route (URL) may match multiple screens, use <Outlet/> to display child routes inside of a parent route

```
- pages.tsx -> Parent Route renders <Outlet/>
- pages/
  - index.tsx -> Child Route displayed inside of <Outlet/> when visiting /pages
  - other.tsx -> Child Route displayed inside of <Outlet/> when visiting /pages/other
```

See [more info on Outlet here](https://reactrouter.com/en/main/components/outlet)

### Dynamic Segments

You can also include dynamic segments as part of your route by starting the name of your file or folder with `$` for example `$who.tsx`

You can then access the values for these segments inside of your route component with [`useParams`](https://reactrouter.com/en/main/hooks/use-params)
