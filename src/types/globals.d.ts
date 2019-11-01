import React from "react"

declare global {
  interface FunctionComponent extends React.FC<T>{
  }

  interface ClassComponent extends React.Component {

  }

  interface IKV<T> {
    [key: string]: T
  }
  interface Window {
    infoWindowConfirm: any
  isAuth: boolean
  }
}


