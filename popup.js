const popup = {
  template: `
  <div class="popupBackground">
    <article class="popupBody">
      <slot name="title"></slot>
      <slot name="output"></slot>
      <slot name="input"></slot>
      
      <button>Exit</button>
    </article>
  </div>
  `,
};