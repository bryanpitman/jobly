import CompanyCard from './CompanyCard'

/** Makes a list of companies
 * Props:
 * - companies: An array of objects that include companies
 */
function CompanyCardList({companies}) {
    return (
        <ul>
            {companies.map(company => <CompanyCard key={company.handle} company={company}/>)}
        </ul>
    )
}

export default CompanyCardList;