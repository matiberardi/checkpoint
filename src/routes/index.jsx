import { Link } from 'react-router-dom'

export default function IndexPage () {
  return (
    <div className='flex gap-4'>
      <section>
        <p className='text-2xl max-w-[600px] mb-20'>
          ¡Toma tu asistencia fácilmente y ahorra tiempo para lo que realmente importa! Regístrate ahora y disfruta de un control sencillo y rápido de tu presencia en clase.
        </p>

        <div className='flex gap-4'>
          <Link to='/contact' className='font-bold bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-md'>
            Contacto
          </Link>
          <Link to='/dashboard' className='font-bold bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-md'>
            Asistencias
          </Link>
        </div>
      </section>
      <img
        className='w-full max-w-[600px] rounded-md border-4 border-slate-300'
        src='https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Personas trabajando en una laptop'
      />
    </div>
  )
}
