import React from "react";
import Option from "../Option/Option";

const Options = props => {
  const {
    options,
    handleDeleteOptions,
    hasOption,
    handleDeleteSingular
  } = props;
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          disabled={!hasOption}
          onClick={handleDeleteOptions}
        >
          Remove All
        </button>
      </div>

      {options.length === 0 && (
        <p className="widget__message">
          Please add and an option to get started
        </p>
      )}

      {options.map((option, index) => (
        <Option
          handleDeleteSingular={handleDeleteSingular}
          key={option}
          count={index + 1}
          option={option}
        />
      ))}
    </div>
  );
};

export default Options;
