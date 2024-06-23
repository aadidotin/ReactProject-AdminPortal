import BreadCrumb from "@components/BreadCrumb";

function Branch() {
  return (
    <>
      <BreadCrumb title={"Branches"} />

      <div className="page-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-bordered mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: "60px", maxWidth: "100px" }}>
                          S no.
                        </th>
                        <th>Branch Name</th>
                        <th>Address</th>
                        <th
                          style={{
                            width: "70px",
                            minWidth: "88px",
                            maxWidth: "120px",
                          }}
                        >
                          Status
                        </th>
                        <th
                          style={{
                            width: "50px",
                            minWidth: "50px",
                            maxWidth: "120px",
                          }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody id="branches_details">
                      <tr>
                        <th>
                          <span>1</span>
                        </th>
                        <td>Roshan Nagar</td>
                        <td>
                          Sector 91 A-11, 1, Main Road, Roshan Nagar, Faridabad,
                          Haryana 121013
                        </td>
                        <td>
                          <div className="toggle_switch ">
                            <label
                              className="switch toggle_branch_status"
                              data-unique="24022519431932967"
                            >
                              <input
                                type="checkbox"
                                onChange={() => true}
                                className="branch_status"
                              />
                              <span className="slider"></span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end align-items-center">
                            <div
                              className="fs-4 mx-1 ce-pointer crud_branches"
                              data-action="2"
                              data-unique="24022519431932967"
                              data-branch='{"name":"Roshan Nagar","address":"Sector 91 A-11, 1, Main Road, Roshan Nagar, Faridabad, Haryana 121013"}'
                              title="Edit Branch Data"
                            >
                              <i className="mdi mdi-pencil-box-outline"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <span>2</span>
                        </th>
                        <td>Vinay Nagar</td>
                        <td>
                          Main School, Vinay Nagar Chowk, near J.P Public
                          School, Vinay Nagar, Faridabad, Haryana 121013
                        </td>
                        <td>
                          <div className="toggle_switch ">
                            <label
                              className="switch toggle_branch_status"
                              data-unique="24022519433520994"
                            >
                              <input
                                type="checkbox"
                                onChange={() => true}
                                className="branch_status"
                              />
                              <span className="slider"></span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end align-items-center">
                            <div
                              className="fs-4 mx-1 ce-pointer crud_branches"
                              data-action="2"
                              data-unique="24022519433520994"
                              data-branch='{"name":"Vinay Nagar","address":"Main School, Vinay Nagar Chowk, near J.P Public School, Vinay Nagar, Faridabad, Haryana 121013"}'
                              title="Edit Branch Data"
                            >
                              <i className="mdi mdi-pencil-box-outline"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <span>3</span>
                        </th>
                        <td>Gyashi Khothi</td>
                        <td>
                          Building No 340 2nd Floor, near Gyashi Kothi Road,
                          Surya Vihar Part II, Sector 91, Faridabad, Haryana
                          121013
                        </td>
                        <td>
                          <div className="toggle_switch ">
                            <label
                              className="switch toggle_branch_status"
                              data-unique="24022613154768874"
                            >
                              <input
                                type="checkbox"
                                onChange={() => true}
                                className="branch_status"
                              />
                              <span className="slider"></span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end align-items-center">
                            <div
                              className="fs-4 mx-1 ce-pointer crud_branches"
                              data-action="2"
                              data-unique="24022613154768874"
                              data-branch='{"name":"Gyashi Khothi","address":"Building No 340 2nd Floor, near Gyashi Kothi Road, Surya Vihar Part II, Sector 91, Faridabad, Haryana 121013"}'
                              title="Edit Branch Data"
                            >
                              <i className="mdi mdi-pencil-box-outline"></i>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <span>4</span>
                        </th>
                        <td>Ajay Nagar</td>
                        <td>
                          Pusta Road, Near Temple Faridabad Haryana 121013
                        </td>
                        <td>
                          <div className="toggle_switch ">
                            <label
                              className="switch toggle_branch_status"
                              data-unique="24022613155738454"
                            >
                              <input
                                type="checkbox"
                                onChange={() => true}
                                className="branch_status"
                              />
                              <span className="slider"></span>
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end align-items-center">
                            <div
                              className="fs-4 mx-1 ce-pointer crud_branches"
                              data-action="2"
                              data-unique="24022613155738454"
                              data-branch='{"name":"Ajay Nagar","address":"Pusta Road, Near Temple Faridabad Haryana 121013"}'
                              title="Edit Branch Data"
                            >
                              <i className="mdi mdi-pencil-box-outline"></i>
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

export default Branch;
