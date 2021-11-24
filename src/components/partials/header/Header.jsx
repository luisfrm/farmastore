import HeaderItem from "../Header_item/HeaderItem";
import data from "./data"
import "./header.scss";

function App (){
  const isUserLogged = sessionStorage.getItem("isUserLogged")
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info p-4" id="navbar">
      <a className="navbar-brand" href="/">Farma Store</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            data.map(item => {
              return <HeaderItem key={item.name} name={item.name} url={item.url} text={item.text} subItems={item.subItems}/>
            })
          }
        </ul>
        <div className='w-auto'>
          <form className="input-group w-auto my-2 my-lg-0 d-inline">
            <input className="form-control mr-sm-2 w-auto d-inline" type="search" placeholder="Buscar en inventario" aria-label="Search"/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
          </form>
          { !isUserLogged ? <div className="input-group w-auto my-2 my-lg-0 d-block d-md-inline buttonSignSection"><button className="btn btn-outline-light my-2 my-sm-0" type="button">Log in</button><button className="btn btn-outline-light my-2 my-sm-0" type="button">Sign in</button></div> : <div className="input-group w-auto my-2 my-lg-0 d-inline buttonSignSection"><button className="btn btn-outline-light my-2 my-sm-0" type="button">Sign out</button></div> }
        </div>
      </div>
    </nav>
  )
}

export default App;