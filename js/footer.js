const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<link href="css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/base.css" />
    <link href="css/reset.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/responsive.css" />
    <link href="css/header.css" rel="stylesheet" />
    <link href="css/footer.css" rel="stylesheet" />
    <link href="css/search.css" rel="stylesheet" />
    <link href="css/accordian.css" rel="stylesheet" />
    <footer>
      <div class="footer_top">
        <div class="page-container">
          <div class="footer-top-area">
            <div class="col">
              <span>POWERED BY</span>
            <img src="images/tamm-logo-1.png" />
    </div>
    <div class="col">
        <h4>Contact Us</h4>
        <ul class="socialicons">
            <li>
                <a href="tel:8007283"><i class="fa fa-phone" aria-hidden="true"></i
                  ></a>
            </li>
            <li>
                <a href="mailto:info@ewaa.gov.ae"><i class="fa fa-envelope" aria-hidden="true"></i
                  ></a>
            </li>
            <li>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
            </li>
        </ul>
    </div>
    <div class="col">
        <img src="images/ADCC-logo.png" />
    </div>
    </div>
    </div>
    </div>
    <div class="footer_bottom">
        <div class="page-container">
            <div class="footer-bottom-area">
                <div class="foot-contrast">
                    <h4>CONTRAST SETTINGS</h4>
                    <ul>
                        <li>
                            <a href="javascript:void(0)" class="color active">COLOR</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="contrast">MONOCHROME</a>
                        </li>
                    </ul>
                </div>
                <div class="foot-text-inc">
                    <h4>TEXT SETTINGS</h4>
                    <ul>
                        <li><a class="zoom-minus" href="javascript:void(0)">A </a></li>
                        <li><a class="zoom active" href="javascript:void(0)">A</a></li>
                        <li><a class="zoom-plus" href="javascript:void(0)">A </a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <div class="copyright_text">
                        © 2022
                        <a href="#">Abu Dhabi Center for Sheltering and Humanitarian Care –
                  Ewaa.</a
                >
                All rights reserved.
              </div>
              <div class="copyright_links">
                <ul>
                  <li><a href="#"> Terms & Conditions </a></li>
                        <span>|</span>
                        <li><a href="#"> Privacy Policy </a></li>
                        <span>|</span>
                        <li><a href="#"> Copyright </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- back to top -->
    <a href="#" id="scroll" style="display: none"><span><img src="images/SCROLL.png" /></span
      ></a>
    </footer>

    <div class="scroll_social_icons">
        <ul>
            <li>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
            </li>
        </ul>
    </div>

    <ul class="call_exit">
        <li>
            <a href="tel:8007283" class="phone">
                <img src="./images/icons/phone.svg" alt="Phone" />
            </a>
            <a href="tel:8007283">8007283</a>
        </li>
        <li>
            <a href="javascript:window.open('','_self').close();" class="logout">
                <img src="./images/icons/logout.svg" alt="Logout" />
            </a>
            <a href="javascript:window.open('','_self').close();">Exit </a>
            <a class="exit-site" href="javascript:window.open('','_self').close();"><span>Click To leave Site</span></a
        >
      </li>
    </ul>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
