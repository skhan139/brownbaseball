import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/contact', label: 'Contact' },
]

function SiteLayout() {
  return (
    <div className="site-frame">
      <header className="site-header">
        <div className="header-left">
          <NavLink className="nav-logo-link" to="/" aria-label="Brown Baseball home" end>
            <img
              className="nav-logo"
              src={`${import.meta.env.BASE_URL}images/brownbaseball.JPG`}
              alt="Brown Baseball logo"
            />
          </NavLink>

          <div className="brand-row">
            <p className="brand">Brown Baseball</p>
            <p className="brand-subtitle">
              Myrtle Beach, South Carolina <span className="location-pin" aria-hidden="true">📍</span>
            </p>
          </div>
        </div>

        <div className="header-right">
          <nav className="nav-bar" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  )
}

export default SiteLayout