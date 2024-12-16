export function setupFieldsets() {
  if (typeof document === 'undefined' || !document.startViewTransition) return; // Zorg ervoor dat de code niet server-side wordt uitgevoerd en View Transition API beschikbaar is

  const fieldsets = document.querySelectorAll("fieldset");

  // Maak alle fieldsets disabled, behalve de eerste
  fieldsets.forEach((fieldset, index) => {
    fieldset.disabled = index !== 0; // Alleen de eerste is actief

    const inputs = fieldset.querySelectorAll("input[type='radio']");
    inputs.forEach(input => {
      input.addEventListener("change", () => {
        const nextFieldset = fieldset.nextElementSibling;
        if (nextFieldset && nextFieldset.tagName === "FIELDSET") {
          // Gebruik View Transition API voor een vloeiende overgang naar de volgende vraag
          document.startViewTransition(() => {
            nextFieldset.disabled = false; // Activeer het volgende fieldset
            //nextFieldset.scrollIntoView({ behavior: "smooth" }); // Scroll soepel naar de volgende vraag
          });
        }
      });
    });
  });
}
