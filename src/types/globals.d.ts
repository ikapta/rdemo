import React from "react"

declare global {
  interface FunctionComponent extends React.FC<T>{
  }
  interface Window {
    infoWindowConfirm: any
    isAuth: boolean
  }
}


