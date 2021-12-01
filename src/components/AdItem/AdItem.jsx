import './AdItem.scss'

export default function AdItem({url, title, content, buttonText}) {
  return (
    <div className="card AdItem">
      { url && <img src={url} alt="Ad image" className="card-img-top"/> }
      <div className="card-body">
        { title && <h5 className="card-title">{title}</h5> }
        { content && <p className="card-text">{content}</p> }
        { buttonText && <button className="btn btn-primary">{buttonText}</button> }
      </div>
    </div>
  )
}
