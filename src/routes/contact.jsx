import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <>
      <h1 className="text-3xl">Contacto</h1>
      <div className="flex">
        <section className="">
          <p className="text-2xl max-w-[600px] mb-4">
            Si tienes dudas o necesitas ayuda, no dudes en contactarnos.
          </p>
          <p className="text-slate-500 text-2xl">mberardi@etrr.edu.ar</p>
          <p className="text-slate-500 text-2xl">ifreitag@etrr.edu.ar</p>

          <div className="flex gap-4 mt-20">
            <Link to="/dashboard" className="font-bold bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-md">
              Asistencias
            </Link>
          </div>
        </section>
        <img
          className="w-full max-w-[600px] rounded border-4 border-slate-300"
          src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Personas trabajando en una laptop"
        />
      </div>
    </>
  );
}
