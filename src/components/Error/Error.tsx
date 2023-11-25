import React from "react"
import { ReactComponent as ErrorIcon } from "../../images/error_icon.svg";

type ErrorProps = {
  text: string;
}

const Error: React.FC<ErrorProps> = ({ text }) => {
  return (
    <div className="flex text-center mt-2">
      <span className="block mt-auto mb-auto">
        <ErrorIcon className="text-red-500"/>
      </span>
      <div className="text-red-500 ml-2">{text}</div>
    </div>
  )
};

export default Error;