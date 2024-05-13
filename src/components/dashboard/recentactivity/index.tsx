// import React from 'react';
// // import moment from 'moment';
// // import 'moment-timezone';
// // import notification from "@/assets/images/notification.svg";
// import Image from "next/image";
// import styles from '@/components/dashboard/recentactivity/style.module.css'
// import { Container } from 'react-bootstrap';

// const RecentActivities = () => {
//   const activities = [
//     {
//       id: 1,
//       description: 'Lorem ipsum dolor sit amet',
//       timestamp: '2023-05-30T09:00:00Z'
//     },
//     {
//       id: 2,
//       description: 'Lorem ipsum dolor sit amet',
//       timestamp: '2023-05-29T15:30:00Z'
//     },
//     {
//       id: 3,
//       description: 'Lorem ipsum dolor sit amet',
//       timestamp: '2023-05-30T15:40:00'
//     },
//   ];

//   // const getTimeAgo = () => {
//     // const now = moment().tz('Asia/Kolkata');
//     // const activityTime = moment(timestamp).tz('Asia/Kolkata');
//     // const diffMinutes = now.diff(activityTime, 'minutes');

//     // if (diffMinutes < 60) {
//     //   return `${diffMinutes} min ago`;
//     // } else if (diffMinutes < 1440) {
//     //   const hours = Math.floor(diffMinutes / 60);
//     //   const minutes = diffMinutes % 60;
//     //   return `${hours} hr ${minutes} min ago`;
//     // } else {
//     //   const days = Math.floor(diffMinutes / 1440);
//     //   return `${days} day ago`;
//     // }
//   };
//   return (
//     <Container fluid className={`${styles.activities} mt-4`}>
//       <h5 className={`${styles.subheading}`}>Recent Activities</h5>
//       <div className="row">
//         {activities.map(activity => (
//           <div className={`col-12 col-sm-12 col-md-12 ${styles.recentActivities}`} key={activity.id}>
//             <div className={styles.notification}>
//               {/* <Image className="mb-3" alt="#" src={notification} /> */}
//               <div className="row">
//               <div className={`col-md-4 ${styles.description}`}>
//                 <p>{activity.description}</p>
//               </div>
//               </div>
//               <div className={styles.timestamp}>
//                 {/* <small>{getTimeAgo(activity.timestamp)}</small> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Container>
//   );

// };

// export default RecentActivities;


'use client'
import React from 'react';
// import moment from 'moment';
// import 'moment-timezone';
// import notification from "@/assets/images/notification.svg";
// import Image from "next/image";
import styles from '@/components/dashboard/recentactivity/style.module.css'
import { Container } from 'react-bootstrap';

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      description: 'Assessments has been updated',
      timestamp: '2023-05-30T09:00:00Z'
    },
    {
      id: 2,
      description: 'User Logged In',
      timestamp: '2023-05-29T15:30:00Z'
    },
    {
      id: 3,
      description: 'Assessment question has been added',
      timestamp: '2023-05-30T15:40:00'
    }
  ];

  // const getTimeAgo = (timestamp) => {
  //   const now = moment().tz('Asia/Kolkata');
  //   const activityTime = moment(timestamp).tz('Asia/Kolkata');
  //   const diffMinutes = now.diff(activityTime, 'minutes');

  //   if (diffMinutes < 60) {
  //     return `${diffMinutes} min ago`;
  //   } else if (diffMinutes < 1440) {
  //     const hours = Math.floor(diffMinutes / 60);
  //     const minutes = diffMinutes % 60;
  //     return `${hours} hr ${minutes} min ago`;
  //   } else {
  //     const days = Math.floor(diffMinutes / 1440);
  //     return `${days} day ago`;
  //   }
  // };

  return (
    //   <Container fluid className={`${styles.activities} mt-4`}>
    // <h5 className={`${styles.subheading}`}>Recent Activities</h5>
    //   <div className="row">
    //     {activities.map(activity => (
    //       <div className={`col-12 col-sm-12 col-md-12 ${styles.recentActivities}`} key={activity.id}>
    //         <div className={styles.notification}>
    //           {/* <Image className="mb-3" alt="#" src={notification} /> */}
    //           <div className="row">
    //             <div className={`col-12 col-md-4 ${styles.description}`}>
    //               <p>{activity.description}</p>
    //             </div>
    //             <div className="col-md-8"> {/* Adjusted column size */}
    //               <div className={styles.timestamp}>
    //                 {/* <small>{getTimeAgo(activity.timestamp)}</small> */}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </Container>

    <div>
      <h5 className={`${styles.subheading} ps-4 mt-3`}>Recent Activities</h5>
      {activities.map((activity) => (
        <div key={activity.id}>
          <p>{activity.description}</p>
        </div>
      ))}
    </div>




  );
};

export default RecentActivities;

