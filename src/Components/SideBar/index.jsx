import { useContext, useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { FaSchool } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { dashContext } from "../../Context/DashContext";

const Index = () => {
    const { setRender, setRenderTwo, setRenderLast } = useContext(dashContext)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <aside className="h-screen w-56 bg-slate-800 text-white flex flex-col fixed z-10 absolute">
            <div className="h-9 flex justify-center pt-2">
                <h1 className="font-bold text-xl">Tech Guardians</h1>
            </div>
            <div className="h-auto flex-1 mt-3">
                <ul className="flex flex-col mt-4 px-3">
                    <li className="flex flex-row justify-between items-start mb-2 gap-2">
                        <div className="flex items-start gap-2">
                            <FaSchool size={20} className="mt-1"/>
                            <h1 className="text-lg font-bold">Instituição</h1>
                        </div>
                        {isOpen ? (
                            <RiArrowDropUpLine
                                size={25}
                                onClick={() => setIsOpen(!isOpen)}
                            />
                        ) :
                            <RiArrowDropDownLine
                                size={25}
                                onClick={() => setIsOpen((prev) => !prev)} />
                        }
                    </li>
                    {isOpen === true &&
                        <div className="ml-9 mt-2">
                            <li className="flex-row mb-2 cursor-pointer"
                                onClick={() => setRender((prev) => !prev, setRenderTwo(false))}
                            >
                                <p>Equipamentos</p>
                            </li>
                            <li className="flex-row mb-2 cursor-pointer"
                                onClick={() => setRenderTwo((prev) => !prev,
                                setRender(false), setRenderLast(false))}
                            >
                                <p>Monitoramento</p>
                            </li>
                            <li className="flex-row mt-2 cursor-pointer"
                                onClick={() => setRenderLast((prev) => !prev,
                                setRender(false), setRenderTwo(false))}
                            >
                                <p>Dashboard</p>
                            </li>
                        </div>
                    }
                </ul>
            </div>
            <div className="flex items-end h-12 px-3 order-1 mb-3">
                <Link to={'/'} className="flex gap-1">
                    <CiLogout
                        size={25} />
                    <p>Sair</p>
                </Link>
            </div>
        </aside>
    )
}

export default Index