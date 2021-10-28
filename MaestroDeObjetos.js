const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);
/* Por ejemplo, podríamos crear una lista de pokémon que tengan nombres que comiencen con la letra "B" usando el siguiente código: */
const bListPkmn = pokémon.filter((p) => p.name[0] === "B");
console.log(bListPkmn);
/* O si quisiéramos devolver una matriz de solo los identificadores, podríamos usar algo como esto: */
const pkmnIds = pokémon.map((p) => p.id);
console.log(pkmnIds);

/* TAREA: */
/* Una serie de objetos Pokémon donde la identificación es divisible por 3 */
const div3 = pokémon.filter((p) => p.id % 3 === 0);
console.log(div3);

/* Una serie de objetos Pokémon que son del tipo "fuego" */
const fireTypes = pokémon.filter((p) => p.types[0] === "fire");
console.log(fireTypes);

/* Una variedad de objetos Pokémon que tienen más de un tipo */
const more2Types = pokémon.filter((p) => p.types[(0, 1)]);
console.log(more2Types);

/* Una matriz con solo los nombres de los Pokémon */
const namePokemon = pokémon.map((name) => name.name);
console.log(namePokemon);

/* Una matriz con solo los nombres de Pokémon con una identificación mayor que 99 */
const nameMayor99 = pokémon.filter((p) => p.id >= 99).map((name) => name.name);
console.log(nameMayor99);

/* Una matriz con solo los nombres del pokémon cuyo único tipo es veneno */
const nameVeneno = pokémon
  .filter((p) => p.types[0] === "poison")
  .map((name) => name.name);
console.log(nameVeneno);

/* Una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador" */
const nameVolador = pokémon
  .filter((p) => p.types[1] === "flying")
  .map((name) => name.name);
console.log(nameVolador);

/* Un recuento de la cantidad de pokémon que son de tipo "normal" */
const normal = pokémon
  .filter((p) => p.types[0] === "normal")
  .map((name, idx) => `<${idx + 1}>${name.name}</${idx + 1}>`);
console.log(normal);
