import { User } from "@/adapters/user";
import z from "zod";
import { IsEqual } from "type-plus";
import { typeErrorIfNot } from "@/lib/type-check";

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email().optional(),
});

// This function will error if this type doesn't match the one defined by our API
typeErrorIfNot<IsEqual<z.infer<typeof UserSchema>, User>>();

export const UserLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// We export the type as well in case we need to use it without the schema
export type UserLogin = z.infer<typeof UserLoginSchema>;
