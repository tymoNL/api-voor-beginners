const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";
const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

// Standaard url + iedereen
const everybodyURL = baseURL + endpointSquad;

// Get data from everybody url
getData(everybodyURL).then(dataEverybody => {
    
    // Alle people
    let allPeople = dataEverybody.data;

    // console.log("Iedereen: ", allPeople);

    // Get 2nd section in the dom 
    let everybodySection = document.querySelector("section:nth-of-type(2)");

    // Functie voor elk persoon
    allPeople.forEach(person => {

        // Person variables
        personName = person.name;
        personImage = person.avatar;
        personWebsite = person.website;

        // Random numbers for images
        let randomNumber = Math.random();
        let randomNumber2 = randomNumber * 5;
        let randomNumberRounded = Math.floor(randomNumber2) + 1;

        // console.log(randomNumberRounded);

        // Image handler
        if(!personImage) {
            personImage = `images/placeholder${randomNumberRounded}.svg`;
        }

        // Website handler
        if(!personWebsite) {
            personWebsite = fallbackWebsite;
        }

        let personHTML =  
        `<article>
            <h3>${personName}</h3>
            <img src="${personImage}" alt="${personName}">
            <a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
        </article>`;

        everybodySection.insertAdjacentHTML('beforeend', personHTML);
    });
});







/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }