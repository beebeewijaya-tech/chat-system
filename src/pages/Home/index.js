import {useState} from "react";
import {useNavigate} from "react-router-dom";

import ChatImage from "../../assets/images/chatting.svg";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";

/**
 * Home page is to register a new session of a person who want to start a chat!
 * It's not a complicated logic, and doesn't need redux
 */

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    /**
     * This function will submitting the name and redirect to chat page
     *  The purpose is to registering each new tab as a new session of the person
     */
    navigate("/chat", {
      state: {
        name,
      },
    });
  };

  const onChange = (e) => {
    /**
     * This will update the state using input value
     * */
    setName(e.target.value);
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-slate-800 min-h-screen h-full">
      <div className="flex flex-col items-center justify-center mb-5">
        <img src={ChatImage} className="w-52" alt="banner" />
        <h1 className="text-4xl text-white shadow-md">
          Welcome to simple chatting system!
        </h1>
      </div>
      <div>
        <div className="mt-6 flex max-w-md gap-x-4">
          <Input label="Your name..." value={name} onChange={onChange} />
          <Button onSubmit={() => onSubmit()} title="Start chatting" />
        </div>
      </div>
    </div>
  );
};

export default Home;
