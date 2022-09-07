import JobCard from './JobCard'

/** Makes a list of jobs
 * Props:
 * - jobs: An array of objects that include jobs
 *
 * RoutesList -> Jobs -> JobCardList
 */
function JobCardList({jobs}) {
    return (
        <>
            {jobs.map(job => <JobCard key={job.id} job={job}/>)}
        </>
    )
}

export default JobCardList;