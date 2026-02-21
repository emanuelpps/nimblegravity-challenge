import type { Candidate } from "../types/candidate";
import { client } from "./client";

export async function getCandidateByEmail(email: string): Promise<Candidate> {
  return client(
    `/api/candidate/get-by-email?email=${encodeURIComponent(email)}`,
  );
}
