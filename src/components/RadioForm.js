import React from "react";

function RadioForm({ handleChange }) {
  return (
    <form className="radio-form default-btn__opacity">
      <label
        htmlFor="react"
        className="radio-form__label default-btn__opacity__btn"
      >
        React
        <input
          type="radio"
          name="technology"
          id="react"
          value="react"
          onChange={(e) => handleChange(e.target.value)}
          className="radio-form__label__input "
        />
      </label>
      <label
        htmlFor="wordpress"
        className="radio-form__label default-btn__opacity__btn"
      >
        Wordpress
        <input
          type="radio"
          name="technology"
          id="wordpress"
          value="wordpress"
          onChange={(e) => handleChange(e.target.value)}
          className="radio-form__label__input"
        />
      </label>
      <label
        htmlFor="graphics"
        className="radio-form__label default-btn__opacity__btn"
      >
        Graphisme
        <input
          type="radio"
          name="technology"
          id="graphics"
          value="graphics"
          onChange={(e) => handleChange(e.target.value)}
          className="radio-form__label__input "
        />
      </label>
      <label
        htmlFor="php"
        className="radio-form__label  default-btn__opacity__btn"
      >
        Php
        <input
          type="radio"
          name="technology"
          id="php"
          value="php"
          onChange={(e) => handleChange(e.target.value)}
          className="radio-form__label__input"
        />
      </label>
      <label
        htmlFor="all"
        className="radio-form__label default-btn__opacity__btn"
      >
        Tout
        <input
          type="radio"
          name="technology"
          id="all"
          value="all"
          defaultChecked
          onChange={(e) => handleChange(e.target.value)}
          className="radio-form__label__input"
        />
      </label>
    </form>
  );
}

export default RadioForm;
