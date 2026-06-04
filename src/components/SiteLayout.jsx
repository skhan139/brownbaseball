import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/contact', label: 'Contact' },
]

function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuContainerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handlePointerDown = (event) => {
      const target = event.target
      const clickedInsideMenu = menuContainerRef.current?.contains(target)
      const clickedMenuButton = menuButtonRef.current?.contains(target)

      if (!clickedInsideMenu && !clickedMenuButton) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

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

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="menu-icon" aria-hidden="true">☰</span>
          <span>Menu</span>
        </button>

        <div ref={menuContainerRef} className={`header-right${isMenuOpen ? ' open' : ''}`}>
          <nav className="nav-bar" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                end={item.to === '/'}
                onClick={handleNavClick}
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