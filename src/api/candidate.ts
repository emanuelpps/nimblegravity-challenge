import type { ApplyToJobRequest, ApplyToJobResponse } from "../types/apply";
import type { Candidate } from "../types/candidate";
import { client } from "./client";

export async function getCandidateByEmail(email: string): Promise<Candidate> {
  return client(
    `/api/candidate/get-by-email?email=${encodeURIComponent(email)}`,
  );
}

export async function applyToJob(
  body: ApplyToJobRequest,
): Promise<ApplyToJobResponse> {
  return client("/api/candidate/apply-to-job", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
