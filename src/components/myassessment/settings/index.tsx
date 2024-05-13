"use client";
import React, { useState, useEffect } from "react";
import styles from "@/components/myassessment/Settings/styles.module.css";
import Image from "next/image";
import checkgreen from "/public/images/GreenStepper.svg";
import doctwo from "/public/images/StepperNumtwo.svg";
import line from "/public/images/Line3.svg";
import lineone from "/public/images/Line5.svg";
import linethree from "/public/images/LInethreeStraignt.svg";
import { TbMathGreater } from "react-icons/tb";
import { BsExclamationCircle } from "react-icons/bs";
import { MdOutlineCopyAll } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  // assessmentId: string;
  // onGetId: (id: string) => void;
  // step: number;
  // stepChange: (step: number) => void;
}

const Settings: React.FC<Props> = (props) => {
  const router = useRouter();
  const navigate = (page: String) => {
    router.push("/myassessment/" + page);
  };

  //   const { data: session } = useSession();
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  // const { assessmentId, onGetId } = props; // Destructuring assessmentId and onGetId from props
  // console.log("assessmentId:", assessmentId);

  const [assessmentTime, setAssessmentTime] = useState("");
  const [questionTime, setQuestionTime] = useState("");
  const [timer, setTimer] = useState(0);

  // const handleAssessmentTimeChange = (event) => {
  //   setAssessmentTime(event.target.value);
  // };

  // const handleQuestionTimeChange = (event) => {
  //   setQuestionTime(event.target.value);
  // };

  //   function publishApi() {
  //     var myHeaders = new Headers();
  //     // myHeaders.append("Authorization", "Bearer " + session.user.access_token);
  //     myHeaders.append("Content-Type", "application/json");

  //     console.log("Publishing with ID:", assessmentId);
  //     const status = 0;
  //     const group =  "Developer";
  //     const name = document.getElementById('null');
  //     const description = document.getElementById('null');
  //     const language = document.getElementById('null');

  //     // const assessmentTime = "10:10";
  //     // const questionTime = "05:05";

  //     // var graphql = JSON.stringify({
  //     //   query: `mutation {
  //     //     updateAssessment(id: "${assessmentId}", assessmentGroup: ${group}, status: ${status}, assessmentTime: "${assessmentTime}", questionTime: "${questionTime}") {
  //     //       id,
  //     //       status,
  //     //       assessmentGroup
  //     //     }
  //     //   }`,
  //     //   variables: {},
  //     // });

  //     var graphql = JSON.stringify({
  //       query: `mutation {
  //         updateAssessment(
  //           id: "${assessmentId}",
  //           assessmentGroup: ${group !== null ? `"${group}"` : null},
  //           status: ${status},
  //           assessmentTime: "${assessmentTime}",
  //           questionTime: "${questionTime}",
  //           name: ${name !== null ? `${name}` : null},
  //           description: ${description !== null ? `${description}` : null},
  //           language: ${language == null ?   null : `${language}`}
  //         ) {
  //           id,
  //           status,
  //           assessmentGroup,
  //           assessmentTime,
  //           questionTime,
  //           name,
  //           language,
  //           description
  //         }
  //       }`,
  //       variables: {}
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
  //         console.log(result);
  //         // If you want to pass the assessmentId back to the parent component
  //         onGetId(assessmentId);
  //       })
  //       .catch((error) => console.log("error", error));
  //   }

  const handleSaveAndPublish = () => {
    // if (assessmentId) {
    // //   publishApi();
    //   onGetId(assessmentId);
    // } else {
    //   console.error("assessmentId is undefined");
    // }
    // props.stepChange(props.step - 5);
  };

  const handleAssessmentTimeChange = (event: any) => {
    const value = event.target.value;

    // Ensure only numeric characters are entered and enforce the format 0-12:0-60
    const formattedValue = value
      .replace(/[^0-9:]/g, "") // Allow only numeric characters and ':'
      .slice(0, 5); // Limit to a maximum of 5 characters

    setAssessmentTime(formattedValue);
    setQuestionTime(""); // Clear questionTime if assessmentTime is being entered

    if (formattedValue.length >= 5) {
      const [hours, minutes] = formattedValue.split(":");
      const parsedHours = parseInt(hours, 10);
      const parsedMinutes = parseInt(minutes, 10);

      // Validate hours (0-12) and minutes (0-60)
      if (
        parsedHours >= 0 &&
        parsedHours <= 12 &&
        parsedMinutes >= 0 &&
        parsedMinutes <= 60
      ) {
        const totalSeconds = parsedHours * 3600 + parsedMinutes * 60;
        setTimer(totalSeconds);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // const handleQuestionTimeChange = (event) => {
  //   const value = event.target.value;
  //   console.log("Question Time Value:", value);

  //   if (/^\d{1,2}:\d{2}$/.test(value) || value === "") {
  //     setQuestionTime(value);
  //     // Clear assessmentTime if questionTime is being entered
  //     setAssessmentTime("");
  //   }
  // };

  const handleQuestionTimeChange = (event: any) => {
    const value = event.target.value;

    // Ensure only numeric characters are entered and enforce the format mm:ss
    const formattedValue = value
      .replace(/[^0-9:]/g, "") // Allow only numeric characters and ':'
      .slice(0, 5); // Limit to a maximum of 5 characters

    setQuestionTime(formattedValue);
    // Clear assessmentTime if questionTime is being entered
    setAssessmentTime("");

    if (formattedValue.length >= 4) {
      const [minutes, seconds] = formattedValue.split(":");
      const parsedMinutes = parseInt(minutes, 10);
      const parsedSeconds = parseInt(seconds, 10);

      // Validate minutes (0-59) and seconds (0-59)
      if (
        parsedMinutes >= 0 &&
        parsedMinutes <= 59 &&
        parsedSeconds >= 0 &&
        parsedSeconds <= 59
      ) {
        const totalSeconds = parsedMinutes * 60 + parsedSeconds;
        setTimer(totalSeconds);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // const handleAssessmentTimeChange = (event) => {
  //   const value = event.target.value;
  //   // Check if the entered value is in the format "hh:mm"
  //   if (/^\d{1,2}:\d{2}$/.test(value) || value === "") {
  //     setAssessmentTime(value);
  //     // Clear questionTime if assessmentTime is being entered
  //     setQuestionTime("");
  //   }
  // };
  // const handleQuestionTimeChange = (event) => {
  //   const value = event.target.value;
  //   // Check if the entered value is in the format "mm:ss"
  //   if (/^\d{1,2}:\d{2}$/.test(value) || value === "") {
  //     setQuestionTime(value);
  //     // Clear assessmentTime if questionTime is being entered
  //     setAssessmentTime("");
  //   }
  // };
  return (
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
                      src={checkgreen}
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
                      src={doctwo}
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
            <div className="col-12">
              <div className={`${styles.Setting}`}>
                <div className="ml-4 mt-2">
                  <h5 className="d-none d-md-block">Other settings</h5>
                </div>
                <h5 className={`${styles.headingSetting}`}>
                  Select test duration measuring method
                </h5>
              </div>
            </div>
            <div className="col-12">
              <div className={`${styles.Radio}`}>
                <div className={`${styles.Inputone} row align-items-center`}>
                  <div className="col-12 col-md-auto ">
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      className={`${styles.Inputbox}`}
                      defaultChecked
                      onChange={handleAssessmentTimeChange}
                    />
                    <label
                      className={`${styles.Inputtext} ms-2`}
                      htmlFor="flexRadioDefault1"
                    >
                      Time to complete the assessment:
                    </label>
                  </div>
                  {/* <div className="col-12 col-md d-flex align-items-center">
                    <input
                      type="time"
                      className={`form-control ${styles.TextInputone}    ${styles.SmallInput}`}
                      value={assessmentTime}
                      onChange={handleAssessmentTimeChange}
                    />
                    <p
                      className={`${styles.Inputparaone} align-self-center  ms-2`}
                    >
                      (hh:mm)
                    </p>
                  </div> */}
                  {/* <div> */}
                  <div className="col-12 col-md d-flex align-items-center">
                    <input
                      type="text"
                      className={`form-control  ${styles.TextInputone}    ${styles.SmallInput}`}
                      value={assessmentTime}
                      onChange={handleAssessmentTimeChange}
                    />
                    <p
                      className={`${styles.Inputparaone} align-self-center ms-2`}
                    >{`(hh:mm)`}</p>
                  </div>
                  <p
                    className={`${styles.Inputparaone} align-self-center ms-2`}
                  >{`Time left: ${Math.floor(timer / 3600)
                    .toString()
                    .padStart(2, "0")}:${Math.floor((timer % 3600) / 60)
                    .toString()
                    .padStart(2, "0")}`}</p>
                </div>
                {/* </div> */}
                <div className={`${styles.Inputtwo} row align-items-center`}>
                  <div className="col-12 col-md-auto">
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      className={`${styles.Inputboxone}`}
                      onChange={handleQuestionTimeChange}
                    />
                    <label
                      className={`${styles.Inputtext} ms-2`}
                      htmlFor="flexRadioDefault2"
                    >
                      Time limit for each question:
                    </label>
                  </div>
                  {/* <div className="col-12 col-md d-flex align-items-center">
                    <input
                      type="time"
                      className={`form-control ${styles.TextInputone} flex-grow-auto ${styles.SmallInput}`}
                      value={questionTime}
                      onChange={handleQuestionTimeChange}
                    />
                    <p
                      className={`${styles.Inputparaone} align-self-center  ms-2`}
                    >
                      (mm:ss)
                    </p>
                  </div> */}
                  {/* <div> */}
                  <div className="col-12 col-md d-flex align-items-center">
                    <input
                      type="text"
                      className={`form-control ${styles.TextInputone} flex-grow-auto ${styles.SmallInput}`}
                      value={questionTime}
                      onChange={handleQuestionTimeChange}
                    />
                    <p
                      className={`ms-2 ${styles.Inputparaone} align-self-center`}
                    >{`(mm:ss)`}</p>
                  </div>
                  <p
                    className={`${styles.Inputparaone} align-self-center ms-2`}
                  >{`Time left: ${Math.floor(timer / 60)
                    .toString()
                    .padStart(2, "0")}:${(timer % 60)
                    .toString()
                    .padStart(2, "0")}`}</p>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={`${styles.Accesstype}`}>
                  <div className="ml-4 mt-4">
                    <h5>Access Type</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-lg"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleRadioChange}
                    defaultChecked
                  />
                  <label className={`${styles.RedioTextLine}`}>Public</label>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-lg"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleRadioChange}
                  />
                  <label className={`${styles.RedioTextLine}`}>Private</label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-lg"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleRadioChange}
                  />
                  <label className={`${styles.RedioTextLine}`}>
                    Specific Group
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {selectedOption === "option1" && (
                  <div className={`${styles.PublicRadiobtn}`}>
                    <div
                      className={`alert alert-success ${styles["custom-alert"]}`}
                      role="alert"
                    >
                      <BsExclamationCircle /> Anyone in your team can take the
                      assessment
                    </div>
                  </div>
                )}

                {selectedOption === "option2" && (
                  <div className={`${styles.PraivateRadiobtn} mb-2`}>
                    <div
                      className={`alert alert-success ${styles["custom-alert"]}`}
                      role="alert"
                    >
                      <BsExclamationCircle /> Anyone in your team can take the
                      assessment
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-9">
                        <div
                          className={`alert alert-light ${styles["custom-alert1"]}`}
                          role="alert"
                        >
                          https://www.assessit/test
                        </div>
                      </div>
                      <div className="col-12 col-md-3">
                        <div className={`${styles.copyRedio}`}>
                          <button className={`${styles.Copytext}`}>
                            <MdOutlineCopyAll /> Copy Link
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-2 mb-4">
                      <div className="col-12">
                        <div className={`${styles.emailContainer}`}>
                          <div className={`${styles.emailSelector}`}>
                            <textarea
                              className={`${styles.emailTextarea} form-control`}
                              style={{ width: "100%" }}
                              placeholder="Enter email ID to add"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedOption === "option3" && (
                  <div className={`${styles.specificRediobtn} mb-2`}>
                    {/* <label htmlFor="language">Text Language</label> */}
                    <select
                      id="language"
                      className={`${styles.redioSpecificbtn}`}
                    >
                      <option value="Select" disabled selected hidden>
                        Select
                      </option>
                      <option value="Development">
                        <input type="checkbox" className={styles.checkbox} />{" "}
                        Development
                      </option>
                      <option value="Infra">
                        <input type="checkbox" className={styles.checkbox} />{" "}
                        Infra
                      </option>
                      <option value="Hr">
                        <input type="checkbox" className={styles.checkbox} /> HR
                      </option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`${styles.ContainerSett}`}>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-6 ">
                <div className={`${styles.PreviousButtonset}`}>
                  <button
                    className={`${styles.PreviousBtnset}`}
                    // onClick={() => props.stepChange(props.step - 1)}
                  >
                    Previous
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6 ">
                <div className={`${styles.nextBtnnset}`}>
                  <button
                    className={`${styles.nextbuttonnset}`}
                    onClick={() => navigate("newassessment")}
                  >
                    Save as Draft
                  </button>
                </div>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-4 col-10 ">
                <div className={`${styles.nextBtnnoneset}`}>
                  <button
                    className={`${styles.nextbuttonnoneset}`}
                    onClick={handleSaveAndPublish}
                  >
                    Save and Publish
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

export default Settings;
