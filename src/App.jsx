import React from 'react'
import Body from './component/Body'
import appStore from './store/appstore'
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  )
}

export default App