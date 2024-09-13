


'use client'
import React, { useState } from 'react';
import styles from '@/components/dashboard/resulttable/style.module.css';
import { dummyData } from './data'; 

const ResultTable = () => {
  const [showAll, setShowAll] = useState(false);
  const [submission] = useState(dummyData); 
  const initialRowCount = 2;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const dataToShow = showAll ? submission : submission.slice(0, initialRowCount);

  return (
    <div className={`${styles.container}`}>
      <div>
        <h5 className={`${styles.topscoreheading}`}>Result Table</h5>
        <button className={`${styles.viewAllButton}`} onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>
      <br />
      <div className="table-responsive-sm">
        <table className={`${styles.information}`}>
          <thead className={`${styles.info}`}>
            <tr className={`${styles.head}`} >
              <th className=''>S.No</th>
              <th>Candidate Name</th>
              <th>Category</th>
              <th>Submitted On</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody className={`${styles.Data}`} >
            {dataToShow.map((result, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.candidateName}</td>
                <td>{result.category}</td>
                <td>{result.submittedOn}</td>
                <td className={`${index % 2 === 0 ? styles.evenRow : styles.oddRow}`}>
                  {result.totalScore + "%"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTable;



// 'use client'
// import React, { useState, useEffect } from 'react' 
// import styles from '@/components/dashboard/resulttable/style.module.css'
// // import { useSession } from 'next-auth/react';
// import { dummyData } from './data'


// const ResultTable = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [submission, setSubmission] = useState([]);
//   const initialRowCount = 2;
// //   const { data: session } = useSession();

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };
//   const dataToShow = showAll ? submission : submission.slice(0, initialRowCount);


//   const user = ["Sravani", "Dammu", "Aruna", "Ramana", "Vivek"]

//   useEffect(() => {
//     callSubmissionApi();
//   }, []);

//   async function callSubmissionApi() {
//     const myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer " + session?.user?.access_token);
//     myHeaders.append("Content-Type", "application/json");

//     const graphql = JSON.stringify({
//       query: "query {\r\n    submissions {\r\n        userName\r\n        assessmentId\r\n        time\r\n        totalScore\r\n    }\r\n}\r\n",
//       variables: {}
//     });

//     const requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: graphql,
//       redirect: 'follow'
//     };

//     try {
//       const response = await fetch("http://localhost:9000/assessment-tool/admin", requestOptions);
//       const result = await response.json();

//       const submissionData = result.data.submissions;

//       // Use Promise.all to fetch assessmentGroup and store totalScore and time for each submission
//       const updatedSubmissionPromises = submissionData.map((submission) => {
//         return callAssessmentApi(submission.userName, submission.assessmentId, submission.totalScore, submission.time);
//       });

//       const updatedSubmission = await Promise.all(updatedSubmissionPromises);

//       setSubmission(updatedSubmission);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   async function callAssessmentApi(userName, id, totalScore, time) {
//     const myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer " + session.user.access_token);
//     myHeaders.append("Content-Type", "application/json");

//     const graphql = JSON.stringify({
//       query: "query{\r\n    assessments{\r\n        id\r\n        assessmentGroup \r\n    }\r\n}\r\n\r\n",
//       variables: {}
//     });

//     try {
//       const response = await fetch("http://localhost:9000/assessment-tool/admin", {
//         method: 'POST',
//         headers: myHeaders,
//         body: graphql,
//         redirect: 'follow'
//       });

//       const result = await response.json();

//       // console.log("Assessment API result:", result);

//       const assessmentData = result.data.assessments;
//       var assessmentGroup = "";

//       if (result && result.data && assessmentData && assessmentData.length > 0) {

//         for (let i = 0; i < assessmentData.length; i++) {
//           if (id === assessmentData[i]["id"]) {
//             assessmentGroup = assessmentData[i]["assessmentGroup"];
//             // console.log(assessmentData[i]["assessmentGroup"])
//           }
//         }

//         // const assessmentGroup = result.data.assessments[0].assessmentGroup;
//         // console.log("Assessment Group:", assessmentGroup);

//         return {
//           userName,
//           assessmentId: id,
//           assessmentGroup,
//           totalScore,
//           submittedOn: time,
//         };
//       } else {
//         console.error("No assessment data found in the response.");
//       }
//     } catch (error) {
//       console.error("Error fetching assessment data:", error);
//     }
//   }

//   // const handleTestButtonClick = () => {
//   //   callSubmissionApi();
//   // }

//   return (
//     <div className={`${styles.container}`}>
//       {/* <Button onClick={handleTestButtonClick}>Result</Button> */}
//       <div>
//         <h5 className={`${styles.topscoreheading}`}>Result Table</h5>
//         <button className={`${styles.viewAllButton}`} onClick={toggleShowAll}>
//           {showAll ? 'Show Less' : 'View All'}
//         </button>
//       </div>
//       <br />
//       <div className="table-responsive-sm">
//         <table className={`${styles.information}`}>
//           <thead className={`${styles.info}`}>
//             <tr className={`${styles.head}`} >
//               <th className=''>S.No</th>
//               <th>Candidate Name</th>
//               <th>Category</th>
//               <th>Submitted On</th>
//               <th>Score</th>
//             </tr>
//           </thead>
//           <tbody className={`${styles.Data}`} >
//             {dataToShow.map((result, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{result.userName}</td>
//                 <td>{result.assessmentGroup}</td>
//                 <td>{result.submittedOn}</td>
//                 <td className={`${index % 2 === 0 ? styles.evenRow : styles.oddRow}`}>
//                   {result.totalScore + "%"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ResultTable;
