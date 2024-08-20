/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { getCursos } from '../../utils/faltas'

function ShowCurso ({ curso, changePage, moda }) {
  if (curso?.length > 0) {
    return (
      <ul className='flex flex-col'>
        <li className='font-bold'>{moda}</li>
        {curso.map((c) => (
          <li key={c} className='text-xl bg-slate-300 w-fit px-4 py-2 rounded-md mb-2 hover:bg-slate-400 cursor-pointer inline m-1'>
            <button onClick={() => changePage(c)}>
              {c}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

function Cursos ({ setCurso, setPage }) {
  const [cursos, setCursos] = useState([])

  const formatCursos = (cursos) => {
    // separar tem tel y a y b
    const cursosSeparados = {
      TEL: [],
      TEM: [],
      basico: []
    }

    cursos.forEach((curso) => {
      const [, esp] = curso.split(' ')

      if (esp === 'TEL') cursosSeparados.TEL.push(curso)
      if (esp === 'TEM') cursosSeparados.TEM.push(curso)
      if (esp === 'A' || esp === 'B') cursosSeparados.basico.push(curso)
    })
    return cursosSeparados
  }

  useEffect(() => {
    getCursos()
      .then((cursos) => {
        setCursos(formatCursos(cursos))
      })
  }, [])

  const changePage = (curso) => {
    setCurso(curso)
    setPage(1)
  }

  return (
    <div>
      <h4>Cursos disponibles</h4>

      <section className='flex gap-20'>
        <div className='grid grid-cols-3 w-fit'>
          <ShowCurso curso={cursos.TEL} moda='TEL' changePage={changePage} />
          <ShowCurso curso={cursos.TEM} moda='TEM' changePage={changePage} />
          <ShowCurso curso={cursos.basico} moda='Curso Basico' changePage={changePage} />
        </div>

        <img src='https://i.imghippo.com/files/84Jh51722602676.png' alt='imagen' className='h-96' />
      </section>

    </div>
  )
}

export default Cursos
