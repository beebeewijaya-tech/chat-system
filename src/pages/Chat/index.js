import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addChat} from "../../store/chat/reducer"; // Components
import Button from "../../components/Button";
import Input from "../../components/Input";

/**
 * Chat page will purposes as main logic here, we will use redux for the main business logic
 * And this page will responsible to consume the reducer and load the data
 * Also it will dispatch to the redux as well
 * */

const Chat = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [page, setPage] = useState(1);
  const [chatList, setChatList] = useState([]);
  const location = useLocation();

  const chatReducer = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const onSubmit = () => {
    const msg = {
      name,
      message,
    };
    setMessage("");
    dispatch(addChat(msg));
  };

  const getChat = () => {
    /**
     * getChat()
     * Getting from local storage and if it's empty, get from `reducer`
     * Only get partial of the chat
     * */
    const chats = JSON.parse(localStorage.getItem("@chat")) || chatReducer.chat;
    const multiplier = 5 * page;
    const chatLength =
      chats.length <= multiplier ? 0 : chats.length - multiplier;
    return chats.slice(chatLength);
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const { state } = location;
    setName(state.name);
  }, [location]);

  useEffect(() => {
    /**
     * chatReducer and page listener
     * If any of those two change or altered, it will re-initialize the `getChat()` function
     * to pickup a new chatlist
     * */
    const chatData = getChat();
    setChatList(chatData);
  }, [chatReducer, page]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      /**
       * storage listener
       * Consuming getChat() if storage event got triggered, such as localstorage insertion
       * */
      setChatList(getChat());
    });

    return () => {
      // When the component unmounts remove the event listener
      window.removeEventListener("storage", null);
    };
  }, []);

  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-slate-800 min-h-screen h-full">
      {chatList.length >= 5 && (
        <div className="mb-5">
          <Button onSubmit={loadMore} title="Load More" />
        </div>
      )}
      <div className="w-1/2 mb-3">
        {chatList.map((item, index) => (
          <div
            className="flex w-full bg-slate-600 rounded shadow-md mb-3"
            key={index}
          >
            <div className="px-5 py-3  ">
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="mt-1 truncate text-xs text-gray-300">
                {item.message}
              </p>
            </div>
          </div>
        ))}
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
