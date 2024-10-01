import { React } from 'react';
import Divider from '../images/pattern-divider-desktop.svg';
import Icon from '../images/icon-dice.svg';
import CaretLeft from '../images/caret-left.png';
import CaretRight from '../images/caret-right.png';

export const Advice = ({ id, description, dispatch, fetchData, loading }) => {
  
  const handlePrev = () => dispatch({ type: 'PREV' });
  const handleNext = () => dispatch({ type: 'NEXT' });
  const handleRandom = () => fetchData(false);

  
  const Content = !loading ? (
    <>
      <h6 className="advice__title">Advice # {id}</h6>
      <div className="advice__description-container">
        <span className="advice__description-text">"{description}"</span>
      </div>
      <figure className="advice__image">
        <img src={Divider} alt="Divider between advice and button" />
      </figure>
      <div className="advice__buttons">
        <Button icon={CaretLeft} onClick={handlePrev} altText="Previous advice" extraClass="advice__button--pos-left" />
        <Button icon={Icon} onClick={handleRandom} altText="Random advice" />
        <Button icon={CaretRight} onClick={handleNext} altText="Next advice" extraClass="advice__button--pos-right" />
      </div>
    </>
  ) : (
    <div className="advice__description-container">
      <div className="loader"></div>
    </div>
  );

  return <div className="advice">{Content}</div>;
};


const Button = ({ icon, onClick, altText, extraClass = '' }) => (
  <button className={`advice__button ${extraClass}`} onClick={onClick}>
    <figure className="advice__button-icon">
      <img src={icon} alt={altText} />
    </figure>
  </button>
);
