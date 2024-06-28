/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import AgregarFalta from './agregarFalta'
import formatDate from '../../utils/formatDate'
import { getAlumno, updateFaltas } from '../../utils/faltas'

function Faltas ({ alumnoInicial, setPage }) {
  const [alumno, setAlumno] = useState(alumnoInicial)
  const [faltas, setFaltas] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let aux = 0
    if (alumno.faltas) {
      alumno.faltas.forEach(falta => (aux += parseFloat(falta.valor)))
    }
    setFaltas(aux)
  }, [alumno])

  const updateAlumno = () => {
    setLoading(true)
    getAlumno(alumno.id)
      .then(newAlumno => {
        setAlumno(newAlumno[0])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error al obtener el alumno:', error)
        setLoading(false)
      })
  }

  const deleteFalta = async (id) => {
    const newFaltas = alumno.faltas.filter(falta => falta.id !== id)
    await updateFaltas(alumno.id, newFaltas)
    updateAlumno()
  }

  return (
    <div>
      <button className='bg-slate-300 hover:bg-slate-400 px-2 py-1 rounded-md mb-4' onClick={() => setPage(1)}>
        Elegir otro alumno
      </button>
      {loading
        ? (
          <div className='text-2xl'>Cargando...</div>
          )
        : (
          <>
            <h1 className='text-3xl font-bold'>{alumno.nombre} {alumno.apellido}</h1>
            <h2 className='text-2xl'>{faltas} Faltas</h2>

            {alumno.faltas && alumno.faltas.length > 0
              ? (
                <p className='text-md text-red-400 font-bold mb-4'>Hay {alumno.faltas.length} registro/s</p>
                )
              : (
                <p className='text-md text-red-400 font-bold mb-4'>No hay faltas registradas</p>
                )}

            {alumno.faltas && (
              <table className='w-full text-left max-w-[600px]'>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Valor</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {alumno.faltas.map((falta) => (
                    <tr key={falta.id}>
                      <td>{formatDate(falta.fecha)}</td>
                      <td>{falta.valor}</td>
                      <td>
                        <button
                          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                          onClick={() => deleteFalta(falta.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <AgregarFalta alumno={alumno} updateAlumno={updateAlumno} />
          </>
          )}
    </div>
  )
}

export default Faltas
