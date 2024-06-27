import { useAuth } from '@clerk/clerk-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function DashboardLayout () {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in')
    }
  }, [isLoaded])

  if (!isLoaded) {
    return (
      <p className='text-md font-bold'>Cargando...</p>
    )
  }

  return (<Outlet />)
}
