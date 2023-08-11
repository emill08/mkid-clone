import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function NavBar() {
  const navigate = useNavigate()

  function doLogout() {
    localStorage.clear()
    navigate('/')
    Swal.fire({
      icon: 'success',
      text: `Thankyou for visiting us`,
  })
  }

  return (
    <>
      <div className="navbar bg-info text-black rounded-xl w-full max-w-4xl p-3 mx-auto mt-10">
        <div className="flex-1">
          <Link to="/home" className="btn btn-ghost text-xl">MECHANICAL KEYBOARD</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/home">Dashboard</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/admin-register">Register Admin</Link></li>
            <li><a onClick={doLogout}>Sign Out</a></li>
          </ul>
        </div>
      </div>
    </>

  )
}