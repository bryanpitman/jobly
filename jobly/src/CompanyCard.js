import { Link } from 'react-router-dom';

/** Makes a company card given a company
 * Props:
 * - company: An object with information about a company
 */
function CompanyCard({company}) {
    let logo = null;
    
    if(company.logoUrl) {
        logo = <img src={`${company.logoUrl}`} alt="Logo" />;
    }
    
    return (
        <Link to={`/companies/${company.handle}`}>
        <li>
            <div>{company.name}</div>
            <div>{logo}</div>
            <div>{company.description}</div>
        </li>
        </Link>
    )
}

export default CompanyCard;