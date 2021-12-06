import axios from "axios"

const updateViews = async(id) => {
  await axios({
    method: 'post',
    url: `http://localhost:5050/products/updateViews/${id}`,
    timeout: 3000,
    headers: {
      "Content-Type": "application/json"
    }
  })
}

export const goToProduct = (id) => {
  updateViews(id)
  
  window.open(`/inventory/${id}`, "_self")
}

export const clearForm = (inputs) => {
  if(inputs.length > 0) {
    inputs.map(({}, index) => {
      if (document.querySelector(`#${inputs[index].id}`).classList.contains('is-valid')) {
        document.querySelector(`#${inputs[index].id}`).classList.remove('is-valid')
      }

      if (document.querySelector(`#${inputs[index].id}`).classList.contains('is-invalid')) {
        document.querySelector(`#${inputs[index].id}`).classList.remove('is-invalid')
      }

      if (document.querySelector(`#${inputs[index].id}`)) {
        if ( inputs[index].type!=='category' ) {
          document.querySelector(`#${inputs[index].id}`).value=""
        } else {
          document.querySelector(`#${inputs[index].id}`).value="0"
        }
      }
      return 0;
    })
  }
} 

export const getItemsInCart = () => {
  const elementsString = sessionStorage.getItem('cart')
  return JSON.parse(elementsString)
}

export const addItemInCart = (element) => {
  const elements = getItemsInCart()

  const oldItem = elements.find((item) => item.id===element.id)

  if ( oldItem !== undefined ){
    oldItem.stock+=element.stock
  }else {
    elements.push(element)
  }
  
  sessionStorage.setItem('cart', JSON.stringify(elements))
}

export const removeItemInCart = (id) => {
  const elements = getItemsInCart()
  console.log(elements)
  const oldItem = elements.find((item) => id==item.id)

  elements.map((item, index) => {
    if(item==oldItem) {
      elements.splice(index, 1)
    }
  })

  sessionStorage.setItem('cart', JSON.stringify(elements))  
}

export const clearCart = () => {
  const elements = []
  sessionStorage.setItem('cart', JSON.stringify(elements))
}