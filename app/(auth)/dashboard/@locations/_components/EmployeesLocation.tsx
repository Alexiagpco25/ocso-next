import axios from "axios";
import { Employee } from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    if (!store) return "No hay empleados";
    const token = cookies().get(TOKEN_NAME)?.value;
    console.log("Store:", store);
        const { data } = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return (
        <>
            {data.map((employee) => {
                return <div>{employee.employeeName}</div>;
            })}
            </>
        
    );
    
}
   