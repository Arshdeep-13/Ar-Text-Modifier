import React, { useEffect } from 'react';
import './jquery-1.10.1.min.js'
import './jquery.easytabs.min.js'
import './jquery.hashchange.min.js'

function App() {

  useEffect(() => {
    // Logo
    const logo = document.getElementById('logo');
    const helloLogo = document.getElementById('helloworld');

    if (window.location.href.indexOf('#') !== -1) {
      if (window.location.href.substr(window.location.href.indexOf('#')) !== '#about') {
        logo.style.display = 'block';
      } else {
        helloLogo.style.display = 'block';
      }
    }

    // Show logo
    const tabLinks = document.querySelectorAll('#tab-container .tab a');
    tabLinks.forEach(tabLink => {
      tabLink.addEventListener('click', () => {
        logo.style.display = 'block';
        helloLogo.style.display = 'none';
      });
    });

    // Hide logo
    const tabAbout = document.getElementById('tab-about');
    tabAbout.addEventListener('click', () => {
      logo.style.display = 'none';
      helloLogo.style.display = 'block';
    });

    function animMeter() {
      const meterSpans = document.querySelectorAll('.meter > span');
      meterSpans.forEach(span => {
        const origWidth = span.offsetWidth;
        span.style.width = '0';
        $(span).animate(
          {
            width: origWidth
          },
          1200
        );
      });
    }

    animMeter();

    $('#tab-container').easytabs({
      animate: true,
      updateHash: true,
      transitionIn: 'slideDown',
      transitionOut: 'slideUp',
      animationSpeed: 800,
      tabActiveClass: 'active'
    }).bind('easytabs:midTransition', function (event, $clicked, $targetPanel) {
      if ($targetPanel.selector === '#resume') {
        animMeter();
      }
    });
  }, []);

  return (
    <>
      <div class="main-container">
        <div class="main wrapper clearfix">
          <header id="header">
            <div id="logo">
              <h6 class="glow">
                Your Name
              </h6>
              <h4>
                Tag1 / Tag2
              </h4>
            </div>
          </header>

          <header id="header">
            <div id="helloworld">
              <h1 class="glow">
                Hello, World !
              </h1>
            </div>
          </header>


          <div id="tab-container" class="tab-container">


            <ul class='etabs'>

              <li class='tab' id="tab-about">
                <a href="#about">
                  <i class="icon-user"></i>
                  <span class="glow-light">
                    About Me
                  </span>
                </a>
              </li>

              <li class='tab'>
                <a href="#resume">
                  <i class="icon-file-text"></i>
                  <span class="glow-light">
                    Skills
                  </span>
                </a>
              </li>

              <li class='tab'>
                <a href="#portfolio">
                  <i class="icon-heart"></i>
                  <span class="glow-light">
                    Projects
                  </span>
                </a>
              </li>

              <li class='tab'>
                <a href="#contact">
                  <i class="icon-envelope"></i>
                  <span class="glow-light">
                    Contact
                  </span>
                </a>
              </li>

            </ul>
            <div id="tab-data-wrap">

              <div id="about">
                <section class="clearfix">
                  <div class="g2">
                    <div class="photo">
                      <img src="./images/my.jpg" alt="Your alt text" />
                    </div>
                    <div class="info">
                      <h2 class="neon">
                        <p></p>
                        Your Name
                      </h2>
                      <h4>
                        Your work tag
                      </h4>
                      <p>
                        Type your description here.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div class="g1">
                <div class="main-links sidebar">
                  <ul>
                    <li>
                      <a href="#resume">
                        View My Skills
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio">
                        View My Projects
                      </a>
                    </li>
                    <li>
                      <a href="#contact">
                        Hire me for your next project
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="break">
              </div>
              <div class="contact-info">
                <div class="g1">
                  <div class="item-box clearfix">
                    <i class="icon-envelope"></i>
                    <div class="item-data">
                      <h3>
                        <a href="mailto:write@your_mail.here">
                          Add Your mail
                        </a>
                      </h3>
                      <p>
                        Email Address
                      </p>
                    </div>
                  </div>
                </div>
                <div class="g1">
                  <div class="item-box clearfix">
                    <i class="icon-facebook"></i>
                    <div class="item-data">
                      <h3>
                        <a href="http://fb.me/your-Username">
                          Add Facebook Link
                        </a>
                      </h3>
                      <p>
                        Facebook Profile
                      </p>
                    </div>
                  </div>
                </div>
                <div class="g1">
                  <div class="item-box clearfix">
                    <i class="icon-twitter"></i>
                    <div class="item-data">
                      <h3>
                        <a href="http://twitter.com/your-Username">
                          Add Twiter username
                        </a>
                      </h3>
                      <p>
                        Twitter Handle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="resume">
            <section class="clearfix">
              <div class="g2">
                <h3 class="neon">
                  Programming
                </h3>
                <div class="meter emerald">
                  <span style={{ width: "90%" }}>
                    <span>
                      Language 1
                    </span>
                  </span>
                </div>
                <div class="meter emerald">
                  <span style={{ width: "90%" }}>
                    <span>
                      Language 2
                    </span>
                  </span>
                </div>
                <div class="meter emerald">
                  <span style={{ width: "70%" }}>
                    <span>
                      Language 3
                    </span>
                  </span>
                </div>
                <div class="meter emerald">
                  <span style={{ width: "65%" }}>
                    <span>
                      Language 4
                    </span>
                  </span>
                </div>
                <div class="meter emerald">
                  <span style={{ width: "85%" }}>
                    <span>
                      Language 5
                    </span>
                  </span>
                </div>
                <div class="break"></div>
              </div>

              <div class="g1">
                <h3 class="neon">
                  Skills
                </h3>
                <div class="meter emerald">
                  <span style={{ width: "70%" }}>
                    <span>
                      skill 1
                    </span>
                  </span>
                </div>
                <div class="meter emerald">
                  <span style={{ width: "85%" }}>
                    <span>
                      skill 2
                    </span>
                  </span>
                </div>
                <div class="meter emerald">
                  <span style={{ width: "80%" }}>
                    <span>
                      skill 3
                    </span>
                  </span>
                </div>
                <div class="meter emerald">
                  <span style={{ width: "90%" }}>
                    <span>
                      skill 4
                    </span>
                  </span>
                </div>
                <div class="meter emerald">
                  <span style={{ width: "65%" }}>
                    <span>
                      skill 5
                    </span>
                  </span>
                </div>
              </div>

              <div class="g2">
                <h3 class="neon">
                  Hobbies
                </h3>
                <span class="label label-info">Hobby 1</span>
                <span class="label label-info">Hobby 2</span>
                <span class="label label-info">Hobby 3</span>
                <span class="label label-info">Hobby 4</span>
              </div>
            </section>
          </div>


          <div id="portfolio">
            <section class="clearfix">
              <div class="project-section">
                <div class="project-container">
                  <div class="project-img-container"
                    onclick="document.getElementById('modal-wrapper').style.display='block'">
                    <img src="./images/floor.jpg" alt="project image" />
                  </div>
                  <p class="project-title">Project Title</p>
                </div>
                <div class="project-container">
                  <div class="project-img-container"
                    onclick="document.getElementById('modal-wrapper').style.display='block'">
                    <img src="./images/floor.jpg" alt="project image" />
                  </div>
                  <p class="project-title">Project Title</p>
                </div>
                <div class="project-container">
                  <div class="project-img-container"
                    onclick="document.getElementById('modal-wrapper').style.display='block'">
                    <img src="./images/floor.jpg" alt="project image" />
                  </div>
                  <p class="project-title">Project Title</p>
                </div>
                <div class="project-container">
                  <div class="project-img-container"
                    onclick="document.getElementById('modal-wrapper').style.display='block'">
                    <img src="./images/floor.jpg" alt="project image" />
                  </div>
                  <p class="project-title">Project Title</p>
                </div>
                <div class="project-container">
                  <div class="project-img-container"
                    onclick="document.getElementById('modal-wrapper').style.display='block'">
                    <img src="./images/floor.jpg" alt="project image" />
                  </div>
                  <p class="project-title">Project Title</p>
                </div>
                <div class="project-container">
                  <div class="project-img-container"
                    onclick="document.getElementById('modal-wrapper').style.display='block'">
                    <img src="./images/floor.jpg" alt="project image" />
                  </div>
                  <p class="project-title">Project Title</p>
                </div>
                <div class="project-container">
                  <div class="project-img-container"
                    onclick="document.getElementById('modal-wrapper').style.display='block'">
                    <img src="./images/floor.jpg" alt="project image" />
                  </div>
                  <p class="project-title">Project Title</p>
                </div>
                <div class="project-container">
                  <div class="project-img-container"
                    onclick="document.getElementById('modal-wrapper').style.display='block'">
                    <img src="./images/floor.jpg" alt="project image" />
                  </div>
                  <p class="project-title">Project Title</p>
                </div>
                <div class="project-container">
                  <div class="project-img-container"
                    onclick="document.getElementById('modal-wrapper').style.display='block'">
                    <img src="./images/floor.jpg" alt="project image" />
                  </div>
                  <p class="project-title">Project Title</p>
                </div>
              </div>
              <div id="modal-wrapper" class="modal">

                <form class="modal-content animate">

                  <div class="imgcontainer">
                    <span onclick="document.getElementById('modal-wrapper').style.display='none'" class="close"
                      title="Close PopUp">&times;</span>
                    <img src="images/floor.jpg" alt="project" class="avatar" />
                    <h1 class="project_details" style={{ textAlign: "center" }}>Project Details</h1>
                  </div>

                  <div class="container">
                    <input type="text" placeholder="Project Name" name="uname" readonly />
                    <textarea class="project_description" rows="3" placeholder="Project Description"
                      readonly></textarea>
                    <input type="url" placeholder="Project Link" readonly />
                    <input type="text" placeholder="Languages used" readonly />
                    <button class="project_submit" type="submit">Submit</button>
                  </div>

                </form>

              </div>
            </section>
          </div>

          <div id="contact">
            <section class="clearfix">
              <div class="g1">
                <div class="sny-icon-box">
                  <div class="sny-icon">
                    <i class="icon-globe"></i>
                  </div>
                  <div class="sny-icon-content">
                    <h4 class="neon">
                      Address
                    </h4>
                    <p>
                      Type here
                    </p>
                  </div>
                </div>
              </div>
              <div class="g1">
                <div class="sny-icon-box">
                  <div class="sny-icon">
                    <i class="icon-phone"></i>
                  </div>
                  <div class="sny-icon-content">
                    <h4 class="neon">
                      E-mail
                    </h4>
                    <p>
                      Add your mail 1<br />Add your mail 2
                    </p>
                  </div>
                </div>
              </div>
              <div class="g1">
                <div class="sny-icon-box">
                  <div class="sny-icon">
                    <i class="icon-user"></i>
                  </div>
                  <div class="sny-icon-content">
                    <h4 class="neon">
                      About Me
                    </h4>
                    <p>
                      Write something about you
                    </p>
                  </div>
                </div>
              </div>
              <div class="break"></div>
            </section>
          </div>
        </div >
      </div >
    </>
  );
}

export default App;
