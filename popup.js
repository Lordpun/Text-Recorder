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

// Put here instead of a new JS file because it was heavily releated
const inputField = {
  template: `
  <section>
    <slot name="input"></slot>
    
    <button>Enter</button>
  </section>
  `
};