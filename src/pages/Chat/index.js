import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";

const Chat = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();

  const onSubmit = () => {
    const msg = {
      name,
      message,
    };
    alert(JSON.stringify(msg));
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const { state } = location;
    setName(state.name);
  }, [location]);

  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-slate-800 min-h-screen h-full">
      <div className="w-1/2 mb-3">
        <div className="flex w-full bg-slate-600 rounded shadow-md mb-3">
          <div className="px-5 py-3  ">
            <p className="text-sm font-semibold text-white">Dummy name</p>
            <p className="mt-1 truncate text-xs text-gray-300">Dummy message</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mt-6 flex gap-x-4 margin-auto">
          <Input
            label="Enter your message..."
            value={message}
            onChange={onChange}
          />
          <Button onSubmit={() => onSubmit()} title="Send" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
