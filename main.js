const app = Vue.createApp({
  template: `
  <header>
    <h1>Text Script Recorder</h1>
  </header>
  
  <main>
    <button>Add Name</button>
    <button>Remove Name</button>
    <button>View Text</button>
    <button>Add Line</button>
    <button id="send">Send to Drive</button>
    
    <popupWin>
      <template #title><h3>Test</h3></template>
    </popupWin>
  </main>
  `
});

app.component("popupWin", popup);
app.mount('#app');