export default {
  name: "App",
  computed: {
    // Define the behavior when you hover on the first picture.
    piperPictureHover () {
      if (this.piperHover == true) {
        return this.youngPiper;
      } else {
        return this.piper;
      }
    },
    // Define the behavior when you hover on the second picture.
    salehPiperPictureHover () {
      if (this.salehPiperHover == true) {
        return this.youngSalehPiper;
      } else {
        return this.salehPiper;
      }
    },
    // Define the behavior when you hover on the third picture.
    grizzleyPictureHover () {
      if (this.grizzleyHover == true) {
        return this.youngGrizzley;
      } else {
        return this.grizzley;
      }
    },
    // Define the behavior when you hover on the fourth picture.
    samaraPictureHover () {
      if (this.samaraHover == true) {
        return this.youngSamara;
      } else {
        return this.samara;
      }
    }
  },
  data () {
    return {
      // Set the locations of all the images.
      piper: "images/current_piper.png",
      youngPiper: "images/young_piper.png",
      piperHover: false,
      salehPiper: "images/current_saleh_piper.jpg",
      youngSalehPiper: "images/young_saleh_piper.png",
      salehPiperHover: false,
      grizzley: "images/current_grizzley.png",
      youngGrizzley: "images/young_grizzley.jpeg",
      grizzleyHover: false,
      samara: "images/current_samara.png",
      youngSamara: "images/young_samara.png",
      samaraHover: false
    };
  },
  template: `
    <section class="app">
      <section>
        <figure>
          <img :src="piperPictureHover" @mouseover="piperHover = true" @mouseleave="piperHover = false" class=gallery-image>
          <figcaption>Piper on Balance Beam</figcaption>
        </figure>
      </section>
      <section>
        <figure>
          <img :src="salehPiperPictureHover" @mouseover="salehPiperHover = true" @mouseleave="salehPiperHover = false" class=gallery-image>
          <figcaption>Piper and Saleh Together</figcaption>
        </figure>
      </section>
      <section>
        <figure>
          <img :src="grizzleyPictureHover" @mouseover="grizzleyHover = true" @mouseleave="grizzleyHover = false" class=gallery-image>
          <figcaption>Grizzley the Chow Chow</figcaption>
        </figure>
      </section>
      <section>
        <figure>
          <img :src="samaraPictureHover" @mouseover="samaraHover = true" @mouseleave="samaraHover = false" class=gallery-image>
          <figcaption>Samara the Maine Coone</figcaption>
        </figure>
      </section>
    </section>
    `
};
