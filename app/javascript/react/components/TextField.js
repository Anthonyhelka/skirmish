import React, { Component } from 'react';

const TextField = (props) => {
  return(
    <div>
      <label>{props.labelName}</label>
      <br />
      <input
        type="text"
        name={props.inputName}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default TextField;
