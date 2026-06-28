import { Bell, UserCircle } from "lucide-react";

function Topbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">

      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer" />

        <div className="flex items-center gap-2">
          <UserCircle size={35} />

          <div>
            <h3 className="font-semibold">
              Super Admin
            </h3>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Topbar;