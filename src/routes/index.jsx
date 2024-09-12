import { Link } from 'react-router-dom'

export default function IndexPage () {
  return (
    <div className='flex gap-4'>
      <section>
        <p className='text-2xl max-w-[600px] mb-20'>
          ¡Toma tu asistencia fácilmente y ahorra tiempo para lo que realmente importa! Regístrate ahora y disfruta de un control sencillo y rápido de tu presencia en clase.
        </p>

        
        <div className='flex gap-4'>
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
        src='https://i.imghippo.com/files/xGSaQ1726167117.png'
        alt='Personas trabajando en una laptop'
      />
    </div>
  )
}
