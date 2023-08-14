<script>
    import { counter } from '../pages/store.js';
    function showAlert() {
      alert('¡Hola!');
      alert(counter.get())
    }
  </script>
  
  <button on:click={showAlert}>Haz clic aquí</button>
  