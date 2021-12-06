import HeaderItem from "../Header_item/HeaderItem";
import data from "./data"
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./header.scss";
import { useState } from "react";

function App (){
  const [userLogged, setuserLogged] = useState(sessionStorage.getItem("userLogged"))

  const handleSignOut = () => {
    sessionStorage.setItem('userLogged', false)
    setuserLogged(sessionStorage.getItem('userLogged'));
    window.location.reload()
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-blue p-4" id="navbar">
      <a className="navbar-brand" href="/">Farma Store</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            data.map(item => {
              return <HeaderItem key={item.name} name={item.name} url={item.url} text={item.text} subItems={item.subItems} icon={item.icon}/>
            })
          }
        </ul>
        <div className='w-auto'>
          <form className="input-group w-auto my-2 my-lg-0 d-inline">
            <input className="form-control mr-sm-2 w-auto d-inline" type="search" placeholder="Buscar en inventario" aria-label="Search"/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
          </form>
          { userLogged === 'false' && <div className="input-group w-auto my-2 my-lg-0 d-block d-md-inline buttonSignSection"><button className="btn btn-outline-light my-2 my-sm-0" data-toggle="modal" data-target="#loginModal" type="button">Log in</button></div> }
          { userLogged === 'true' && <div className="input-group w-auto my-2 my-lg-0 d-inline buttonSignSection"><button onClick={handleSignOut} className="btn btn-outline-light my-2 my-sm-0" type="button">Sign out</button></div> }
        </div>
      </div>
    </nav>
  )
}

export default App;