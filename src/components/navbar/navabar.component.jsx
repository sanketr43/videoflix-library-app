import './navbar.style.css';
import logo from '../../assets/logo.png';

function Navbar() {
    return ( 
        <nav className="bui-navbar">
            <div className="bui-navbar-container">
                <div className="bui-navbar-logo">
                    <span className="btn-sidebar" id="sidebarBtn"><i className="bi bi-list"></i></span>
                    <img src={logo} />
                </div>
                <div className="bui-navbar-menu bui-navbar-search">
                    <i className="bi bi-search"></i>
                    <input type="text" className="bui-form-control" placeholder="Search" />
                </div>
                <div className="bui-navbar-menu">
                    <a href="#">
                        <button className="bui-btn bui-btn-danger">Login</button>
                    </a>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;