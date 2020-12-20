import {Link} from 'react-router-dom';
import './Header.css';

function Header(props) {
    return(
        <header className="Header">
            <Link to="/">
                <h1>Sound Broker</h1>
            </Link>

            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                        <>
                            <li><Link to='' onClick={props.handleLogout}>Logout</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/producer'>Producer Page</Link></li>
                            
                        </>
                        :
                        <>
                            <li><Link to='/signup'>Signup</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </>

                    }
                    
                    
                    

                </ul>
            </nav>
        </header>
    );
}

export default Header;