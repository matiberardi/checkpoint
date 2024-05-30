/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import formatDate from '../../utils/formatDate';

import { supabase } from "../../utils/supabase";

async function getAlumnoByEmail(email) {
  const { data: alumno } = await supabase.from("alumnos").select().eq("email", email);
  return alumno[0];
}

function Faltas({ email }) {
  const [alumno, setAlumno] = useState({ id: 0, faltas: [] });
  const [faltas, setFaltas] = useState(0);

  useEffect(() => {
    getAlumnoByEmail(email)
      .then(alumno => setAlumno(alumno))
  }, []);

  useEffect(() => {
    let aux = 0;
    if (alumno.faltas) {
      alumno.faltas.forEach(falta => aux += parseFloat(falta.valor));
    }
    setFaltas(aux);
  }, [alumno]);

  return (
    <div>
      <>
        <h1 className="text-3xl font-bold">{alumno.nombre} {alumno.apellido}</h1>
        <h2 className="text-2xl">{faltas} Faltas</h2>

        {alumno.faltas && alumno.faltas.length > 0 ? (
          <p className="text-md text-red-400 font-bold mb-4">Hay {alumno.faltas.length} registro/s</p>
        ) : (
          <p className="text-md text-red-400 font-bold mb-4">No hay faltas registradas</p>
        )}

        {alumno.faltas && (
          <table className="w-full text-left max-w-[600px]">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {alumno.faltas.map((falta) => (
                <tr key={falta.id}>
                  <td>{formatDate(falta.fecha)}</td>
                  <td>{falta.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </>
    </div>
  );
}

export default Faltas;
