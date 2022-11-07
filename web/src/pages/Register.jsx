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
  name: yup.string().required("Preencha seu nome"),
  username: yup.string().required("Preencha seu nome de usuário"),
  email: yup
    .string()
    .email("Informe um e-mail válido")
    .required("Informe seu email"),
  password: yup.string().required("Digite uma senha"),
});

export function Register() {
  const [auth] = useLocalStorage('auth', {})
  const formik = useFormik({
    onSubmit: async (values) => {
      await axios({
        method: 'post',
        baseURL: import.meta.env.VITE_API_URL,
        url: '/users',
        data: values
      })
      console.log(res.data)
    },
    initialValues: {
      name: "",
      username: "",
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
          <h2 className="text-xl font-bold">Crie sua conta</h2>
        </div>
        <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Digite seu nome"
            label="Seu nome"
            error={formik.touched.name && formik.errors.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            name="username"
            type="text"
            placeholder="Crie um nome de usuário"
            label="Seu username"
            error={formik.touched.username && formik.errors.username}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            name="email"
            type="text"
            placeholder="Digite seu melhor e-mail"
            label="Seu e-mail"
            error={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            name="password"
            type="password"
            placeholder="Crie uma senha"
            label="Sua senha"
            error={formik.touched.password && formik.errors.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            type="submit"
            className="block w-full text-white bg-red-500 px-6 py-3 rounded-xl text-center disabled:opacity-50 disabled:bg-gray-500"
            disabled={!formik.isValid}
          >
            {formik.isSubmitting ? 'Carregando...' : 'Criar minha conta'}
          </button>
        </form>
      </main>
    </>
  );
}
