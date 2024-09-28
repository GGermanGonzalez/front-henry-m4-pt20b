
"use client";

import { validateEmail, validatePassword } from "@/helpers/validation";
import { LoginForm as Data } from "@/interfaces/forms";
import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { loginService } from "@/services/authServices";
import { AuthContext } from "@/contexts/authContext";
import Alert from "../Alert/Alert"; 

const LoginForm = () => {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const initialData: Data = { email: "", password: "" };
  const initialDirty = { email: false, password: false };

  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [dirty, setDirty] = useState(initialDirty);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await loginService(apiUrl + "/users/login", data);

    if (response.login) {
      setAlertMessage("Login successful!");
      setAlertType("success");
      setUser(response);
    } else {
      setAlertMessage("User or credentials wrong!");
      setAlertType("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true });
  };

  const handleCloseAlert = () => {
    setAlertMessage("");
    setAlertType(null);
    if (alertType === "success") {
      router.back(); 
    }
  };

  useEffect(() => {
    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
    });
  }, [data]);

  return (
    <form className="flex flex-col w-full max-w-md mx-auto mt-12 mb-10 p-8 bg-gradient-to-r from-green-400 to-green-600 border border-green-700 shadow-lg rounded-lg gap-6" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-center text-white">Login</h2>

      {alertMessage && (
        <div className="mb-4">
          <Alert message={alertMessage} type={alertType!} onClose={handleCloseAlert} />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          placeholder="mail@mail.com"
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-quinary focus:ring-2 focus:outline-none transition ease-in-out duration-150"
        />
        {dirty.email && errors.email && <p className="mt-1 text-sm text-white">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          placeholder="At least 8 characters"
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-quinary focus:ring-2 focus:outline-none transition ease-in-out duration-150"
        />
        {dirty.password && errors.password && <p className="mt-1 text-sm text-white">{errors.password}</p>}
      </div>

      <Button variant="quinary" className="w-full py-2 text-white bg-quinary hover:bg-quinary-dark rounded-lg transition ease-in-out duration-150">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;







