import '@fortawesome/fontawesome-free/css/all.min.css'

import { Linksdata, contactInfo } from './data'
import './Footer.scss'

function Footer (){
  const fetchLinks = () => {
    if (Linksdata.length>0) {
      const linksData = Linksdata.map(({url, text}, index) => {
        return (
          <div className="col-md-6 py-1 pr-0 text-white" key={index}>
            <a href={url} className="footer-text">{text}</a>
          </div>
        )
      })
      return linksData;
    }
  }

  const links = fetchLinks();
  
  return (
    <footer className="bg-blue py-5" id="footer">
      <div className="d-none d-md-flex text-center text-md-left text-white">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-6 col-lg-4">
              <h3 className="footer-title underline mb-4">Links</h3>
              <div className="row">
                {
                  links.map(item => item )
                }
              </div>
            </div>
            <div className="col-md-3">
              <h3 className="footer-title underline mb-4">Contactanos</h3>
              <div className="row py-1 pl-3">
                <div className="col-1 px-0"><i className="fas fa-phone"></i></div>
                <div className="col-10 pl-0">
                  <span className="footer-text">{contactInfo.phone}</span>
                  </div>
              </div>
              <div className="row py-1 pl-3">
                <div className="col-1 px-0"><i className="fas fa-map-marker-alt"></i></div>
                <div className="col-10 px-0">
                  <a href={contactInfo.addressUrl} className="footer-text">{contactInfo.address}</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;