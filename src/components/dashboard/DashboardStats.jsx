import { useEffect, useState } from "react";
import { Users, Building2, Home, CircleOff } from "lucide-react";

import StatCard from "../dashboard/StatsCard";
import { getDashboardStats } from "../../services/dashboardService";
import OccupancyChart from "./OccupancyChart";

import { toast } from "react-hot-toast";

function DashboardStats() {
  const [stats, setStats] = useState({
    totalMembers: 0,
    totalFlats: 0,
    occupiedFlats: 0,
    vacantFlats: 0,
  });

  const [loading, setLoading] = useState(true);

  const loadStats = async () => {
    try {
      setLoading(true);

      const data = await getDashboardStats();

      setStats(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-36 rounded-xl bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Total Members"
        value={stats.totalMembers}
        icon={Users}
        color="bg-blue-600"
      />

      <StatCard
        title="Total Flats"
        value={stats.totalFlats}
        icon={Building2}
        color="bg-green-600"
      />

      <StatCard
        title="Occupied Flats"
        value={stats.occupiedFlats}
        icon={Home}
        color="bg-orange-500"
      />

      <StatCard
        title="Vacant Flats"
        value={stats.vacantFlats}
        icon={CircleOff}
        color="bg-red-500"
      />
      <div className="mt-8">
        <OccupancyChart
          occupied={stats.occupiedFlats}
          vacant={stats.vacantFlats}
        />
      </div>
    </div>
  );
}

export default DashboardStats;
