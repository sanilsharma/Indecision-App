import React from "react";

const Option = props => {
  const { option, count, handleDeleteSingular } = props;
  return (
    <div className="option">
      <p className="option__text">
        {count}. {option}
      </p>

      <button
        className="button button--link"
        onClick={e => handleDeleteSingular(option)}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
