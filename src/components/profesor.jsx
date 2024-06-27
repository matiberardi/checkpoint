import { useState } from 'react'

import Cursos from './profesorComponents/cursos'
import Alumnos from './profesorComponents/alumnos'
import Faltas from './profesorComponents/faltas'

function Profesor () {
  const [page, setPage] = useState(0)
  const [curso, setCurso] = useState(undefined)
  const [alumno, setAlumno] = useState(undefined)

  const pages = [
    () => <Cursos setCurso={setCurso} setPage={setPage} />,
    () => <Alumnos setPage={setPage} curso={curso} setAlumno={setAlumno} />,
    () => <Faltas setPage={setPage} alumnoInicial={alumno} />
  ]

  return (
    <>{pages[page]()}</>
  )
}

export default Profesor
