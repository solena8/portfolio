class Projet {
    constructor(titre, description, image, image_alt, link) {
      this.titre = titre;
      this.description = description;
      this.image = image;
      this.image_alt = image_alt;
      this.link = link;
    }
  
    getShortDescription() {
      return this.description
    }
  
    getLink() {
      return this.link;
    }
  }
  
  export default Projet;
  