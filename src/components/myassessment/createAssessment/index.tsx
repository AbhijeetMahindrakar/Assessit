// 'use client';
// import React, { useState } from 'react';
// import styles from '@/components/myassessment/createassessment/styles.module.css';
// import Image from 'next/image';
// import document from '/public/images/StepperNum.svg';
// import documentone from '/public/images/Stepperone.svg';
// import documenttwo from '/public/images/Steppertwo.svg';
// import line from '/public/images/Line3.svg';
// import linethree from '/public/images/LInethreeStraignt.svg';
// import lineone from '/public/images/Line5.svg';
// import { BsPlusSquare } from 'react-icons/bs';
// import { TbMathGreater } from 'react-icons/tb';
// import uploadimgage from '/public/images/uploadimg.svg';
// import { useRouter } from 'next/navigation';
// import AddQuestion from '@/app/myassessment/addquestions/page';
// import AddQuestionAssessment from '../addQuestionAssessment';
// // import { useSession } from "next-auth/react";
// import { CallApi } from '@/utils/util';


// interface FormData {
//   assessmentName: string;
//   description: string;

//   language: string;
// }

// interface Props {
//   step: number;
//   stepChange: (step: number, id?: string | null) => void;
//   onGetId: (id: string | null) => void;
// }

// const CreateAssessment: React.FC = () => {
//   const router = useRouter();
//   const navigate = (page: String) => {
//     router.push("/myassessment/" + page);
//   };


//   // // const { data: session } = useSession();
//   // // const [getId, setGetId] = useState(null);

//   // // var getId
//   // const [assessmentId,setAssessmentId] = useState<string | null>(null);

//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   description: "",
//   //   categoryId: "",
//   //   totalScore: "",
//   //   draftQuestions: [{
//   //     questionId: "",
//   //     subcategoryId: "",
//   //     question: "",
//   //     questionType: "",
//   //     multipleChoice: true,
//   //     totalWeightage: 1.5,
//   //     answer: "",
//   //     options:
//   //     {
//   //       option: "",
//   //       weightage: ""
//   //     }
//   //   }],
//   //   testLanguage: "",
//   //   thumbnailImg: "",
//   //   perQuestionDuration: "",
//   //   duration: "",
//   //   status: "",
//   //   subCategoryId: "",
//   //   createdBy: "",


//   // });

//   //   // Function to retrieve assessmentId
//   //   const getAssessmentId = (): string | null => {
//   //     // Implement your logic to retrieve assessmentId here
//   //     return assessmentId;
//   //   };



//   // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//   //   const { id, value } = e.target;
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [id]: value,
//   //   }));
//   // };


//   // const callApi = () => {
//   //   try {
//   //     fetch("http://localhost:9000/graphql", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         query: `
//   //           mutation {
//   //             addAssessment(assessmentInput: {
//   //               name: "${formData.name}",
//   //               description: "${formData.description}",
//   //               testLanguage: "${formData.testLanguage}",
//   //               categoryId: "660e600599ee7013fc41c387",
//   //               totalScore: 500.00,
//   //               draftQuestions: 
//   //               [{
//   //                 questionId: "",
//   //                 subcategoryId: "660e80f5bd09ec4159a26659",
//   //                 question: "fkgkhhkir",
//   //                 questionType: "textual",
//   //                 multipleChoice: true,
//   //                 totalWeightage: 1.5,
//   //                 answer: "java",
//   //                 options:
//   //                 {
//   //                   option: "folk",
//   //                   weightage: 1.5
//   //                 }
//   //               }
  
//   //               ],
//   //               thumbnailImg: "image.jpg",
//   //               perQuestionDuration: "3",
//   //               duration: "60",
//   //               status: "published",
//   //               subCategoryId: "660e80f5bd09ec4159a26659",
//   //               createdBy: "vikash"
//   //             }) {
//   //               name
//   //               description
//   //               testLanguage
//   //               id
//   //             }
//   //           }
//   //         `,
//   //       }),
//   //     })
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       console.log("API Response:", data);
//   //       const assessmentId = data.data.addAssessment.id;
//   //       console.log("AssessmentId:", assessmentId);
//   //       setAssessmentId(assessmentId);
//   //       // router.push('/myassessment/addquestionassessment');
//   //     })
//   //     .catch(error => {
//   //       console.error("Error:", error);
//   //     });
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //   }
//   // };

