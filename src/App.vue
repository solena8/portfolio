<template>
  <div id="app">
    <div class="header">
      <div class="header-content">
        <p class="main-title">Soléna Toussaint</p>
        <button class="hamburger" aria-label="Menu" @click="toggleMenu">☰</button>
      </div>
      <nav class="menu" :class="{ 'active': isMenuActive }">
        <a href="#presentation" @click="closeMenu" >Présentation</a>
        <a href="#code" @click="closeMenu">Code</a>
        <a href="#origami" @click="closeMenu">Origami</a>
        <a href="#illustration" @click="closeMenu">Illustration</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </nav>
    </div>

    <main>
      <div id="presentation" class="presentation">
        <img
          src="/solena.png"
          alt="Illustration de Soléna"
          class="presentation-photo"
        />
        <div class="presentation-texte">
          <p>
            Formée chez Ada Tech School, j’ai acquis de solides bases en
            développement grâce à des projets concrets. Je me spécialise en
            Python, SQL et API, avec une passion pour la donnée, les tests, la
            résolution de problèmes complexes et le travail collaboratif.
          </p>
          <p>
            Actuellement en recherche de stage ou d’alternance, je poursuis ma
            montée en compétences avec des projets personnels.
          </p>
          <p>
            Hors code, je crée des BD, plie des origamis géométriques, bricole,
            fais de l’escalade ou joue à des jeux de logique.
          </p>
          <p>
            Toujours partante pour échanger et apprendre, n’hésitez pas à me
            contacter !
          </p>
        </div>
        <div class="cv-container">
          <a
            role="button"
            class="cv-button"
            href="/cv_solena_toussaint.pdf"
            download
            >CV</a
          >
          <a
            role="button"
            class="cv-button"
            href="https://www.linkedin.com/in/solenatoussaint/"
            download
            >Linkedin</a
          >
          <a
            role="button"
            class="cv-button"
            href="https://github.com/solena8"
            download
            >Github</a
          >
        </div>
      </div>

      <section id="code">
        <Discipline
          titre="Projets de Code"
          :projets="codeProjets"
          video="/animation_code.mp4"
          alt_text="Des mains codent un hello world en python sur un ordinateur."
        />
      </section>

      <section id="origami">
        <Discipline
          titre="Projets d'Origami"
          :projets="origamiProjets"
          video="/animation_origami.mp4"
          alt_text="Des mains fabriquent une cocotte en origami."
        />
      </section>

      <section id="illustration">
        <Discipline
          titre="Projets d'Illustration"
          :projets="illustrationProjets"
          video="/animation_dessin.mp4"
          alt_text="Des mains dessinent un bonhomme."
        />
      </section>
    </main>
    <section id="contact">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScsWwf6E9lwb0iiIImeS2kTPlYQlngr-RDrvoqEU7yOiw19Lw/viewform?embedded=true"
        width="80%"
        height="1100"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Loading…</iframe
      >
    </section>
  </div>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'
import Discipline from './components/Discipline.vue'
import codeProjets from './data/code'
import origamiProjets from './data/origami'
import illustrationProjets from './data/illustration'

export default defineComponent({
  name: 'App',
  components: { Discipline },
  setup() {
    const isMenuActive = ref(false);

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

const closeMenu = () => {
      isMenuActive.value = false; 
    };

    return {
      isMenuActive,
      closeMenu,
      toggleMenu,
      codeProjets,
      origamiProjets,
      illustrationProjets,
    }
  },
  mounted() {
  document.title = "Soléna Toussaint"
}

})
</script>
