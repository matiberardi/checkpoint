import { Link } from 'react-router-dom'

export default function ContactPage () {
  return (
    <>
      <h1 className='text-3xl'>Contacto</h1>
      <div className='flex'>
        <section className=''>
          <p className='text-2xl max-w-[600px] mb-4'>
            Si tienes dudas o necesitas ayuda, no dudes en contactarnos.
          </p>
          <p className='text-slate-500 text-2xl'>mberardi@etrr.edu.ar</p>
          <p className='text-slate-500 text-2xl'>ifreitag@etrr.edu.ar</p>
          <p className='text-slate-500 text-2xl'>gpalavecino@etrr.edu.ar</p>

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
          src='https://i.imghippo.com/files/gInwf1725909470.png'
          alt='Personas trabajando en una laptop'
        />
      </div>
    </>
  )
}
