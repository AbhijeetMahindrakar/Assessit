// "use client";
// import styles from "@/components/myassessment/AddQuestions/styles.module.css";
// import documenttwo from "/public/images/Steppertwo.svg";
// import checkgreen from "/public/images/GreenStepper.svg";
// import docone from "/public/images/StepperNumone.svg";
// import line from "/public/images/Line3.svg";
// import lineone from "/public/images/Line5.svg";
// import linethree from "/public/images/LInethreeStraignt.svg";
// import Image from "next/image";
// import { BsPlusSquare } from "react-icons/bs";
// import { BsFillPenFill, BsPaperclip, BsImageFill } from "react-icons/bs";
// import { MdAddToDrive, MdLockClock, MdAttachment } from "react-icons/md";
// import { CgSmileMouthOpen } from "react-icons/cg";
// import { RiFontColor, RiDeleteBin6Line } from "react-icons/ri";
// import { TbMathGreater } from "react-icons/tb";
// import React, { useState } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter, useSearchParams } from "next/navigation";

// import { useEffect } from 'react';
// import { CallApi } from '@/utils/util';
// import test from "node:test";

// interface Props {
//   // step: number;
//   // stepChange: (step: number) => void;
//   // assessmentId: string;
//   // receivedQuestionId: string;
// }
// const AddQuestions: React.FC<Props> = () => {
//   const router = useRouter();
//   const searchParam = useSearchParams()
//   const [assessmentId, setAssessmentId] = useState<string | null>(null);

//   useEffect(() => {
//     const id = searchParam.get("assessmentId")
//     console.log("assessmentID", id);
//     setAssessmentId(id)
//   }, [searchParam])


//   const navigate = (page: String) => {
//     router.push("/myassessment/" + page + "?assessmentId=" + assessmentId);
//   };


//   // const { data: session } = useSession();
//   const [selectedOption, setSelectedOption] = useState("");
//   const [answers, setAnswers] = useState<string[]>([]);
//   const [options, setOptions] = useState([ ]);
//   const [receivedOptionsData, setReceivedOptionsData] = useState([]);
//   const [optionsData, setOptionsData] = useState([]);


//  const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { id, value } = event.target;


//     const updatedFormData = {
//       ...formData,
//       draftQuestions: [
//         {
//           ...formData.draftQuestions[0],
//           [id]: value,
//         },
//       ],
//     };

//     setFormData(updatedFormData);
//   };




//   const  handleOptionInputChange = (event: any) => {
//     setOptions(event.target.value)
//   }



//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     categoryId: "",
//     totalScore: "",
//     draftQuestions: [{
//       questionId: "",
//       subcategoryId: "",
//       question: "",
//       questionType: "",
//       multipleChoice: true,
//       totalWeightage: 1.0,
//       answer: "",
//       options:
//       [{
//         option: "",
//         weightage: ""
//       }]
//     }],
//     testLanguage: "",
//     thumbnailImg: "",
//     perQuestionDuration: "",
//     duration: "",
//     status: "",
//     subCategoryId: "",
//     createdBy: "",


//   });


//   const mutationQuery = `
//   mutation {
//     updateAssessmentDetails(id: "${assessmentId}", assessmentInput: {
//       name: "${formData.name}",
//       description: "${formData.description}",
//       testLanguage: "${formData.testLanguage}",
//       categoryId: "660e600599ee7013fc41c387",
//       totalScore: 500.00,
//       draftQuestions: [{
//         questionId: "",
//         subcategoryId: "660e80f5bd09ec4159a26659",
//         question: "${formData.draftQuestions[0].question}",
//         questionType: "${selectedOption}",

//         multipleChoice: true,
//         totalWeightage: 1.5,
//         answer: "${answers}",
//         options:[{
//           option: "${formData.draftQuestions[0].options[0].option}",
//           weightage: "${formData.draftQuestions[0].options[0].weightage}"
//         }]
//       }],
//       thumbnailImg: "image.jpg",
//       perQuestionDuration: "3",
//       duration: "60",
//       status: "published",
//       subCategoryId: "660e80f5bd09ec4159a26659",
//       createdBy: "vikash"
//     }) {
//       name
//       description
//       testLanguage
//       id
//      draftQuestions {
//       question
//       questionId
//       questionType
//       answer
//       options {
//         option
//         weightage
//       }
//     }
//     }
//   }
// `;


