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
  ChevronRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Members",
    icon: Users,
    path: "/members",
  },
  {
    title: "Flats",
    icon: Building2,
    path: "/flats",
  },
  {
    title: "Parking",
    icon: Car,
    path: "#",
  },
  {
    title: "Complaints",
    icon: Wrench,
    path: "#",
  },
  {
    title: "Maintenance",
    icon: CreditCard,
    path: "#",
  },
  {
    title: "Notices",
    icon: Bell,
    path: "#",
  },
  {
    title: "Events",
    icon: CalendarDays,
    path: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "#",
  },
];

function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}

      <div className="px-7 py-8 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl font-bold">
            N
          </div>

          <div>

            <h1 className="text-xl font-bold">
              NestSphere
            </h1>

            <p className="text-slate-400 text-sm">
              Society Management
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <p className="text-xs uppercase text-slate-500 tracking-wider px-4 mb-4">
          Main Menu
        </p>

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <div className="flex items-center gap-3">

                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>

              </div>

              <ChevronRight size={16} />

            </NavLink>

          );
        })}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            S
          </div>

          <div>

            <h3 className="font-semibold">
              Super Admin
            </h3>

            <p className="text-xs text-slate-400">
              Administrator
            </p>

          </div>

        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;