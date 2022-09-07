import Card from "react-bootstrap/Card";

/** Makes a job card given a job
 * Props:
 * - job: An object with information about a job
 *
 * RoutesList -> Jobs -> JobCardList -> JobCard
 */
function JobCard({ job }) {
  // can destructure the things in job

  let companyName = null;

  if (job.companyName) {
    companyName = <Card.Subtitle>{job.companyName}</Card.Subtitle>;
  }

  let companyEquity = null;

  if (job.equity) {
    companyEquity = <div>Equity: {job.equity}</div>;
  }
  // could also just do an &&

  // some jobs don't have equity

  return (
    <div>
      <Card border="success" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          {companyName}
          <Card.Text>
            {" "}
            <div>Salary: {job.salary}</div>
            {companyEquity}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobCard;
