import { get } from "./helper.service";

export async function getAllEmployees() {
  const response = await get("employee/getAll");
  return response;
}

export async function getEmployeeById(id) {
  const response = await get(`employee/getEmployeeById/${id}`);
  return response;
}