//   const callApi = async (mutationQuery: string) => {
//     try {
//       const response = await CallApi({ query: mutationQuery, token: "" })
//       console.log("Response:", response)



//       const id = response.data.addAssessment.id
//       setAssessmentId(id)
//       console.log("ID:>>>>>>>>>>>", id);

//       // console.log("ID:", id)

//       return id
//     } catch (error) {
//       console.error("Error:", error)
//       throw error
//     }
//   }

//   const handlesubmit = async (e: any) => {
//     e.preventDefault()
//     console.log("Selected questionType:", selectedOption);
//     console.log("Answers:", answers);
//     const id = await callApi(mutationQuery);
//     router.push(`/myassessment/addquestionassessment?assessmentId=${id}`);
//   }

//   const handleAnswerChange = (index: number, value: string) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[index] = value;
//     setAnswers(updatedAnswers);
//   };




//   return (
//     <div
//       className={`${styles.MyAssessmentcontainer} h-100 w-99 d-flex flex-column`}>
//       <form>
//         <div className="row">
//           <div className="col-sm-12 col-md-12 col-lg-12">
//             <div className="containerhead">
//               <div
//                 className={`d-flex align-items-center mt-4 ${styles.headercontainer}`}
//               >
//                 <h4 className={styles.title}>Create Assessment</h4>
//                 <h5
//                   className={`${styles.assessment_title}`}
//                   onClick={() => navigate("newassessment")}
//                 >
//                   My Assessment
//                   <span className={styles.greaterThanSymbol}>
//                     <TbMathGreater />
//                   </span>
//                 </h5>
//                 <h6 className={styles.static_title}>Create New</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row mt-2">
//           <div className={`col-sm-12 col-md-3 col-lg-3 col-xl-3 ${styles.Stage}`}>
//             <div className="row">
//               <div className={`${styles.cointenerstg} col-sm-8 `}>
//                 <div className="row  row-cols-5">
//                   {/* Stage 1 */}
//                   <div
//                     className={`${styles.cointenerstage} col-xl-12 col-lg-12 col-md-12 d-flex`}
//                   >
//                     <span className={`${styles.numbercreate}`}>
//                       <Image
//                         className={`mt-3 mb-5 ${styles.customImage}`}
//                         alt="#"
//                         src={checkgreen}
//                       />
//                     </span>
//                     <div className={`col ${styles.customDiv}`}>
//                       <span className={`${styles.textcreatebasic}`}>
//                         Basic&nbsp;Details
//                       </span>
//                     </div>
//                   </div>
//                   <div
//                     className={`${styles.cointenerstageline} col-lg-12 col-md-12`}
//                   >
//                     <Image
//                       className={`${styles.rotatedImage} mt-3 mb-5 d-none d-md-block`}
//                       alt="#"
//                       src={line}
//                     />
//                     <Image
//                       className={`${styles.rotatedImage} mt-3 mb-5 d-lg-none d-md-none  mx-auto`}
//                       alt="#"
//                       src={linethree}
//                     />
//                   </div>
//                   {/* Stage 2 */}
//                   <div
//                     className={`${styles.cointenerstageone} col-lg-12 col-md-12 d-flex`}
//                   >
//                     <span className={`${styles.numbercreate}`}>
//                       <Image
//                         className={`mt-3 mb-5 ${styles.customImage}`}
//                         alt="#"
//                         src={docone}
//                       />
//                     </span>
//                     <div className={`col ${styles.customDiv}`}>
//                       <span className={`${styles.textcreatebasic}`}>
//                         Add&nbsp;Questions
//                       </span>
//                     </div>
//                   </div>
//                   <div
//                     className={`${styles.cointenerstagelineone} col-lg-12 col-md-12 `}
//                   >
//                     <Image
//                       className={`${styles.rotatedImage} mt-3 mb-5 d-none d-md-block`}
//                       alt="#"
//                       src={lineone}
//                     />
//                     <Image
//                       className={`${styles.rotatedImage} mt-3 mb-5 d-lg-none d-md-none  mx-auto`}
//                       alt="#"
//                       src={linethree}
//                     />
//                   </div>
//                   {/* Stage 3 */}
//                   <div
//                     className={`${styles.cointenerstagetwo} col-lg-12 col-md-12 d-flex`}
//                   >
//                     <span className={`${styles.numbercreate}`}>
//                       <Image
//                         className={`mt-3 mb-5 ${styles.customImage}`}
//                         alt="#"
//                         src={documenttwo}
//                       />
//                     </span>
//                     <div className={`col ${styles.customDiv}`}>
//                       <span className={`${styles.textcreatebasic}`}>
//                         Other&nbsp;Settings
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="col-xl-9 col-lg-9 col-md-9 col-sm-12"
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               backgroundColor: "white",
//             }}
//           >
//             <div className={`row mt-4 ${styles.scrollableRow}`}>
//               <div className="col-12">
//                 <div className={`${styles.MessageboxAdd}`}>
//                   <div className={`${styles.AddQuestionTitle} ml-4 mt-2`}>
//                     <h5>Add Questions</h5>
//                   </div>
//                   <h2 className={`${styles.headingQuestion}`}>Question 1</h2>
//                   <div className={`${styles.fomgrpquestion}`}>
//                     <label htmlFor="question">Enter Question</label>
//                     <input
//                       type="text"
//                       placeholder="Enter your question"
//                       id="question"
//                       className={`${styles.formcontrolquestion}`}
//                       value={formData.draftQuestions[0].question}
//                       onChange={handleInputChange}
//                     />
//                     </div>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className={`${styles.fomgrpquestionone} col-12`}>
//                   <label htmlFor="questionType">Answer Type</label>
//                   <select
//                     id="questionType"
//                     className={`${styles.formcontrolquestionone}`}
//                     // value={formData.draftQuestions[0].questionType}
//                     value={selectedOption}
//                     onChange={(e) => setSelectedOption(e.target.value)}
//                   // onChange={handleInputChange}
//                   // onChange={(e) => {
//                   //   handleDropdownChange(e);
//                   //   handleInputChange(e);
//                   // }}
//                   >
//                     <option value="select" hidden>
//                       Select
//                     </option>
//                     <option value="multiple-choice">Multiple Choice</option>
//                     <option value="true-false">True/False</option>
//                     <option value="textual">Textual</option>
//                   </select>


