import React, { useState } from 'react'

class hook {
  login!: boolean
  setLogin!: Function

  constructor() {
    let [login, setLogin] = useState(false)
    this.login = login
    this.setLogin = setLogin
  }

  getLogin () {
    console.log('get:', this.login)
    return this.login
  }
}

export default new hook()
