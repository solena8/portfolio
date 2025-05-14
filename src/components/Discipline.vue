<template>
  <section>
    <div class="content">
      <h2>{{ titre }}</h2>
      <video
        class="animation"
        :src="video"
        autoplay
        loop
        muted
        :aria-label="alt_text"
      ></video>
    </div>
    <div class="projets-container">
      <ProjectCard
        v-for="(projet, index) in projets"
        :key="index"
        :projet="projet"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "Discipline",
  components: {
    ProjectCard,
  },
  props: {
    titre: String,
    projets: Array,
    video: String,
    alt_text: String,
  },
};
</script>

<style scoped>
section {
  margin-top: 12rem;
  margin-bottom: 8rem;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 1px solid #ddd;
  margin-bottom: 4rem;
  background-color: #ffffff;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.4;
  max-width: 250px;
  word-wrap: break-word;
  margin: 0;
}

video {
  width: 15rem;
  height: auto;
  margin: 1rem;
}

.projets-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    max-width: 200px;
    text-align: center;
    padding-top: 1rem;
  }

  video {
    width: 10rem;
  }
}

@media (max-width: 480px) {
  .content {
    gap: 0.5rem;
  }

  h2 {
    font-size: 1.2rem;
    max-width: 180px;
  }

  video {
    width: 10rem;
  }
}

@media (prefers-color-scheme: dark) {
  .content {
    background-color: #555;
    color: #ffb6c1;
    border: 1px solid #555;
  }
}
</style>
