console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const fetchDogs = () => {
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) => renderImgs(json.message));
};

const fetchBreeds = () => {
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((json) => renderBreeds(json.message));
};

const renderImgs = (images) => {
  const dogContainer = document.getElementById("dog-image-container");
  images.forEach((image) => {
    const img = document.createElement("img");
    img.setAttribute("src", image);
    dogContainer.appendChild(img);
  });
};

const renderBreeds = (breeds) => {
  const breedContainer = document.getElementById("dog-breeds");
  for (const breed in breeds) {
    const li = document.createElement("li");
    li.innerText = breed;
    breedContainer.appendChild(li);
    li.addEventListener("click", function () {
      li.style.color = "green";
    });
  }
};

const handleFilter = (e) => {
  const selection = e.target.value;
  const filteredBreeds = [];
  Array.from(document.getElementsByTagName("li")).forEach(function (element) {
    if (element.innerText[0] == selection) {
      filteredBreeds.push(element);
    }
  });
  const breedContainer = document.getElementById("dog-breeds");
  breedContainer.innerHTML = "";
  filteredBreeds.forEach(function (breed) {
    let li = document.createElement("li");
    li = breed;
    breedContainer.appendChild(li);
  });
  console.log(filteredBreeds);
};

document.addEventListener("DOMContentLoaded", function () {
  fetchDogs();
});

document.addEventListener("DOMContentLoaded", function () {
  fetchBreeds();
});

document.addEventListener("DOMContentLoaded", function () {
  const filterBtn = document.getElementById("breed-dropdown");
  filterBtn.addEventListener("change", handleFilter);
});
