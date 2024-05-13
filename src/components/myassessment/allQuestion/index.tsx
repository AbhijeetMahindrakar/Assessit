"use client";
import React, { useState, useEffect } from "react";
import styles from "@/components/myassessment/allQuestion/styles.module.css";
import Image from "next/image";
import document from "/public/images/StepperNum.svg";
import checkgreen from "/public/images/GreenStepper.svg";
import documentone from "/public/images/Stepperone.svg";
import docone from "/public/images/StepperNumone.svg";
import documenttwo from "/public/images/Steppertwo.svg";
import line from "/public/images/Line3.svg";
import linethree from "/public/images/LInethreeStraignt.svg";
import lineone from "/public/images/Line5.svg";
import { BsPlusSquare } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSession } from "next-auth/react";
import ReceiveAllQuestions from "../receiveAllQuestions";
import { useRouter } from "next/navigation";
// import ReceiveAllQuestions from "./ReceiveAllQuestions";

interface AllQuestionProps {
  // step: number;
  // stepChange: (step: number) => void;
  // question: any; // Adjust the type for question based on your needs
  // receivedQuestions: any[]; // Adjust the type for receivedQuestions based on your needs
  // assessmentId: string; // Adjust the type for assessmentId
}

const AllQuestion: React.FC<AllQuestionProps> = (props) => {
  const router = useRouter();
  const navigate = (page: String) => {
    router.push("/myassessment/" + page);
  };
  // const {assessmentId} = props;
  // console.log("assessmentId:",assessmentId);

  // const { data: session } = useSession();

  // const [selectedOption, setSelectedOption] = useState("");
  // const [optionsData, setOptionsData] = useState([]);
  // const [receivedQuestions, setReceivedQuestions] = useState(
  //   props.receivedQuestions
  // ); // Set initial value from props

  // useEffect(() => {
  //   console.log("Fetching data for Addquestion ID:", assessmentId); // Add this line for debugging

  //   function fetchData() {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Authorization", "Bearer " + session.user.access_token);
  //     myHeaders.append("Content-Type", "application/json");

  //     var graphql = JSON.stringify({
  //       query: `
  //       query GetQuestions($assessmentId: ID!) {
  //         questions(assessmentId: $assessmentId) {
  //           id,
  //           value
  //           options {
  //             id,
  //             value,
  //             weightage
  //           }
  //         }
  //       }
  //     `,
  //       variables: {
  //         assessmentId: assessmentId,
  //       },
  //     });

  //     var requestOptions = {
  //       method: "POST",
  //       headers: myHeaders,
  //       body: graphql,
  //       redirect: "follow",
  //     };

  //     fetch("http://localhost:9000/assessment-tool/admin", requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         console.log("Received questions:", result);
  //         const questions = result.data.questions;
  //         if (questions) {
  //           setReceivedQuestions(questions);
  //           // Organize options by question ID
  //           const optionsByQuestionId = questions.reduce((acc, question) => {
  //             acc[question.id] = question.options;
  //             return acc;
  //           }, {});

  //           setOptionsData(optionsByQuestionId);
  //         }
  //       })
  //       .catch((error) => console.log("error", error));
  //   }

  //   fetchData();
  // }, [assessmentId, session.user.access_token]);

  // const [selectedOption, setSelectedOption] = useState("");
  // const {
  //   optionsData,
  //   receivedQuestions,
  // } = props;

  // const [selectedOption, setSelectedOption] = useState("");
  // const { optionsData, receivedQuestions } = props;

  // const [questionOptions, setQuestionOptions] = useState({});

  // const handleRadioChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  return (
    <div
      className={`${styles.MyAssessmentcontainer} h-100 w-99 d-flex flex-column`}
    >
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="containerhead">
            <div
              className={`d-flex align-items-center ${styles.headercontainer}`}
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
          className="col-xl-9 col-lg-9 col-md-9 col-sm-12 "
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <div className="row mt-2">
            <div className="col-6">
              <div className={`${styles.AllQstTitle}`}>
                <div className="ml-4 mt-2">
                  <h5 className={styles["custom-heading"]}>All Questions</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={`mr-4 mt-2 ${styles.questionContainer}`}>
                <div className={`${styles.questionTextdiv}`}>
                  <button
                    className={`${styles.questionGroups}`}
                    onClick={() => navigate("addquestions")}
                  >
                    <BsPlusSquare className="iconAdd" />
                    <span className="d-none d-md-inline">Add Question</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ReceiveAllQuestions
            stepChange={function (step: number): void {
              throw new Error("Function not implemented.");
            }}
            receivedQuestions={[]}
            assessmentId={""} // step={props.step}
            // stepChange={props.setStep}
            // // receivedQuestionId={props.assessmentId}
            // receivedQuestion={props.question}
            // receivedQuestions={props.receivedQuestions}
            // assessmentId={props.assessmentId}
          />

          {/* <div>
            {receivedQuestions.map((questionData, index) => (
              <div className={`${styles.AllQuestionBorder} mt-4`} key={index}>
                <div className="row mt-4">
                  <div className={`col-6 ${styles.start}`}>
                    <div className={`${styles.questionscoreone}`}>
                      <label>Question {index + 1}</label>
                    </div>
                  </div>
                  <div className={`col-6 ${styles.end}`}>
                    <div className={`${styles.scoreContainer}`}>
                      <div className={`${styles.AllScore}`}>
                        Score: 5
                        <div className={`${styles.dots}`}>
                          <BiDotsVerticalRounded />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <label
                      htmlFor="assessmentName"
                      className={`${styles.boldLabel}`}
                    >
                       {questionData.value}
                    </label>
                  </div>
                </div>
                <div className="row mt-2">
                {optionsData[questionData.id] &&
                          optionsData[questionData.id].map(
                            (option, optionIndex) => (
                    <div
                      className="col-12 col-md-4 col-lg-4 col-xl-4"
                      key={optionIndex}
                    >
                      <div
                        className={`form-check form-check-inline ${styles.StateChoice}`}
                      >
                        <input
                          className={`form-check-input form-check-lg ${styles.customCheckbox}`}
                          type="checkbox"
                          id={`checkbox${optionIndex}`}
                          defaultChecked={option.groupscore > 0}
                        />
                        <label
                          className={`form-check-label ${styles.labelCustom}`}
                          htmlFor={`checkbox${optionIndex}`}
                        >
                          {option.value}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
          <div className={`${styles.ContainerAllQ}`}>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 ">
                <div className={`${styles.PreviousButtonAllQ}`}>
                  <button
                    className={`${styles.PreviousBtnset}`}
                    onClick={() => navigate("createassessment")}
                  >
                    Previous
                  </button>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-8 col-6 ">
                <div className={`${styles.btnallq}`}>
                  <button
                    className={`${styles.btnallqstn}`}
                    onClick={() => navigate("settings")}
                  >
                    {" "}
                    Next{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestion;
