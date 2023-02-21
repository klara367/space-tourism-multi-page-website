/* mobile menu */
const hamburger = document.querySelector(".hamburger-btn");
const navMobile = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navMobile.classList.toggle("display")
    document.body.classList.toggle("overflow-hidden")
    if(navMobile.classList.contains("display")) {
        hamburger.src = "./assets/shared/icon-close.svg"
    } else {
        hamburger.src = "./assets/shared/icon-hamburger.svg"
    }
});



const url = ("./data.json");
const fetchUrl = fetch(url).then(res => res.json());



/* Destination page */
const destinationPlace = document.querySelector(".destination-place");
const description = document.querySelector(".description");
const destinationImg = document.querySelector(".destination-img");
const distance = document.querySelector(".distance");
const travel = document.querySelector(".travel");
const destinations = document.querySelectorAll(".destination");

destinations.forEach((destination, index) => {
    destination.addEventListener("click", (e) => {
        fetchUrl
        .then(data => {
            let dataDestination = data.destinations[index];
            destinationPlace.innerHTML = dataDestination.name;
            description.innerHTML = dataDestination.description;
            destinationImg.src = dataDestination.images.webp;
            distance.innerHTML = dataDestination.distance;
            travel.innerHTML = dataDestination.travel;
            document.querySelector(".active-destination")?.classList.remove("active-destination")
            destination.classList.add("active-destination");
        })
    });
});



/* Crew page */
const members = document.querySelectorAll(".member");
const memberPhoto = document.querySelector(".member-photo");
const memberBio = document.querySelector(".member-bio");
const crewMember = document.querySelector(".crew-member");
const position = document.querySelector(".crew-member-role");

members.forEach((member,index) => {
    member.addEventListener("click", (e) => {
        fetchUrl
        .then(data => {
            let dataCrew = data.crew[index]
            position.innerHTML = dataCrew.role;
            crewMember.innerHTML = dataCrew.name;
            memberBio.innerHTML = dataCrew.bio;
            memberPhoto.src = dataCrew.images.webp;
            document.querySelector(".active-crew")?.classList.remove("active-crew")
            member.classList.add("active-crew");
        })
    });
});



/* Technology page */
const technologies = document.querySelectorAll(".technology-btn");
const technologyType = document.querySelector(".technology-type");
const technologyDescription = document.querySelector(".technology-description");
const technologyImg = document.querySelector(".technology-img");
const technologyImgDesktop = document.querySelector(".technology-img-desktop");

technologies.forEach((technology, index) => {
    technology.addEventListener("click", (e) => {
        fetchUrl
        .then(data => {
            let dataTechnology = data.technology[index];
            technologyType.innerHTML = dataTechnology.name;
            technologyDescription.innerHTML = dataTechnology.description
            document.querySelector(".active-tech")?.classList.remove("active-tech")
            technology.classList.add("active-tech");
            const mediaMatch = window.matchMedia("(min-width: 769px)");
            if (mediaMatch.matches) { 
                technologyImgDesktop.srcset = dataTechnology.images.portrait
            } else {
                technologyImg.src = dataTechnology.images.landscape
            };
        })
    });
});

