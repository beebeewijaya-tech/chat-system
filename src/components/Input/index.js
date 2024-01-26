import {Fragment} from "react";

/**
 * Input component
 * Necessarily to maintain and handle the input from the user, it will receive couple of props options
 * 1. Label
 * 2. Value
 * 3. onChange event
 * */
const Input = (props) => {
  return (
    <Fragment>
      <label htmlFor="name" className="sr-only">
        {props.label}
      </label>
      <input
        type="text"
        required
        className="flex-1 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm sm:text-sm"
        placeholder="Enter your name"
        value={props.value}
        onChange={props.onChange}
      />
    </Fragment>
  );
};

export default Input;
