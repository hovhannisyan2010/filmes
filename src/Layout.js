import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading';
function Layout() {
  const [load, setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return (
    <div>
      {load ? <Loading /> : null}
      <Outlet />
    </div>
  )
}

export default Layout