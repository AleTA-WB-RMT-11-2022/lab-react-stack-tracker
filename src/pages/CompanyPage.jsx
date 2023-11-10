import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  // name, website, description, and logo
  const company = companies.find(
    (companyObj) => companyObj.slug === companySlug
  );
  // display its name and image, and wrap them in a React Router Link 
  // component to make them clickable links. To allow users 
  // to navigate to a technology details page, embed the technology slug 

  return (
    <div>
      <h1>Company Profile</h1>
      <h3>{company.name}</h3>
      <img className="logo"  src={company.logo} alt={company.name} />
      <p>{company.website}</p>
      <p>{company.description}</p>
      
      <div className="techStack">
      {company.techStack.map((tech, index) => {
        return(
          <Link to={`/tech/${tech.slug}`} key={index} >
            <div>
              <h4>{tech.name}</h4>
              <img src={tech.image} alt={tech.name} width="50px" /> 
            </div>
          </Link>
        )
      })}
      </div>
    </div>
  );
}

export default CompanyPage;
