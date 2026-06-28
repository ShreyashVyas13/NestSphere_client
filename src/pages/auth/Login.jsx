// import { useState } from "react";
// import AuthLayout from "../../layouts/AuthLayout";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";

// import { Eye, EyeOff } from "lucide-react";

// function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <AuthLayout>
//       <Card className="w-full max-w-md shadow-xl rounded-2xl">

//         <CardHeader>
//           <CardTitle className="text-3xl text-center">
//             Welcome Back 👋
//           </CardTitle>

//           <p className="text-center text-gray-500 mt-2">
//             Login to your NestSphere account
//           </p>
//         </CardHeader>

//         <CardContent>

//           {/* Email */}

//           <div className="space-y-2 mb-5">
//             <Label>Email</Label>

//             <Input
//               type="email"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password */}

//           <div className="space-y-2 mb-5">

//             <Label>Password</Label>

//             <div className="relative">

//               <Input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>

//             </div>

//           </div>

//           {/* Remember */}

//           <div className="flex justify-between items-center mb-6">

//             <div className="flex items-center gap-2">
//               <Checkbox id="remember" />

//               <Label htmlFor="remember">
//                 Remember Me
//               </Label>
//             </div>

//             <button className="text-blue-600 text-sm hover:underline">
//               Forgot Password?
//             </button>

//           </div>

//           <Button className="w-full h-11">
//             Login
//           </Button>

//         </CardContent>

//       </Card>
//     </AuthLayout>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Eye, EyeOff } from "lucide-react";

import { login } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  try {
    const data = await login(formData);

    console.log("API Response =>", data);

    localStorage.setItem("token", data.token);

    console.log(
      "Saved Token =>",
      localStorage.getItem("token")
    );

    navigate("/dashboard");

  } catch (err) {
    console.log(err);

    setError(
      err.response?.data?.message || "Login Failed"
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <AuthLayout>
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Welcome Back 👋
          </CardTitle>

          <p className="text-center text-gray-500 mt-2">
            Login to your NestSphere account
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Email */}

            <div className="space-y-2 mb-5">
              <Label>Email</Label>

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}

            <div className="space-y-2 mb-5">
              <Label>Password</Label>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember */}

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />

                <Label htmlFor="remember">
                  Remember Me
                </Label>
              </div>

              <button
                type="button"
                className="text-blue-600 text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-4">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full h-11"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}

export default Login;   