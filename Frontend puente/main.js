document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");

  // URL de la API (puedes reemplazar esta URL con la de tu API)
  const apiURL =
    "https://7fydvenhr4.execute-api.us-east-1.amazonaws.com/dev/obtener/2";

  // Función para obtener datos de la API y renderizar las cards
  const fetchData = async () => {
    try {
      const response = await fetch(apiURL, {
        method: "GET",
      });
      const data = await response.json();

      const card = document.createElement("div");

      // Suponemos que cada post tiene un id, title y body
      card.innerHTML = `
                <h2>${data.Titulo}</h2>
                <p>${data.Genero}</p>
            `;

      grid.appendChild(card);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  // Llamar a la función para obtener los datos y renderizar las cards
  fetchData();
});
