const data = [
  {
    name: 'inventory',
    text: "Inventario",
    url: "/inventory"
  },
  {
    name: 'stores',
    text: "Farmacias",
    url: "/stores"
  },
  {
    name: 'cart',
    text: "Carrito",
    url: "/cart"
  },
  {
    name: 'dropdownAboutus',
    text: "Acerca de",
    url: "",
    subItems: [
      {
        name: "aboutUs",
        text: "Acerca de",
        url: "/about-us"
      },
      {
        name: "contactUs",
        text: "Contactanos",
        url: "/contact-us"
      }
    ]
  }
]

export default data;