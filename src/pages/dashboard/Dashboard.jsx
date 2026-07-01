import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardStats from "../../components/dashboard/DashboardStats";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-600 mt-2">
          Manage your society efficiently with NestSphere.
        </p>
      </div>

      <DashboardStats />
    </DashboardLayout>
  );
}

export default Dashboard;