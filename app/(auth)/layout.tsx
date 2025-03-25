import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-orange-200 w-screen h-screen overflow-hidden grid place-items-center">
      <div className="text-center flex flex-col items-center">
        <div className="flex flex-col items-center mb-10">
          <Image 
            src="/Logo.svg"
            alt="Logo de Ocso" 
            width={250}  
            height={0}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
