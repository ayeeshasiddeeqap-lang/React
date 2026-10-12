export default function Careers() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote"
    },
    {
      title: "UI/UX Designer",
      location: "Chennai"
    }
  ];

  return (
    <div className="container">
      <h1>Careers</h1>

      {jobs.map((job, index) => (
        <div className="job-card" key={index}>
          <h3>{job.title}</h3>
          <p>{job.location}</p>
          <button>Apply Now</button>
        </div>
      ))}
    </div>
  );
}
