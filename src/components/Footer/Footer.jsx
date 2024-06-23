function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid d-flex justify-content-between">
          <div className="copyright">
            © {new Date().getFullYear()}. All rights reserved.
          </div>
          <div>
            Developed by&nbsp;
            <a target="_blank" href="">
              Aditya Sharma
            </a>
            .
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
