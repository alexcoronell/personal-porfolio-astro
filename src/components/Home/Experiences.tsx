import { useState, useEffect } from "preact/hooks";
import { type Experience } from "../../core/types/PersonalData";

/* Utils */
import { translate } from "../../i18n/translate";
import "./_Experiences.scss";

const Experiences = (props: any) => {
  const { lang } = props;
  const personalData = translate(lang);
  const { experiences } = personalData;
  const [currentExperienceIndex, setCurrentExperienceIndex] =
    useState<number>(0);
  const [currentExperience, setCurrentExperience] = useState<Experience>(
    experiences[currentExperienceIndex]
  );

  useEffect(() => {
    setCurrentExperience(experiences[currentExperienceIndex]);
  }, [currentExperienceIndex]);

  return (
    <div className="Experiences">
      <div className="Experiences__business">
        {experiences.map((item, index) => (
          <button
            className={`Experiences__business__button ${
              index === currentExperienceIndex ? "businessActive" : ""
            }`}
            key={index}
            id={"-btn-" + index}
            onClick={() => setCurrentExperienceIndex(index)}
            role="button"
            aria-label={"Load de experience with " + item.business}
          >
            {item.business}
            <span className="sr-only">{"Load de experience with " + item.business}</span>
          </button>
        ))}
      </div>
      <div className="Experiences__details">
        <div className="Experiences__details__header">
          <h4>{currentExperience?.title}</h4>
          <span class="icon-[material-symbols--next-week-outline]"></span>
          <h5>{currentExperience?.business}</h5>
        </div>
        <div className="Experiences__details__date">
          <p>
            {currentExperience?.dateBegin} - {currentExperience?.dateEnd}
          </p>
        </div>
        <div className="Experiences__details__functions">
          <ul>
            {currentExperience?.functions?.map((item, index) => {
              return (
                <li key={index}>
                  <span class="icon-[material-symbols--double-arrow]"></span>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
