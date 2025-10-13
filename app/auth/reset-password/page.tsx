import { connection } from "next/server";

import { ResetPasswordContainer } from "@/features/auth/components/ResetPasswordContainer";
import { Container } from "@/shared/components/Container";

export default async function ResetPasswordPage({}) {
  await connection();

  return (
    <Container>
      <ResetPasswordContainer />
    </Container>
  );
}
