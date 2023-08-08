import React, { useState, useContext } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import IPTrackerContext from '../../contexts/ip-info';

const DisplaySearch = () => {
  const [inputText, setInputText] = useState('');
  const trackerCtx = useContext(IPTrackerContext);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    trackerCtx.searchIP(inputText);
  };
  return (
    <section className="search__wrapper">
      {trackerCtx.error && (
        <div className="error">
          Please input a valid IP Address or domain
        </div>
      )}
      <div className="search__box">
        <form className="search__form" onSubmit={submitHandler}>
          <input
            className="search__input"
            type="text"
            placeholder="Search for any IP address or domain"
            onChange={inputHandler}
            value={inputText}
          />
        </form>
        <button
          className="btn__submit"
          onClick={submitHandler}
          aria-label="submit"
        >
          <FontAwesomeIcon icon={faChevronRight} className="chevron" />
        </button>
      </div>
    </section>
  );
};

export default DisplaySearch;
