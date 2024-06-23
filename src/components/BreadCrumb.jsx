function BreadCrumb({ title }) {
  return (
    <>
      <div className="page-title-box">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-title">
                <h3 className="text-white">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreadCrumb;
