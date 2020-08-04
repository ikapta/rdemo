import React from "react"

declare global {
  interface FunctionComponent extends React.FC<T>{
  }

  interface ClassComponent extends React.Component {

  }

  function f<T>(...items: T[]): T;

  // promise type
  /* eg
  export interface MessageType {
    (): void;
    then: (fill: ThenableArgument, reject: ThenableArgument) => Promise<void>;
    promise: Promise<void>;
  }
  */
  export interface ThenableArgument {
    (val: any): void;
  }

  interface IKV<T> {
    [key: string]: T
  }

  type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
    [key in Key]: Value
  }

  type IResult<T = any> = {
    code: number,
    data: T,
    message: string
  }

  interface Window {
    infoWindowConfirm: any
    isAuth: boolean
    xx: any
  }
}


