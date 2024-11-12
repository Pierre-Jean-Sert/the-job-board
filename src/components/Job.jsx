const Job = (props) => {
  //Composition du CSS
  const CssClass = `job ${props.className}`;

  return (
    <article className={CssClass}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <span className="little-description">
          {props.contractType} - {props.country} - {props.city}
        </span>
      </div>
    </article>
  );
};

export default Job;
