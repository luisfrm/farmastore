import axios from 'axios'
import { useState } from "react"
import formValidation from "../../../../helpers/formValidation"

export default function Login() {
  const [state, setstate] = useState(0)
  const [userLogged] = useState(sessionStorage.getItem("userLogged"))

  const handleLogin = () => {
    setstate(0)
    const loginButton = document.querySelector("#loginButton")
    if (loginButton.classList.contains('btn-outline-primary')) {
      loginButton.classList.remove('btn-outline-primary')  
    }

    if (!loginButton.classList.contains('btn-primary')) {
      loginButton.classList.add('btn-primary')
    }

    const signButton = document.querySelector("#signButton")

    if (signButton.classList.contains('btn-primary')) {
      signButton.classList.remove('btn-primary')
    }
    
    if (!signButton.classList.contains('btn-outline-primary')) {
      signButton.classList.add('btn-outline-primary')
    }
  }

  const handleSign = () => {
    setstate(1)
    const signButton = document.querySelector("#signButton")

    if (signButton.classList.contains('btn-outline-primary')) {
      signButton.classList.remove('btn-outline-primary')  
    }

    if (!signButton.classList.contains('btn-primary')) {
      signButton.classList.add('btn-primary')
    }

    const loginButton = document.querySelector("#loginButton")

    if (loginButton.classList.contains('btn-primary')  ) {
      loginButton.classList.remove('btn-primary')
    }
    
    if (!loginButton.classList.contains('btn-outline-primary')) {
      loginButton.classList.add('btn-outline-primary')
    }
  }

  const handleLoginSubmit = (e) => {
    const inputsData = [
      {id:'usuario', type:"usuario"},
      {id:'password', type:"password"},
    ]

    const validated = formValidation(inputsData, '#textWrongLogin')

    if (validated) {
      const data = {
        user: document.querySelector(`#${inputsData[0].id}`).value,
        pass: document.querySelector(`#${inputsData[1].id}`).value
      }

      login(data)
      .then((res) => {
        if (res.length>0) {
          sessionStorage.setItem('userPermission', res[0].idUsuario)
          sessionStorage.setItem('userLogged', 'true')
          window.location.reload()
        } else {
          document.querySelector(".userWrong").classList.remove('d-none')
          setTimeout(() => {
            document.querySelector(".userWrong").classList.add('d-none')
          }, 3000);

          console.log("data incorrecta");
        }
      })
      
    }

    e.preventDefault()
  }

  const login = async({user, pass}) => {
    const response = await axios.get(`http://localhost:5050/users/login/${user};${pass}`)
      .then(({data}) => {
        return (data);
      })
      .catch((err) => {
        return err
      })

    return response
  }

  const handleOnFocus = (e) => {
    if (e.target.classList.contains('is-invalid')) {
      e.target.classList.remove('is-invalid')
    }

    if (e.target.classList.contains('is-valid')) {
      e.target.classList.remove('is-valid')
    }
  }

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header row">
            <button id='loginButton' onClick={handleLogin} className='btn btn-outline-primary w-50'>Log in</button>
            <button id='signButton' onClick={handleSign} className='btn btn-outline-primary w-50'>Sign in</button>
          </div>
          <div className="modal-body">
            { state === 0 && (
              <div className="w-100 px-0">
                <h5 className='text-center'>Inicio de sesion</h5>
                <form onSubmit={handleLoginSubmit}>
                  <div className="row w-100 mx-0 px-3 d-flex justify-content-center">
                    <div className="col-12 px-0">
                      <div className="form-group">
                        <input className='form-control' id="usuario" placeholder='Usuario' type="text" onFocus={handleOnFocus} />
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="form-group">
                        <input className='form-control' id="password" placeholder='Contrasena' type="password" onFocus={handleOnFocus} autoComplete="true"/>
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <button type="submit" className="btn btn-primary w-100">Login</button>
                    </div>
                    <div id="textWrongLogin" className="col-12 px-0 mt-3 textWrong d-none">
                      <p>Verifica los valores de los campos anteriores por favor.</p>
                    </div>
                    <div className="col-12 px-0 mt-3 userWrong mb-0 d-none">
                      <p className="mb-0">Usuario y/o contrasena incorrectos. Por favor verifique sus datos e intente de nuevo</p>
                    </div>
                  </div>
                </form>
            </div>
            )}
            { state === 1 && (
              <div className="signin w-100 px-0">
                <h5 className='text-center'>Registro de usuario</h5>
                <form action="">
                  <div className="row w-100 mx-0 px-3 d-flex justify-content-center">
                    <div className="col-12 px-0">
                      <div className="form-group">
                        <input className='form-control' placeholder='Usuario' type="text" />
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="form-group">
                        <input className='form-control' placeholder='Contrasena' type="password" autoComplete="true" />
                      </div>
                    </div>
                    <div className="col-6 pl-0">
                      <div className="form-group">
                        <input className='form-control' placeholder='Nombre' type="text" />
                      </div>
                    </div>
                    <div className="col-6 px-0">
                      <div className="form-group">
                        <input className='form-control' placeholder='Apellido' type="text" />
                      </div>
                    </div>
                    <div className="col-6 pl-0">
                      <div className="form-group">
                        <input className='form-control' placeholder='Cedula' type="number" />
                      </div>
                    </div>
                    <div className="col-6 px-0">
                      <div className="form-group">
                        <input className='form-control' placeholder='Telefono' type="tel" maxLength='11' />
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="form-group">
                        <input className='form-control' placeholder='Correo' type="email" />
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="form-group">
                        <input className='form-control' placeholder='Direccion' type="Direccion" maxLength='50'/>
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <button type="submit" className="btn btn-primary w-100">Login</button>
                    </div>
                  </div>
                </form>
            </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
