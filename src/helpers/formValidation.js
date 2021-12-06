const formValidation = (inputs, textError) => {
  let validated = true;
  const inputsValidated = inputs.map(({id, type}) => {
    const item = document.querySelector(`#${id}`)
    if (item) {
      switch (type) {
        case 'usuario':
          if ( !item.value.includes(' ') && item.value.length > 3 ) return true;
          else {
            validated = false;
            return false
          };

        case 'password':
          if ( item.value.length > 3 ) return true;
          else {
            validated = false;
            return false
          };

        case 'category':
          if ( item.value != 0 ) return true;
          else {
            validated = false;
            return false
          };
      
        default:
          if ( item.value.length > 0 ) return true;
            else {
              validated = false;
              return false
            };
      }
    }
  })

  if(inputsValidated.length > 0) {
    inputsValidated.map((item, index) => {
      if (item) {
        document.querySelector(`#${inputs[index].id}`).classList.add('is-valid')
      } else {
        document.querySelector(`#${inputs[index].id}`).classList.add('is-invalid')
      }
    })
  }

  if (!validated) {
    if (document.querySelector(textError).classList.contains('d-none')) {
      document.querySelector(textError).classList.remove('d-none')
      console.log('hola')

      setTimeout(() => {
        document.querySelector(textError).classList.add('d-none')
      }, 3000);
    }
  }

  return validated
}

export default formValidation;