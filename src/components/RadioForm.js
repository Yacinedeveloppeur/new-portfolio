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
        htmlFor="node"
        className="radio-form__label default-btn__opacity__btn"
      >
        Node
        <input
          type="radio"
          name="technology"
          id="node"
          value="node"
          onChange={(e) => handleChange(e.target.value)}
          className="radio-form__label__input "
        />
      </label>
      <label
        htmlFor="vue"
        className="radio-form__label  default-btn__opacity__btn"
      >
        Vue
        <input
          type="radio"
          name="technology"
          id="vue"
          value="vue"
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
