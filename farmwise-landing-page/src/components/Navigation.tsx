import React from 'react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const Navigation: React.FC = () => {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Yield', href: '/yield' },
    { label: 'Pest', href: '/pest' },
    { label: 'Upload', href: '/upload' },
    { label: 'Bot', href: '/bot' },
  ];

  return (
    <header id='navbar' className="sticky-top bg-light border-bottom shadow-sm">
      <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
        <Logo />
        <nav className="d-none d-md-flex gap-3">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-decoration-none text-dark fw-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="d-flex align-items-center gap-2">
          <ThemeToggle />
          <MobileMenu menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
