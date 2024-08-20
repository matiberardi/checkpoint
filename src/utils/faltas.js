import { supabase } from './supabase'

export async function getAlumnos () {
  const { data: alumnos } = await supabase.from('alumnos').select()
  return alumnos
}

export async function getCursos () {
  const alumnos = await getAlumnos()
  const cursos = alumnos.map((alumn) => alumn.curso + ' ' + alumn.Modalidad)
  const uniqueCursos = [...new Set(cursos)]
  return uniqueCursos
}

export async function getAlumnosByCurso (curso) {
  const [camada, modalidad] = curso.split(' ')
  const { data: alumnos } = await supabase
    .from('alumnos')
    .select()
    .eq('curso', camada)
    .eq('Modalidad', modalidad)
  return alumnos
}

export async function getAlumno (id) {
  const { data: alumno } = await supabase.from('alumnos').select().eq('id', id)
  return alumno
}

export async function addFalta (alumno, { fecha, valor, id }) {
  if (!alumno.faltas) alumno.faltas = []

  // ver si ya hay una falta ese dia
  const { data: faltas } = await supabase
    .from('alumnos')
    .select('faltas')
    .eq('id', alumno.id)

  if (faltas[0].faltas) {
    const faltasDia = faltas[0].faltas.filter((falta) => falta.fecha === fecha)
    if (faltasDia.length > 0) return { error: 'Ya hay una falta ese día' }
  }

  const { error } = await supabase
    .from('alumnos')
    .update({ faltas: [...alumno.faltas, { fecha, valor, id }] })
    .eq('id', alumno.id)
  if (error) {
    console.log(error)
  }
}

export async function updateFaltas (id, faltas) {
  const { error } = await supabase
    .from('alumnos')
    .update({ faltas })
    .eq('id', id)
  if (error) {
    console.log(error)
  }
}
