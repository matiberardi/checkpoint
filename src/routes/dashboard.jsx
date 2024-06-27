import { useState, useEffect } from 'react'

import { getUsers } from '../utils/usersManager'
import { useSession } from '@clerk/clerk-react'

import Preceptor from '../components/preceptor'
import Alumno from '../components/alumno'
import Profesor from '../components/profesor'

function SinCuenta () {
  return (
    <>
      <p className='text-red-500 font-bold'>Cuenta no encontrada</p>
      <p className='text-red-500'>Por favor, contacte con el administrador</p>
    </>
  )
}

export default function DashboardPage () {
  const [email, setEmail] = useState('')
  const [cuenta, setCuenta] = useState('')
  const { session } = useSession()

  useEffect(() => {
    if (!session) return

    const currentEmail = session.publicUserData.identifier
    setEmail(currentEmail)
    getUsers(currentEmail)
      .then(res => setCuenta(res))
  }, [session])

  const cuentas = {
    preceptor: <Preceptor />,
    alumno: <Alumno email={email} />,
    profesor: <Profesor />,
    error: <SinCuenta />
  }

  return (
    <>
      <p>
        Bienvenido <span className='font-bold'>{email}</span>
      </p>
      <p className='mb-10'>
        Rol <span className='font-bold'>{cuenta}</span>
      </p>
      {cuentas[cuenta]}
    </>
  )
}
