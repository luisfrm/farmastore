import '@fortawesome/fontawesome-free/css/all.min.css'
import './SidebarFilters.scss'

export default function SidebarFilters() {
  return (
  <div className="p-3 bg-light">
    <h6 href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <span className="fs-4">XX productos mostrados</span>
    </h6>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <div className="form-check form-check-inline input-container mb-1">
          <label className="form-check-label d-flex align-items-center" htmlFor="bebe">
            <input type="checkbox" className="form-check-input checkmark" id="bebe"/>
            <span className="checkmark-target"></span>
            <span className="text-truncate">Bebe</span>
          </label>
        </div>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <div className="d-flex align-items-center link-dark dropdown-toggle" id="dropdownUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-user"></i>&nbsp;
        <strong>User</strong>
      </div>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser">
      <li><a className="dropdown-item" href="#">Agregar nuevo producto</a></li>
        <li><a className="dropdown-item" href="#">Configuracion</a></li>
        <li><a className="dropdown-item" href="#">Perfil</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Cerrar sesion</a></li>
      </ul>
    </div>
  </div>
  )
}
