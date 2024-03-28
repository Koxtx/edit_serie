const ul = document.querySelector("ul");

const form = document.querySelector("form");
const input = document.querySelector("input");

// modification : il faut ajouter une clé de type booléen
const series = [
  {
    name: "Breaking Bad",
    seen: false,
    edit: false,
  },
  {
    name: "The Wire",
    seen: true,
    edit: false,
  },
];

console.log(series);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  console.log(value);
  input.value = "";

  addSerie(value);
});

const displaySeries = () => {
  const seriesNode = series.map((serie, index) => {
    // placer une condition selon l'état de la nouvelle clé

    return createSerieElement(serie, index);
  });
  ul.innerHTML = "";
  ul.append(...seriesNode);
};

// créer une méthode qui affiche un input avec le nom de la série et 2 boutons cancel et save

const createSerieElement = (serie, index) => {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.classList.add("todo");
  span.addEventListener("click", () => {
    toggleSerie(index);
  });
  if (serie.seen) {
    span.classList.add("done");
  }

  const p = document.createElement("p");
  p.innerText = serie.name;
  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Edit";
  btnEdit.addEventListener("click", () => {
    p.remove();
    btnDelete.remove();
    btnEdit.remove();
    const input = document.createElement("input");
    input.value = serie.name;

    const btnCancel = document.createElement("button");
    btnCancel.innerText = "Cancel";
    btnCancel.addEventListener("click", () => {
      input.remove();
      btnCancel.remove();
      btnSave.remove();
      li.append(p, btnEdit, btnDelete);
      cancelSerie(index);
    });

    const btnSave = document.createElement("button");
    btnSave.innerText = "Save";
    btnSave.addEventListener("click", (e) => {
      e.preventDefault();
      const nameSerie = input.value;
      console.log(nameSerie);
      input.nameSerie = " ";
      p.innerText = input.nameSerie;
      saveSerie(nameSerie, index);

      input.remove();
      btnCancel.remove();
      btnSave.remove();

      li.append(p, btnEdit, btnDelete);
    });
    li.append(input, btnCancel, btnSave);
    editSerie(index);
  });

  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("delete");
  btnDelete.addEventListener("click", () => {
    deleteSerie(index);
  });

  li.append(span, p, btnEdit, btnDelete);

  return li;
};

const addSerie = (value) => {
  series.push({ name: value, seen: false });
  displaySeries();
};

const deleteSerie = (index) => {
  console.log(index);
  series.splice(index, 1);
  displaySeries();
};
const toggleSerie = (index) => {
  console.log(index);
  series[index].seen = !series[index].seen;
  displaySeries();
};

// modification
// Créer une méthode qui switche la nouvelle clé du tableau : voir juste ci-dessus
const editSerie = (index) => {
  series[index].edit = !series[index].edit;
  console.log(series[index]);
};

const cancelSerie = (index) => {
  series[index].edit = !series[index].edit;
  console.log(series[index]);
};

// Créer une méthode qui va prendre en charge la modification
// modifier le nom
const saveSerie = (nameSerie, index) => {
  console.log(nameSerie);
  series[index].name = nameSerie;

  series[index].edit = !series[index].edit;
  console.log(series[index]);
  displaySeries();
};

displaySeries();
