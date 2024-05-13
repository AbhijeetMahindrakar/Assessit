import Signin from '@/components/Signin'
import Overview from '@/components/dashboard/overview'
import RecentActivities from '@/components/dashboard/recentactivity'
import ResultTable from '@/components/dashboard/resulttable'
import SubmissionChart from '@/components/dashboard/submission'


import styles from "@/components/dashboard/overview/style.module.css";
import TopScores from '@/components/dashboard/topscore'

export default function Home() {
  return (
    // <div className="px-3">
    //   <Signin />
    //   <div className='d-flex'>
    //     <div className='col-8'>
    //       <Overview />
    //       <SubmissionChart />
    //       <ResultTable />
    //     </div>
    //     <div className='col-4 ps-1 '>
    //       <TopScores topScoresData={[dummyData]} />
    //       <RecentActivities />
    //     </div>
    //   </div>
    // </div>

    <div className="container-fluid">
    <div className="row">
      <div className="col-md-8">
        <div className={`card ${styles.card}`}>
          <div className="card-body">
            <Overview />
          </div>
        </div>
        <div className="card mt-2">
          <div className="card-body">
            <SubmissionChart />
          </div>
        </div>
        <div className="card mt-2">
          <div className="card-body">
            <ResultTable />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className={`${styles.Dashboard1} card`}>
          <div className="card-body">
            <TopScores  />
          </div>
        </div>
        <div className={`${styles.Dashboard1} card mt-2`}>
          <div className="card-body">
            <RecentActivities />
          </div>
        </div>
      </div>
    </div>
  </div>
  
    // <div className={`${styles.Dashboardcontainer}`} >
    //   <div className="row" >

    //     {/* Left Side */}
    //     <div className="col-md-8">
    //       <div className='row mt-2'>
    //         <div className="col-md-12">
    //           <div className={`card ${styles.card}`}>
    //             <div className="card-body">
    //               <Overview />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='row mt-2'>
    //         <div className="col-md-12">
    //           <div className="card">
    //             <div className="card-body">
    //               <SubmissionChart />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row mt-2 ">
    //         <div className="col-md-12 ">
    //           <div className="card h-100" >
    //             <div className="card-body">
    //               <ResultTable />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Side */}
    //     <div className="col-md-4">
    //       <div className={`row ${styles.Dashboard1}`}>
    //         <div className={`col-md-12 ${styles.topscoredetails}`}>
    //           <div className="row mt-2">
    //             <div className="col-md-12 col-lg-12">
    //               <div className="card mb-3 h-100">
    //                 <div className="card-body">
    //                   <TopScores topScoresData={[dummyData]} />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row mt-2">
    //             <div className="col-md-12">
    //               <div className="card mb-3 h-100">
    //                 <div className="card-body">
    //                   <RecentActivities />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}




{/* <Overview />
      <RecentActivities />
      <ResultTable />
      <SubmissionChart />
      <TopScores topScoresData={[dummyData]} /> */}