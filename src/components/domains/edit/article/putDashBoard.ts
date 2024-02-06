import { axiosInstance } from "@/api/axiosInstance";

const testAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Njg5LCJ0ZWFtSWQiOiIyLTkiLCJpYXQiOjE3MDY2NzgwMzEsImlzcyI6InNwLXRhc2tpZnkifQ.xTJzppjh39utbp7V6-yYsFFXYzDmDT4jFUxabGtVZlY";
export async function putDashBoard(
  dashboardId: string | string[] | undefined,
  putData: { title: string; color: string }
) {
  await axiosInstance.put(`dashboards/${dashboardId}`, putData, {
    headers: {
      Authorization: `Bearer ${testAccessToken}`,
      "Content-Type": "application/json",
    },
  });
}
