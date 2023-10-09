import { ImSpinner3 } from "react-icons/im";

function Submit({ value, busy }) {
  return (
    <button
      type="Submit"
      className="w-full dark:bg-white bg-secondary hover:opacity-90 rounded-md transition dark:text-secondary text-white cursor-pointer p-1 text-lg font-semibold h-10 flex items-center justify-center"
    >
      {busy ? <ImSpinner3 className="animate-spin" /> : value}
    </button>
  );
}

export default Submit;
