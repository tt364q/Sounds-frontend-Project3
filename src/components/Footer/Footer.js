import './Footer.css';

function Footer(props) {
    return(
        <footer className="Footer">
            <p>{new Date().getFullYear()} Sounds.com All Rights Reserved</p>
        </footer>
    );
}

export default Footer;