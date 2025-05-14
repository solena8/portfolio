<template>
  <div class="projet-card">
    <a
      :href="projet.link"
      :aria-label="`Lien vers le projet ${projet.titre}`"
      role="button"
      rel="noopener"
      class="projet-link"
    >
      <div class="image-spot">
        <img :src="projet.image" :alt="projet.image_alt" class="projet-image" />
      </div>
      <div class="texte-spot">
        <h3 class="projet-title">{{ projet.titre }}</h3>
        <ul class="projet-description">
          <li v-for="(descript, index) in projet.description" :key="index">
            {{ descript }}
          </li>
        </ul>

      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    projet: Object, 
  },
};
</script>

<style scoped>
.projet-card {
  max-width: 28rem;
  width: 100%;
  height: 30rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  transition: transform 0.3s;
  overflow: hidden;
  background-color: white;
}

.projet-card:hover {
  transform: scale(1.05);
}

.image-spot {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 2rem;
}

.projet-image {
  max-width: 100%;
  height: auto;
  max-height: 12rem;
  object-fit: contain;
}

.texte-spot {
  flex: 1;
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.projet-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.projet-description {
  font-size: 1rem;
  color: #555;
  text-align: left;
  padding: 0.5rem;
  margin-left: 2rem;
}

@media screen and (max-width: 768px) {
  .projet-card {
    width: 80%;
    margin: 1rem auto;
    height: auto;
  }
}

@media screen and (max-width: 480px) {
  .projet-card {
    margin: 1rem auto;
    height: auto;
  }
  .projets-container {
    flex-direction: column;
  }
}

@media (prefers-color-scheme: dark) {
  .projet-card {
    background-color: black;
    border: 1px solid  black;
  }
  .image-spot {
    background-color: #555;
  }
  .projet-description {
    color: #eeeeee;
  }
  .texte-spot{
    background-color: #555;;
  }
}
</style>
