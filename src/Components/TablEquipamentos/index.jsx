import { useEffect, useState } from "react"
import axios from "axios"
import { IoCloseOutline } from "react-icons/io5"
import { Input } from "../Input/style"
import { Button } from "../Button/style"
import { FaTrash } from "react-icons/fa6"
import { FaRegEdit } from "react-icons/fa"
import { toast } from "react-toastify"
import ReactLoading from 'react-loading'

const TableBlocks = () => {
    const [data, setData] = useState([])
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [create, setCreate] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        axios.get('https://localhost:7279/api/Equipament')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        setLoading(true)

        axios.get('https://localhost:7279/api/Equipament')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            });
    }, []);

    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const requestData = {
            name: nome,
            description: descricao,
            stats: create
        }

        axios.post('https://localhost:7279/api/Equipament', requestData)
            .then(response => {
                const { create } = response.data
                setCreate(create)
                setNome('')
                setDescricao('')
                fetchData()
            })
            .catch((error) => {
                console.log(error)
            })
        toast.success('Boa noite night city')
    }
    const handleDelete = (id) => {
        axios.delete(`https://localhost:7279/api/Equipament/${id}`)
            .then(() => {
                fetchData();
                toast.success('Item excluído com sucesso!')
            })
            .catch((error) => {
                console.log(error);
                toast.error('Ocorreu um erro ao excluir o item.')
            })
    }
    
    return (
        <div className="flex flex-col shadow-xl m-9 overflow-y-clip">
            <Button className="w-52"
                onClick={() => document.getElementById('my_modal_1').showModal()}>Cadastrar Equipamentos</Button>
            <div className="overflow-x-auto flex">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="flex flex-col">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="overflow-hidden">
                                        {loading === true ? (
                                            <div className="flex justify-center">
                                                <ReactLoading
                                                    type="spin" color="blue" />
                                            </div>
                                        ) :
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Identificador</th>
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Nome</th>
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Descrição</th>
                                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 overflow-auto">
                                                    {data.map(item => (
                                                        <tr key={item.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.id}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.name}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.description}</td>
                                                            <td className="px-6 py-4 text-end text-sm font-medium">
                                                                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mr-2 "
                                                                ><FaTrash
                                                                        onClick={() => handleDelete(item.id)}
                                                                    />
                                                                </button>
                                                                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><FaRegEdit />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box flex">
                                <div className="modal-action">
                                    <header className="flex-inline shadow-sm">
                                        <div className="flex justify-between p-2">
                                            <h1 className="font-bold">Equipamentos</h1>
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
                                                    <span className="block">Nome do Equipamento</span>
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
                                        <footer className="mr-6 mb-8 flex justify-end">
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

export default TableBlocks
