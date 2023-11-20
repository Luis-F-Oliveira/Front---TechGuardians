import { IoCloseOutline } from "react-icons/io5"
import { Input } from "../Input/style"
import { Button } from "../Button/style"
import { useState } from "react"
import { toast } from "react-toastify"

const Modal = () => {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setNome('')
        setDescricao('')
        toast.success('Dados cadastrados com sucesso!');
    };
  return (
    <dialog id="my_modal_1" className="modal">
    <div className="modal-box flex">
        <div className="modal-action">
            <header className="flex-inline shadow-sm">
                <div className="flex justify-between p-2">
                    <h1 className="font-bold">Blocos</h1>
                    <button className="btn">
                        <IoCloseOutline size={20}
                            onClick={() => document.getElementById('my_modal_1').close()}
                        />
                    </button>
                </div>
            </header>
            <form method="dialog" onSubmit={handleSubmit}>
                <main className="flex gap-4 m-8">
                    <div className="flex flex-col">
                        <label htmlFor="nomeBloco">
                            <span className="block">Nome do Bloco</span>
                            <Input type="text" id="nomeBloco" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <label>
                            <span className="block">Descrição</span>
                            <Input type="text" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </label>
                    </div>
                </main>
                <footer className="mr-6 mb-2 flex justify-end">
                    <Button type="submit">Cadastrar</Button>
                </footer>
            </form>
        </div>
    </div>
</dialog>
  )
}

export default Modal