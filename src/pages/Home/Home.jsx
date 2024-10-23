import './Home.css';


const Home = () =>  {
  return (
    <section className="about-me-section">
      <div className="container">
        <h1>About Me</h1>
        

        <div className="about-content">
          <div className="my-image">
            <img src="profile.jpg" alt="Profile" />
          </div>

          <div className="details">
            <h2 className='my-name'>Mr.Laungdang Inkham</h2>
            <h3>Computer Science student</h3><br />
            <p>
              Hello! I'm Laungdang Inkham You guys can call me SUN!<br />
              I am 20 year old. I live in Bangkok. I am a Computer Science student.<br />
              I'm stuying at Sripatum university<br />
              Status: Single
              

            </p>
            
            <div className="buttons">
              <a href="#" style={{decor: "10px"}} className="btn">Download CV</a>
              <a href="#" className="btn btn-hire">Hire Me</a>
            </div>
          </div>
        </div>

        

        <div className="my-interests">
          <h3>My Interests</h3>
          <div className="interest-icons">
            <div className="interest-item">
            <i class="bi bi-music-note-beamed"></i>
              <p>Music</p>
            </div>
            <div className="interest-item">
            <i class="bi bi-luggage"></i>
              <p>Travel</p>
            </div>
            <div className="interest-item">
            <i class="bi bi-film"></i>s
              <p>Movie</p>
            </div>
            <div className="interest-item">
            <i class="bi bi-camera"></i>
              <p>Photo</p>
            </div>
          </div>
        </div>


        <div className="contact-container">
          <h3>Contact Me</h3>
          <div className='contact-details'>
            <div className="contact-item">
            <a href="#"><i class="bi bi-envelope-at"></i></a>
              <p>Email</p>
            </div>

            <div className="contact-item">
              <a href="#"><i class="bi bi-facebook"></i></a>
              <p>Facebook</p>
              </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Home;