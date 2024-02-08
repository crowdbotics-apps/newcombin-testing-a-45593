import { UserSchema } from "@/schemas/user";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

export type User = {
  name: string;
  email?: string | undefined;
};

// Try to always export the complete value of useQuery or useMutation
export function useGetUser(id: number) {
  return useQuery({ queryKey: ["getUser", id], queryFn: getUser });
}

// Try to return a known type, validate with Zod schemas if needed
export async function getUser(
  context: QueryFunctionContext<["getUser", number]>
) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${context.queryKey[1]}`,
    {}
  );

  return (await response.json()) as User; // Be sure to cast the return type (avoid any)

  // Optionally parse the response with a Schema
  return UserSchema.parse(await response.json());
}
