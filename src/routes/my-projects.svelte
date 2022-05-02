<script context="module">
  import Nav from "../routes/nav.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";
  import { client } from "$lib/graphql-client";
  import { gql } from "graphql-request";

  export const load = async () => {
    const queryApp = gql`
      {
        projects(projectType: "App", showProject: true) {
          title
          description
          skills
          githubUrl
          previewUrl
          imageUrl
        }
      }
    `;

    const { projects } = await client.request(queryApp);
    //const { projectsAuto } = await client.request(queryAutomation);

    return {
      props: {
        projects,
        //projectsAuto,
      },
    };
  };
</script>

<script>
  export let projects;
</script>

<Nav />

<div class="container" style="margin-top: 8rem;">
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="projects"
      role="tabpanel"
      aria-labelledby="projects-tab"
    >
      <section id="projects">
        <div class="row">
          <h1 style="margin-top: 2rem" class="section__title">Web Apps</h1>
          <ul class="project__list">
            {#each projects as { title, description, skills, githubUrl, previewUrl, imageUrl }}
              <ProjectCard
                {title}
                {description}
                {imageUrl}
                {skills}
                {githubUrl}
                {previewUrl}
              />
            {/each}
          </ul>
        </div>
      </section>
    </div>
  </div>
</div>
