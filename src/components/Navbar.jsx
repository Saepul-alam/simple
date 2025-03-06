import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="wrapper">
                <div className="logo"><a href=''>Pragmatic.</a></div>
                <div className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#tutors">News</a></li>
                        <li><a href="#partners">Video</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar