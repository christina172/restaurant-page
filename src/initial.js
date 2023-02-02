function initial() {
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.classList.add("header");

    const main = document.createElement("div");
    main.classList.add("main");

    const homeTab = document.createElement("div");
    homeTab.classList.add("home-tab");
    homeTab.textContent = "Home";
    const menuTab = document.createElement("div");
    menuTab.classList.add("menu-tab");
    menuTab.textContent = "Menu";
    const contactTab = document.createElement("div");
    contactTab.classList.add("contact-tab");
    contactTab.textContent = "Contact";
    header.append(homeTab, menuTab, contactTab);

    const footer = document.createElement("div");
    footer.classList.add("footer");

    const photoCredit1 = document.createElement("div");
    // photoCredit1.textContent = "Photo by Sebastian Coman Photography & Alex S on Unsplash";
    photoCredit1.textContent = "Photo by Sebastian Coman Photography on Unsplash";
    const photoCredit2 = document.createElement("div");
    // photoCredit2.textContent = "Photo by wirestock & chandlervid85 on Freepik";
    photoCredit2.textContent = "Photo by wirestock, chandlervid85, bearfotos on Freepik";
    footer.append(photoCredit1, photoCredit2);

    content.append(header, main, footer);
};

export { initial };