//   // // const callApi = async () => {
//   // //   try {
//   // //     const response = await fetch("http://localhost:9000/graphql", {
//   // //       method: "POST",
//   // //       headers: {
//   // //         "Content-Type": "application/json",
//   // //       },
//   // //       body: JSON.stringify({
//   // //         query: `
//   // //           mutation {
//   // //             addAssessment(assessmentInput: {
//   // //               name: "${formData.name}",
//   // //               description: "${formData.description}",
//   // //               testLanguage: "${formData.testLanguage}",
//   // //               categoryId: "660e600599ee7013fc41c387",
//   // //               totalScore: 500.00,
//   // //               draftQuestions: 
//   // //               [{
//   // //                 questionId: "",
//   // //                 subcategoryId: "660e80f5bd09ec4159a26659",
//   // //                 question: "fkgkhhkir",
//   // //                 questionType: "textual",
//   // //                 multipleChoice: true,
//   // //                 totalWeightage: 1.5,
//   // //                 answer: "java",
//   // //                 options:
//   // //                 {
//   // //                   option: "folk",
//   // //                   weightage: 1.5
//   // //                 }
//   // //               }

//   // //               ],
//   // //               thumbnailImg: "image.jpg",
//   // //               perQuestionDuration: "3",
//   // //               duration: "60",
//   // //               status: "published",
//   // //               subCategoryId: "660e80f5bd09ec4159a26659",
//   // //               createdBy: "vikash"
//   // //             }) {
//   // //               name
//   // //               description
//   // //               testLanguage
//   // //               id
//   // //             }
//   // //           }
//   // //         `,
//   // //       }),
//   // //     });
//   // //     const data = await response.json();
//   // //     console.log("API Response:", data);
//   // //     const assessmentId = data.data.addAssessment.id;
//   // //     console.log("AssessmentId:",assessmentId)
//   // //     setAssessmentId(assessmentId)
//   // //     // router.push('/myassessment/addquestionassessment');
//   // //   } catch (error) {
//   // //     console.error("Error:", error);
//   // //   }
//   // // };



//   // // const { data: session } = useSession();
//   // // const [getId, setGetId] = useState(null);

//   // // var getId

//   // // const [formData, setFormData] = useState({
//   // //   assessmentName: "",
//   // //   description: "",
//   // //   group: "",
//   // //   language: "",
//   // // });

//   // // const handleInputChange = (
//   // //   e: React.ChangeEvent<
//   // //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
//   // //   >
//   // // ) => {
//   // //   const { id, value } = e.target;
//   // //   // setFormData((prevData) => ({
//   // //   //   ...prevData,
//   // //   //   [id]: value,
//   // //   // }));
//   // // };
//   // // function callApi(name: string, group: string, description: string, language: string) {
//   // //   var myHeaders = new Headers();
//   // // //   myHeaders.append("Authorization", "Bearer " + session.user.access_token);
//   // //   myHeaders.append("Content-Type", "application/json");

//   // //   var createdBy = "me";
//   // //   const status = 1;
//   // //   var assessmentTime = "00:20";
//   // //   var questionTime = "05:00";

//   // //   var graphql = JSON.stringify({
//   // //     query: `mutation{\r\n    newAssessment(name:"${name}", createdBy:"${createdBy}",assessmentGroup:"${group}", status:${status},description:"${description}", language:"${language}",assessmentTime:"${assessmentTime}",questionTime: "${questionTime}"){\r\n        id\r\n        name\r\n        createdBy\r\n        assessmentGroup\r\n        status\r\n        description\r\n        language\r\n        createdOn\r\n        questions{\r\n            id\r\n            assessmentId\r\n            value\r\n            type\r\n            group\r\n            options{\r\n                id\r\n                questionId\r\n                value\r\n                weightage\r\n            }\r\n        }\r\n    }\r\n}\r\n`,

