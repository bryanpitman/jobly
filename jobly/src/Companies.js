import SearchForm from "./SearchForm";
import CompanyCardList from "./CompanyCardList";
import { useState, useEffect } from 'react';
import JoblyApi from './api';

/** Renders a list of all companies filtered by value of search form
 * State:
 * - Companies: An object:
 *  {data: [company, company...],
 *   isLoading: true/false}
 */
function Companies() {
    const [companies, setCompanies] = useState({
        data: [],
        isLoading: true,
    })
    
    /** calls API to fetch companies based on optional filter */
    async function getCompanies(filter='') {
        setCompanies({data: await JoblyApi.getCompanies(filter),
        isLoading: false})
    }

    /** Calls api to get companies when page is first mounted */
    useEffect(function getCompaniesWhenMounted() {
        getCompanies();

    }, []);

    if(companies.isLoading) {
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <SearchForm search={getCompanies}/>
            <CompanyCardList companies={companies.data} />
        </div>
    )
}

export default Companies;