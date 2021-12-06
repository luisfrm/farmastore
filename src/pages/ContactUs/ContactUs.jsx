import React from 'react'
import './contact-us.scss'

export default function ContactUs() {

  const handleSubmitContact = (e) => {
    e.preventDefault()
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
    <div className='container-fluid' id="contactUsPage">
      <div className="row w-100 d-flex justify-content-center">
        <div className="col-12 col-md-8">
          <h3 className="text-center">Contactanos</h3>
          <p className="mb-0 font-weight-bold">Sientete libre de contactarnos.</p>
          <p>Aceptamos cualquier tipo de recomendacion, ideas y criticas que apoyen al crecimiento de la App</p>
        </div>
        <div className="col-12 col-md-8 card py-4 mt-3 mb-5">
          <form onSubmit={handleSubmitContact}>
            <div className="row w-100 d-flex justify-content-center">
              <div className="col-6 px-3 mx-0" >
                <div className="form-group">
                  <input className='form-control' id="productTitulo" placeholder='Nombre' type="text" onFocus={handleOnFocus} />
                </div>
              </div>
              <div className="col-6 px-3 mx-0" >
                <div className="form-group">
                  <input className='form-control' id="productTitulo" placeholder='Apellido' type="text" onFocus={handleOnFocus} />
                </div>
              </div>
              <div className="col-6 px-3 mx-0" >
                <div className="form-group">
                  <input className='form-control' id="productTitulo" placeholder='Telefono' type="number" onFocus={handleOnFocus} />
                </div>
              </div>
              <div className="col-6 px-3 mx-0" >
                <div className="form-group">
                  <input className='form-control' id="productTitulo" placeholder='Correo' type="email" onFocus={handleOnFocus} />
                </div>
              </div>
              <div className="col-12 px-3 mx-0" >
                <div className="form-group">
                  <textarea className='form-control' id="productTitulo" placeholder='Comentario' type="email" onFocus={handleOnFocus}></textarea>
                </div>
              </div>
              <div className="col-6 px-3 mx-0 text-center" >
                <div className="form-group">
                  <button className='btn btn-pink w-50' id="buttonSubmit" type="button">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
