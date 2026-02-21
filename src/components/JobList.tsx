import type { Job } from "../types/job";
import type { Candidate } from "../types/candidate";
import JobCard from "./JobCard";

interface Props {
  jobs: Job[];
  candidate: Candidate;
}

export default function JobList({ jobs, candidate }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} candidate={candidate} />
          ))}
        </div>
      </div>
    </div>
  );
}
