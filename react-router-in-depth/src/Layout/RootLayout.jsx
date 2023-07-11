import { NavLink, Outlet } from "react-router-dom";

// Components
import Breadcrumbs from '../components/Breadcrumbs';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Gp Router</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='careers'>Careers</NavLink>
          <NavLink to='help'>Help</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
