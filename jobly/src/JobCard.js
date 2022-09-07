/** Makes a job card given a job
 * Props:
 * - job: An object with information about a job
 */
 function JobCard({job}) {
    let companyName = null;
    
    if(job.companyName) {
        companyName = <div>{job.companyName}</div>
    }
    
    return (
        <li>
            <div>{job.title}</div>
            {companyName}
            <div>Salary: {job.salary}</div>
            <div>Equity: {job.equity}</div>
        </li>
    )
}

export default JobCard;