const popup = {
  template: `
  <div class="popupBackground">
    <article class="popupBody">
      <slot name="title"></slot>
      <slot name="output"></slot>
      <slot name="input"></slot>
      
      <button @click="closeEvent">Exit</button>
    </article>
  </div>
  `,
  
  methods: {
    closeEvent() {
      this.$emit('close');
    }
  }
};