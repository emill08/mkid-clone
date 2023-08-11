export default function NavBar() {
  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Mechanical Keyboards</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </summary>
                <ul className="p-2 bg-base-100">
                  <li><a>Dashboard</a></li>
                  <li><a>Categories</a></li>
                  <li><a>Register Admin</a></li>
                </ul>
              </details>
            </li>
            <li><a>Sign Out</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}