"use client"
import React from "react";
import Image from "next/image";
// import styles from '@/styles/report.module.css';
import report from "../../../../public/images/report.svg";
import styles from "./styles.module.css"
import reportarrow from "../../../../public/images/reportArrow.svg";
import Link from "next/link";

// interface Props {
//   step: number;
//   stepChange: (step: number) => void;
// }

const Reports: React.FC = () => {

  const reportLinks = [
    { href: "/reports/activityLog", text: "Activity Log" },
    { href: "/reports/allAssessment", text: "All Assessments" },
    { href: "/reports/assessmentIntake", text: "Assessment Intakes" },
    { href: "/reports/userManagement", text: "User Management" }
  ];
  return (
    <div className="container mt-4 bg-light">
      <h6 className={`ml-mt-4 w-75 h-15 ${styles.heading_reports}`}>Reports</h6>
      {reportLinks.map((link, index) => (
      <Link key={index} href={link.href} className="text-decoration-none">
        <div className={`row custom-row mt-4 w-100 ${styles.report_content}`}>
          <div className="col-6 col-md-6 col-sm-6 d-flex align-items-center">
            <Image alt="#" src={report} />
            <p className={`h6 text-dark ms-4 ${styles.report_text}`}>{link.text}</p>
          </div>
          <div className="col-5 col-md-5 col-sm-5 d-flex justify-content-between align-items-center"></div>
          <div className="col-1 col-md-1 col-sm-1 d-flex align-items-center">
            <Image alt="#" src={reportarrow} />
          </div>
        </div>
      </Link>
    ))}
      <style jsx>{`
        .custom-row {
          border: 2px solid #ccc; 
          margin-bottom: 20px; 
          padding: 10px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3); 
        }
      `}</style>
    </div>
  );
};

export default Reports;
