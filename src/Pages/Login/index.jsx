import LoginImg from"../../assets/loginImg.png"
import { Input } from "../../Components/Input/style"
import { Button } from "../../Components/Button/style"
const index = () => {
  const handleSubmit = () => {}
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-800 h-96 grid grid-cols-2 rounded">
        <div className="flex w-96 h-full justify-center items-center col-start-1 col-end-3">
          <form className="justify-center items-center flex-col flex w-96 mb-8" onSubmit={handleSubmit}>
          <h1 className="mb-8  font-bold text-3xl">Login</h1>
            <label className="mb-4">
              <span className="block mb-2">Email</span>
              <Input required placeholder="email@example"/>
            </label>
            <label className="mb-8">
              <span className="block mb-2">Senha</span>
              <Input type="password"/>
            </label>
            <Button>Login</Button>
          </form>
        </div>
        <div className="flex flex-1 w-96 h-full justify-center items-center col-end-7 col-span-2">
         <img src={LoginImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default index