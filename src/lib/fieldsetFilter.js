export function setupFieldsets() {
    if (typeof document === 'undefined') return; // zorgt ervoor dat de code niet server-side wordt uitgevoerd
  
    const fieldsets = document.querySelectorAll("fieldset");

    // Web Audio API setup
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let audioBuffer;

    // Geluidsbestand laden
    async function loadSound() {
        const response = await fetch('/sounds/crack.mp3');
        const arrayBuffer = await response.arrayBuffer();
        audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    }

    // Geluid afspelen
    function playSound() {
        if (!audioBuffer) return;

        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start(0);
    }

    // Laad het geluid vooraf
    loadSound().catch(err => console.error("Error loading audio:", err));
  
    // Maak alle fieldsets disabled, behalve de eerste
    fieldsets.forEach((fieldset, index) => {
      fieldset.disabled = index !== 0; // Alleen de eerste is actief
  
      const inputs = fieldset.querySelectorAll("input[type='radio']");
      inputs.forEach(input => {
        input.addEventListener("change", () => {
          const nextFieldset = fieldset.nextElementSibling;
          if (nextFieldset && nextFieldset.tagName === "FIELDSET") {
            nextFieldset.scrollIntoView({ behavior: "smooth" }); // Scroll naar volgende vraag
            nextFieldset.classList.add("unlock");
            playSound();
            setTimeout(() => {
              nextFieldset.disabled = false; // Volgende vraag openen
              nextFieldset.classList.remove("unlock");
          }, 6000);
          }
        });
      });
    });
  }
  