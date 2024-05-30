import { useState } from "react";
import Cursos from "./preceptorComponents/cursos";
import Alumnos from "./preceptorComponents/alumnos";
import Faltas from "./preceptorComponents/faltas";

function Preceptor() {
  const [page, setPage] = useState(1);
  const [curso, setCurso] = useState(undefined)
  const [alumno, setAlumno] = useState(undefined)

  return (
    <>
      {page === 1 && <Cursos setPage={setPage} setCurso={setCurso}/>}
      {page === 2 && <Alumnos page={page} setPage={setPage} curso={curso} setAlumno={setAlumno}/>}
      {page === 3 && <Faltas alumnoInicial={alumno} setPage={setPage} />}
    </>
  )
}

export default Preceptor