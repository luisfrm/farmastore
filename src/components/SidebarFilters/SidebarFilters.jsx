import { useEffect, useState } from "react"
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './SidebarFilters.scss'

export default function SidebarFilters() {
  const [category, setCategory] = useState([])
  const userLogged = sessionStorage.getItem('userLogged')
  const userPermission = sessionStorage.getItem('userPermission')

  const handleOnChange = () => {
    console.log('hola');
  }

  useEffect(() => {
  }, [])

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5050/category`,
      timeout: 3000,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(({data}) => {
      setCategory(data)
    })
    .catch((err) => {
      if (err) {
        setCategory([])
      }
    })
  }, [])

  const handleSignOut = () => {
    sessionStorage.setItem('userLogged', false)
    window.location.reload()
  }

  return (
    <div className="p-3 bg-light">
      <h6 href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">{category.length} categorias mostrados</span>
      </h6>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        
        {category.length > 0 && (
              <li className="nav-item">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="all" onChange={handleOnChange} value=""/>
                  <label className="form-check-label" htmlFor='all'>
                    Todas
                  </label>
                </div>
              </li>)
            }
        {
          category.length > 0 && category.map(({nombre, id}) => {
            return (
              <li className="nav-item" key={id}>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id={nombre} onChange={handleOnChange} value="option1"/>
                  <label className="form-check-label" htmlFor={nombre}>
                    {nombre}
                  </label>
                </div>
              </li>)
          })
        }
      </ul>
      <hr/>
      {
        userLogged==='true' && (
          <div className="dropdown">
            <div className="d-flex align-items-center link-dark dropdown-toggle" id="dropdownUser" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user"></i>&nbsp;
              <strong>User</strong>
            </div>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser">
              { userLogged && ( userPermission==='1' || userPermission==='2') && <li><a className="dropdown-item" data-target="#newProductModal" data-toggle="modal">Agregar nuevo producto</a></li>}
              <li><a className="dropdown-item" href="#">Perfil</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><span onClick={handleSignOut} className="dropdown-item" href="#">Cerrar sesion</span></li>
            </ul>
          </div>
      )
      }
      {
        userLogged!=='true' && (
          <button className='btn btn-primary' data-toggle="modal" data-target="#loginModal">Login</button>
        )
      }
    </div>
  )
}
