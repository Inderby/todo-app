import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand ms-2 fs-2 fw-bold text-black"
              href="/welcome/excelsiorKim"
            >
              excelsiorKim
            </a>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/welcome/test">
                    home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/welcome/test">
                    todos
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link" href="/welcome/test">
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="/welcome/test">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
      </div>
    </header>
  );
}
