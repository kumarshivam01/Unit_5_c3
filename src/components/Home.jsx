import { useContext } from "react";
import { UserStContext } from "./contexts/UserStContext";
export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
   const {homeinfo, updateInfo} =useContext(UserStContext)

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">{homeinfo.Total_Employees}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{homeinfo.Total_Terminated}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{homeinfo.Total_Promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{homeinfo.Total_New}</span>
        </div>
      </div>
    </>
  );
};
