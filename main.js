const app = Vue.createApp({
  template: `
  <header>
    <h1>Text Recorder</h1>
  </header>
  
  <main>
    <button @click="this.popupState = 'add'">Add Name</button>
    <button>Remove Name</button>
    <button>View Text</button>
    <button>Add Line</button>
    <button id="send">Send to Drive</button>
    
    <!-- Popups -->
    
    <!-- Name -->
    <popupWin v-if="popupState == 'add'" @close="closePopup">
      <template #title><h3>Add a name reference</h3></template>
      
      <template #input><p>Placeholder</p></template>
    </popupWin>
  </main>
  `,
  
  data() {
    return {
      popupState: "none"
    };
  },
  
  methods: {
    closePopup() {
      this.popupState = "none";
    },
  }
});

app.component("popupWin", popup);
app.mount('#app');