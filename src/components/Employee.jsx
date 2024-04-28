import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../services/employee.service";
function Employee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  // const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const data = await getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        // setError(error.message);
      }
    }
    fetchEmployee();
  }, [id]);
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name : {employee.name}</p>
      <p>Role : {employee.role}</p>
    </div>
  );
}

export default Employee;
