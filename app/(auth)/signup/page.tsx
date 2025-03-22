import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="border border-orange-500 bg-orange-500 text-white px-10 py-2 rounded-md">
      <p className="text-2x1 my-4 text" >Registrarse</p>
      <div className="flex flex-col gap-2 my-4 items-center">
      <Input label="Email" type="email" isRequired={true} size="sm" />
      <Input label="Contraseña" type="password" isRequired={true} size="sm" />
      <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />
      </div>
      <div className="flex flex-col items-centerr gap-2">
      <Button color="primary">Registrarse</Button>
      <p>¿Ya tienes una cuenta? <Link href="/login" className="text-orange-100 underline">Inicia Sesion</Link></p>
    </div>
    </div>
  );
}
