import styles from './Header.module.css';

function Header() {
  return (
    <header className="padding-block-r-4">
      <div
        className="wrapper cluster"
        style={{ '--space': 'var(--space-6)' } as React.CSSProperties}
      >
        <p className={styles.logo}>Arthur Badin</p>

        <nav>
          <ul className="cluster">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
