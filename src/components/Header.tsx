import { Bell, Grid2x2, Menu } from 'lucide-react';

function Header() {
  return (
    <header className="top-header">
      <div className="header-left">
        <button className="icon-btn" aria-label="menu">
          <Menu size={20} />
        </button>
        <h1 className="brand">NAVER</h1>
      </div>

      <div className="header-right">
        <button className="icon-btn" aria-label="apps">
          <Grid2x2 size={20} />
        </button>
        <button className="icon-btn" aria-label="notifications">
          <Bell size={20} />
        </button>
        <div className="profile-circle">R</div>
      </div>
    </header>
  );
}

export default Header;