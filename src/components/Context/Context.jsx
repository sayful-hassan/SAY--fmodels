import { Link } from "react-router-dom";
import "./Context.css";

function Context() {
  return (
    <div className="container-fluid">
      <div className="row">
        <section className="main-context">
          <h2>Indian Based Agency</h2>
          <p>
            Welcome to our Indian-based modeling agency, where talent meets
            opportunity!
          </p>
          <Link to='/models'>
          <button>SEE MODELS</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Context;


// We specialize in discovering and nurturing exceptional
// models, providing a platform to showcase their potential on both
// national and international stages. With a deep understanding of the
// fashion, entertainment, and advertising industries, we are committed
// to delivering excellence and creating unforgettable experiences for
// our clients and models alike."