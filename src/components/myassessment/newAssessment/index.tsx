"use client";
import React, { useEffect, useState } from "react";
import styles from "@/components/myassessment/newassessment/styles.module.css";
import Image from "next/image";
import document from "/public/images/FrameFile.svg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsEye, BsPlusSquare } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Assessment {
  id: string;
  name: string;
  status: string;
  description: string;
  createdAt: string;
  QuestionsAdd: String;
}

interface PopupProps {
  itemId: string;
  onDelete: (itemId: string) => void;
}

const NewAssessment: React.FC<any> = (props) => {
  const router = useRouter();
  const navigate = (page: String) => {
    router.push("/myassessment/" + page);
  };
  const [myData, setMyData] = useState<Assessment[]>([]);
  const [selectedAssessment, setSelectedAssessment] = useState<number | null>(
    null
  );
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [assessmentId, setAssessmentId] = useState<string | null>(null);

  const handleNewButtonClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOutsideClick = () => {
    setSidebarOpen(false);
  };

  const QuestionsAdd: string = "2";

  const getStatusBulletColor = (status: string): string => {
    switch (status) {
      case "PUBLISHED":
        return "rgba(67, 153, 81, 1)";
      case "DRAFT":
        return "rgba(173, 173, 173, 1)";
      case "DELETED":
        return "rgba(243, 86, 86, 1)";
      default:
        return "#808080";
    }
  };

  const handlePopupToggle = (index: number) => {
    if (selectedAssessment === index) {
      setSelectedAssessment(null);
    } else {
      setSelectedAssessment(index);
    }
  };

  const handleDelete = (itemId: string) => { };

  const Popup: React.FC<PopupProps> = ({ itemId, onDelete }) => {
    return (
      <div className={`${styles.popup} `}>
        <ul className={`${styles.popupList}`}>
          <li>
            <button
              className={`${styles.threeboxbtn}`}
              onClick={() => handleIdPass(itemId)}
            >
              <BsEye />
              View
            </button>
          </li>
          <li>
            <button className={`${styles.threeboxbtn}`}>
              <MdOutlineModeEditOutline />
              Edit
            </button>
          </li>
          <li>
            <button
              className={`${styles.threeboxbtn}`}
              onClick={() => onDelete(itemId)}
            >
              <RiDeleteBin6Line />
              Delete
            </button>
          </li>
        </ul>
      </div>
    );
  };

  useEffect(() => {
    function ListApi() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const graphql = JSON.stringify({
        query:
          "query MyQuery {\r\n  assessments {\r\n   createdAt\r\n     description\r\n  id\r\n    name\r\n    status\r\n}\r\n}\r\n",
        variables: {},
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
      };

      fetch("http://localhost:9000/graphql", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("Response from server:", result);
          setMyData(result.data.assessments);
        })
        .catch((error) => console.error(error));
    }

    ListApi();
  }, []);

  const handleIdPass = (id: string) => {
    props.setAssessmentId(id);
    // props.stepChange(props.step + 7, id);
    console.log(id);
  };

  return (
    <div
      className={`${styles.MyAssessmentcontainer} h-100 w-99 d-flex flex-column`}
      onBlur={handleOutsideClick}
    >
      {myData && myData.length === 0 ? (
        <div className={`${styles.Newcontainer}`}>
          <div className="row mt-4">
            <div className="col-6">
              <div
                className={`${styles.header} d-none d-md-block d-flex justify-content-between align-items-center`}
              >
                <div className={`${styles.text}`}>My Assessments</div>
              </div>
            </div>
            <div className="col-6">
              {/* <Link href="/myassessment/createassessment"> */}
              <button
                id="newbutton"
                className={`${styles.btnnew} d-none d-md-block`}
                onClick={() => navigate("createassessment")}
              >
                <div className={styles.newbotton}>
                  <BsPlusSquare
                    className={`${styles.iconplus} ${styles.gapfirst}`}
                  /></div>
                <div>New</div>
              </button>
              {/* </Link> */}
            </div>
          </div>
          <div className={`${styles.filecreate}`}>
            <span className={`${styles.filecreate}`}>
              <Image
                className={`${styles.customImageassessment}`}
                alt="#"
                src={document}
              />
            </span>
          </div>
          <div className="col-12 text-center">
            {/* <Link href="/myassessment/createAssessment"> */}
            <button
              id="newbutton"
              className={`${styles.btnnew} d-lg-none d-md-none  mx-auto`}
              // onClick={() => router.push('/myassessment/createassessment')}
              onClick={() => navigate("createassessment")}
            >
              <BsPlusSquare className={`${styles.iconplus} ${styles.gapfirst}`} />{" "}
              New
            </button>

            
            {/* </Link> */}
          </div>
        </div>
      ) : myData && myData.length > 0 ? (
        <div className="row">
          <div className={`col-12 mt-4 ${styles.Newcontainer}`}>
            <div
              className={`${styles.NewcontainerDraftTitle} d-none d-md-block`}
            >
              <div className="row align-items-center">
                <div className="col-md-6 mt-2">
                  <div
                    className={`${styles.headerDraft} d-flex align-items-start`}
                  >
                    <div className={`${styles.textDraft}`}>My Assessments</div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div
                    className={`${styles.NewDraftbtn} d-flex justify-content-end`}
                  >
                    <button
                      id="newbutton"
                      className={`${styles.btnnew} border-0 pt-1 pb-1 px-3`}
                      onClick={() =>
                        router.push("/myassessment/createassessment")
                      }
                    >
                      <BsPlusSquare
                        className={`${styles.iconplus} ${styles.gapfirst}`}
                      />{" "}
                      New
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.DraftNew} d-lg-none d-md-none mx-auto`}>
              <div className="row mb-4 mt-2">
                <div className="col-12">
                  <div
                    className={`${styles.customrowDraft} align-items-center`}
                  >
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
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
                        <div className={`${styles.Drafttext}`}>
                          All Assessment
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex justify-content-end">
                        <button
                          className={`${styles.btnnewDraftPlus}`}
                          onClick={() => props.stepChange(props.step + 1)}
                        >
                          <BsPlusSquare className={`${styles.iconDraft}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.filecreateDrft}`}>
              <div className={`${styles.boxContainer} row col-12`}>
                {myData.map((item: Assessment, index: number) => (
                  <div
                    className={`col-xl-4 col-lg-4 col-md-4 col-sm-12 mx-1 ${styles.box
                      } ${index === 0 ? styles.firstBox : styles.secondBox}`}
                    style={{
                      borderLeftColor:
                        item.status === "PUBLISHED" ? "green" : "grey",
                    }}
                    key={index}
                  >
                    <div className="d-flex flex-column mt-2">
                      <div className={`${styles.questionscoreone}`}>
                        <Link href="/myassessment/basicdetails" >
                          <strong onClick={() => handleIdPass(item.id)}>
                            {item.name}
                          </strong>
                        </Link>
                        <label>
                          <BiDotsVerticalRounded
                            onClick={() => handlePopupToggle(index)}
                          />
                        </label>
                      </div>
                      <div className={`${styles.Para} mt-2`}>
                        <p>{item.description}</p>
                      </div>
                      <div className={`${styles.Status} d-flex`}>
                        <label>Status:</label>
                        <span
                          className={styles.statusBullet}
                          style={{
                            backgroundColor: getStatusBulletColor(item.status),
                            display: "inline-block",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            marginRight: "5px",
                            marginTop: "3px",
                          }}
                        ></span>
                        <div className={`${styles.StatusTitle}`}>
                          {item.status}
                        </div>
                      </div>
                      <div className={`${styles.Status} d-flex mt-2`}>
                        <label>Questions Added:</label>
                        <span>{item.QuestionsAdd}</span>
                      </div>
                      <div className={`${styles.Status} d-flex mt-2`}>
                        <label>Created On:</label>
                        <span>{item.createdAt}</span>
                      </div>
                    </div>
                    {selectedAssessment !== null &&
                      selectedAssessment === index && (
                        <Popup itemId={item.id} onDelete={handleDelete} />
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NewAssessment;
