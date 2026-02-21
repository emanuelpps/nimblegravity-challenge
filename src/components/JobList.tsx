import type { Job } from "../types/job";
import type { Candidate } from "../types/candidate";
import JobCard from "./JobCard";

interface Props {
  jobs: Job[];
  candidate: Candidate;
}

export default function JobList({ jobs, candidate }: Props) {
  return (
    <div className="w-[90%] h-screen p-10 mx-auto grid grid-cols-5 grid-rows-auto gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} candidate={candidate} />
      ))}
    </div>
  );
}
