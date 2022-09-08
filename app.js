//local data, normally would using Angular
const reviews = [{
        id: 1,
        strains: "Mai Mai Maui",
        dominant: "Sativa",
        img: "https://cdn.pixabay.com/photo/2017/03/16/23/19/cannabis-2150543_960_720.jpg",
        text: "Random description text that probably doesn't mean anything to the reader anyway"

    },
    {
        id: 2,
        strains: "Blueberry Cake",
        dominant: "Indica",
        img: "https://cdn.pixabay.com/photo/2017/07/18/22/22/weed-2517251_960_720.jpg",
        text: "Random description text that probably doesn't mean anything to the reader anyway"

    },
    {
        id: 3,
        strains: "Ice road trucker",
        dominant: "Sativa",
        img: "https://cdn.pixabay.com/photo/2014/09/16/19/52/cannabis-448661_960_720.jpg", // photo by pixabay user cheifyc
        text: "Random description text that probably doesn't mean anything to the reader anyway"

    },
    {
        id: 4,
        strains: "Star Fox",
        dominant: "Hybrid",
        img: "https://cdn.pixabay.com/photo/2018/11/07/19/00/bud-3801028_960_720.jpg", //photo by pixabay user David Cardinez
        text: "Random description text that probably doesn't mean anything to the reader anyway"

    },
];

//select items
const img = document.getElementById("strain-img");
const strains = document.getElementById("strain");
const dominant = document.getElementById("dominant");
const text = document.getElementById("info");

const prevBtn = document.querySelector('.prev-but');
const nextBtn = document.querySelector('.next-but');
const randomBtn = document.querySelector('.random-but');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
    showStrain(currentItem);
});

// show strain based on item
function showStrain(strain) {
    const item = reviews[currentItem];
    img.src = item.img;
    strains.textContent = item.strains;
    dominant.textContent = item.dominant;
    text.textContent = item.text;
}

// show next strain
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showStrain(currentItem);
});

//show previous strain
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showStrain(currentItem);
});