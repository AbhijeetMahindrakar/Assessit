"use client";
import React from "react";
import styles from "@/components/myassessment/addQuestionAssessment/styles.module.css";
import Image from "next/image";
import documenttwo from "/public/images/Steppertwo.svg";
import line from "/public/images/Line3.svg";
import linethree from "/public/images/LInethreeStraignt.svg";
import lineone from "/public/images/Line5.svg";
import checkgreen from "/public/images/GreenStepper.svg";
import docone from "/public/images/StepperNumone.svg";
import { BsPlusSquare } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import messageframe from "/public/images/Frame.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from 'react';

// import { useRouter } from 'next/router';


// interface Props {
//     // step: number;
//     // stepChange: (step: number) => void;
//   }

// interface Props {
//   assessmentId: string; // Define the assessmentId prop
// }

const AddQuestionAssessment: React.FC = () => {
  const router = useRouter();
  const searchParam = useSearchParams()
  const [assessmentId, setAssessmentId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParam.get("assessmentId")
  console.log("assessmentID", id);
  setAssessmentId(id)
  },[searchParam])
  
  const navigate = (page: String) => {
    router.push("/myassessment/" + page + "?assessmentId=" + assessmentId);
  };



  return (
    <>
    <div
      className={`${styles.MyAssessmentcontainer} h-100 w-99 d-flex flex-column`}
    >
      
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="containerhead">
            <div
              className={`d-flex align-items-center mt-4 ${styles.headercontainer}`}
            >
              <h4 className={styles.title}>Create Assessment</h4>
              <h5
                className={`${styles.title1} ${styles.myAssessment}`}
                onClick={() => navigate("newassessment")}
              >
                My Assessment
                <span className={styles.greaterThanSymbol}>
                  <TbMathGreater />
                </span>
              </h5>
              <h6 className={styles.title2}>Create New</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className={`col-sm-12 col-md-3 col-lg-3 col-xl-3 ${styles.Stage}`}>
          <div className="row">
            <div className={`${styles.cointenerstg} col-sm-8 `}>
              <div className="row  row-cols-5">
                <div
                  className={`${styles.cointenerstage} col-xl-12 col-lg-12 col-md-12 d-flex`}
                >
                  <span className={`${styles.numbercreate}`}>
                    <Image
                      className={`mt-3 mb-5 ${styles.customImage}`}
                      alt="#"
                      src={checkgreen}
                    />
                  </span>
                  <div className={`col ${styles.customDiv}`}>
                    <span className={`${styles.textcreatebasic}`}>
                      Basic&nbsp;Details
                    </span>
                  </div>
                </div>
                <div
                  className={`${styles.cointenerstageline} col-lg-12 col-md-12`}
                >
                  <Image
                    className={`${styles.rotatedImage} mt-3 mb-5 d-none d-md-block`}
                    alt="#"
                    src={line}
                  />
                  <Image
                    className={`${styles.rotatedImage} mt-3 mb-5 d-lg-none d-md-none  mx-auto`}
                    alt="#"
                    src={linethree}
                  />
                </div>
                <div
                  className={`${styles.cointenerstageone} col-lg-12 col-md-12 d-flex`}
                >
                  <span className={`${styles.numbercreate}`}>
                    <Image
                      className={`mt-3 mb-5 ${styles.customImage}`}
                      alt="#"
                      src={docone}
                    />
                  </span>
                  <div className={`col ${styles.customDiv}`}>
                    <span className={`${styles.textcreatebasic}`}>
                      Add&nbsp;Questions
                    </span>
                  </div>
                </div>
                <div
                  className={`${styles.cointenerstagelineone} col-lg-12 col-md-12 `}
                >
                  <Image
                    className={`${styles.rotatedImage} mt-3 mb-5 d-none d-md-block`}
                    alt="#"
                    src={lineone}
                  />
                  <Image
                    className={`${styles.rotatedImage} mt-3 mb-5 d-lg-none d-md-none  mx-auto`}
                    alt="#"
                    src={linethree}
                  />
                </div>
                <div
                  className={`${styles.cointenerstagetwo} col-lg-12 col-md-12 d-flex`}
                >
                  <span className={`${styles.numbercreate}`}>
                    <Image
                      className={`mt-3 mb-5 ${styles.customImage}`}
                      alt="#"
                      src={documenttwo}
                    />
                  </span>
                  <div className={`col ${styles.customDiv}`}>
                    <span className={`${styles.textcreatebasic}`}>
                      Other&nbsp;Settings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-xl-9 col-lg-9 col-md-9 col-sm-12"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <div className="row mt-2">
            <div className="col-12 h-15">
              <div className={`${styles.Messagebox}`}>
                <div className={`${styles.messageicon} align-items-center`}>
                  <Image
                    className={`${styles.custommessageframe}`}
                    alt="#"
                    src={messageframe}
                  />
                </div>
              </div>
              <h4 className={`${styles.addcontent}`}>
                You dont have any question yet
              </h4>
            </div>
            <div className="row row-col-12">
              <div className="col-12 d-flex justify-content-center">
                <button
                  className={`${styles.QuestionGroup}`}
                  onClick={() => navigate("addquestions")}
                >
                  <BsPlusSquare className={`${styles.iconAdd}`} />
                  Add Question
                </button>
              </div>
            </div>
            <div className={`${styles.ContainerAddqAss}`}>
              <div className="row ">
                <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5 col-6 ">
                  <div className={`${styles.PreviousText} `}>
                    {/* <Link href="/myassessment/createAssessment"> */}
                    <button
                      className={`${styles.Previous}`}
                      onClick={() => navigate("createassessment")}
                    >
                      Previous
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-6">
                  <div className={`${styles.addbutton} `}>
                    <button className={`${styles.addnextbutton}`}>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default AddQuestionAssessment;