//   // //     variables: {},
//   // //   });
//   // //   var requestOptions = {
//   // //     method: "POST",
//   // //     headers: myHeaders,
//   // //     body: graphql,
//   // //   };

//   // //   fetch("http://localhost:9000/assessment-tool/admin", requestOptions)
//   // //     .then((response) => response.json())
//   // //     .then((result) => {
//   // //       const assessmentId = result.data.newAssessment.id;
//   // //       console.log("New ID:", assessmentId);
//   // //       // console.log(assessmentId);
//   // //       setGetId(assessmentId); // Update the state with the assessmentId
//   // //       // Proceed with changing the step
//   // //       props.stepChange(props.step + 1, assessmentId);
//   // //       // Pass getId to the parent component
//   // //       props.onGetId(assessmentId);
//   // //     })
//   // //     .catch((error) => console.log("error", error));
//   // // }

//   // // const handleNextClick = () => {
//   // //   // Call the API function with assessment name and group
//   // //   callApi(
//   // //     formData.assessmentName,
//   // //     formData.group,
//   // //     formData.description,
//   // //     formData.language
//   // //   );

//   // //   // Proceed with changing the step
//   // //   props.stepChange(props.step + 1, getId);

//   // //   // Pass getId to the parent component
//   // //   props.onGetId(getId);
//   // // };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault(); // Prevent default form submission

//   //   // Check if any required field is empty
//   //   if (!formData.name || !formData.description || !formData.testLanguage) {
//   //     alert('Please fill in all required fields.');
//   //   } else {
//   //     try {
        

//   //       callApi();
//   //       const id = getAssessmentId();
//   //       router.push(`/myassessment/addquestionassessment?assessmentId=${id}`);
//   //     } catch (error) {
//   //       console.error("Error:", error);
//   //     }
//   //   }

//   // };

//   const [assessmentId, setAssessmentId] = useState("");
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
//       totalWeightage: 1.5,
//       answer: "",
//       options:
//       {
//         option: "",
//         weightage: ""
//       }
//     }],
//     testLanguage: "",
//     thumbnailImg: "",
//     perQuestionDuration: "",
//     duration: "",
//     status: "",
//     subCategoryId: "",
//     createdBy: "",


//   });



//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const mutationQuery = `
//   mutation {
//     addAssessment(assessmentInput: {
//       name: "${formData.name}",
//       description: "${formData.description}",
//       testLanguage: "${formData.testLanguage}",
//       categoryId: "660e600599ee7013fc41c387",
//       totalScore: 500.00,
//       draftQuestions: [{
//         questionId: "",
//         subcategoryId: "660e80f5bd09ec4159a26659",
//         question: "fkgkhhkir",
//         questionType: "textual",
//         multipleChoice: true,
//         totalWeightage: 1.5,
//         answer: "java",
//         options: {
//           option: "folk",
//           weightage: 1.5
//         }
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
//     }
//   }
// `;



// const callApi = async (mutationQuery: string) => {
//   try {
//       const response = await CallApi({ query: mutationQuery, token: "" })
//       console.log("Response:", response)

//       if (!response || !response.data || !response.data.addAssessment || !response.data.addAssessment.id) {
//           throw new Error("Invalid response structure")
//       }
      
//       const id = response.data.addAssessment.id
//       setAssessmentId(id)
//       console.log("ID:>>>>>>>>>>>", id);
      
//       console.log("ID:", id)

//       return id
//   } catch (error) {
//       console.error("Error:", error)
//       throw error
//   }
// }

// const handlesubmit = async () => {
//   const id = await callApi(mutationQuery);
//   router.push(`/myassessment/addquestionassessment?assessmentId=${id}`);
// }


//   return (
    
