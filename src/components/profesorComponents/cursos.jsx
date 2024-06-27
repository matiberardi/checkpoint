/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { getCursos } from '../../utils/faltas'

function Cursos ({ setCurso, setPage }) {
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
      <h4>Cursos disponibles</h4>
      <ul>
        {cursos.map((curso) => (
          <li
            key={curso}
            className='text-xl bg-slate-300 w-fit px-4 py-2 rounded-md mb-2 hover:bg-slate-400 cursor-pointer m-1'
          >
            <button onClick={() => changePage(curso)}>{curso}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cursos
