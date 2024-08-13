function addNavBar(){
    let navBar = `<section class="homepage-child"></section>
    <section class="homepage-item"></section>
    <section class="homepage-inner">
      <header class="finedventure-group">
        <h2 class="finedventure2"> <a style="all: inherit; text-decoration: inherit;" href="index.html">FinEdVenture</a></h2>
        <div class="navigation-wrapper">
          <div class="navigation">
            <button class="our-team-container">
              <a class="our-team3" onclick="window.location.href='our-team.html'"> Our Team</a>
            </button>
            <button class="financial-literacy-container">
              <a class="financial-literacy3" onclick="window.location.href='financialLiteracy.html'">Financial Literacy</a>
            </button>
            <div class="competitions-button">
              <button class="business-competitons-frame">
                <a class="business-competitons2" onclick="window.location.href='index.html'">Business Competitons</a>
              </button>
            </div>
            <div class="investments-container">
              <a class="investments2" onclick="window.location.href='index.html'">Investments</a>
            </div>
            <div class="profile-button">
              <div class="profile-button-content">
                <div class="profile-background"></div>
                <div class="profil2">
                  <div class="memojivariant124">
                    <div class="memoji4"></div>
                  </div>
                  <div class="login-button">
                    <div class="login-wrapper2">
                      <a class="login4"> Login</a>
                    </div>
                  </div>
                </div>
                <img
                  class="file-2-72"
                  loading="lazy"
                  alt=""
                  src="./public/file-2-7@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>`;
    console.log("navBar Made");
    return navBar;

}

window.addEventListener('DOMContentLoaded', function(){
    const navBar = addNavBar();
    const contentDiv = document.getElementById('NAVBARPLACEHOLDER');
    contentDiv.innerHTML = navBar;



})
