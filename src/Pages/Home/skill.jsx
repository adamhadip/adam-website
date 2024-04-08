import skill from "../../data/skill.json";

export default function Myskills() {
  return (
    <section className="skills--section" id="mySkill">
      <div className="portfolio--container">
        <h2 className="section-title-heading">Skills</h2>
        <div className="skills-styles">
          {skill.map((skills, id) => {
            return (
              <div key={id} className="skill">
                <div className="image-container-skill">
                  <img src={skills.imagesrc} alt={skills.title} />
                </div>
                <p>{skills.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
