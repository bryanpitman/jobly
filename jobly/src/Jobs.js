import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import { useState, useEffect } from 'react';
import JoblyApi from './api';

/** Renders a list of all jobs filtered by value of search form
 * State:
 * - jobs: An object:
 *  {data: [job, job...],
 *   isLoading: true/false}
 */
 function Jobs() {
    const [jobs, setJobs] = useState({
        data: [],
        isLoading: true,
    })
    
    /** calls API to fetch jobs based on optional filter */
    async function getJobs(filter='') {
        setJobs({data: await JoblyApi.getJobs(filter),
        isLoading: false})
    }

    /** Calls api to get jobs when page is first mounted */
    useEffect(function getJobsWhenMounted() {
        getJobs();

    }, []);

    if(jobs.isLoading) {
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <SearchForm search={getJobs}/>
            <JobCardList jobs={jobs.data} />
        </div>
    )
}

export default Jobs;