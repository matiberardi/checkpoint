/* eslint-disable react/prop-types */
import Faltas from "./alumnoComponents/faltas"

function Alumno({ email }) {
  return (
    <Faltas email={email} />
  )
}

export default Alumno