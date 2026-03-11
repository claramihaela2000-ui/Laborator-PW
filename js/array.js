// EXERCITIUL 1
const educationItems = document.querySelectorAll('#education ol li');
const educationArray = Array.from(educationItems).map(li => li.textContent);
console.log("Array-ul de educație:", educationArray);

//EXERCITIUL 2
// FILTRUL 1  "Facultatea"
const filterFacultate = educationArray.filter(item => item.includes("Facultatea"));
console.log("Filtru 1 (Facultatea):", filterFacultate);

// FILTRUL 2 "Liceu"
const filterLiceu = educationArray.filter(item => item.includes("Liceu"));
console.log("Filtru 2 (Liceu):", filterLiceu);

// FILTRUL 3 2035 - returneaza daca nu gaseste 2025
const filterAn = educationArray.filter(item => item.includes("2025"));
console.log("Filtru 3 (2025):", filterAn);


//EXERCITIUL 3
const firstWordsArray = educationArray.map(item => {
    // .trim() elimină spațiile goale de la început/final
    // .split(" ") împarte textul într-un array de cuvinte folosind spațiul ca separator
    // [0] accesează primul element din acel array de cuvinte
    return item.trim().split(" ")[0];
});

console.log("Array cu primele cuvinte:", firstWordsArray);


//Exercitiul 4
const totalAni = educationArray.reduce((accumulator, item) => {
    // 1. Folosim o expresie regulată (Regex) pentru a găsi toate numerele din text
    // \d+ caută grupuri de cifre, iar /g caută peste tot în text
    const aniGasiti = item.match(/\d+/g); 

    if (aniGasiti && aniGasiti.length >= 2) {
        // 2. Extragem anul de început și anul de sfârșit
        const start = parseInt(aniGasiti[0]);
        const sfarsit = parseInt(aniGasiti[1]);
        
        // 3. Calculăm durata (Ex: 2022 - 2018 = 4 ani)
        const durata = sfarsit - start;
        
        // 4. Îi adunăm la acumulatorul total
        return accumulator + durata;
    }
    
    return accumulator;
}, 0); // 0 este valoarea inițială a acumulatorului

console.log(`Total ani de studiu: ${totalAni}`);