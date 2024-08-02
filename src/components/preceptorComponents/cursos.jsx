/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { getCursos } from '../../utils/faltas'

function Cursos ({ setPage, setCurso }) {
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    getCursos()
      .then((cursos) => {
        setCursos(cursos)
      })
  }, [])

  const changePage = (curso) => {
    setCurso(curso)
    setPage(1)
  }

  return (
    <div>
      <h1 className='text-3xl mb-4'>Cursos</h1>
      {/*<ul className='grid grid-cols-2 gap-2 w-fit'>*/}
      <ul className='grid grid-cols-4 gap-3 w-fit'>
        {cursos.map((curso) => (
          <li
            key={curso}
            className='text-xl bg-slate-300 w-fit px-4 py-2 rounded-md mb-2 hover:bg-slate-400 cursor-pointer inline m-1'
          >
            <button onClick={() => changePage(curso)}>
              {curso}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Cursos
