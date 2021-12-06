function AboutUs (){
  return (
    <section className='container'>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-12 col-md-6">
          <h1 className="mb-5 text-center">Acerca de...</h1>
          <p>Somos un grupo de jovenes programadores estudiantes en la <a href="https://urbe.edu/">Universidad Rafael Belloso Chacin</a>.</p>
          <p>Este proyecto formo parte de nuestra tesis durante varios meses, fue desarrollada con mucho trabajo duro.</p>
          <p>Este proyecto nos ayudo a aprender mucho referente a las tecnologias mas recientes, como lo es <a href="https://nodejs.org/es/">NodeJS</a> y su framework <a href="https://expressjs.com/es/">Express</a> en el backend, Javascript y uno de sus famosos Framework <a href="https://es.reactjs.org/">React JS</a>, todo esto en conjunto con MySQL para almacenar toda la informacion. La base de datos esta almacenada en un <a href="https://remotemysql.com/">hosting gratuito</a>, el cual fue de mucha ayuda para la realizacion de este proyecto.</p>
          <p>Asi mismo, finalizamos este breve mensaje para agradecer a todos los participes en toda esta ensenanza que hemos tenido, dentro como fuera de la universidad.</p>
          <p className="mt-5 font-weight-bold text-right">
            Rivas Luis & Jimmy Alcala.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;