//     <div
//       className={`${styles.MyAssessmentcontainer} h-100 w-99 d-flex flex-column`}>
//       <form>
//         <div className="row">
//           <div className="col-sm-12 col-md-12 col-lg-12">
//             <div className="containerhead">
//               <div
//                 className={`d-flex align-items-center mt-4 ${styles.headercontainer}`}>
//                 <h4 className={styles.title}>Create Assessment</h4>
//                 <h5
//                   className={`${styles.title1} ${styles.myAssessment}`}
//                   onClick={() => navigate("newassessment")}
//                 >
//                   My Assessment
//                   <span className={styles.greaterThanSymbol}>
//                     <TbMathGreater />
//                   </span>
//                 </h5>
//                 <h6 className={styles.title2}>Create New</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row mt-2">
//           <div
//             className={`col-sm-12 col-md-3 col-lg-3 col-xl-3  ${styles.Stage}`}
//           >
//             <div className="row">
//               <div className={`${styles.cointenerstg} col-sm-8 `}>
//                 <div className="row  row-cols-5">
//                   <div
//                     className={`${styles.cointenerstage} col-xl-12 col-lg-12 col-md-12 d-flex`}
//                   >
//                     <span className={`${styles.numbercreate}`}>
//                       <Image
//                         className={`mt-3 mb-5 ${styles.customImage}`}
//                         alt="#"
//                         src={document}
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
//                   <div
//                     className={`${styles.cointenerstageone} col-lg-12 col-md-12 d-flex`}
//                   >
//                     <span className={`${styles.numbercreate}`}>
//                       <Image
//                         className={`mt-3 mb-5 ${styles.customImage}`}
//                         alt="#"
//                         src={documentone}
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
//               height: "fit-content",
//             }}
//           >
//             <div className={`${styles.PassdataCreate}`}>
//               <div
//                 className={`col-12 mt-2 d-none d-md-block ${styles.headertitle}`}
//               >
//                 <label>Basic Details</label>
//               </div>
//               <div className="row mt-4 ">
//                 <div className="col-md-8 h-15 ">
//                   <div className={`${styles.fomgroupcreate}`}>
//                     <label htmlFor="assessmentName">Assessment Name</label>
//                     <input
//                       type="text"
//                       placeholder="Enter Name"
//                       id="name"
//                       className={`${styles.formcontrolname}`}
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="col d-lg-none d-md-none  mx-auto">
//                   <div className={`${styles.Uploadimg} ${styles.dashedBorder}`}>
//                     <div
//                       className={`${styles.Uploadimg} d-flex flex-column align-items-center`}
//                     >
//                       <Image className="mb-4" alt="#" src={uploadimgage} />
//                     </div>
//                     <div className={`${styles.Uploadimgtxt} text-center`}>
//                       <h6 className={`${styles.UploadimgTitle}`}>
//                         Upload Thumbnail
//                       </h6>
//                       <p className={`${styles.UploadimgDesc}`}>
//                         Supported formats: JPEG, PNG
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={`col-md-8 h-65 mt-2 ${styles.UploadDesc}`}>
//                   <div>
//                     <label htmlFor="description">Description</label>
//                     <textarea
//                       id="description"
//                       placeholder="Lorem ipsum dolor sit amet"
//                       className={`${styles.formcontrol}`}
//                       //   rows="4"
//                       value={formData.description}
//                       onChange={handleInputChange}
//                       required
//                     ></textarea>
//                   </div>
//                 </div>
//                 <div className="col d-none d-md-block">
//                   <div className={`${styles.Uploadimg} ${styles.dashedBorder}`}>
//                     <div
//                       className={`${styles.Uploadimg} d-flex flex-column align-items-center`}
//                     >
//                       <Image className="mt-5 mb-0" alt="#" src={uploadimgage} />
//                     </div>
//                     <div className={`${styles.Uploadimgtxt} text-center`}>
//                       <h6 className={`${styles.UploadimgTitle} `}>
//                         Upload Thumbnail
//                       </h6>
//                       <p className={`${styles.UploadimgDesc}`}>
//                         Supported formats: JPEG, PNG
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-8  h-85">
//                   <div className={`${styles.grouptitile}`}>
//                     <label htmlFor="group">Group</label>
//                     <select
//                       id="group"
//                       className={`${styles.groupOption}`}
//                       // value={formData.group}
//                       // onChange={handleInputChange}
//                       required
//                     >
//                       <option value="" hidden>
//                         Select
//                       </option>
//                       <option value="Developer">Development</option>
//                       <option value="Infra Team">Infra Team</option>
//                       <option value="Backend">Backend</option>
//                       <option value="Finance">Finance</option>
//                       <option value="Design">Design</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className={` col-md-4 h-85 ${styles.Creategroupbtn}`}>
//                   <button className={`${styles.CreateGroup}`}>
//                     <BsPlusSquare className={`${styles.iconCreate}`} />
//                     Create Group
//                   </button>
//                 </div>
//                 <div className="col-md-12 h-50">
//                   <div className={`${styles.formgrouptext}`}>
//                     <label htmlFor="language">Text Language</label>
//                     <select
//                       id="testLanguage"
//                       className={`${styles.formlanguage}`}
//                       value={formData.testLanguage}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="" hidden>
//                         Select
//                       </option>
//                       <option value="English">English</option>
//                       <option value="Hindi">Hindi</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="container">
//               <div className="row">
//                 <div className={`col-md-12 ${styles.createbtnnext}`}>
//                   {/* <Link href='/myassessment/addQuestionAssessment'> */}
//                   <button
//                     id="btnbox1"
//                     className={`${styles.createnextbutton}`}
//                     onClick={() => {
//                       handlesubmit(); // Call handleSubmit function
//                       // navigate("addquestionassessment"); // Remove this line
//                       // callApi(); // Remove this line
//                     }}
//                   >
//                     Next
//                   </button>
//                   {/* </Link> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
    
