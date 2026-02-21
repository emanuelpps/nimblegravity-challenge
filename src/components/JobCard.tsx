import { useState } from "react";
import type { Job } from "../types/job";
import type { Candidate } from "../types/candidate";
import { applyToJob } from "../api/candidate";

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
        <input
          type="text"
          placeholder="https://github.com/your-user/your-repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98] disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
        {error && (
          <p className="text-sm font-medium text-red-500 animate-fade-in">
            {error}
          </p>
        )}
        {success && (
          <p className="text-sm font-medium text-green-600 animate-fade-in">
            Application sent successfully 🚀
          </p>
        )}
      </div>
    </div>
  );
}
