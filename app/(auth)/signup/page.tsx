import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="bg-orange-500 px-10 py-2 rounded-md">
      <p className="text-2xl my-4 text-white">Registrarse en <span></span></p>
      <div className="flex flex-col gap-2 my-4 items-center">
        <Input label="Email" type="email" isRequired size="sm" />
        <Input label="Contraseña" type="password" isRequired size="sm" />
        <Input label="Repetir contraseña" type="password" isRequired size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
      <Button color="primary">Registrarse</Button>
      <p className="text-white">
          ¿Ya tienes una cuenta?
          <Link href="/login">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