//     </div>
      
    
//   );
// };

// export default CreateAssessment;


'use client';
import React, { useState } from 'react';
import styles from '@/components/myassessment/createassessment/styles.module.css';
import Image from 'next/image';
import document from '/public/images/StepperNum.svg';
import documentone from '/public/images/Stepperone.svg';
import documenttwo from '/public/images/Steppertwo.svg';
import line from '/public/images/Line3.svg';
import linethree from '/public/images/LInethreeStraignt.svg';
import lineone from '/public/images/Line5.svg';
import { BsPlusSquare } from 'react-icons/bs';
import { TbMathGreater } from 'react-icons/tb';
import uploadimgage from '/public/images/uploadimg.svg';
import { useRouter } from 'next/navigation';
import { CallApi } from '@/utils/util';
// import { useSession } from "next-auth/react";

interface FormData {
  assessmentName: string;
  description: string;

  language: string;
}

interface Props {
  step: number;
  stepChange: (step: number, id?: string | null) => void;
  onGetId: (id: string | null) => void;
}

const CreateAssessment: React.FC = () => {
  const router = useRouter();
  const navigate = (page: String) => {
    router.push("/myassessment/" + page);
  };


  // const { data: session } = useSession();
  // const [getId, setGetId] = useState(null);

  // var getId
  const [assessmentId, setAssessmentId] = useState("");
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
      totalWeightage: 1.5,
      answer: "",
      options:
      {
        option: "",
        weightage: ""
      }
    }],
    testLanguage: "",
    thumbnailImg: "",
    perQuestionDuration: "",
    duration: "",
    status: "",
    subCategoryId: "",
    createdBy: "",


  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const mutationQuery = `
  mutation {
    addAssessment(assessmentInput: {
      name: "${formData.name}",
      description: "${formData.description}",
      testLanguage: "${formData.testLanguage}",
      categoryId: "660e600599ee7013fc41c387",
      totalScore: 500.00,
      draftQuestions: [{
        questionId: "",
        subcategoryId: "6641f1288ab6b1249d6dd8bb",
        question: "fkgkhhkir",
        questionType: "textual",
        multipleChoice: true,
        totalWeightage: 1.5,
        answer: "java",
        options: {
          option: "folk",
          weightage: 1.5
        }
      }],
      thumbnailImg: "image.jpg",
      perQuestionDuration: "3",
      duration: "60",
      status: "published",
      subCategoryId: "6641f1288ab6b1249d6dd8bb",
      createdBy: "vikash"
    }) {
      name
      description
      testLanguage
      id
    }
  }
`;



