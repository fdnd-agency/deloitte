export function setupFieldsets() {
    if (typeof document === 'undefined') return; // zorgt ervoor dat de code niet server-side wordt uitgevoerd
  
    const fieldsets = document.querySelectorAll("fieldset");
  
    // Maak alle fieldsets disabled, behalve de eerste
    fieldsets.forEach((fieldset, index) => {
      fieldset.disabled = index !== 0; // Alleen de eerste is actief
  
      const inputs = fieldset.querySelectorAll("input[type='radio']");
      inputs.forEach(input => {
        input.addEventListener("change", () => {
          const nextFieldset = fieldset.nextElementSibling;
          if (nextFieldset && nextFieldset.tagName === "FIELDSET") {
            nextFieldset.disabled = false; // Volgende vraag openen
            nextFieldset.scrollIntoView({ behavior: "smooth" }); // Scroll naar volgende vraag
          }
        });
      });
    });
  }
  