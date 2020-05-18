/* eslint-disable */
import React, { ReactInstance } from 'react'
import ReactDOM from 'react-dom'

class dialogFactory {

  // react 实例
  private singletons: IKV<ReactInstance> = {}
  // 实例的container
  private divContainer: IKV<HTMLDivElement> = {}
  constructor () {
    this.singletons = {}
  }

  public getDialog(Component: any){
    // warning: do not duplicate Component name
    const dialogName = Component.name
    if (this.singletons[dialogName]) {
      return this.singletons[dialogName]
    } else {
      const { instance, div } = this.createAInstance(Component)
      this.singletons[dialogName] = instance
      this.divContainer[dialogName] = div
      return instance
    }
  }

  private createAInstance (component: FunctionComponent) {
    const div = document.createElement('div')
    const constructor = React.createElement(component, null)
    const instance: any = ReactDOM.render(constructor, div)
    document.body.appendChild(div)
    return { instance, div }
  }

  public destroy (dialogName: string) {
    if (dialogName) {
      const container = this.divContainer[dialogName]
      ReactDOM.unmountComponentAtNode(container);
      container.remove()
      delete this.divContainer[dialogName]
      delete this.singletons[dialogName]
    }
  }

  public destroyAll () {
    Object.values(this.divContainer).forEach(div => ReactDOM.unmountComponentAtNode(div))
    this.singletons = {}
  }
}

export default new dialogFactory()
