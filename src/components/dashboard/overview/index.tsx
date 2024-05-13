// import React from 'react'
// import styles from '@/components/dashboard/overview/style.module.css'
// import Image from 'next/image'
// import totalAssessments from '/public/images/total-assessments.svg'
// import publishedAssessments from '/public/images/published-assessments.svg'
// import draftsAssessments from '/public/images/drafts-assessments.svg'
// import intakeAssessments from '/public/images/intake-assessments.svg'

// const assessments = [
//   {
//     image: totalAssessments,
//     title: "Total Assessments",
//     className: styles.TotalAssessment,
//   },
//   {
//     image: publishedAssessments,
//     title: "Published",
//     className: styles.Published,
//   },
//   { image: draftsAssessments, 
//     title: "Drafts", 
//     className: styles.Draft 
//   },
//   {
//     image: intakeAssessments,
//     title: "Assignment Intake",
//     className: styles.Intake,
//   },
// ];

// const Overview = () => {
//   return (
//     <div className={styles.containeroverview}>
//       <div className={styles.overview}>
//         <h5 className={styles.topscoreheading}>Overview</h5>
//       </div>

//       <div
//         className="row"
//         style={{
//           marginRight: "calc(1 * var(--bs-gutter-x))",
//           marginLeft: "calc(-0.5 * var(--bs-gutter-x))",
//         }}
//       >
//         {assessments.map((assessment, index) => (
//           <div
//             key={index}
//             className="col-6 col-sm-3 col-md-6 col-lg-6 col-xl-3"
//           >
//             <div className={assessment.className}>
//               <div className={styles.Assessments}>
//                 <Image className="mt-3 mb-5" alt="#" src={assessment.image} />
//               </div>
//               <span>
//                 <h6 className={styles.heading}>{assessment.title}</h6>
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Overview;


// ------------------------------------------------

import React from 'react';
import Image from 'next/image';
import styles from '@/components/dashboard/overview/style.module.css';
import totalAssessments from '/public/images/total-assessments.svg';
import publishedAssessments from '/public/images/published-assessments.svg';
import draftsAssessments from '/public/images/drafts-assessments.svg';
import intakeAssessments from '/public/images/intake-assessments.svg';

const Overview = () => {
  const totalAssessmentsCount = 0; 
  const publishedCount = 0; 
  const draftCount = 0; 
  const intakeCount = 0; 

  return (
    <div className={styles.containeroverview}>
      <div className={styles.overview}>
        <h5 className={styles.topscoreheading}>Overview</h5>
      </div>

      <div className="row">
        <div className="col-6 col-sm-3 col-md-6 col-lg-6 col-xl-3">
          <div className={styles.TotalAssessment}>
            <div className={styles.Assessments}>
              <Image className="mt-3 mb-5" alt="#" src={totalAssessments} />
            </div>
            <h5 className={styles.heading5}>{totalAssessmentsCount}</h5>
            <span><h6 >Total Assessments</h6></span>
          </div>
        </div>

        <div className="col-6 col-sm-3 col-md-6 col-lg-6 col-xl-3">
          <div className={styles.Published}>
            <div className={styles.publishedAssessments}>
              <Image className="mt-3 mb-5" alt="#" src={publishedAssessments} />
            </div>
            <h5 className={styles.heading5}>{publishedCount}</h5>
            <span><h6 >Published</h6></span>
          </div>
        </div>

        <div className="col-6 col-sm-3 col-md-6 col-lg-6 col-xl-3">
          <div className={styles.Draft}>
            <div className={styles.DraftAssessments}>
              <Image className="mt-3 mb-5" alt="#" src={draftsAssessments} />
            </div>
            <h5 className={styles.heading5}>{draftCount}</h5>
            <span><h6>Drafts</h6></span>
          </div>
        </div>

        <div className="col-6 col-sm-3 col-md-6 col-lg-6 col-xl-3">
          <div className={styles.Intake}>
            <div className={styles.intakeAssessments}>
              <Image className="mt-3 mb-5" alt="#" src={intakeAssessments} />
            </div>
            <h5 className={styles.heading5}>{intakeCount}</h5>
            <span><h6 >Assignment Intake</h6></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;



























// import React from 'react'
// import styles from '@/components/dashboard/overview/style.module.css'
// import Image from "next/image"
// import totalAssessments from '/public/images/total-assessments.svg'
// import publishedAssessments from '/public/images/published-assessments.svg'
// import draftsAssessments from '/public/images/drafts-assessments.svg'
// import intakeAssessments from '/public/images/intake-assessments.svg'

// const Overview = () => {

//   return (
//     <div className={` ${styles.containeroverview}`}>
//       <div className={`${styles.overview}`}>
//         <h5 className={`${styles.topscoreheading}`}>Overview</h5>
//       </div>

//       <div className='row'>
//         <div className='col-6 col-sm-3 col-md-6 col-lg-6 col-xl-3'>
//           <div className={`${styles.TotalAssessment}`}>
//             <div className={`${styles.Assessments}`}>
//               <Image className="mt-3 mb-5" alt="#" src={totalAssessments} />
//             </div>
//             <span><h6 className={`${styles.heading}`}>Total Assessments</h6></span>
//           </div>
//         </div>

//         <div className='col-6 col-sm-3 col-md-6 col-lg-6 col-xl-3'>
//           <div className={`${styles.Published}`}>
//             <div className={`${styles.publishedAssessments}`}>
//               <Image className="mt-3 mb-5" alt="#" src={publishedAssessments} />
//             </div>
//             <span><h6 className={`${styles.heading}`}>Published</h6></span>
//           </div>
//         </div>

//         <div className='col-6 col-sm-3 col-md-6 col-lg-6 col-xl-3'>
//           <div className={`${styles.Draft}`}>
//             <div className={`${styles.DraftAssessments}`}>
//               <Image className="mt-3 mb-5" alt="#" src={draftsAssessments} />
//             </div>
//             <h6 className={`${styles.heading}`}>Drafts</h6>
//           </div>
//         </div>

//         <div className='col-6 col-sm-3 col-md-6 col-lg-6 col-xl-3'>
//           <div className={`${styles.Intake}`}>
//             <div className={`${styles.intakeAssessments}`}>
//               <Image className="mt-3 mb-5" alt="#" src={intakeAssessments} />
//             </div>
//             <h6 className={`${styles.heading}`}>Assignment Intake</h6>
//           </div>
//         </div>

//         </div>
//       </div>

//   );
// };

// export default Overview;