//                   {selectedOption === "multiple-choice" && (
//                     <div id="multiple-choice" className={styles.contentdropdown}>
//                       <div className="col ml-4 mt-3">
//                         <h6>Select the correct answer and mention score for each correct answer</h6>
//                       </div>
//                       <div className="row">
//                         {options.map((option, index) => (
//                           <div
//                             className="col-lg-6 col-md-6 col-sm-12 mt-2"
//                             key={index}
//                           >
//                             {index >= 2 && (
//                               <div
//                                 className={`${styles.DeleteOne} `}
//                               // onClick={() => handleDeleteOption(index)}
//                               >
//                                 <RiDeleteBin6Line />
//                               </div>
//                             )}
//                             <div className={`${styles.checkBox}`}>
//                               <input
//                                 type="checkbox"
//                                 className={`${styles.CheckOne}`}
//                               />
//                             </div>
//                             <div
//                               className={`question-box ${styles["question-box"]}`}
//                             >
//                               {/* <input
//                                 type="text"
//                                 placeholder="Enter option"
//                                 value={options}
//                                 onChange={handleOptionInputChange}
//                               /> */}
//                               <textarea
//                                 id={`EnterOption_${index}`}
//                                 className={`${styles.Textelement}`}
//                                 value={option}
//                               //  onChange={(e) =>
//                               //   handleOptionInputChange(
//                               //     index,
//                               //     "EnterOption",
//                               //     e.target.value
//                               //   )
//                               // }
//                               />
//                               {/* <div className={`${styles.groupIcons}`}>
//                                 <RiFontColor />
//                                 <BsPaperclip />
//                                 <MdAttachment />
//                                 <CgSmileMouthOpen />
//                                 <MdAddToDrive />
//                                 <BsImageFill />
//                                 <MdLockClock />
//                                 <BsFillPenFill />
//                               </div> */}
//                             </div>
//                             <div className={`col-sm ${styles.Scoreone}`}>
//                               <label htmlFor="group">Score:</label>
//                               <input
//                                 type="text"
//                                 // placeholder="Enter "
//                                 value={options}
//                                 onChange={handleOptionInputChange}
//                               />
//                               {/* <input
//                                 type="text"
//                                 id={`groupscore_${index}`}
//                                 className={`${styles.formsropeone}`}
//                                 value={option.weightage}
//                                 onChange={(e) =>
//                                 handleOptionInputChange(
//                                   index,
//                                   "weightage",
//                                   e.target.value
//                                 )
//                               }
//                               /> */}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="col-12">
//                         <div className={`${styles.Addoption} mt-4 mb-2`}>
//                           {/* <button
//                             className={`${styles.Addoptionbutton}`}
//                             onClick={handleAddOption}
//                           >
//                             <BsPlusSquare className={`${styles.iconoption}`} />{" "}
//                             Add Option
//                           </button> */}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   {selectedOption === "true-false" && (
//                     <div className={`${styles.textualDropdown}`}>
//                       <h6>Select the correct option</h6>
//                       <div className="row ">
//                         {/* Options */}
//                         {options.map((options, index) => (
//                           <div
//                             className="col-lg-6 col-md-6 col-sm-12"
//                             key={index}
//                           >
//                             <div className={`${styles.checkBox}`}>
//                               <input
//                                 type="radio"
//                                 className={`${styles.CheckOne}`}
//                               />
//                             </div>
//                             <div
//                               className={`question-boxarea ${styles["question-boxarea"]}`}
//                             >
//                               <textarea
//                                 id={`EnterOption_${index}`}
//                                 className={`${styles.Textelementarea}`}
//                                 // value={option.EnterOption}
//                               // onChange={(e) =>
//                               //   handleOptionInputChange(
//                               //     index,
//                               //     "EnterOption",
//                               //     e.target.value
//                               //   )
//                               // }
//                               />
//                               <div className={`${styles.groupIcons}`}>
//                                 <RiFontColor />
//                                 <BsPaperclip />
//                                 <MdAttachment />
//                                 <CgSmileMouthOpen />
//                                 <MdAddToDrive />
//                                 <BsImageFill />
//                                 <MdLockClock />
//                                 <BsFillPenFill />
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                         {/* Options */}
//                         <div className="col-lg-6 col-md-6 col-sm-12">
//                           <div className={`${styles.checkBox}`}>
//                             <input
//                               type="radio"
//                               className={`${styles.Checktwo}`}
//                             />
//                           </div>
//                           <div
//                             className={`question-boxareaone ${styles["question-boxareaone"]}`}
//                           >
//                             <textarea className={`${styles.Textelementarea}`} />
//                             <div className={`${styles.groupIcons}`}>
//                               <RiFontColor />
//                               <BsPaperclip />
//                               <MdAttachment />
//                               <CgSmileMouthOpen />
//                               <MdAddToDrive />
//                               <BsImageFill />
//                               <MdLockClock />
//                               <BsFillPenFill />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   {selectedOption === "textual" && (
//                     <div id="textual" className={styles.contentdropdown}>
//                       <div className="col ml-4 mt-3">
//                         <h6>Enter Answer below</h6>
//                       </div>
//                       <div className="row row-col-12">
//                         {options.map((option, index) => (
//                           <div className="col-12" key={index}>
//                             <div className={`${styles.Textualbox}`}>
//                               <input
//                                 type="text"
//                                 className={`${styles.Textelementarea}`}
//                                 placeholder="Enter answer"
//                                 value={answers}
//                                 onChange={(e) => handleAnswerChange(index, e.target.value)}
//                               />

