import "./Models.css";

function Models() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="models col-md-12 pt-7">
          <h2>MODELS</h2>
          <div class="listofmodels col-md">
            <div class="innerdiv">
              <img
                src="src/assets/models images/Gigi square.jpg"
                alt="gigi"
              />
              <h5>GIGI HADID</h5>
            </div>
            <div>
              <img
                src="src/assets/models images/kylie sq.jpg"
                alt="kylie"
              />
              <h5>KYLIE JENNER</h5>
            </div>
            <div>
              <img
                src="src/assets/models images/square kendall.jpg"
                alt="kendell"
              />
              <h5>KENDALL JENNER</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
