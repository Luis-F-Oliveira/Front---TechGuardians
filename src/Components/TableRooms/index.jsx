import { IoCloseOutline } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Input } from "../Input/style";
import { Button } from "../Button/style";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableRoom = () => {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setNome('')
        setDescricao('')
        toast.success('Dados cadastrados com sucesso!');
    };

    return (
        <div className="flex flex-col shadow-xl m-9">
            <div className="overflow-x-auto flex">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="flex flex-col">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Identificador</th>
                                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Nome</th>
                                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Descrição</th>
                                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Acões</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">1</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sala C21</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">sala com ar</td>
                                                    <td className="px-6 py-4 text-end text-sm font-medium">
                                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mr-2"><FaTrash />
                                                        </button>
                                                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><FaRegEdit />
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="flex justify-end mt-4 text-blue-400"
                            onClick={() => document.getElementById('my_modal_1').showModal()}
                        >Cadastrar blocos</h1>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableRoom
