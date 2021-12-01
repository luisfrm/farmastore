const data = [
  {
    name: 'inventory',
    text: "Inventario",
    url: "/inventory",
    icon: <i className="fas fa-pills"></i>
  },
  {
    name: 'stores',
    text: "Farmacias",
    url: "/stores",
    icon: <i className="fas fa-store-alt"></i>
  },
  {
    name: 'cart',
    text: "Carrito",
    url: "/cart",
    icon: <i className="fas fa-shopping-cart"></i>
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