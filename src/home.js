function home() {
    const main = document.querySelector(".main");
    main.classList.add("main-home");
    main.classList.remove("main-menu", "main-contact");

    const homeTab = document.querySelector(".home-tab");
    homeTab.classList.add("home-tab-chosen");

    const menuTab = document.querySelector(".menu-tab");
    menuTab.classList.remove("menu-tab-chosen");
    const contactTab = document.querySelector(".contact-tab");
    contactTab.classList.remove("contact-tab-chosen");

    const name = document.createElement("h1");
    name.textContent = "Mimosa Restaurant";

    const restaurant = document.createElement("img");
    restaurant.classList.add("restaurant");
    restaurant.setAttribute("src", "outdoor-restaurant-georgia-us.jpg");
    restaurant.setAttribute("alt", "picture of the restaurant");

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = 'Mimosa Restaurant is a perfect blend of tradition and modernity. Since its openning in 1956 we have always been striving to offer our guest the best quality: delicious food and impecable service. Our permanent and seasonal menu includes dishes from different European cuisines. Our slogan is "Hospitality and Excellence". We invite you to try everything and decide for yourself.';

    const hours = document.createElement("h2");
    hours.textContent = "Hours";
    const time = document.createElement("div");
    time.classList.add("time");
    time.textContent = "Tuesday-Sunday, from 12:00 to 24:00";

    // const mimosa = document.createElement("img");
    // mimosa.classList.add("mimosa");
    // mimosa.setAttribute("src", "mimosa-svgrepo-com.svg");
    // mimosa.setAttribute("alt", "mimosa icon");

    const address = document.createElement("h2");
    address.textContent = "Location";
    const location = document.createElement("div");
    location.classList.add("location");
    location.textContent = "1234, Piedmont Ave, Georgia, USA";

    main.append(name, restaurant, description, hours, time, address, location);
}

export { home };