import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InfiniteScrolling from './apps/infiniteScrolling/InfiniteScrolling'
import Debounce from './apps/debounceThrottling/Debounce'

function App() {

  return (
    <>
     {/* <InfiniteScrolling/> */}
     <Debounce/>
    </>
  )
}

export default App
