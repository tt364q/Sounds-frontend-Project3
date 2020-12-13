import './Header.css';

function Header(props) {
    return(
        <header className="Header">
            <h1>Sounds</h1>
            <nav>
                <ul className="NavLinks">
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Logout</li>
                    <li>Dashboard</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;