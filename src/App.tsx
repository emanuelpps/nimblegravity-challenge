import { useEffect, useState } from "react";
import { getCandidateByEmail } from "./api/candidate";
import type { Candidate } from "./types/candidate";
import type { Job } from "./types/job";
import { getJobs } from "./api/jobs";

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Candidate Info</h1>
      {candidate && (
        <div>
          <p>
            Name: {candidate.firstName} {candidate.lastName}
          </p>
          <p>Email: {candidate.email}</p>
          <p>UUID: {candidate.uuid}</p>
          <p>Candidate ID: {candidate.candidateId}</p>
          <p>Application ID: {candidate.applicationId}</p>
        </div>
      )}
      <h2>Job Info</h2>
      {job && (
        <ul>
          {job.map((j) => (
            <li key={j.id}>
              {j.id}: {j.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
