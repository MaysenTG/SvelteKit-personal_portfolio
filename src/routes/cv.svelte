<script context="module">
  import Nav from "../routes/nav.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";

  export const load = async () => {
    const queryWork = gql`
      {
        experiences(experienceType: "Work") {
          id
          position
          title
          location
          tenure
          description
        }
      }
    `;

    const { experiences } = await client.request(queryWork);

    return {
      props: {
        experiences,
      },
    };
  };
</script>

<script>
  export let experiences;
</script>

<Nav />

<main class="page cv-page">
  <section class="portfolio-block cv">
    <div class="container">
      <div class="work-experience group">
        <div class="heading">
          <h2 class="text-center">Work Experience</h2>
        </div>

        {#each experiences as job}
          <div class="item" key={job.id}>
            <div class="row">
              <div class="col-6">
                <h3>{job.position}</h3>
                <h4 class="organization">{job.title}</h4>
                <p class="text-muted location">
                  {job.location}
                </p>
              </div>
              <div class="col-md-6">
                <span class="period">{job.tenure}</span>
              </div>
              <p class="text-muted">{job.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</main>
