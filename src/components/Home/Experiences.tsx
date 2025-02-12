import { useState, useEffect } from "preact/hooks";
import { type Experience } from "../../core/types/PersonalData";

/* Utils */
import { translate } from "../../i18n/translate";
import "./_Experiences.scss";

const ExperiencesDetails = (props: { experience: Experience }) => {
  const { title, business, dateBegin, dateEnd, functions } = props.experience;
  return (
    <>
      <div className="ExperiencesDetails__header">
        <h4>{title}</h4>
        <span class="icon-[material-symbols--next-week-outline]"></span>
        <h5>{business}</h5>
      </div>
      <div className="ExperiencesDetails__date">
        <p>
          {dateBegin} - {dateEnd}
        </p>
      </div>
      <div className="ExperiencesDetails__functions">
        <ul>
          {functions?.map((item, index) => {
            return (
              <li key={index}>
                <span class="icon-[material-symbols--double-arrow]"></span>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const Experiences = (props: { lang: string }) => {
  const { lang } = props;
  const personalData = translate(lang);
  const { experiences } = personalData;
  const [currentExperienceIndex, setCurrentExperienceIndex] =
    useState<number>(0);
  const [currentExperience, setCurrentExperience] = useState<Experience>(
    experiences[currentExperienceIndex]
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    console.log("Show Modal");
    const currentWidth = window.innerWidth;
    if (currentWidth < 768) {
      console.log(currentWidth, currentExperienceIndex, currentExperience);
      setIsModalVisible(true);
    }
  };


  useEffect(() => {
    setCurrentExperience(experiences[currentExperienceIndex]);
  }, [currentExperienceIndex]);

  return (
    <>
      <section className="Experiences">
        <div className="Experiences__business">
          {experiences.map((item, index) => (
            <button
              className={`Experiences__business__button btn-primary ${
                index === currentExperienceIndex ? "businessActive" : ""
              }`}
              key={index}
              id={"-btn-" + index}
              onClick={() => {setCurrentExperienceIndex(index); showModal()}}
              role="button"
              aria-label={"Load de experience with " + item.business}
            >
              {item.business}
              <span className="sr-only">
                {"Load de experience with " + item.business}
              </span>
            </button>
          ))}
        </div>
        <div className="Experiences__details">
          <ExperiencesDetails experience={currentExperience as Experience} />
        </div>
      </section>
      {isModalVisible && (
        <article className="ExperiencesDetailsModal">
          <div className="ExperiencesDetailsModal__box">
            <button className="btnClose" onClick={() => setIsModalVisible(false)}>
              X
            </button>
            <div className="ExperiencesDetailsModal__content">
            <ExperiencesDetails experience={currentExperience as Experience} />
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Experiences;
