import BreadCrumb from "@components/BreadCrumb";

function StudentsList() {
  return (
    <>
      <BreadCrumb title={"List Students"} />

      <div className="page-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-bordered mb-0">
                    <thead>
                      <tr>
                        <th>Enroll No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Contact No.</th>
                        <th>Course</th>
                        <th>Aadhar No.</th>
                        <th>Registration Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody id="students_details">
                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1995</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/assets/images/placeholder_person.jpg"
                              data-src="https://dev.kciedu.com/portal/undefined/undefined?v=undefined"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">
                            ARCHANA TIWARI
                          </span>
                        </td>
                        <td>
                          <span className="transform_upper">
                            PRASHURAM TIWARI
                          </span>
                        </td>
                        <td>9310902691</td>
                        <td>C1301</td>
                        <td>690849574205</td>
                        <td>20th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24032111080979567&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24032111080979567"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1994</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/assets/images/placeholder_person.jpg"
                              data-src="https://dev.kciedu.com/portal/undefined/undefined?v=undefined"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">PAYAL</span>
                        </td>
                        <td>
                          <span className="transform_upper">VIRENDRA</span>
                        </td>
                        <td>8802913206</td>
                        <td>C1301</td>
                        <td>692730241250</td>
                        <td>20th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24032111043624312&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24032111043624312"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1993</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/uploads/admission/24031911172539178/24031911172539178.jpg?v=240319111725"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">
                            SHUSHIL KKUMAR
                          </span>
                        </td>
                        <td>
                          <span className="transform_upper">NARESH SHARMA</span>
                        </td>
                        <td>8826733154</td>
                        <td>A1201</td>
                        <td>612055802126</td>
                        <td>19th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24031911172539178&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24031911172539178"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1992</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/uploads/admission/24031911141755498/24031911141755498.jpg?v=240319111417"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">SUMIT</span>
                        </td>
                        <td>
                          <span className="transform_upper">SANTOSH KUMAR</span>
                        </td>
                        <td>9540116425</td>
                        <td>A1201</td>
                        <td>672039088123</td>
                        <td>19th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24031911141755498&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24031911141755498"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1991</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/uploads/admission/24031911094798395/24031911094798395.jpg?v=240319110947"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">
                            MD BAHID MANSOORI
                          </span>
                        </td>
                        <td>
                          <span className="transform_upper">
                            MD VASHEER KHAN
                          </span>
                        </td>
                        <td>9811435644</td>
                        <td>A1201</td>
                        <td>568380035221</td>
                        <td>19th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24031911094798395&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24031911094798395"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1990</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/assets/images/placeholder_person.jpg"
                              data-src="https://dev.kciedu.com/portal/undefined/undefined?v=undefined"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">SUMIT KUMAR</span>
                        </td>
                        <td>
                          <span className="transform_upper">RAKESH MEHTA</span>
                        </td>
                        <td>8800936237</td>
                        <td>A1201</td>
                        <td>821938745650</td>
                        <td>18th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24031822422853565&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24031822422853565"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1989</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/uploads/admission/24031822392342357/24031822392342357.jpg?v=240318223923"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">
                            SHABNAM PARVEEN
                          </span>
                        </td>
                        <td>
                          <span className="transform_upper">HAIDER ALI</span>
                        </td>
                        <td>7042920731</td>
                        <td>C1315</td>
                        <td>734721373530</td>
                        <td>16th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24031822392342357&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24031822392342357"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1988</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/uploads/admission/24031410403318528/24031410403318528.jpg?v=240321100736"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">NITISH YADAV</span>
                        </td>
                        <td>
                          <span className="transform_upper">MITAN YADAV</span>
                        </td>
                        <td>7061702493</td>
                        <td>A1201</td>
                        <td>204069610473</td>
                        <td>12th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24031410403318528&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24031410403318528"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1987</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/uploads/admission/24031120510778785/24031120510778785.jpg?v=240311205107"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">ANSHU GUPTA</span>
                        </td>
                        <td>
                          <span className="transform_upper">ASHOK GUPTA</span>
                        </td>
                        <td>9354416060</td>
                        <td>C1301</td>
                        <td>663391328827</td>
                        <td>11th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24031120510778785&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24031120510778785"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span className="text-danger border-bottom fw-bold">
                            RN
                          </span>
                          <br />
                          <span>1986</span>
                        </td>
                        <td>
                          <div className="card-row-image">
                            <img
                              src="https://dev.kciedu.com/portal/assets/images/placeholder_person.jpg"
                              data-src="https://dev.kciedu.com/portal/undefined/undefined?v=undefined"
                              className="card-image lazy"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="transform_upper">MANISH KUMAR</span>
                        </td>
                        <td>
                          <span className="transform_upper">ASHOK SHARMA</span>
                        </td>
                        <td>9599074803</td>
                        <td>D1407</td>
                        <td>569311350147</td>
                        <td>9th Mar 2024</td>
                        <td>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="https://dev.kciedu.com/portal/add-students.php?student_id=24031120483637919&amp;back=%7B%22limit%22%3A%2210%22%2C%22page%22%3A1%7D">
                              <div
                                className="fs-4 mx-1"
                                data-bs-toggle="tooltip"
                                data-bs-original-title="Edit Admission Details"
                              >
                                <i className="mdi mdi-pencil-box-outline"></i>
                              </div>
                            </a>
                            <div
                              className="fs-4 mx-1 ce-pointer update_student_status"
                              data-action="2"
                              data-unique="24031120483637919"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Archive Student"
                            >
                              <i className="mdi mdi-delete"></i>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentsList;
