import { Input } from "../../Components/Input/style"
import { Button } from "../../Components/Button/style"

const index = () => {
  return (
    <>
      <form>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white w-700 h-96 grid grid-cols-2 rounded">
            <div className="flex w-96 h-full justify-center items-center col-start-1 col-end-3">
              <div className="justify-center items-center flex-col flex w-96 mt-11">
                <label className="mb-4">
                  <span className="block mb-2">Nome</span>
                  <Input typeof="text" required placeholder="Nome Completo" />
                </label>
                <label className="mb-8">
                  <span className="block mb-2">Email</span>
                  <Input type="email" placeholder="email@example.com" required />
                </label>
                <p className="mt-12">TechGuardian@2023</p>
              </div>
            </div>
            <div className="flex w-96 h-full justify-center items-center col-end-7 flex-col mt-8">
              <label className="mb-4">
                <span className="block mb-2">Senha</span>
                <Input type="password" placeholder="Senha" required/>
              </label>
              <label className="mb-8">
                <span className="block mb-2">Confirme a senha</span>
                <Input type="password" placeholder="Confirme a senha" required/>
              </label>
              <Button className="mt-12 w-44">Cadastrar</Button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default index