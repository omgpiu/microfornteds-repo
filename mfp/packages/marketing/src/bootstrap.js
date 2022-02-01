import React from 'react'
import ReactDom from 'react-dom'
import App from "./App";

const mount = (devRoot) => {
    ReactDom.render(
        <App/>,
        devRoot
    )
}
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}
export {
    mount
}