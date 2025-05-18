import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Employee } from "@/entities";
import EmployeeCard from "../_components/EmployeeCard";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";

export default async function EmployeePage({
  params,
}: {
  params: { id: string };
}) {
  const responseEmployee = await fetch(`${API_URL}/employees/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
  });
  const employee: Employee = await responseEmployee.json();
  return (
    <div className="w-full h-[90vh] flex flex-row items-center justify-center">
      <div>
        <EmployeeCard employee={employee}/>
        <img
          src={employee.employeePhoto}
          alt={`Foto de ${employee.employeeName} ${employee.employeeLastName}`}
          className="object-cover size-60"
        />
      </div>
      <FormUpdateEmployee employee={employee}/>
    </div>
  );
}