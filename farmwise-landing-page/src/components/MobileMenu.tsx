import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Menu } from 'lucide-react';

interface MenuItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        variant="outline-secondary"
        size="sm"
        className="d-md-none"
        onClick={() => setShow(true)}
      >
        <Menu size={20} />
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="d-flex flex-column gap-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setShow(false)}
                className="text-decoration-none fw-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileMenu;
