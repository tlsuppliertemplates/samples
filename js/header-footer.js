
// Header code starts here
class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        var currentPage = window.location.pathname;
        document.addEventListener('DOMContentLoaded', function() {
            var navLinks = document.querySelectorAll('header-component ul li a');
                // Iterate over each navigation link
                navLinks.forEach(link => {
                    // Get the href attribute of the link
                    var linkUrl = link.getAttribute('href');
                    var currentPageRelativePath = currentPage.split('/').pop();
                    // Check if the link URL matches the current page URL
                    if (linkUrl === currentPageRelativePath) {
                    // Find the parent <li> element of the link
                    var parentLi = link.parentElement;
                    while (parentLi && parentLi.parentElement && parentLi.parentElement.tagName.toLowerCase() !== 'ul') {
                        parentLi = parentLi.parentElement;
                    }
                    // If parentLi is found, add the active class to it
                    if (parentLi) {
                        parentLi.classList.add('active');
                    }
                    }
                });
        });
       
        // Iterate over each navigation link
       

        this.innerHTML = `
        <header class="border-bottom p-0">
        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light pl-0">
            <a class="navbar-brand" href="index.html">
                <img src="Images/logo.png" alt="Image" class="logo-cglia">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                
                </ul>
                <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Services
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="aboutus.html">About Us</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                    </li> -->
                    <li class="nav-item">
                    <a class="nav-link" href="whoweare.html"> Who we are</a>
                    </li>
                <li class="nav-item">
                    <a class="nav-link" href="whatwedo.html">What we do</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="aboutus.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="careers.html">Careers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link primary_btn" href="#">Contact Us</a>
                </li>
                </ul>
            </div>
            </nav>
    </div>
    </header>
        `;

    }
  }
  
  customElements.define('header-component', Header);
  
// Footer code starts here
  class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer id="footer">
      <div class="container d-md-flex py-4 ">
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright pt-2">
            © Copyright <strong><a href="index.html" style="color: #b01f23">CGLIA</a></strong>. All Rights Reserved
          </div>
        </div>
        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="https://twitter.com" target="-blank" class="twitter"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#002967" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#fff" d="M36,17.1c-0.9,0.4-2,0.8-3,0.9c1-0.6,2.6-1.9,3-3c-1,0.6-2.7,1.2-3.8,1.4C31.3,15.4,30,15,28.6,15	c-2.7,0-4.6,2.3-4.6,5v2c-4,0-7.9-3-10.3-6c-0.4,0.7-0.7,1.6-0.7,2.5c0,1.8,1.7,3.7,3,4.5c-0.8,0-2.3-0.6-3-1c0,0,0,0,0,0.1	c0,2.4,1.7,4,3.9,4.4C16.5,26.6,16,27,14.1,27c0.6,1.9,3.8,3,5.9,3c-1.7,1.3-4.7,2-7,2c-0.4,0-0.6,0-1,0c2.2,1.4,5.2,2,8,2	c9.1,0,14-6.9,14-13.4c0-0.2,0-0.9,0-1.1C35,18.8,35.3,18.1,36,17.1"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/" target="-blank" class="facebook"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#002967" d="M24,5C13.5,5,5,13.5,5,24s8.5,19,19,19s19-8.5,19-19S34.5,5,24,5z"></path><path fill="#fff" d="M21.2,20.7V24h-4.7v5h4.7v13.7C22.1,42.9,23,43,24,43c0.9,0,1.7-0.1,2.6-0.2V29h4.9l0.8-5h-5.7v-2.7	c0-2.1,0.7-3.9,2.6-3.9h3.1V13c-0.5-0.1-1.7-0.2-3.9-0.2C23.8,12.8,21.2,15.2,21.2,20.7z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com" target="-blank" class="linkedin"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#002967" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><rect width="4" height="15" x="14" y="19" fill="#fff"></rect><path fill="#fff" d="M16,17L16,17c-1.2,0-2-0.9-2-2c0-1.1,0.8-2,2-2c1.2,0,2,0.9,2,2C18,16.1,17.2,17,16,17z"></path><path fill="#fff" d="M35,24.5c0-3-2.5-5.5-5.5-5.5c-1.9,0-3.5,0.9-4.5,2.3V19h-4v15h4v-8c0-1.7,1.3-3,3-3s3,1.3,3,3v8h4	C35,34,35,24.9,35,24.5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);

  // Do Not add any code in this file :
  //as it is using for  header and footer 
  // adding any code with errors may lead to miss the visibility of header and footer

