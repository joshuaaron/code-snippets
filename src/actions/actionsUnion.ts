// <A extends ActionCreators takes a typeof Actions object where object is the key of action and value is the method and return.

type ActionCreatorsMapObject = { [actionCreator: string]: (...args: any[]) => any }
export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>