import {configureStore} from "@reduxjs/toolkit";
import chatReducer from "./chat/reducer";

/**
 * Global Store
 * redux store, that setting up the global store for app to use
 */
export default configureStore({
  reducer: {
    chat: chatReducer,
  },
});
