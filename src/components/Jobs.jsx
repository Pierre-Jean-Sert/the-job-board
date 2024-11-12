// Import du composant Job
import Job from "./Job.jsx";

//Composant Jobs
const Jobs = () => {
  return (
    <section className="container jobs">
      <Job
        className="N1"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />

      <Job
        className="N2"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />

      <Job
        className="N3"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        className="N4"
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        className="N5"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />

      <Job
        className="N1"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />

      <Job
        className="N2"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans Montana"
      />

      <Job
        className="N3"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New-York"
      />

      <Job
        className="N4"
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </section>
  );
};

export default Jobs;
