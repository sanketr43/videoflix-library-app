import './register.style.css';
import { NavLink } from 'react-router-dom';

function Register() {
    return ( 
        <div className="bui-container">
            <div className="bui-auth">
                <div className="bui-card">
                    <div className="bui-card-body">
                        <h5 className="bui-card-title bui-text-center bui-mb-3 bui-mt-3">Register</h5>
                        <div className="bui-auth-form">
                            <form action="">
                                <div className="bui-mb-3">
                                    <label for="first_name" className="bui-form-label">First Name</label>
                                    <input type="text" className="bui-form-control" name="first_name"/>
                                </div>
                                <div className="bui-mb-3">
                                    <label for="last_name" className="bui-form-label">Last Name</label>
                                    <input type="text" className="bui-form-control" name="last_name"/>
                                </div>
                                <div className="bui-mb-3">
                                    <label for="email" className="bui-form-label">Email</label>
                                    <input type="text" className="bui-form-control" name="email"/>
                                </div>
                                <div className="bui-mb-3">
                                    <label for="password" className="bui-form-label">Password</label>
                                    <input type="password" className="bui-form-control" name="password"/>
                                </div>
                                <div className="bui-mb-4">
                                    <button className="bui-btn bui-btn-danger bui-btn-block">Register</button>
                                </div>
                                <div className="bui-mb-3 bui-text-center">
                                    Already have account? <NavLink to={'/login'}>Login Now <i className="bi bi-chevron-right"></i></NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Register;