import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Pic from './Image/profile-pic.png'
import FeatherIcon from 'feather-icons-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container">
  <div className="profile">
    <div className="profile_container">
      <div className="profile_profileImg">
        <img src={Pic} alt="profile" />
      </div>
      <div>
        <h1 className="profile_name">
          <span className="profile_name_firstName">Ahmed Raza</span>
          <span className="profile_name_lastName">Faisal</span>
        </h1>
        <p className="profile_title">Front End Developer</p>
        <p className="description profile_description">
          Hello, my name is Ahmed Raza and I am a frond end developer.I
          specialize in creating user-friendly websites through coding, which
          includes HTML, CSS and JavaScript
        </p>
        {/* <a class="downloadBtn" href="./cv.pdf" download="Resume.pdf">Download Resume</a> */}
      </div>
    </div>
  </div>
  <div className="group-1">
    <div className="skills">
      <h3 className="title">Expertise</h3>
      <ul className="skills_list description">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>React JS</li>
        <li>EXPRESS JS</li>
      </ul>
    </div>
    <div className="ref">
      <h3 className="title">Projects</h3>
      <div className="ref_item">
        <h4 className="ref_name">Weather Application</h4>
        <p className="description">
          https://ahmedraza13.github.io/Weather-Application
        </p>
      </div>
      <div className="ref_item">
        <h4 className="ref_name">Birthday Calculator</h4>
        <p className="description">
          https://ahmedraza13.github.io/Birthday-Calculator
        </p>
      </div>
    </div>
    <div className="edu">
      <h3 className="title">Education</h3>
      <div className="edu_item">
        <p className="item_preTitle">2013-2015</p>
        <h4 className="item_title">Matriculation</h4>
        <p className="item_subtitle">Pak Progressive School</p>
      </div>
      <div className="edu_item">
        <p className="item_preTitle">2016-2018</p>
        <h4 className="item_title">Intermediate</h4>
        <p className="item_subtitle">
          Goverment College of Commerce and Economics
        </p>
      </div>
    </div>
    <div className="certification">
      <h3 className="title">certification</h3>
      <div className="certification_item">
        <p className="item_preTitle">In Progress</p>
        <h4 className="item_title">Web and Mobile App Development</h4>
        <p className="description">
          MERN stack is a collection of technologies that enables faster
          application development. It is used by developers worldwide. The main
          purpose of using MERN stack is to develop apps using JavaScript only.
          This is because the four technologies that make up the technology
          stack are all JS-based
        </p>
      </div>
    </div>
  </div>
  <div className="group-2">
    <div className="exp">
      <h3 className="title">Experience</h3>
      <div className="exp_item">
        <p className="item_preTitle">2020</p>
        <h4 className="item_title">WizTech Pakistan</h4>
        <p className="item_subtitle">Data Entry Operator</p>
        <p className=" description">
          Prepares, compiles, and sorts documents for data entry. Verifies and
          logs receipt of data. Transcribes source data into the required
          electronic format. Transfers information from paper formats into
          computer files using keyboards, data recorders, or optical scanners.
        </p>
      </div>
      <div className="exp_item">
        <p className="item_preTitle">2019 </p>
        <h4 className="item_title">4M Business Consultant</h4>
        <p className="item_subtitle">Finance Trainee</p>
        <p className="description">
          Support the preparation of periodic financial reports. Collect and
          analyze operational and market data to support decision making.
          Evaluate financial data against forecasts and plans to assess current
          financial conditions. Identify trends and variances from the data to
          assist in expense management.
        </p>
      </div>
    </div>
    <div className="awards">
      <h3 className="title">Awards</h3>
      <div className="awards_item">
        <p className="item_preTitle">2019</p>
        <h4 className="item_title">
          The Employee of the year award- 4M Business Consultant
        </h4>
        <p className=" description">
          Won the employee of the year award for exceeding all targets and goals
        </p>
      </div>
    </div>
    <div className="interest">
      <h3 className="title">Interest</h3>
      <div className="interest_items">
        <div className="interest_item">
          <i data-feather="map" />
          <span>Driving</span>
        </div>
        <div className="interest_item">
        <i data-feather="map" />
          <span>Books</span>
        </div>
        <div className="interest_item">
          <i data-feather="map" />
          <span>Travel</span>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="group-3">
    <div className="contact">
      <h3 className="title">Contact</h3>
      <div className="contact_info">
        <p className="description">Karachi, Pakistan</p>
        <p className="description">0314-2322336</p>
        <p className="description">ahmedfaisalakhawala@gmail.com</p>
      </div>
    </div>
    <div className="social">
      <h3 className="title">Socials</h3>
      <div className="social_items">
        <a
          href="https://github.com/ahmedraza13"
          
          className="social_item"
        >
          <i data-feather="github" />
          <span>/ahmedraza13</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-raza-013513246"
         
          className="social_item"
        >
          <i data-feather="linkedin" />
          <span>/ahmed-raza-013513246</span>
        </a>
      </div>
    </div>
  </div>
  
</div>

)
