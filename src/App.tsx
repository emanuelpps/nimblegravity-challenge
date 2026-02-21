import { useEffect, useState } from "react";
import { getCandidateByEmail } from "./api/candidate";
import type { Candidate } from "./types/candidate";

function App() {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCandidate() {
      try {
        const data = await getCandidateByEmail("emanuelpages.ps@gmail.com");
        setCandidate(data);
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
    </div>
  );
}

export default App;
