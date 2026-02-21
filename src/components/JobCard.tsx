import { useState } from "react";
import type { Job } from "../types/job";
import type { Candidate } from "../types/candidate";
import { applyToJob } from "../api/candidate";
import Input from "./Input";
import Button from "./Button";
import FeedbackMessage from "./FeedbackMessage";

interface Props {
  job: Job;
  candidate: Candidate;
}

export default function JobCard({ job, candidate }: Props) {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit() {
    if (!repoUrl) {
      setError("Please enter your repository URL");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await applyToJob({
        uuid: candidate.uuid,
        candidateId: candidate.candidateId,
        applicationId: candidate.applicationId,
        jobId: job.id,
        repoUrl,
      });
      setSuccess(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-60 pointer-events-none" />
      <div className="relative space-y-5 flex flex-col justify-evenly h-full">
        <h2 className="text-xl font-semibold text-gray-800 tracking-tight">
          {job.title}
        </h2>
        <Input
          value={repoUrl}
          onChange={setRepoUrl}
          placeholder="https://github.com/your-user/your-repo"
        />
        <Button onClick={handleSubmit} loading={loading}>
          Submit Application
        </Button>
        {error && <FeedbackMessage message={error} type="error" />}
        {success && (
          <FeedbackMessage
            message="Application sent successfully 🚀"
            type="success"
          />
        )}
      </div>
    </div>
  );
}
