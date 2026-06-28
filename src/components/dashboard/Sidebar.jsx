import {
  LayoutDashboard,
  Users,
  Building2,
  Car,
  Wrench,
  CreditCard,
  Bell,
  CalendarDays,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "Members", icon: Users },
  { title: "Flats", icon: Building2 },
  { title: "Parking", icon: Car },
  { title: "Complaints", icon: Wrench },
  { title: "Maintenance", icon: CreditCard },
  { title: "Notices", icon: Bell },
  { title: "Events", icon: CalendarDays },
  { title: "Settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          NestSphere
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Society Management
        </p>
      </div>

      <nav className="flex-1 mt-6 px-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition mb-2"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-600 transition">
          <LogOut size={20} />

          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;