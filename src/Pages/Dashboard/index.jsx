import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import TableBlocks from "../../Components/TablEquipamentos";
import TableRoom from "../../Components/TableMonitoring";
import Graphics from "../../Components/Graphics";
import { dashContext } from "../../Context/DashContext";
import { useContext } from "react";
const Dashboard = () => {
  const { render, renderTwo, renderLast } = useContext(dashContext)
  return (
    <div className="relative flex">
      <div className="absolute left-0 z-10">
        <SideBar />
      </div>
      <div className="flex-1 pl-56 flex flex-col max-h-screen">
        <Header />
        {renderTwo && <h1 className="font-bold m-5">Monitoramento</h1>}
        {render && <h1 className="font-bold m-5">Equipamentos</h1>}
        {render === true ? (
          <TableBlocks/>
          ) : null}
        {renderTwo === true && render === false ? (
          <TableRoom/>
        ): null}
        {renderLast === true && render === false && renderTwo === false ? (
          <Graphics/>
        ): null}
      </div>
    </div>
  );
};

export default Dashboard;