const callApi = async (mutationQuery: string) => {
  try {
      const response = await CallApi({ query: mutationQuery, token: "" })
      console.log("Response:", response)

      // if (!response || !response.data || !response.data.addAssessment || !response.data.addAssessment.id) {
      //     throw new Error("Invalid response structure")
      // }
      
      const id = response.data.addAssessment.id
      setAssessmentId(id)
      console.log("ID:>>>>>>>>>>>", id);
      
      console.log("ID:", id)

      return id
  } catch (error) {
      console.error("Error:", error)
      throw error
  }
}

// const handlesubmit = async () => {
//   const id = await callApi(mutationQuery);
//   router.push(`/myassessment/addquestionassessment?assessmentId=${id}`);
// }

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    
    if (!formData.name || !formData.description || !formData.testLanguage) {
      alert('Please fill in all required fields.');
    } else {
      try {
        

        const id = await callApi(mutationQuery);
        router.push(`/myassessment/addquestionassessment?assessmentId=${id}`);
      } catch (error) {
        console.error("Error:", error);
      }
    }

  };

return (
  <div
    className={`${styles.MyAssessmentcontainer} h-100 w-99 d-flex flex-column`}
  >
    <form>
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
      <div
        className={`col-sm-12 col-md-3 col-lg-3 col-xl-3  ${styles.Stage}`}
      >
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
                    src={document}
                  />
                </span>
                <div className={`col ${styles.customDiv}`}>
                  <span className={`${styles.textcreatebasic}`}>
                    Basic Details
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
                      src={documentone}
                    />
                  </span>
                  <div className={`col ${styles.customDiv}`}>
                    <span className={`${styles.textcreatebasic}`}>
                      Add Questions
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
                      Other Settings
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
            height: "fit-content",
          }}
        >
          <div className={`${styles.PassdataCreate}`}>
            <div
              className={`col-12 mt-2 d-none d-md-block ${styles.headertitle}`}
            >
              <label>Basic Details</label>
            </div>
            <div className="row mt-4 ">
              <div className="col-md-8 h-15 ">
                <div className={`${styles.fomgroupcreate}`}>
                  <label htmlFor="assessmentName">Assessment Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    id="name"
                    className={`${styles.formcontrolname}`}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col d-lg-none d-md-none  mx-auto">
                <div className={`${styles.Uploadimg} ${styles.dashedBorder}`}>
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
                    //   rows="4"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col d-none d-md-block">
                <div className={`${styles.Uploadimg} ${styles.dashedBorder}`}>
                  <div
                    className={`${styles.Uploadimg} d-flex flex-column align-items-center`}
                  >
                    <Image className="mt-5 mb-0" alt="#" src={uploadimgage} />
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
                  // value={formData.group}
                  // onChange={handleInputChange}
                   required
                  >
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="Developer">Development</option>
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
                    id="testLanguage"
                    className={`${styles.formlanguage}`}
                    value={formData.testLanguage}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" hidden>
                      Select
                    </option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className={`col-md-12 ${styles.createbtnnext}`}>
                {/* <Link href='/myassessment/addQuestionAssessment'> */}
                <button
                  id="btnbox1"
                  className={`${styles.createnextbutton}`}
                  onClick={(e) => 
                    // router.push(`/myassessment/addquestionassessment?id=${assessmentId}`);
                    // callApi(mutationQuery)
                    handlesubmit(e)
                  }

                >
                  Next
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default CreateAssessment;
