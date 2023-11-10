import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      <div className="companies">
      {companies.map((company) => {
        return (
          <Link to={`/company/${company.slug}`} key={company.id}  className="company-link">
            <h3>{company.name}</h3>
            <img src={company.logo} alt={company.name} width="100px" />
          </Link>
        );
      })}
      </div>
    </div>
  );
}

export default HomePage;
