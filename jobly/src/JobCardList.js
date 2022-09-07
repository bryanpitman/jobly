import JobCard from './JobCard'

/** Makes a list of jobs
 * Props:
 * - jobs: An array of objects that include jobs
 */
function JobCardList({jobs}) {
    return (
        <ul>
            {jobs.map(job => <JobCard key={job.id} job={job}/>)}
        </ul>
    )
}

export default JobCardList;