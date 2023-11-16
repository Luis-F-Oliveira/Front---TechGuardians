import LoginImg from"../../assets/loginImg.png"
import { Input } from "../../Components/Input/style"
import { Button } from "../../Components/Button/style"
import { Link } from "react-router-dom"
const index = () => {
  const handleSubmit = () => {}
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-800 h-96 grid grid-cols-2 rounded">
        <div className="flex w-96 h-full justify-center items-center col-start-1 col-end-3">
          <form className="justify-center items-center flex-col flex w-96 mb-8" onSubmit={handleSubmit}>
          <h1 className="mb-3 font-bold text-3xl">Login</h1>
            <label className="mb-4">
              <span className="block mb-2">Email</span>
              <Input type="email" required placeholder="email@example"/>
            </label>
            <label className="mb-8">
              <span className="block mb-2">Senha</span>
              <Input type="password" placeholder="Senha" required/>
            <Link className="ml-1" to={"/register"}>Não possui conta?</Link>
            </label>
            <Button className="w-44">Login</Button>
          </form>
        </div>
        <div className="flex flex-1 w-96 h-full justify-center items-center col-end-7 col-span-2">
         <img src={LoginImg} className="mb-28" />
        </div>
      </div>
    </div>
  )
}

export default index