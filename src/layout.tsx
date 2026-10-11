import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import 'react-toastify/dist/ReactToastify.css'

function Layout() {
  return (
    <div className="root-shell bg-ink text-text">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  )
}

export default Layout