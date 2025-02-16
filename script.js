import { pokemons } from "./pokemons.js";

const ota = document.getElementById("ota");
const input = document.getElementById("input");
const select = document.getElementById("select");

function pokimonChizish(malumotlar) {
  ota.innerHTML = "";
  malumotlar.map((pokimon) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
         <h2>${pokimon.name}</h2>
           <img src="${pokimon.img}" alt="asd"> <br>
           <button>${pokimon.type}</button>
           <h3>candy count: ${pokimon?.candy_count || 0}</h3>
           <h3>weight: ${pokimon.weight}</h3>
           <h4>${pokimon.weaknesses} </h4>
           <div class="p-id">${pokimon.num}</div>
           <div class="time">${pokimon.spawn_time}</div>
         `;
    ota.appendChild(div);
  });
}

pokimonChizish(pokemons);

input.addEventListener("input", () => {
  const searchesPokimons = pokemons.filter((e) =>
    e.name.toLowerCase().includes(input.value.toLowerCase())
  );
  pokimonChizish(searchesPokimons);
});

select.addEventListener("change", () => {
  if (select.value == "All") {
    pokimonChizish(pokemons);
  } else {
    const searchType = pokemons.filter((e) =>
     e.weaknesses.toString().includes(select.value) );
    pokimonChizish(searchType);
  }
});
