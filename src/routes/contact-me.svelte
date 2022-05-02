<script context="module">
  import Nav from "../routes/nav.svelte";
</script>


<Nav />


<main class="page hire-me-page">
  <section class="portfolio-block hire-me">
    <div class="container">
      <div class="heading">
        <h2>Note this form doesn't work properly yet</h2>
      </div>
      <form id="contact-form">
        <div class="mb-3">
          <label class="form-label" htmlFor="fname">
            Name
          </label>
          <input
            class="form-control"
            type="text"
            id="fname"
            name="fname"
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label" htmlFor="email">
            Email
          </label>
          <input
            class="form-control"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            class="form-control"
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <div class="row">
              <button
                style={{ margin: 0 }}
                class="btn btn-primary d-block w-100"
                type="submit"
              >
                Submit
              </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</main>