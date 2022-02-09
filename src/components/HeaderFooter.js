import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header-container'>
            <div className='nav-links'>
                <div>
                    <Link to='/'>LandingPage</Link>
                </div>
                <div>
                    <Link to='/register'>RegisterPage</Link>
                </div>
                <div>
                    <Link to='/login'>LoginPage</Link>
                </div>
                <div>
                    <Link to='/account'>AccountInfoPage</Link>
                </div>
                <div>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
            {/* END OF NAV-LINKS */}
            </div>
        {/* END OF HEADER CONTAINER */}
        </div>
    )
}


function Footer() {

    const logout = () => {
        localStorage.removeItem('token')
    }

    return (
        <div className='footer-container'>
            <div className='nav-links'>
                <div>
                    <Link to='/'>LandingPage</Link>
                </div>
                <div>
                    <Link to='/register'>RegisterPage</Link>
                </div>
                <div>
                    <Link to='/login'>LoginPage</Link>
                </div>
                <div>
                    <Link to='/account'>AccountInfoPage</Link>
                </div>
                <div>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
                <div>
                    <Link onClick={logout} to='/'>Logout</Link>
                </div>
            {/* END OF NAV-LINKS */}

            </div>
        {/* END OF FOOTER CONTAINER */}
        </div>
    )
}

export { Header, Footer }