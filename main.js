// Bonus:

// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

 var app = new Vue (
  {
    el:'#rootVue',
    data: {
      text: 'Hello World',
      imgVue: 'ec.jpg',
      inputVue: ''
    },
    methods: {
      buttonVue: function() {
        if (this.imgVue == 'post.png') {
          this.imgVue= 'ec.jpg'
        } else {
          this.imgVue = 'post.png'
        }
      },
      inpuntFunction: function() {
        if (this.inputVue == "castello") {
          this.imgVue= 'angelo.jpg'
        }
      }
    }
  }
);




// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
