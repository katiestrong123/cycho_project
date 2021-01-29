//import types
import {
    INPUT_SUCCESS, 
    INPUT_FAIL,
    SESSION_SUCCESS,
    SESSION_FAIL,
    MESSAGE_SUCCESS,
    MESSAGE_FAIL
} from './types';

import axios from "axios";

//function the handles user message to queue
export const userMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: INPUT_SUCCESS, payload: message });
  } catch (err) {
    dispatch({ type: INPUT_FAIL });
  }
};

//Creates a session - API call to the backend 
export const createSession = () => async (dispatch) => {
    try{

      //first have to edit background 

      //have to change this line to /api/cychos/session

        const res = await axios.get("/api/watson/session")
        dispatch({type:SESSION_SUCCESS, payload:res.data})
      } catch(err){
        dispatch({type:SESSION_FAIL})
    }
}

//Send a message to the bot 

export const sendMessage = (message) => async (dispatch) => {
  try {
    const body ={input:message}
    const res = axios.post("/api/watson/message", body);

    dispatch({type: MESSAGE_SUCCESS, payload:(await res).data.output.generic[0].text});
  }catch (err){
    dispatch({type: MESSAGE_FAIL})

  }
}
