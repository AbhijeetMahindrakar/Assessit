import React from "react";
import styles from "@/components/dashboard/overview/style.module.css";
import Overview from "@/components/dashboard/overview";
// import TopScores from "@/components/dashboard/topscore";
import SubmissionChart from "@/components/dashboard/submission";
import RecentActivities from "@/components/dashboard/recentactivity";
import ResultTable from '@/components/dashboard/resulttable'
import TopScores from '@/components/dashboard/topscore'
const Dashboard = () => {

  return (
    // <div className={poppins.className}>
    <div className={`${styles.Dashboardcontainer}`} >
      <div className= "row" >
        
        {/* Left Side */}
        <div className="col-md-8">
          <div className= 'row mt-2'>
            <div className="col-md-12">
              <div className={`card ${styles.card}`}>
                <div className="card-body">
                  <Overview />
                </div>
              </div>
            </div>
          </div>
          <div className= 'row mt-2'>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <SubmissionChart />
                </div>
              </div>
            </div>
          </div>
          <div className= "row mt-2 ">
            <div className="col-md-12 ">
              <div className="card h-100" >
                <div className="card-body">
                  <ResultTable />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-4">
          <div className={`row ${styles.Dashboard1}`}>
            <div className={`col-md-12 ${styles.topscoredetails}`}>
              <div className="row mt-2">
                <div className="col-md-12 col-lg-12">
                  <div className="card mb-3 h-100">
                    <div className="card-body">
                      <TopScores  />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <div className="card mb-3 h-100">
                    <div className="card-body">
                      <RecentActivities />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Dashboard;




// import React, { useEffect } from "react";
// import { Poppins } from "next/font/google";
// // import styles from '@/styles/dashboard.module.css'
// import styles from "@/components/dashboard/overview/style.module.css";
// import Overview from "@/components/dashboard/overview";

// const Dashboard = () => {
//   return (
//     <div className={`${styles.Dashboardcontainer}`}>
//       <div className="row">
//         {/* Left Side */}
//         <div className="col-md-8">
//           <div className="row mt-2">
//             <div className="col-md-12">
//               <div className={`card ${styles.card}`}>
//                 <div className="card-body">
//                   <Overview />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Dashboard;
