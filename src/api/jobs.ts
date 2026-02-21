import type { Job } from "../types/job";
import { client } from "./client";

export async function getJobs(): Promise<Job[]> {
  return client("/api/jobs/get-list");
}
