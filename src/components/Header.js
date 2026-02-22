function Header({ darkMode, setDarkMode }) {
  return (
    <header className="app-header">
      <h2 className="app-title">Smart Task Dashboard</h2>

      <div className="header-right">
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        <button className="profile-btn">Profile</button>
      </div>
    </header>
  );
}

export default Header;
