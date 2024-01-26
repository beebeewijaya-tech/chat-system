/**
 * Button component
 * Necessarily to maintain and handle the submit button from the user, it will receive couple of props options
 * 1. Title
 * 2. onSubmit event
 * */

const Button = (props) => {
  return (
    <button
      type="submit"
      className="flex-none rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-600"
      onClick={props.onSubmit}
    >
      {props.title}
    </button>
  );
};

export default Button;
