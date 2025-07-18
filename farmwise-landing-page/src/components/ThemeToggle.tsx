import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from 'react-bootstrap';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline-secondary"
      size="sm"
      className="position-relative"
      onClick={toggleTheme}
    >
      <Sun className={`transition ${theme === 'dark' ? 'd-none' : ''}`} size={18} />
      <Moon className={`transition position-absolute top-50 start-50 translate-middle ${theme === 'light' ? 'd-none' : ''}`} size={18} />
      <span className="visually-hidden">Toggle Theme</span>
    </Button>
  );
};

export default ThemeToggle;
