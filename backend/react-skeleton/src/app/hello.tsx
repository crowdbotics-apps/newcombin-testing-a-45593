import { Outlet, useLoaderData } from "react-router-dom";
import { LoaderData, LoaderFunction } from "@/lib/router-query";

export default function Hello() {
  const data = useLoaderData() as LoaderData<typeof loader>;

  return (
    <>
      {data} <Outlet />
    </>
  );
}

// This is just to showcase that you have full access to React Router loaders and actions
// we recommend useQuery/useMutation over loaders/actions
// These are advanced functionalities so we recommend that they shouldn't be used unless strictly necessary
export const loader = (async () => {
  return "Hello";
}) satisfies LoaderFunction;
