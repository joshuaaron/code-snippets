import { getStore } from '../interfaces/IStore';

export interface IAction {
  type: string;
  payload: any;
}

export interface IDefinedActionBase<P extends object> {
  type: string;
  payloadType?: P; // can be used in funcs as typeof <action>.payloadType for ease of types on big data sets
  getPayload: (action: { type: string, payload: any }) => P;
}

export interface IDefinedAction<PAYLOAD extends object> extends IDefinedActionBase<PAYLOAD> {
  dispatch: (params: PAYLOAD) => Promise<PAYLOAD>;
}

export interface IDefinedActionAsync<PAYLOAD extends object> extends IDefinedActionBase<PAYLOAD> {
  typePending: string;
  typeFulfilled: string;
  typeRejected: string;
  dispatch: (params: PAYLOAD, onCompleted?: (payload: PAYLOAD) => void) => Promise<PAYLOAD>;
}

export const defineAction = <PAYLOAD extends object>(
  type: string,
): IDefinedAction<PAYLOAD> => ({
  type,
  dispatch: (payload: PAYLOAD) => {
    const dispatch = getStore().dispatch;
    if (dispatch) {
      const action: IAction = {
        type,
        payload
      };
      dispatch(action);
      return Promise.resolve(action.payload);
    }
    return Promise.reject('invalid dispatch')
  },
  getPayload: (action: { type: string, payload: PAYLOAD }) => {
    if (action.type !== type) {
      throw Error(`Unexpected action type ${action.type} found. Expected ${type}`);
    }
    return action.payload as PAYLOAD;
  }
})

/**
 * defineAction:
 * returns the TYPE as property, and dispatch and getPayload methods
 * to the action variable.
 * 
 * When we dispatch an action:
 * it uses the action that is a defined action with the dispatch property.
 * defineAction receives the type as a param, and dispatch receives the payload as an arg
 * the dispatch property then creates the action object to be sent to the reducer.
 * 
 * The function that receives it is the function that is returned from getReducerFunction.
 * It then queries the cases object by the action type, and if finds a match it
 * calls the handler function that gets set up in the caseAction method.
 */