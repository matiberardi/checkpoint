import { Link } from 'react-router-dom'

export default function ContactPage () {
  return (
    <>
      <h1 className='text-3xl'>Nosotros</h1>
      <div className='flex'>
        <section className=''>
          <p className='text-2xl max-w-[600px] mb-4'>
            Checkpoint es una página que brinda su servicio a instituciones para facilitar el registro de asistencias dentro de las mismas.<br/>
            Se utiliza una base de datos para cargar de forma sencilla la información necesaria de cada identidad.<br/>
            <br/>
            ¿Qué esperas? ¡Aprovecha al máximo las grandes capacidades de Checkpoint!
          </p>

          <div className='flex gap-4 mt-20'>
            <Link to='/nosotros' className='font-bold bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-md'>
              Nosotros
            </Link>
            <Link to='/contact' className='font-bold bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-md'>
              Contacto
            </Link>
            <Link to='/dashboard' className='font-bold bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-md'>
              Asistencias
            </Link>
          </div>
        </section>
        <img
          className='w-full max-w-[600px]'
          src='https://i.imghippo.com/files/84Jh51722602676.png'
          alt='Logo'
        />
      </div>
    </>
  )
}
