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
    console.log(handle);
    
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
    
    return (
        <>
        <h1>{company.data.name}</h1>
        <h2>{company.data.description}</h2>
        <JobCardList jobs={company.data.jobs} />
        </>
    )
}

export default CompanyDetails;