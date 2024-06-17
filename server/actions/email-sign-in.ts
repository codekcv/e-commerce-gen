"use server";

import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";

const actionClient = createSafeActionClient();

export const emailSignIn = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput }) => {
    console.log("PARSED_INPUT:", parsedInput);
    if (parsedInput.email) {
      return { success: "nice" };
    }

    return { failure: "wrong details" };
  }); //  action(LoginSchema, async({}));