//                               {/* <textarea
//                                 placeholder="Add possible answer to the question"
//                                 id="textBox"
//                                 className="form-control"
//                                 value={option.EnterOption}
//                                 onChange={(e) =>
//                                   handleOptionInputChange(
//                                     index,
//                                     "EnterOption",
//                                     e.target.value
//                                   )
//                                 }
//                                 style={{ height: "130px" }}
//                               ></textarea> */}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                       {/* <div className="row row-col-12">
//                         {answers.map((answer, index) => (
//                           <div className="col-12" key={index}>
//                             <div className={`${styles.Textualbox}`}>
//                               <textarea
//                                 placeholder="Add possible answer to the question"
//                                 id="{`answer_${index}`}"
//                                 className="form-control"
//                                 value={answer}
//                                 onChange={(e) => handleAnswerChange(index, e.target.value)}
//                                 // onChange={(e) =>
//                                 //   handleOptionInputChange(
//                                 //     index,
//                                 //     "EnterOption",
//                                 //     e.target.value
//                                 //   )
//                                 // }
//                                 style={{ height: "130px" }}
//                               ></textarea>
//                             </div>
//                           </div>
//                         ))}
//                       </div> */}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className={`${styles.ContainerAddQ}`}>
//               <div className="row">
//                 <div className="col-lg-3 col-md-3 col-sm-4 col-6 ">
//                   <div className={`${styles.PreviousButton}`}>
//                     <button
//                       className={`${styles.PreviousBtn}`}
//                       onClick={() => navigate("createassessment")}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-4 col-sm-4 col-6 ">
//                   <div className={`${styles.nextBtnn}`}>
//                     <button
//                       className={`${styles.nextbuttonn}`}
//                       // onClick={() => {
//                       //   handleNextClick();
//                       //   props.stepChange(props.step + 1);
//                       // }}
//                       onClick={(e) => handlesubmit(e)}
//                     >
//                       Save and exit
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-lg-5 col-md-5 col-sm-4 col-8 ">
//                   <div className={`${styles.nextBtnnone}`}>
//                     <button
//                       className={`${styles.nextbuttonnone}`}
//                     // onClick={() => {
//                     //   handlesubmit();
//                     // }}
//                     >
//                       Save and add next
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddQuestions;








