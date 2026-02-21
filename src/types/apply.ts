export interface ApplyToJobRequest {
  uuid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
}

export interface ApplyToJobResponse {
  ok: boolean;
}
