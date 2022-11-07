import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLocalStorage } from 'react-use';
import { Navigate } from "react-router-dom";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Icons } from "../components/Icons";

import logo from "../assets/logo/logo-fundo-branco.svg";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("Informe seu email"),
  password: yup.string().required("Digite uma senha"),
});

export function Login() {
  const [auth, setAuth] = useLocalStorage('auth', {})
  const formik = useFormik({
    onSubmit: async (values) => {
      await axios({
        method: 'get',
        baseURL: import.meta.env.VITE_API_URL,
        url: '/login',
        auth: {
          username: values.email,
          password: values.password
        }
      })
      setAuth(res.data)
    },
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
  });

  if(auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <>
      <div className="flex justify-center p-4 border-b border-red-300">
        <Header variant={logo} />
      </div>
      <main className="container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <Icons name="back" className="h-6" />
          </a>
          <h2 className="text-xl font-bold">Entre na sua conta</h2>
        </div>
        <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
          <Input
            name="email"
            type="text"
            placeholder="Digite seu e-mail"
            label="Seu e-mail"
            error={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            label="Sua senha"
            error={formik.touched.password && formik.errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            type="submit"
            className="block w-full text-white bg-red-500 px-6 py-3 rounded-xl text-center disabled:opacity-50 disabled:bg-gray-500"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? 'Carregando...' : 'Acessar conta'}
          </button>
        </form>
      </main>
    </>
  );
}
