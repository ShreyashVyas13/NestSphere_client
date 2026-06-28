import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";

import {
  Users,
  Building2,
  Wrench,
  IndianRupee,
} from "lucide-react";

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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Residents"
          value="1,256"
          icon={Users}
          color="bg-blue-600"
        />

        <StatCard
          title="Flats"
          value="430"
          icon={Building2}
          color="bg-green-600"
        />

        <StatCard
          title="Complaints"
          value="18"
          icon={Wrench}
          color="bg-red-500"
        />

        <StatCard
          title="Revenue"
          value="₹4,52,000"
          icon={IndianRupee}
          color="bg-purple-600"
        />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;