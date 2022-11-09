const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<link href="css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
    <link rel="stylesheet" href="css/base.css" />
    <link rel="stylesheet" href="css/responsive.css" />
    <link href="css/reset.css" rel="stylesheet" />
    <link href="css/header.css" rel="stylesheet" />
    <script src="./header-scripts.js"></script>
    <link href="css/search.css" rel="stylesheet" />
    <link href="css/icon-box.css" rel="stylesheet" />
<header class="header">
        <div class="navbar">
            <div class="h_box header__left">
                <span class="open-menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
              <g fill="#018F90" fill-rule="evenodd">
                <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
              </g>
            </svg>
          </span>
                <div class="logo-bar">
                    <a href="#"> <img src="images/logo.png" /></a>
                </div>
                <div class="menu-wrapper">
                    <div class="menu">
                        <div class="menu-block">
                            <div class="close-menu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                    />
                  </svg>
                            </div>
                            <div class="mobile-logo">
                                <a href="#"> <img src="images/logo-white.png" /></a>
                            </div>
                            <div class="mobile-bar">
                                <div class="language-selector"><a href="#"> عربي </a></div>
                                <div class="mobile-search-bar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 80 76" fill="none">
                      <path
                        d="M32.6186 0.429688C14.6299 0.429688 0 14.3499 0 31.4294C0 48.584 14.6299 62.4276 32.6186 62.4276C40.8534 62.4276 48.369 59.4926 54.1254 54.6773L55.9648 56.4084L54.2846 58.0631C53.3252 58.966 53.3252 60.3961 54.2846 61.299L68.6756 74.992C69.1553 75.4435 69.7162 75.6695 70.3558 75.6695C70.9954 75.6695 71.6347 75.4435 72.0344 74.992L78.4304 68.8979C79.3098 67.995 79.3102 66.5661 78.3508 65.7384L63.9598 52.0439C63.4801 51.5925 62.9192 51.3679 62.2796 51.3679C61.64 51.3679 61.0007 51.5925 60.601 52.0439L58.9223 53.7001L57.0829 51.894C62.1197 46.4015 65.2387 39.2543 65.2387 31.4294C65.2387 14.3499 50.6073 0.429688 32.6186 0.429688ZM32.6186 5.01902C47.9689 5.01902 60.4417 16.9078 60.4417 31.5043C60.4417 46.1008 47.9689 57.9132 32.6186 57.9132C17.2682 57.9132 4.79698 46.1008 4.79698 31.5043C4.79698 16.9078 17.2682 5.01902 32.6186 5.01902ZM32.6982 14.424C25.103 14.424 18.3079 19.0148 15.7495 25.7864C15.3497 26.7645 15.9091 27.9675 17.0284 28.2684C17.2682 28.3437 17.5084 28.4198 17.7482 28.4198C18.6277 28.4198 19.4272 27.8925 19.747 27.0649C21.6658 21.8733 26.9418 18.3373 32.6982 18.3373C33.8175 18.3373 34.7781 17.4348 34.7781 16.3814C34.7781 15.328 33.8175 14.424 32.6982 14.424ZM17.5077 33.0091C16.3884 33.0091 15.4294 33.8365 15.4294 34.965V35.2663C15.5093 36.3197 16.3897 37.2222 17.5889 37.2222C18.7082 37.2222 19.6673 36.3197 19.6673 35.2663V35.04C19.6673 33.9114 18.7882 33.0091 17.5889 33.0091H17.5077ZM62.3608 56.8595L73.3929 67.3931L70.3558 70.2528L59.3221 59.7192L62.3608 56.8595Z"
                        fill="#fff"
                      />
                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="menu_mobile_links">
                            <span>MENU</span>
                            <ul class="listing">
                                <li class="menu-item">
                                    <a href="#" class="menu-link">ABOUT US</a>
                                </li>
                                <li class="menu-item has-collapsible">
                                    <a href="#">HOW WE HELP</a>
                                    <ul class="menu-child">
                                        <li class="menu-child-item"><a href="#">AWARENESS</a></li>
                                        <li class="menu-child-item"><a href="#">SERVICES</a></li>
                                        <li class="menu-child-item">
                                            <a href="#">SHELTERING</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">INITITATIVES</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item has-collapsible">
                                    <a href="#">SUCCESS STORIES</a>
                                    <ul class="menu-child">
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item has-collapsible">
                                    <a href="#">MEDIA</a>
                                    <ul class="menu-child">
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item has-collapsible">
                                    <a href="#">RESOURCES</a>
                                    <ul class="menu-child">
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                        <li class="menu-child-item">
                                            <a href="#">Sub Menu Item</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item">
                                    <a href="#" class="menu-link">GET IN TOUCH</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="h_box header__right">
                <div class="contact-info">
                    <a href="tel:8007283"><span class="call-text">800-SAVE (800 7283)</span
              ><span class="call-icon"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M29.9452 21.7987L23.3826 18.9861C23.1023 18.8666 22.7907 18.8415 22.4948 18.9144C22.1989 18.9873 21.9347 19.1544 21.742 19.3904L18.8357 22.9413C14.2745 20.7907 10.6038 17.12 8.45326 12.5589L12.0041 9.65256C12.2406 9.46018 12.408 9.19597 12.481 8.89994C12.554 8.6039 12.5285 8.29216 12.4084 8.0119L9.59586 1.44929C9.46408 1.14718 9.23103 0.900516 8.93687 0.751834C8.64271 0.603152 8.3059 0.561769 7.9845 0.634821L1.89064 2.0411C1.58078 2.11265 1.30431 2.28712 1.10637 2.53604C0.908435 2.78495 0.80071 3.09361 0.800781 3.41163C0.800781 18.4412 12.9826 30.5996 27.9888 30.5996C28.3069 30.5998 28.6157 30.4921 28.8647 30.2942C29.1137 30.0962 29.2883 29.8197 29.3599 29.5097L30.7661 23.4159C30.8387 23.0929 30.7965 22.7548 30.6466 22.4596C30.4968 22.1644 30.2488 21.9307 29.9452 21.7987Z"
                    fill="#008F90"
                  /></svg></span
            ></a>
                </div>
                <!-- <div class="search-bar">
                    <div class="search">
                        <input type="search" class="search-box" />
                        <span class="search-button">
                <span class="search-icon"></span>
                        </span>
                    </div>
                </div> -->
                <div class="search-bar">
                    <div id="search-btn">
                        <img src="images/Search.png" />
                    </div>
                    <div id="search-overlay" class="block">
                        <div class="search-centered">
                            <div id="search-box">
                                <div class="search-logo">
                                    <a href="#"> <img src="images/logo-white.png" /></a>
                                </div>
                                <div id="close-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                      ></path>
                    </svg>
                                </div>
                                <form action="/search" id="search-form" method="get" target="_top">
                                    <input id="search-text" name="q" placeholder="Search Here..." type="text" />
                                    <!-- <button id='search-button' type='submit'>                     
                                    <span>Search</span>
                                    </button> -->
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="breadcrumbs">
        <div class="breadcumbs_links">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
                <li>
                    <span>Who we Are</span>
                </li>
            </ul>
        </div>
        <div class="language">
            <a href="#">EN</a>
        </div>
    </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