// ------------------------------------------------------------------------------------------------------------------------------------------------

"use client";
import styles from "@/components/myassessment/AddQuestions/styles.module.css";
import documenttwo from "/public/images/Steppertwo.svg";
import checkgreen from "/public/images/GreenStepper.svg";
import docone from "/public/images/StepperNumone.svg";
import line from "/public/images/Line3.svg";
import lineone from "/public/images/Line5.svg";
import linethree from "/public/images/LInethreeStraignt.svg";
import Image from "next/image";
import { BsPlusSquare } from "react-icons/bs";
import { BsFillPenFill, BsPaperclip, BsImageFill } from "react-icons/bs";
import { MdAddToDrive, MdLockClock, MdAttachment } from "react-icons/md";
import { CgSmileMouthOpen } from "react-icons/cg";
import { RiFontColor, RiDeleteBin6Line } from "react-icons/ri";
import { TbMathGreater } from "react-icons/tb";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
// import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { CallApi } from '@/utils/util';
import test from "node:test";

interface Props {
  // step: number;
  // stepChange: (step: number) => void;
  // assessmentId: string;
  // receivedQuestionId: string;
}



const AddQuestions: React.FC<Props> = () => {
  const router = useRouter();
  const searchParam = useSearchParams()
  const [assessmentId, setAssessmentId] = useState<string | null>(null);

  const [assessmentData, setAssessmentData] = useState<any>(null);

  const query = `
  query MyQuery {
    assessmentById(id: "${assessmentId}") {
      categoryId
      createdAt
      createdBy
      description
      draftQuestions {
        answer
        createdAt
        multipleChoice
        options {
          weightage
          option
        }
        question
        questionId
        questionType
        subcategoryId
        totalWeightage
        updatedAt
      }
      duration
      id
      name
      perQuestionDuration
      status
      testLanguage
      thumbnailImg
      totalScore
      updatedAt
    }
  }
  `
  useEffect(() => {
    const id = searchParam.get("assessmentId")
    console.log("assessmentID", id);
    setAssessmentId(id)

    const fetchData = async () => {
      try {
        const response = await CallApi({ query: query, token: "" })
        console.log("Response:", response)

        const assessmentData = response.data.assessmentById

        setAssessmentData(assessmentData)
        console.log("Assessment Data:", assessmentData);

      } catch (error) {
        console.error("Error:", error)
        // Handle errors gracefully
      }
    }

    if (query && id) { // Check if both query and id are available
      fetchData();
    }
  }, [query, searchParam]);



  const navigate = (page: String) => {
    router.push("/myassessment/" + page + "?assessmentId=" + assessmentId);
  };


  // const { data: session } = useSession();
  const [selectedOption, setSelectedOption] = useState("");

  // const [answers, setAnswers] = useState({answer:""});
  const [options, setOptions] = useState([
    { id: 1, EnterOption: "", groupscore: "" },
  ]);
  const [receivedOptionsData, setReceivedOptionsData] = useState([]);
  const [optionsData, setOptionsData] = useState([]);
  // const { assessmentId, receivedQuestionId } = props;
  // console.log("FromDetailId:", assessmentId);
  // console.log("assessmentId:", assessmentId);


  const handleAddOption = () => {
    setOptions((prevOptions) => [
      ...prevOptions,
      { id: prevOptions.length + 1, EnterOption: "", groupscore: "" },
    ]);
  };
  // const handleAddOption = () => {
  //   setOptions((prevOptions) => [
  //     ...prevOptions,
  //     { id: uuidv4(), EnterOption: "", groupscore: "" },
  //   ]);
  // };

  

  const handleDeleteOption = (id: number) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option.id !== id)
    );
  };
  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    // Update the specific field in the first object of draftQuestions array
    const updatedDraftQuestions = formData.draftQuestions.map((question, index) => {
      if (index === 0) { // Assuming you want to update the first object
        return {
          ...question,
          [id]: value,
        };
      }
      return question; // For other objects, return them unchanged
    });

    // Update formData with the updated draftQuestions array
    setFormData(prevState => ({
      ...prevState,
      draftQuestions: updatedDraftQuestions,
    }));
  };


  // const handleOptionInputChange = (index: number, field: any, value: any) => {
  //   setOptions((prevOptions) => {
  //     return prevOptions.map((option, i) => {
  //       if (i === index) {
  //         return { ...option, [field]: value };
  //       }
  //       return option;
  //     });
  //   });
  // };



  const handleOptionInputChange = (index: number, field: string, value: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option, i) =>
        i === index ? { ...option, [field]: value } : option
      )
    );
  };



  const handleAddNext = () => {
    // handleNextClick();
  };

  // const handleAnswerChange = (e:any) => {
  //   const {id,value} = e.target;
  //   setAnswers((prev) => {
  //     return { ...prev,[id]:value }
  //   })
  // }


  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categoryId: "",
    totalScore: "",
    draftQuestions: [{
      questionId: "",
      subcategoryId: "",
      question: "",
      questionType: "",
      multipleChoice: true,
      totalWeightage: 1.0,
      answer: [],
      options:
        [{
          option: "",
          weightage: ""
        }]
    }],
    testLanguage: "",
    thumbnailImg: "",
    perQuestionDuration: "",
    duration: "",
    status: "",
    subCategoryId: "",
    createdBy: "",
  });

  const answerArray = options
    .filter(opt => opt.groupscore !== "0")
    .map(opt => opt.EnterOption);





  const mutationQuery = `
  mutation {
    updateAssessmentDetails(id: "${assessmentId}", assessmentInput: {
      name: "${assessmentData?.name}",
      description: "${assessmentData?.description}",
      testLanguage: "${assessmentData?.testLanguage}",
      categoryId: "660f9e3a7669ea40dec50814",
      totalScore: 500.00,
      draftQuestions: [{
        questionId: "",
        subcategoryId: "6641f1288ab6b1249d6dd8bb",
        question: "${formData.draftQuestions[0].question}",
        questionType: "${selectedOption}",
        multipleChoice: ${options.filter(opt => opt.groupscore !== "0").length > 1 ? 'true' : 'false'},
        totalWeightage: 1.0,
        answer: ${JSON.stringify(answerArray)},
        options: [
          ${options
      .map(
        (opt) => `{
              option: "${opt.EnterOption}",
              weightage: ${opt.groupscore || 0}
            }`
      )
      .join(',\n')}
        ]
      }],
      thumbnailImg: "image.jpg",
      perQuestionDuration: "3",
      duration: "60",
      status: "draft",
      subCategoryId: "6641f1288ab6b1249d6dd8bb",
      createdBy: "Deeptansu"
    }) {
      name
      description
      testLanguage
      id
      draftQuestions {
        questionId
        multipleChoice
        question
        questionType
        answer
        options {
          option
          weightage
        }
      }
    }
  }
`;


  const callApi = async (mutationQuery: string) => {
    try {
      const response = await CallApi({ query: mutationQuery, token: "" })
      console.log("Response:", response)

      if (!response || !response.data || !response.data.updateAssessmentDetails || !response.data.updateAssessmentDetails?.id) {
        throw new Error("Invalid response structure")
      }

      const id = response.data.updateAssessmentDetails.id
      setAssessmentId(id)
      console.log("ID:>>>>>>>>>>>", id);

      // console.log("ID:", id)

      return id
    } catch (error) {
      console.error("Error:", error)
      throw error
    }
  }

  // const handlesubmit = async (e: any) => {
  //   e.preventDefault()
  //   console.log("Selected questionType:", selectedOption);
  //   const id = await callApi(mutationQuery);
  //   router.push(`/myassessment/addquestionassessment?assessmentId=${id}`);
  // }

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Check if any required field is empty
    if (!formData.draftQuestions[0].question) {
      alert('Please fill in all required fields.');
    } else {
      try {


        const id = await callApi(mutationQuery);
        router.push(`/myassessment/allquestion?assessmentId=${id}`);
      } catch (error) {
        console.error("Error:", error);
      }
    }

  };




  return (
    <div
      className={`${styles.MyAssessmentcontainer} h-100 w-99 d-flex flex-column`}>
      <form>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="containerhead">
              <div
                className={`d-flex align-items-center mt-4 ${styles.headercontainer}`}
              >
                <h4 className={styles.title}>Create Assessment</h4>
                <h5
                  className={`${styles.assessment_title}`}
                  onClick={() => navigate("newassessment")}
                >
                  My Assessment
                  <span className={styles.greaterThanSymbol}>
                    <TbMathGreater />
                  </span>
                </h5>
                <h6 className={styles.static_title}>Create New</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className={`col-sm-12 col-md-3 col-lg-3 col-xl-3 ${styles.Stage}`}>
            <div className="row">
              <div className={`${styles.cointenerstg} col-sm-8 `}>
                <div className="row  row-cols-5">
                  {/* Stage 1 */}
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
                  {/* Stage 2 */}
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
                  {/* Stage 3 */}
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
            <div className={`row mt-4 ${styles.scrollableRow}`}>
              <div className="col-12">
                <div className={`${styles.MessageboxAdd}`}>
                  <div className={`${styles.AddQuestionTitle} ml-4 mt-2`}>
                    <h5>Add Questions</h5>
                  </div>
                  <h2 className={`${styles.headingQuestion}`}>Question 1</h2>
                  <div className={`${styles.fomgrpquestion}`}>
                    <label htmlFor="question">Enter Question</label>
                    <input
                      type="text"
                      placeholder="Enter your question"
                      id="question"
                      className={`${styles.formcontrolquestion}`}
                      value={formData.draftQuestions[0].question}
                      onChange={handleInputChange}
                      required
                    />

                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className={`${styles.fomgrpquestionone} col-12`}>
                  <label htmlFor="questionType">Answer Type</label>
                  <select
                    id="questionType"
                    className={`${styles.formcontrolquestionone}`}
                    // value={formData.draftQuestions[0].questionType}
                    value={selectedOption}
                    onChange={(e) => {
                      setSelectedOption(e.target.value);
                      setOptions([{ id: 1, EnterOption: "", groupscore: "" }]);
                      // handleDropdownChange(e);
                    }}
                    
                    required
                  // onChange={handleInputChange}
                  // onChange={(e) => {
                  //   handleDropdownChange(e);
                  //   handleInputChange(e);
                  // }}
                  >
                    <option value="select" hidden>
                      Select
                    </option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True/False</option>
                    <option value="textual">Textual</option>
                  </select>


                  {selectedOption === "multiple-choice" && (
                    <div id="multiple-choice" className={styles.contentdropdown}>
                      <div className="col ml-4 mt-3">
                        <h6>
                          Select the correct answer and mention score for each
                          correct answer
                        </h6>
                      </div>
                      <div className="row">
                        {options.map((option, index) => (
                          <div
                            className="col-lg-6 col-md-6 col-sm-12 mt-2"
                            key={index}
                          >
                            {index >= 2 && (
                              <div
                                className={`${styles.DeleteOne} `}
                                onClick={() => handleDeleteOption(index)}
                              >
                                <RiDeleteBin6Line />
                              </div>
                            )}
                            <div className={`${styles.checkBox}`}>
                              <input
                                type="checkbox"
                                className={`${styles.CheckOne}`}
                              />
                            </div>
                            <div
                              className={`question-box ${styles["question-box"]}`}
                            >
                              <textarea
                                id={`EnterOption_${index}`}
                                className={`${styles.Textelement}`}
                                value={option.EnterOption}
                                onChange={(e) =>
                                  handleOptionInputChange(
                                    index,
                                    "EnterOption",
                                    e.target.value
                                  )
                                }
                              />
                              <div className={`${styles.groupIcons}`}>
                                <RiFontColor />
                                <BsPaperclip />
                                <MdAttachment />
                                <CgSmileMouthOpen />
                                <MdAddToDrive />
                                <BsImageFill />
                                <MdLockClock />
                                <BsFillPenFill />
                              </div>
                            </div>
                            <div className={`col-sm ${styles.Scoreone}`}>
                              <label htmlFor="group">Score:</label>
                              <input
                                type="text"
                                id={`groupscore_${index}`}
                                className={`${styles.formsropeone}`}
                                value={option.groupscore}
                                onChange={(e) =>
                                  handleOptionInputChange(
                                    index,
                                    "groupscore",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="col-12">
                        <div className={`${styles.Addoption} mt-4 mb-2`}>
                          {<button
                            type="button"
                            className={`${styles.Addoptionbutton}`}
                            onClick={handleAddOption}
                          >
                            <BsPlusSquare className={`${styles.iconoption}`} />{" "}
                            Add Option
                          </button>}
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedOption === "true-false" && (
                    <div className={`${styles.textualDropdown}`}>
                      <h6>Select the correct option</h6>
                      <div className="row ">
                        {/* Options */}
                        {options.map((option, index) => (
                          <div
                            className="col-lg-6 col-md-6 col-sm-12"
                            key={index}
                          >
                            <div className={`${styles.checkBox}`}>
                              <input
                                type="radio"
                                className={`${styles.CheckOne}`}
                               
                              />
                            </div>
                            <div
                              className={`question-boxarea ${styles["question-boxarea"]}`}
                            >
                              <textarea
                                id={`EnterOption_${index}`}
                                className={`${styles.Textelementarea}`}
                                value={option.EnterOption}
                                onChange={(e) =>
                                  handleOptionInputChange(
                                    index,
                                    "EnterOption",
                                    e.target.value
                                  )
                                }
                              />
                              <div className={`${styles.groupIcons}`}>
                                <RiFontColor />
                                <BsPaperclip />
                                <MdAttachment />
                                <CgSmileMouthOpen />
                                <MdAddToDrive />
                                <BsImageFill />
                                <MdLockClock />
                                <BsFillPenFill />
                              </div>
                            </div>
                          </div>
                        ))}
                        {/* Options */}
                        {options.map((option, index) => (
                        <div className="col-lg-6 col-md-6 col-sm-12"
                        
                        >
                          <div className={`${styles.checkBox}`}>
                            <input
                              type="radio"
                              className={`${styles.Checktwo}`}
                             
                            />
                          </div>
                          <div
                            className={`question-boxareaone ${styles["question-boxareaone"]}`}
                          >
                            <textarea className={`${styles.Textelementarea}`} />
                            <div className={`${styles.groupIcons}`}>
                              <RiFontColor />
                              <BsPaperclip />
                              <MdAttachment />
                              <CgSmileMouthOpen />
                              <MdAddToDrive />
                              <BsImageFill />
                              <MdLockClock />
                              <BsFillPenFill />
                            </div>
                          </div>
                        </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedOption === "textual" && (
                    <div id="textual" className={styles.contentdropdown}>
                      <div className="col ml-4 mt-3">
                        <h6>Enter Answer below</h6>
                      </div>
                      <div className="row row-col-12">
                        {options.map((option, index) => (
                          <div className="col-12" key={index}>
                            <div className={`${styles.Textualbox}`}>
                              {/* <input
                              type="text"
                              id="answer"
                              onChange={handleAnswerChange}
                              className="form-control"
                              placeholder="Add possible answer to the question"
                              /> */}
                              <textarea
                                placeholder="Add possible answer to the question"
                                id="textBox"
                                className="form-control"
                                value={option.EnterOption}
                                onChange={(e) =>
                                  handleOptionInputChange(
                                    index,
                                    "EnterOption",
                                    e.target.value
                                  )
                                }
                                style={{ height: "130px" }}
                              ></textarea>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={`${styles.ContainerAddQ}`}>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className={`${styles.PreviousButton}`}>
                    <button
                      className={`${styles.PreviousBtn}`}
                      onClick={() => navigate("createassessment")}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6 ">
                  <div className={`${styles.nextBtnn}`}>
                    <button
                      className={`${styles.nextbuttonn}`}
                      // onClick={() => {
                      //   handleNextClick();
                      //   props.stepChange(props.step + 1);
                      // }}
                      onClick={(e) => handlesubmit(e)}
                    >
                      Save and exit
                    </button>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-4 col-8 ">
                  <div className={`${styles.nextBtnnone}`}>
                    <button
                      className={`${styles.nextbuttonnone}`}
                    // onClick={() => {
                    //   handlesubmit();
                    // }}
                    >
                      Save and add next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddQuestions;