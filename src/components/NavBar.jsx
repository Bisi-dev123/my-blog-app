import { WiMoonWaningCrescent5 } from "react-icons/wi";


const NavBar = () => {
    return (
        <div className="header-wrapper" >
            <div className="brandname-wrapper" >
                <h1>NIYAH</h1>
                <h1 className="blog-text" >blog</h1>
            </div>
            <div className="toggle-wrapper" >
            <WiMoonWaningCrescent5 />
            </div>
        </div>
    );
}

export default NavBar