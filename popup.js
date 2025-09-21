const popup = {
  template: `
  <div v-show="show" ref="popup" class="popupBackground">
    <article class="popupBody">
      <slot name="title"></slot>
      <slot name="output"></slot>
      <slot name="input"></slot>
      
      <button @click="closePopup">Exit</button>
    </article>
  </div>
  `,
  data() {
    return {
      show: false
    };
  },
  
  methods: {
    closePopup() {
      this.show = false;
    }
  }
};