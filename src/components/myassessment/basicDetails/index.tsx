'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/components/myassessment/BasicDetails/styles.module.css';
import Image from 'next/image';
import uploadimgage from '/public/images/uploadimg.svg';
import { BsPlusSquare, BsPencil } from 'react-icons/bs';
import { TbMathGreater } from 'react-icons/tb';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
// import AssessmentMobileSideBar from "./AssessmentMobileSideBar;
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface BasicDetailsProps {
  // assessmentId: string; // Define the type for assessmentId
  // stepChange: (step: number) => void; // Define the type for stepChange function
}

const BasicDetails: React.FC<BasicDetailsProps> = () => {
  const router = useRouter();
  const navigate = (page: String) => {
    router.push("/myassessment/" + page);
  };
  //   const { data: session } = useSession();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [isEditing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [assessmentData, setAssessmentData] = useState(null);
  //   const { assessmentId } = props;
  //   console.log("AssessmentId:", assessmentId);

  const handleNewButtonClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleOutsideClick = () => {
    setSidebarOpen(false);
  };

  //   useEffect(() => {
  //     // function fetchData() {
  //     //   var myHeaders = new Headers();
  //     //   myHeaders.append("Authorization", "Bearer " + session.user.access_token);
  //     //   myHeaders.append("Content-Type", "application/json");

  //     //   var graphql = JSON.stringify({
  //     //     query: `
  //     //     query GetAssessment($assessmentId: ID!) {
  //     //       assessment(id: $assessmentId) {
  //     //         id,
  //     //         name,
  //     //         description,
  //     //         assessmentGroup,
  //     //         language
  //     //       }
  //     //     }
  //     //   `,
  //     //     variables: {
  //     //       assessmentId: assessmentId, // This assumes assessmentId is the correct id you want to fetch
  //     //     },
  //     //   });

  //     //   var requestOptions = {
  //     //     method: "POST",
  //     //     headers: myHeaders,
  //     //     body: graphql,
  //     //     redirect: "follow",
  //     //   };

  //     //   fetch("http://localhost:9000/assessment-tool/admin", requestOptions)
  //     //     .then((response) => response.json())
  //     //     .then((result) => {
  //     //       const assessment = result.data.assessment;
  //     //       if (assessment) {
  //     //         setAssessmentData(assessment);
  //     //       }
  //     //     })
  //     //     .catch((error) => console.log("error", error));
  //     // }

  //     // fetchData();
  //   }, [assessmentId, session.user.access_token]);

  //   function handleSaveClick() {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Authorization", "Bearer " + session.user.access_token);
  //     myHeaders.append("Content-Type", "application/json");

  //     console.log("saved with ID:", assessmentId);
  //     const status = 0 ;
  //     const name = document.getElementById('name').value;
  //     const description = document.getElementById('description').value;
  //     const group = document.getElementById('group').value;
  //     const language = document.getElementById('language').value;

  //     // Assuming you have numerical input elements with IDs 'assessmentTime' and 'questionTime'

  //     // const assessmentTime = document.getElementById('10:23');
  //     // const questionTime = document.getElementById('');

  //     const assessmentTime = "10:32";
  //     const questionTime = "";

  //     console.log("asess",assessmentTime);

  //     var graphql = JSON.stringify({
  //       query: `mutation {
  //         updateAssessment(id: "${assessmentId}", name: "${name}",description: "${description}", assessmentGroup: "${group}", status: ${status},language: "${language}", assessmentTime: ${assessmentTime !== null ? `"${assessmentTime}"` : "null"},
  //         questionTime: ${questionTime !== null ? `"${questionTime}"` : "null"}
  //       )  {
  //           id,
  //           name,
  //           description,
  //           assessmentGroup,
  //           status,
  //           language,
  //           assessmentTime,
  //           questionTime
  //         }
  //       }`,
  //       variables: {},
  //     });

  //     var requestOptions = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: graphql,
  //       redirect: 'follow'
  //     };

  //     fetch("http://localhost:9000/assessment-tool/admin", requestOptions)
  //       .then(response => response.text())
  //       .then(result => console.log(result))
  //       .catch(error => console.log('error', error));

  //       setAssessmentData({ ...editedData });
  //       if (setEditing) {
  //         setEditing(false);
  //       }
  //   }

  const handleEditClick = () => {
    setEditing(true);
    // setEditedData({
    //   name: assessmentData.name,
    //   description: assessmentData.description,
    //   assessmentGroup: assessmentData.assessmentGroup,
    //   language: assessmentData.language,
    // });
  };

  return (
    <div
      className={`${styles.MyAssessmentcontainerDetail}`}
      onBlur={handleOutsideClick}
    >
      {isSidebarOpen && <div className={styles.overlay} />}
      {/* {isSidebarOpen && (
        <AssessmentMobileSideBar
          setMobileSidebarSelect={() => {}}
          isOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )} */}
      <div className="row mt-4">
        <div className="col-12">
          <div className={`d-flex align-items-center ${styles.Detailheader}`}>
            <strong>Test</strong>
            <div className={`d-flex align-items-center ${styles.Dtitle1}`}>
              <span onClick={() => navigate("newassessment")}>
                My Assessment
              </span>
              <span className={styles.DtlgreaterSyb}>
                <TbMathGreater />
              </span>
              <strong>Assessment Details</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="row col-12 mt-4">
        <div className="col-3 d-none d-md-block">
          <div className={`${styles.DetailsOptions}`}>
            <div className="d-flex  flex-column justify-content-between">
              <div className="d-flex align-items-center">
                <div className={`${styles.Detailbox}`}>
                  <div className={`${styles.Detailboxtext}`}>Basic Detail</div>
                </div>
                <div className={`${styles.VerticalLine}`}></div>
              </div>
              <div
                className="p-3"
                // onClick={() => props.stepChange(props.step + 1)}
              >
                Questions
              </div>
              <div
                className="p-3"
                // onClick={() => props.stepChange(props.step + 2)}
              >
                Settings
              </div>
              <div
                className="p-3"
                //   onClick={() => props.stepChange(props.step + 3)}
              >
                Result&nbsp;Table
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-9 d-flex flex-column bg-white ${styles.Detailsdata}`}
        >
          <div className="row mt-2">
            <div className="col-6 mt-2">
              <div className="d-flex align-items-center ">
                <div className={`${styles.DetailSidebar} d-lg-none d-md-none`}>
                  <>
                    <button
                      className={`${styles.btnnewDraftarrow} me-2`}
                      onClick={handleNewButtonClick}
                    >
                      <MdOutlineKeyboardDoubleArrowRight
                        className={`${styles.iconArrorw}`}
                      />
                    </button>
                  </>
                </div>
                <h5 className={styles["custom-heading"]}>BasicDetails</h5>
              </div>
            </div>
            <div className="col-6">
              {!isEditing && (
                <button
                  id="editbutton"
                  className={`${styles.btnedit}`}
                  onClick={handleEditClick}
                >
                  <BsPencil
                    className={`${styles.iconplus} ${styles.gapfirst}`}
                  />
                  Edit
                </button>
              )}
              {isEditing && (
                <button
                  id="savebutton"
                  className={`${styles.btnedit}`}
                  // onClick={handleSaveClick}
                >
                  Save
                </button>
              )}
            </div>
          </div>
          {assessmentData && (
            <div className={`${styles.AllQstTitle}`}>
              <div className={`${styles.PassdataCreate}`}>
                <div className="row mt-4 ">
                  <div className="col-md-8 h-15 ">
                    <div className={`${styles.fomgroupcreate}`}>
                      <label htmlFor="assessmentName">Assessment Name</label>
                      <input
                        type="text"
                        placeholder="Enter Name"
                        id="name"
                        className={`${styles.formcontrolname}`}
                        // value={isEditing ? editedData.name : assessmentData.name}
                        onChange={(e) =>
                          setEditedData({ ...editedData, name: e.target.value })
                        }
                        readOnly={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="col d-lg-none d-md-none  mx-auto">
                    <div
                      className={`${styles.Uploadimg} ${styles.dashedBorder}`}
                    >
                      <div
                        className={`${styles.Uploadimg} d-flex flex-column align-items-center`}
                      >
                        <Image className="mb-4" alt="#" src={uploadimgage} />
                      </div>
                      <div className={`${styles.Uploadimgtxt} text-center`}>
                        <h6 className={`${styles.UploadimgTitle}`}>
                          Upload Thumbnail
                        </h6>
                        <p className={`${styles.UploadimgDesc}`}>
                          Supported formats: JPEG, PNG
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`col-md-8 h-65 mt-2 ${styles.UploadDesc}`}>
                    <div>
                      <label htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        placeholder="Lorem ipsum dolor sit amet"
                        className={`${styles.formcontrol}`}
                        // rows="4"
                        // value={assessmentData.description}
                        // value={isEditing ? editedData.description : assessmentData.description}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            description: e.target.value,
                          })
                        }
                        readOnly={!isEditing}
                        // onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col d-none d-md-block">
                    <div
                      className={`${styles.Uploadimg} ${styles.dashedBorder}`}
                    >
                      <div
                        className={`${styles.Uploadimg} d-flex flex-column align-items-center`}
                      >
                        <Image
                          className="mt-5 mb-0"
                          alt="#"
                          src={uploadimgage}
                        />
                      </div>
                      <div className={`${styles.Uploadimgtxt} text-center`}>
                        <h6 className={`${styles.UploadimgTitle} `}>
                          Upload Thumbnail
                        </h6>
                        <p className={`${styles.UploadimgDesc}`}>
                          Supported formats: JPEG, PNG
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8  h-85">
                    <div className={`${styles.grouptitile}`}>
                      <label htmlFor="group">Group</label>
                      <select
                        id="group"
                        className={`${styles.groupOption}`}
                        // value={assessmentData.assessmentGroup}
                        // value={isEditing ? editedData.assessmentGroup : assessmentData.assessmentGroup}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            assessmentGroup: e.target.value,
                          })
                        }
                        // readOnly={!isEditing}
                        // onChange={handleInputChange}
                      >
                        <option value="Select" hidden>
                          Select
                        </option>
                        <option value="Developer">Developer</option>
                        <option value="Infra Team">Infra Team</option>
                        <option value="Backend">Backend</option>
                        <option value="Finance">Finance</option>
                        <option value="Design">Design</option>
                      </select>
                    </div>
                  </div>
                  <div className={` col-md-4 h-85 ${styles.Creategroupbtn}`}>
                    <button className={`${styles.CreateGroup}`}>
                      <BsPlusSquare className={`${styles.iconCreate}`} />
                      Create Group
                    </button>
                  </div>
                  <div className="col-md-12 h-50">
                    <div className={`${styles.formgrouptext}`}>
                      <label htmlFor="language">Text Language</label>
                      <select
                        id="language"
                        className={`${styles.formlanguage}`}
                        // value={assessmentData.language}
                        // value={isEditing ? editedData.language : assessmentData.language}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            language: e.target.value,
                          })
                        }
                        // readOnly={!isEditing}
                      >
                        <option value="Select" hidden>
                          Select
                        </option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
