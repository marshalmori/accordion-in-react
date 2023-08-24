import "../styles.css";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem num={index} title={el.title} text={el.text} />
      ))}
    </div>
  );
};

export default Accordion;
