import React, { useEffect, useState } from 'react'
import axios from 'axios'
import formValidation from "../../../../helpers/formValidation"
import { clearForm } from '../../../../helpers/functions'

export default function Product({updateInventory}) {
  const handleProductSubmit = (e) => {
    const inputsData = [
      {id:'productTitulo', type:""},
      {id:'productMarca', type:""},
      {id:'productPrecio', type:""},
      {id:'productStock', type:""},
      {id:'productImg', type:""},
      {id:'productCategory', type:"category"}
    ]

    const validated = formValidation(inputsData, '#textWrongProduct')

    if (validated) {
      const data = {
        titulo: document.querySelector(`#${inputsData[0].id}`).value.trim(),
        marca: document.querySelector(`#${inputsData[1].id}`).value.trim(),
        precio: document.querySelector(`#${inputsData[2].id}`).value,
        stock: document.querySelector(`#${inputsData[3].id}`).value,
        imagen: document.querySelector(`#${inputsData[4].id}`).value.trim(),
        idCategoria: document.querySelector(`#${inputsData[5].id}`).value
      }
      
      
      submit(data)
      .then((res) => {
        console.log(res);
        if (res.status===200) {
          clearForm(inputsData)
          updateInventory[1](0)
          document.querySelector("#productAdded").classList.remove('d-none')

          setTimeout(() => {
            document.querySelector("#productAdded").classList.add('d-none')
          }, 3000);
        }
      })
    }

    e.preventDefault()
  }

  const submit = async (data) => {
    const res = await axios({
      method: 'post',
      url: `http://localhost:5050/products`,
      timeout: 3000,
      headers: {
        "Content-Type": "application/json"
      },
      data
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      if (err) {
        return err
      }
    })

    return res
  }

  const [category, setCategory] = useState([])

  const getCategory = async () => {
    const res = await axios({
      method: 'get',
      url: `http://localhost:5050/category`,
      timeout: 3000,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(({data}) => {
      return data
    })
    .catch((err) => {
      if (err) {
        return err
      }
    })

    setCategory(res)
    return res
  }

  useEffect(() => {
    getCategory()
  }, [])
  
  const handleOnFocus = (e) => {
    if (e.target.classList.contains('is-invalid')) {
      e.target.classList.remove('is-invalid')
    }

    if (e.target.classList.contains('is-valid')) {
      e.target.classList.remove('is-valid')
    }
  }

  return (
    <div className="modal fade" id="newProductModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title">Nuevo producto</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="w-100 px-0">
              <form onSubmit={handleProductSubmit}>
                <div className="row w-100 mx-0 px-3 d-flex justify-content-center">
                  <div className="col-12 px-0">
                    <div className="form-group">
                      <input className='form-control' id="productTitulo" placeholder='Titulo' type="text" onFocus={handleOnFocus} />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="form-group">
                      <input className='form-control' id="productMarca" placeholder='Marca' type="text" onFocus={handleOnFocus} />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="form-group">
                      <input className='form-control' id="productPrecio" placeholder='Precio' type="text" onFocus={handleOnFocus} />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="form-group">
                      <input className='form-control' id="productStock" placeholder='Stock' type="number" onFocus={handleOnFocus} />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="form-group">
                      <input className='form-control' id="productImg" placeholder='URL de la imagen.' type="text" onFocus={handleOnFocus} />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="form-group">
                      <select className='form-control' id="productCategory" placeholder='URL de la imagen.' type="text" onFocus={handleOnFocus}>
                        <option value='0'>Categoria</option>
                        {
                          category.length > 0 && category.map(({nombre, id}) => {
                            return <option key={id} value={id}>{nombre}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <button type="submit" className="btn btn-primary w-100">Agregar producto</button>
                  </div>
                  <div id="textWrongProduct" className="col-12 px-0 mt-3 textWrong d-none">
                    <p>Verifica los valores de los campos anteriores por favor.</p>
                  </div>
                  <div id="productAdded" className="col-12 px-0 mt-3 textValid d-none">
                    <p>Producto agregado correctamente</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
