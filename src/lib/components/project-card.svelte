<script>
  export let title = "";
  export let description = "";
  export let skills = "";
  export let imageUrl = "";
  export let githubUrl = "";
  export let previewUrl = "";
</script>

<li key={title} class="project">
  <div class="project__wrapper">
    <img src={imageUrl} class="project__img" alt="Car subscription project" />
    <div class="project__description">
      <h3 class="project__description--title">{title}</h3>
      <h4 class="project__description--sub-title">
        {skills}
      </h4>
      <p class="project__description--para">
        {description}
      </p>
      <div class="project__description--links">
        <a
          href={githubUrl}
          rel="noreferrer"
          target="_blank"
          class="project__description--link"
        >
          <i class="icon fa-github-white" />
        </a>

        <a
          href={previewUrl}
          rel="noreferrer"
          target="_blank"
          class="project__description--link"
        >
          <i class="icon fa-web-white" />
        </a>
      </div>
    </div>
  </div>
</li>
