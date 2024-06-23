import BreadCrumb from "@components/BreadCrumb";
import { useState } from "react";
import notify from "@hook/Alert/notify";
import useAlert from "@hook/Alert/alert";
// import axios from "axios";
// import { useSelector } from "react-redux";
import useAuthPost from "@hook/PostRequest/useAuthPost";

function AddStudent() {
  const [studentData, setStudentData] = useState({
    std_name: "",
    std_father: "",
    std_dob: "",
    std_gender: "",
    std_address: "",
    std_contact: "",
    std_aadhar: "",
    std_education: "",
    std_state: "",
    std_city: "",
    std_pincode: "",
    enroll_id: "",
    reg_date: "",
    course: "",
    course_fee: "",
    branch: 1,
  });

  const { showNotify } = notify();
  const { showAlert } = useAlert();

  const handleAlert = (e) => {
    e.preventDefault();
    showNotify();
    showAlert("This is notificatoin", "success");
  };

  // const userAuth = useSelector((state) => state.auth.data);

  const { isLoading, authApiCall } = useAuthPost();

  const handleAddStudent = async (e) => {
    e.preventDefault();

    const {
      std_name,
      std_father,
      std_dob,
      std_gender,
      std_address,
      std_contact,
      std_aadhar,
      std_education,
      std_state,
      std_city,
      std_pincode,
      enroll_id,
      reg_date,
      course,
      course_fee,
      branch,
    } = studentData;

    if (std_name == "") {
      showAlert("Please Enter Student Name", "warning");
    } else if (std_father == "") {
      showAlert("Please Enter Student's Father Name", "warning");
    } else if (std_dob == "") {
      showAlert("Please Add Student's Date of Birth", "warning");
    } else if (std_gender == "") {
      showAlert("Please Choose Gender", "warning");
    } else if (std_address == "") {
      showAlert("Please Enter Student's Address", "warning");
    } else if (std_contact == "") {
      showAlert("Please Enter Student's Contact No.", "warning");
    } else if (std_aadhar == "") {
      showAlert("Please Enter Student's Aadhar No.", "warning");
    } else if (std_education == "") {
      showAlert("Please Choose Student's Qualification", "warning");
    } else if (std_state == "") {
      showAlert("Please Choose Student's State", "warning");
    } else if (std_city == "") {
      showAlert("Please Choose Student's City", "warning");
    } else if (std_pincode == "") {
      showAlert("Please Enter Student's Pincode", "warning");
    } else if (enroll_id == "") {
      showAlert("Enrollment ID is empty", "warning");
    } else if (reg_date == "") {
      showAlert("Please Add Registration Date", "warning");
    } else if (course == "") {
      showAlert("Please Choose Course", "warning");
    } else if (course_fee == "") {
      showAlert("Please Enter Course Fees", "warning");
    } else if (!branch || branch == "") {
      showAlert("Please Choose Branch", "warning");
    } else {
      console.log(studentData);
    }
    // console.log(studentData);

    try {
      const response = await authApiCall("/student/add-student", studentData);
      console.log(response);
    } catch (error) {
      showAlert(error.message, "danger");
    }

    // try {
    //   axios
    //     .post("/student/add-student", studentData, {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: userAuth.authToken,
    //       },
    //     })
    //     .then(({ data }) => {
    //       if (!data.success) {
    //         showAlert(data?.errors?.error, "warning");
    //       }
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log("inner ---", error);
    //     });
    // } catch (error) {
    //   console.log("outer --- ", error);
    // }
  };

  const handleEnrollGenerate = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <BreadCrumb title={"Add Student"} />

      <div className="page-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Student Details</div>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Student Name</label>
                      <input
                        type="text"
                        className="form-control form-control"
                        value={studentData.std_name}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Father Name</label>
                      <input
                        type="text"
                        className="form-control form-control"
                        value={studentData.std_father}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_father: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        className="form-control form-control"
                        value={studentData.std_dob}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_dob: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Gender</label>
                      <select
                        className="form-select form-control"
                        value={studentData.std_gender}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_gender: e.target.value,
                          })
                        }
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control form-control"
                        value={studentData.std_address}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_address: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Contact Number</label>
                      <div className="input-group">
                        <span className="input-group-text">+91</span>
                        <input
                          type="text"
                          className="form-control"
                          value={studentData.std_contact}
                          onChange={(e) =>
                            setStudentData({
                              ...studentData,
                              std_contact: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Aadhar Number</label>
                      <input
                        type="text"
                        className="form-control form-control"
                        value={studentData.std_aadhar}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_aadhar: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Education Qualification</label>
                      <select
                        value={studentData.std_education}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_education: e.target.value,
                          })
                        }
                        className="form-select form-control"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>State</label>
                      <select
                        value={studentData.std_state}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_state: e.target.value,
                          })
                        }
                        className="form-select form-control"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>City</label>
                      <select
                        value={studentData.std_city}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_city: e.target.value,
                          })
                        }
                        className="form-select form-control"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Pincode</label>
                      <input
                        type="text"
                        className="form-control form-control"
                        value={studentData.std_pincode}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            std_pincode: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                    <div className="row upload_image_element">
                      <div className="col-8">
                        <label htmlFor="" className="col-form-label">
                          Choose Image
                        </label>
                        <input
                          type="file"
                          className="form-control change_image"
                          id="std_image"
                          accept=".jpg, .jpeg, .png"
                        />
                      </div>
                      <div className="col-4 pt-2">
                        <img
                          src="https://dev.kciedu.com/portal/assets/images/placeholder_person.jpg"
                          data-emptysrc="https://dev.kciedu.com/portal/assets/images/placeholder_person.jpg"
                          className="img-fluid image_display"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-title">Registration Details</div>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <div className="form-group">
                      <label>Enrollment ID</label>
                      <div className="input-group">
                        <button
                          className="input-group-text btn-outline-secondary btn-sm btn"
                          onClick={handleEnrollGenerate}
                        >
                          Get Id
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          value={studentData.enroll_id}
                          onChange={(e) =>
                            setStudentData({
                              ...studentData,
                              enroll_id: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <div className="form-group">
                      <label>Registration Date</label>
                      <input
                        type="date"
                        className="form-control"
                        value={studentData.reg_date}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            reg_date: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <div className="form-group">
                      <label>Choose Course</label>
                      <select
                        value={studentData.course}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            course: e.target.value,
                          })
                        }
                        className="form-select form-control"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <div className="form-group">
                      <label>Course Fees</label>
                      <div className="input-group">
                        <span className="input-group-text">INR</span>
                        <input
                          type="text"
                          className="form-control"
                          value={studentData.course_fee}
                          onChange={(e) =>
                            setStudentData({
                              ...studentData,
                              course_fee: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 ">
                    <label className="col-form-label p-0 pt-3">
                      Branch Location
                    </label>
                    <br />

                    <label className="col-form-label me-3 pb-0">
                      <input
                        className="form-check-input"
                        name="addmission_loc"
                        value="1"
                        type="radio"
                        checked={studentData.branch == 1 && true}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            branch: e.target.value,
                          })
                        }
                      />
                      Branch 1
                    </label>

                    <label className="col-form-label me-3 pb-0">
                      <input
                        className="form-check-input"
                        name="addmission_loc"
                        value={2}
                        type="radio"
                        checked={studentData.branch == 2 && true}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            branch: e.target.value,
                          })
                        }
                      />
                      Branch 2
                    </label>

                    <label className="col-form-label me-3 pb-0">
                      <input
                        className="form-check-input"
                        name="addmission_loc"
                        value={3}
                        type="radio"
                        checked={studentData.branch == 3 && true}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            branch: e.target.value,
                          })
                        }
                      />
                      Branch 3
                    </label>

                    <label className="col-form-label me-3 pb-0">
                      <input
                        className="form-check-input"
                        name="addmission_loc"
                        value={4}
                        type="radio"
                        checked={studentData.branch == 4 && true}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            branch: e.target.value,
                          })
                        }
                      />
                      Branch 4
                    </label>
                  </div>
                </div>
              </div>

              <div className="card-action">
                <div className="d-flex justify-content-between">
                  <div className="">
                    <button className="btn btn-danger" onClick={handleAlert}>
                      Cancel
                    </button>
                  </div>
                  <div className="">
                    <button
                      className="btn btn-success"
                      onClick={handleAddStudent}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddStudent;
