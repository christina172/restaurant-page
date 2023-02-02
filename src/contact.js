function contact() {
    const main = document.querySelector(".main");
    main.classList.add("main-contact");
    main.classList.remove("main-menu", "main-home");

    const contactTab = document.querySelector(".contact-tab");
    contactTab.classList.add("contact-tab-chosen");

    const homeTab = document.querySelector(".home-tab");
    homeTab.classList.remove("home-tab-chosen");
    const menuTab = document.querySelector(".menu-tab");
    menuTab.classList.remove("menu-tab-chosen");

    const contact = document.createElement("h1");
    contact.textContent = "Contact";

    const container = document.createElement("div");
    container.classList.add("container");

    const locationContact = document.createElement("h2");
    locationContact.classList.add("location-contact")
    locationContact.textContent = "Location:";

    const map = document.createElement("img");
    map.classList.add("map");
    map.setAttribute("src", "map.jpg");
    map.setAttribute("alt", "location of the mimosa restaurant on the map");

    const addressContact = document.createElement("div");
    addressContact.classList.add("address-contact");
    addressContact.textContent = "1234, Piedmont Ave, Georgia, USA";

    const reservation = document.createElement("h2");
    reservation.classList.add("reservation");
    reservation.textContent = "Make a reservation:";

    const telephone = document.createElement("div");
    telephone.classList.add("telephone");
    telephone.textContent = "+1 404-325-6067";

    const email = document.createElement("div");
    email.classList.add("email");
    email.textContent = "mimosa_restaurant@gmail.com";

    container.append(map, locationContact, addressContact, reservation, telephone, email);

    main.append(contact, container);
}

export { contact };