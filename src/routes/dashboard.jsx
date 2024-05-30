import { useState, useEffect } from "react";
import Preceptor from "../components/preceptor";
import { getUsers } from "../utils/usersManager";
import { useSession } from "@clerk/clerk-react";
import Alumno from "../components/alumno";

export default function DashboardPage() {
  const [email, setEmail] = useState('')
  const [cuenta, setCuenta] = useState('')
  const { session } = useSession();

  useEffect(() => {
    if (session) {
      const currentEmail = session.publicUserData.identifier
      setEmail(currentEmail)
      getUsers(currentEmail)
        .then(res => setCuenta(res))
    }
  }, [session])

  return (
    <>
      <p className="mb-10">Bienvenido <span className="font-bold">{email}</span></p>
      {cuenta === 'preceptor' && <Preceptor />}
      {cuenta === 'alumno' && <Alumno email={email} />}
      {cuenta === 'error'
        && <>
          <p className="text-red-500 font-bold">Cuenta no encontrada</p>
          <p className="text-red-500">Por favor, contacte con el administrador</p>
        </>
      }
    </>
  );
}