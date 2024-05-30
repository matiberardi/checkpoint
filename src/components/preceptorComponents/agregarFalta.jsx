/* eslint-disable react/prop-types */
import { useState } from "react"
import { addFalta } from "../../utils/faltas"

function AgregarFalta({ alumno, updateAlumno }) {
  const [open, setOpen] = useState(false)

  const handleForm = () => {
    setOpen(!open)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { fecha, valor } = Object.fromEntries(formData)
    const id = Math.random().toString(36).slice(2)
    await addFalta(alumno, { fecha, valor, id })
    handleForm()
    e.target.reset()
    updateAlumno()
  }

  return (
    <>
      <button
        className="bg-slate-300 hover:bg-slate-400 font-bold py-2 px-4 rounded mt-10 w-[200px]"
        onClick={handleForm}
      >
        {open ? 'Cancelar' : 'Agregar falta'}
      </button>
      {open &&
        <form className="flex flex-col gap-2 mt-2 w-[200px]" onSubmit={handleSubmit}>
          <label htmlFor="fecha">Fecha</label>
          <input type="date" id="fecha" placeholder="Fecha" name="fecha" required />
          <label htmlFor="valor">Valor</label>
          <select name="valor" id="valor">
            <option value="1">Falta (1)</option>
            <option value="0.5">Retardo (0.5)</option>
            <option value="0.25">Tardanza (0.25)</option>
          </select>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Guardar</button>
        </form>
      }
    </>
  )
}

export default AgregarFalta