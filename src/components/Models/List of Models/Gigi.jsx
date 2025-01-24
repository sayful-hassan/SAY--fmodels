import "./Gigi.css";

function Gigi() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="gigi col-md-12">
          <h2>GIGI HADID</h2>
          <img
            src="src/assets/models images/Gigi square.jpg"
          />
          <p>
            Gigi Hadid is a globally renowned supermodel known for her striking
            beauty and versatility. Born on April 23, 1995, in Los Angeles, she
            has graced the runways of top fashion houses, appeared on numerous
            magazine covers, and collaborated with leading brands, becoming one
            of the most iconic figures in modern fashion.
          </p>
          <hr />
          <ul>
            <li>Height:</li>
            <li>Bust:</li>
            <li>Waist:</li>
            <li>Hips:</li>
            <li>Hair:</li>
            <li>Eye:</li>
            <li>Shoe:</li>
          </ul>
          <button className="btn btn-info">more details</button>
        </div>
      </div>
    </div>
  );
}

export default Gigi;
