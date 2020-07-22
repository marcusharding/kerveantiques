<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">

    <title></title>
    <meta name="description" content="">
    <meta name="author" content="">

  </head>

  <body id="body">
    <main data-module="smoothScroll" class="main">

      <!-------------------------
      NAVBAR
      --------------------------->
      <header data-module="siteHeader" id="siteHeader" class="header">
        <div class="header-wrapper">

          <!-- Menu Logo -->
          <a>

          </a>

          <!-- Navigation Menu -->
          <nav id="siteNav" class="g-nav">
            <ul class="g-nav__list">
              <li>
                <a class="g-nav__link text-primary">
                  Home
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  News
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  Events
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  Journals
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  Newsletters
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  Research
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  Grants
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  Donations
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  Membership
                </a>
              </li>
              <li>
                <a class="g-nav__link text-primary">
                  Contact & Links
                </a>
              </li>
            </ul>
          </nav>

          <!-- Burger Button -->
          <a data-module="mobileMenu" id="mobileMenu" data-menu-button aria-controls='site-nav' aria-expanded='false' class="o-burger mobile-burger">
            <span class="visuallyhidden">Open Menu</span>
            <button class="hamburger hamburger--slider" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </a>

        </div>
      </header>

      <!-------------------------
      HERO HEADER
      --------------------------->
      <div class="relative h-screen flex">
        <!-- Mobile -->
        <div id="mobileHero" class="mobile-hero__container">
          <div class="hero-heading relative wrapper">
            <h1 class="text-white h1a">The</h1>
            <h1 class="text-white h1b uppercase">Antique</h1>
            <h1 class="text-white h1b uppercase">Society</h1>
          </div>
          <div class="wrapper relative z-10 hero-subHeading__container">
            <p class="text-white hero-subHeading font-avenirBook">c. 1770  /  <span class="text-secondary">Armchair by Michel Gourdin - France and a wrap if longer text.</span></p>
            <div class="arrow__container">
              <a data-scroll href="#mainContent">
                <div class="arrow"></div>
              </a>
            </div>
          </div>
        </div>

        <!-- Desktop -->
        <div class="desktop-header">

        </div>
      </div>

      <!-------------------------
      MAIN PAGE CONTENT
      --------------------------->
      <section id="mainContent" class="wrapper text-center py-24">
        <div class="mainSection">
          <h1 class="uppercase">ANTIQUE APPRECIATION since 1964.</h1>
          <hr class="line-break my-24"/>
          <h3 class="text-secondary">The Antique Society was founded to study furniture of all periods, places and kinds, to increase knowledge and appreciation of it, and to assist in the preservation of furniture and its records.</h3>
          <div id="appreciation" class="responsive-img aspect-ratio"></div>
          <p class="text-primary hero-subHeading font-avenirBook pb-24">c. 1770  /  <span class="text-secondary">Armchair by Michel Gourdin - France and a wrap if longer text.</span></p>
          <p class="uppercase text-primary font-avenirMedium pt-24 newEvent">new event</p>
          <hr class="line-break my-24"/>
          <h1 class="text-primary date uppercase">21<sup class="sup">st</sup> feb / <span class="text-tertiary">2015</span></h1>
          <h2 class="text-quaternary uppercase">THE 39th ANNUAL SYMPOSIUM 2015</h2>
          <p class="text-secondary mainSection-subText font-avenirBook">The Wallace Collection, Hertford House, Manchester Square, London, W1 Price: £45.00</p>
          <a class="btn btn--primary font-avenirMedium my-24" href="#" onClick="return false;">
            view events
            <i class="btn-arrow"></i>
          </a>
        </div>
      </section>

      <!-------------------------
      FOOTER
      --------------------------->
      <footer class="py-24">
        <div class="wrapper">
          <div class="footer-logo py-12">
            <h1 class="text-white h1a">The</h1>
            <h1 class="text-white h1b uppercase">Antique</h1>
            <h1 class="text-white h1b uppercase">Society</h1>
          </div>  
          <p class="uppercase text-primary font-palatinoRoman para-a pb-12">CONTACT & LINKS</p>
          <p class="text-tertiary font-avenirBook para-b">© Antique Society is registered charity no. 251863.</p>
          <div class="flex">
            <p class="uppercase font-avenirBook text-secondary mr-8 para-c">privacy policy</p>
            <p class="uppercase font-avenirBook text-secondary mr-8 para-c">|</p>
            <p class="uppercase font-avenirBook text-secondary mr-8 para-c">terms & conditions</p>
          </div>
        </div>
      </footer>
    </main>
  </body>
</html>