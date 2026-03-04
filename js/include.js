async function loadPartials() {
  const slots = document.querySelectorAll("[data-include]");

  for (const slot of slots) {
    const path = slot.getAttribute("data-include");

    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const html = await res.text();
      slot.outerHTML = html;
    } catch (err) {
      slot.outerHTML = `<!-- Failed to load ${path}: ${err.message} -->`;
    }
  }
}

loadPartials();