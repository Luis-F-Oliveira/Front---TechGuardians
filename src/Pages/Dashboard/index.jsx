import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import TableBlocks from "../../Components/TableBlocks";
import TableRoom from "../../Components/TableRooms";
import { dashContext } from "../../Context/DashContext";
import { useContext } from "react";
const Dashboard = () => {
  const { render, renderTwo } = useContext(dashContext)
  return (
    <div className="relative flex">
      <div className="absolute left-0 z-10">
        <SideBar />
      </div>
      <div className="flex-1 pl-56 flex flex-col max-h-screen">
        <Header />
        <h1 className="m-4 font-bold">Instituição</h1>
        {render === true ? (
          <TableBlocks/>
          ) : null}
        {renderTwo === true && render === false ? (
          <TableRoom/>
        ): null}
      </div>
    </div>
  );
};

export default Dashboard;
