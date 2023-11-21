import { useEffect, useState } from "react"
import axios from "axios"
import { IoCloseOutline } from "react-icons/io5"
import { Input } from "../Input/style"
import { Button } from "../Button/style"
import { FaTrash } from "react-icons/fa6"
import { FaRegEdit } from "react-icons/fa"
import ReactLoading from 'react-loading'
// import { toast } from "react-toastify"

const TableRoom = () => {
    const [data, setData] = useState([])
    const [user, setUser] = useState('')
    const [stats, setStats] = useState(true)
    const [loading, setLoading] = useState(false)
    const [equipamentos, setEquipamentos] = useState([]);
    const [selectedEquipmentId, setSelectedEquipmentId] = useState('');
    const [room, setRoom] = useState('')
    const [block, setBlock] = useState('')

    useEffect(() => {
        axios.get('https://localhost:7279/api/Equipament')
            .then(response => {
                setEquipamentos(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar equipamentos:', error);
            });
    }, []);

    const fetchData = () => {
        axios.get('https://localhost:7279/api/Monitoring')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        setLoading(true)

        axios.get('https://localhost:7279/api/Monitoring')
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
            block: block,
            room: room,
            user: user,
            stats: stats,
            equipament: selectedEquipmentId
        }

        axios.post('https://localhost:7279/api/Monitoring', requestData)
            .then(response => {
                const { stats } = response.data
                setStats(stats)
                setUser('')
                fetchData()
            })
            .catch((error) => {
                console.log(error)
            })
        // toast.success('Boa noite night city')
    }
    const handleDelete = (id) => {
        axios.delete(`https://localhost:7279/api/Monitoring/${id}`)
            .then(() => {
                fetchData();
                // toast.success('Item excluído com sucesso!')
            })
            .catch((error) => {
                console.log(error);
                // toast.error('Ocorreu um erro ao excluir o item.')
            })
    }

    return (
        <div className="flex flex-col shadow-xl m-9 overflow-y-clip">
            <Button className="w-52"
                onClick={() => document.getElementById('my_modal_1').showModal()}>Adicionar Monitoramento</Button>
            <div className="overflow-x-auto flex">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="flex flex-col">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <h1></h1>
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
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Usuário</th>
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Equipamento</th>
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Sala</th>
                                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 overflow-auto">
                                                    {data.map(item => (
                                                        <tr key={item.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.id}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.user}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.equipament}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.room}</td>
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
                                            <h1 className="font-bold">Monitoramento</h1>
                                            <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>
                                                <IoCloseOutline size={20} />
                                            </button>
                                        </div>
                                    </header>
                                    <form method="dialog" onSubmit={handleSubmit}>
                                        <main className="flex flex-col gap-4 m-8">                           
                                            <div className="flex gap-4">
                                                <div className="flex flex-col">
                                                    <label htmlFor="nomeBloco">
                                                        <span className="block">Nome do Usuario</span>
                                                        <Input type="text" id="nomeBloco" value={user} onChange={(e) => setUser(e.target.value)} required />
                                                    </label>
                                                    <label>
                                                        <span className="block">Bloco</span>
                                                        <Input type="text" value={block} onChange={(e) => setBlock(e.target.value)} />
                                                    </label>
                                                </div>
                                                <div className="flex flex-col">
                                                    <label htmlFor="nomeBloco">
                                                        <span className="block">Selecione o Equipamento</span>
                                                        <select id="selectEquipamento" value={selectedEquipmentId} onChange={(e) => setSelectedEquipmentId(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-white-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 w-64">
                                                            <option value="">Selecionar</option>
                                                            {equipamentos.map(equipamento => (
                                                                <option key={equipamento.name} value={equipamento.name}>
                                                                    {equipamento.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </label>
                                                    <label>
                                                        <span className="block">Sala</span>
                                                        <Input type="text" value={room} onChange={(e) => setRoom(e.target.value)} />
                                                    </label>
                                                </div>
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

export default TableRoom
