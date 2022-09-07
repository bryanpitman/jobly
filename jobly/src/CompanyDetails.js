import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react';
import JoblyApi from './api';
import JobCardList from "./JobCardList";

/** Renders details for a specific company based on URL parameter
 * State: company: an object with information about the company
 * 
 */
function CompanyDetails() {
    const [company, setCompany] = useState({
        data: {},
        isLoading: true,
    })
    
    const { handle } = useParams();
    
    async function getCompany() {
        setCompany({
            data: await JoblyApi.getCompany(handle),
            isLoading: false,
        })
    }
    
    /** Calls api to get company by handle when page is first mounted */
    useEffect(function getCompanyWhenMounted() {
        
        getCompany();
    }, []);
    // UseEffect has a missing dependency: 'getCompany'. either include it or remove dependency list.
    // WHYYYYYY >:(
    // it's doomed.
    
    if(company.isLoading) {
        return <div>Loading...</div>
    }
    
    return (
        <>
        <h1>{company.data.name}</h1>
        <h2>{company.data.description}</h2>
        <JobCardList jobs={company.data.jobs} />
        </>
    )
}

export default CompanyDetails;