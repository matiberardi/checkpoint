import { supabase } from "./supabase";

export async function getUsers(email) {
  const { data: alumno } = await supabase
    .from("alumnos")
    .select()
    .eq("email", email);

  if (alumno.length > 0) return 'alumno'

  const { data: preceptor } = await supabase
    .from("preceptores")
    .select()
    .eq("email", email);

  if (preceptor.length > 0) return 'preceptor'
  
  return 'error'
}