function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <div className="hidden lg:flex bg-blue-600 text-white items-center justify-center p-12">

        <div>

          <h1 className="text-5xl font-bold">
            NestSphere
          </h1>

          <p className="mt-6 text-lg opacity-90">
            Smart Society Management Platform
          </p>

          <div className="mt-10 space-y-4">

            <p>✔ Resident Management</p>

            <p>✔ Maintenance Billing</p>

            <p>✔ Visitor Tracking</p>

            <p>✔ Complaint System</p>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center p-8 bg-slate-50">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;