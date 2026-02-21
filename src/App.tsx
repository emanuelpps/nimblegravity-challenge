import { useEffect, useState } from "react";
import { getCandidateByEmail } from "./api/candidate";
import type { Candidate } from "./types/candidate";
import type { Job } from "./types/job";
import { getJobs } from "./api/jobs";
import JobList from "./components/JobList";

function App() {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [job, setJob] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCandidate() {
      try {
        const data = await getCandidateByEmail("emanuelpages.ps@gmail.com");
        const jobData = await getJobs();
        setCandidate(data);
        setJob(jobData);
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

    fetchCandidate();
  }, []);

  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-indigo-600 animate-spin" />
          <p className="text-sm text-gray-600 tracking-wide">
            Loading opportunities...
          </p>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex justify-center items-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="w-full">
      <JobList jobs={job} candidate={candidate!} />
    </div>
  );
}

export default App;
