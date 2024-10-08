/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { getAlumnosByCurso } from '../../utils/faltas'

function Alumnos ({ setPage, curso, setAlumno }) {
  const [alumnos, setAlumnos] = useState([])

  useEffect(() => {
    getAlumnosByCurso(curso)
      .then((alumn) => {
        setAlumnos(alumn)
      })
  }, [])

  return (
    <>
      <button
        className='bg-slate-300 hover:bg-slate-400 px-2 py-1 rounded-md mb-4'
        onClick={() => setPage(0)}
      >
        Elegir otro curso
      </button>
      <h1 className='text-3xl mb-2 font-bold'>Camada {curso}</h1>
      <table className='w-full text-left gap-8'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Faltas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumn) => {
            let faltas = 0
            if (alumn.faltas) {
              alumn.faltas.map((falta) => (faltas += parseFloat(falta.valor)))
            }

            return (
              <tr key={alumn.id}>
                <td>{alumn.nombre}</td>
                <td>{alumn.apellido}</td>
                <td>{alumn.email}</td>
                <td>{faltas}</td>
                <td>
                  <button
                    className='bg-slate-300 hover:bg-slate-400 px-2 py-1 rounded-md'
                    onClick={() => {
                      setAlumno(alumn)
                      setPage(2)
                    }}
                  >
                    Ver faltas
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='h-20' />
    </>
  )
}
export default Alumnos
