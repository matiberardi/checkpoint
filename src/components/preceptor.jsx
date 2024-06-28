import { useState } from 'react'

import Cursos from './preceptorComponents/cursos'
import Alumnos from './preceptorComponents/alumnos'
import Faltas from './preceptorComponents/faltas'

function Preceptor () {
  const [page, setPage] = useState(0)
  const [curso, setCurso] = useState(undefined)
  const [alumno, setAlumno] = useState(undefined)

  const pages = [
    () => <Cursos setPage={setPage} setCurso={setCurso} />,
    () => <Alumnos page={page} setPage={setPage} curso={curso} setAlumno={setAlumno} />,
    () => <Faltas alumnoicial={alumno} setPage={setPage} />
  ]

  return (
    <>{pages[page]()}</>
  )
}

export default Preceptor
