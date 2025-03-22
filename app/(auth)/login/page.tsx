import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const data = new FormData(e.target);
    axios.post("")
    return;
  }
  return (
    <form className="border border-orange-500 bg-orange-500 text-white px-10 py-2 rounded-md">
      <p className="text-2xl my-4">Iniciar Sesión</p>
      <div className="flex flex-col gap-2 my-4 items-center">
        <Input label="Email"name="UserEmail" type="email" isRequired={true} size="sm" />
        <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />
        <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button color="primary">Iniciar Sesion</Button>
        <p>¿No tienes cuenta? <Link href="/signup" className="text-orange-100 underline">¡Regístrate!</Link></p>
      </div>
    </form>
  );
}
