import history from "../../data/index.json";

export default function Experience() {
  return (
    <section className="experience--section" id="expErience">
      <div className="portfolio--container">
        <h2 className="section-title-heading">Experience</h2>
      </div>
      <div className="experience--section--containter">
        {history?.experience?.map((item, index) => (
          <div key={index} className="experience--section--card">
            <div className="experience--section--img">
              <img src={item.imageSrc} alt="Experience " />
            </div>
            <div className="experience--section--card--content">
            <p className="experience--section--date">{`${item.startDate} - ${item.endDate}`}</p>
              <h3 className="experience--section--title">{item.company}</h3>
              <p className="experience--section--role">{item.role}</p>
            </div>
            <ul>
                {item.desc.map((experience, id) => {
                      return <li key={id} className="desc-expe">{experience}</li>;
                    })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
