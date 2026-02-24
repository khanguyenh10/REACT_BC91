//Component là 1 thành phần của giao diện

import { NavLink } from "react-router-dom";

/*
class component (tham khảo)
functional component (chính)
là function trả về jsx
tạo tắt bằng phím tắt rafce
*/

const HeaderHome = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link bg-light text-dark" : "nav-link")} style={({ isActive }) => isActive ? { border: "3px solid orange" } : {}} to="/login" aria-current="page">Login <span className="visually-hidden">(current)</span></NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link bg-light text-dark" : "nav-link")} to="/register" aria-current="page">Register <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link bg-light text-dark" : "nav-link")} to="/about" aria-current="page">About <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => (isActive ? "nav-link bg-light text-dark" : "nav-link")} to="/contact" aria-current="page">Contact <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">React-router-com</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/data-binding">Databinding</NavLink>
                            <NavLink className="dropdown-item" to="/change-carcolor">Change car color</NavLink>
                            <NavLink className="dropdown-item" to="/demo-useNavigate">Demo use navigate</NavLink>

                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux - demo</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/redux-changenumber">Change number</NavLink>
                            <NavLink className="dropdown-item" to="/redux-changecar">Change car</NavLink>
                            <NavLink className="dropdown-item" to="/redux-tinkerApp">Tinker App</NavLink>

                        </div>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    )
}
export default HeaderHome;
