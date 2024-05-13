"use client";
import React, { useState, useEffect } from "react";
import styles from "@/components/myassessment/ReceiveAllQuestions/styles.module.css";
import Image from "next/image";
import { BsPlusSquare } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSession } from "next-auth/react";

interface ReceiveAllQuestionsProps {
  stepChange: (step: number) => void;
  receivedQuestions: any[]; // Adjust the type for receivedQuestions based on your needs
  assessmentId: string; // Adjust the type for assessmentId
}

const ReceiveAllQuestions: React.FC<ReceiveAllQuestionsProps> = (props) => {
  //   const { data: session } = useSession();
  const { assessmentId } = props;

  const [optionsData, setOptionsData] = useState<any[]>([]);
  const [receivedQuestions, setReceivedQuestions] = useState<any[]>(
    props.receivedQuestions
  );

  //   useEffect(() => {
  //     console.log("Fetching data for question ID:", assessmentId);

  //     function fetchData() {
  //       var myHeaders = new Headers();
  //       myHeaders.append("Authorization", "Bearer " + session.user.access_token);
  //       myHeaders.append("Content-Type", "application/json");

  //       var graphql = JSON.stringify({
  //         query: `
  //           query GetQuestions($assessmentId: ID!) {
  //             questions(assessmentId: $assessmentId) {
  //               id,
  //               value
  //               options {
  //                 id,
  //                 value,
  //                 weightage
  //               }
  //             }
  //           }
  //         `,
  //         variables: {
  //           assessmentId: assessmentId,
  //         },
  //       });

  //       var requestOptions = {
  //         method: "POST",
  //         headers: myHeaders,
  //         body: graphql,
  //         redirect: "follow",
  //       };

  //       fetch("http://localhost:9000/assessment-tool/admin", requestOptions)
  //         .then((response) => response.json())
  //         .then((result) => {
  //           console.log("Received questions:", result);
  //           const questions = result.data.questions;
  //           if (questions) {
  //             setReceivedQuestions(questions);
  //             const optionsByQuestionId = questions.reduce((acc, question) => {
  //               acc[question.id] = question.options;
  //               return acc;
  //             }, {});
  //             setOptionsData(optionsByQuestionId);
  //           }
  //         })
  //         .catch((error) => console.log("error", error));
  //     }

  //     fetchData();
  //   }, [assessmentId, session.user.access_token]);

  return (
    <div>
      <div className={`${styles.AllQstTitle}`}>
        <div className={`${styles.PassdataCreate}`}>
          <div className="row">
            <div className="col">
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
                        (option: any, optionIndex: any) => (
                          <div
                            className="col-12 col-md-4 col-lg-3 col-xl-3"
                            key={optionIndex}
                          >
                            <div
                              className={`form-check form-check-inline ${styles.StateChoice}`}
                            >
                              <input
                                className={`form-check-input form-check-lg ${styles.customCheckbox}`}
                                type="checkbox"
                                id={`checkbox${optionIndex}`}
                                defaultChecked={option.weightage > 0}
                              />
                              <label
                                className={`form-check-label ${styles.labelCustom}`}
                                htmlFor={`checkbox${optionIndex}`}
                              >
                                {option.value}
                              </label>
                            </div>
                          </div>
                        )
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveAllQuestions;
