import { IAction, IDefinedAction } from './defineAction';

/**
 * ReducerSwitch:
 *
 * The reducer cases are setup once on app load.
 * The case will assign the type to the object and it's handler function.
 * This handler function will get the payloadData, and check if the type matches,
 * if so, it will return the payload correctly.
 * That payload is then passed into the reducer function (with any initial state)
 * that gets created with the getReducerFunction once all cases have been setup.
 */
export class ReducerSwitch<S> {
  private cases = {} as {
    [type: string]: (state: S, action: IAction) => S,
  };

  caseAction<PARAMS extends object, PAYLOAD extends object>({
    action,
    handler
  }: {
    action: IDefinedAction<PARAMS, PAYLOAD>,
    handler(state: S, payloadData: PAYLOAD): S,
  }) {
    const { type } = action;
    this.cases[type] = (state: S, reduxAction: IAction) => {
      const payloadData = action.getPayload(reduxAction);
      if (payloadData === null || payloadData === undefined) {
        return state;
      }
      return handler(state, payloadData);
    }
  }

  // returns the reducer function called when an action is dispatched.
  getReducerFunction(initialState: S) {
    return (state: S = initialState, action: IAction) => {
      const handler = this.cases[action.type];
      if (!handler) {
        return state;
      }
      return handler(state, action);
    }
  }
}

export default ReducerSwitch;