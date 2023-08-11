import NavLogo from '../assets/logo2.png'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div className="navbar bg-neutral text-base-100 rounded-b-lg">
                <div className="flex-1">
                    <Link to="/">
                        <img className='w-40 h-100' src={NavLogo} />
                    </Link>
                    <Link to="/keyboard-page" className="btn btn-ghost normal-case">KEYBOARDS</Link>
                    <Link to="/switch-page" className="btn btn-ghost normal-case">SWITCH</Link>
                    <Link to="/accessories-page" className="btn btn-ghost normal-case">ACCESSORIES</Link>
                </div>
            </div>
        </>
    )
}