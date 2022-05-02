<script context="module">
  import Nav from "./nav.svelte";
  import '../styles/index.css';
  import '../styles/bootstrap.min.css';
</script>


<Nav />

<main class="page landing-page">
  <section class="portfolio-block block-intro">
    <div
      class="avatar"
      style="margin-top: -3rem; background-image: url(../self-portrait.jpg)"
    />
    <div class="container">
      <div class="about-me">
        <p>
          Hi! I'm Maysen and I am interested in front end development. I have a
          passion for minimal and easy to use interfaces
        </p>
        <a class="btn btn-primary" href="/my-projects"> View projects </a>
      </div>
    </div>
  </section>

  <section style="margin-top: -5rem;" class="portfolio-block skills">
    <div class="container">
      <div class="heading">
        <h2>Skills</h2>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card special-skill-item border-0">
            <div class="card-header bg-transparent border-0">
              <img alt="star icon" src="./static/start-icon.png" class="icon" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Web Design</h3>
              <p class="card-text">
                I focus on creating mobile responsive websites using ReactJS. I
                utilize CSS frameworks (such as Bootstrap, MaterialUI, Tailwind)
                but am not afraid to use my own custom CSS if I believe I will
                get a better result. This is important especially for custom
                mobile responsive CSS queries.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card special-skill-item border-0">
            <div class="card-header bg-transparent border-0">
              <img alt="light icon" src="./static/light-icon.png" class="icon" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Interface Design</h3>
              <p class="card-text">
                Making appealing websites is crucial in the modern internet.
                It's important to showcase all aspects of the website in one
                place and grab the attention of the user. I make use of
                appealing websites using clear layouts, and minimal/clean
                colours.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card special-skill-item border-0">
            <div class="card-header bg-transparent border-0">
              <img alt="settings icon" src="./static/settings-icon.png" class="icon" />
            </div>
            <div class="card-body">
              <h3 class="card-title">Database Integration</h3>
              <p class="card-text">
                I have extensive knowledge of working with databases - more
                specifically, Firestore and Postgres. Using a database makes
                sense for large scale projects, and as I pride myself on a
                responsive/fast website, a database only makes sense.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
