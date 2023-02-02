function menu() {
    const main = document.querySelector(".main");
    main.classList.add("main-menu");
    main.classList.remove("main-home", "main-contact");

    const menuTab = document.querySelector(".menu-tab");
    menuTab.classList.add("menu-tab-chosen");

    const contactTab = document.querySelector(".contact-tab");
    contactTab.classList.remove("contact-tab-chosen");
    const homeTab = document.querySelector(".home-tab");
    homeTab.classList.remove("home-tab-chosen");

    const menu = document.createElement("h1");
    menu.textContent = "Mimosa Restaurant";

    const item1 = document.createElement("div");
    item1.classList.add("item");
    const meat = document.createElement("img");
    meat.setAttribute("src", "sebastian-coman-photography-kFJ8tL53qcg-unsplash.jpg");
    meat.setAttribute("alt", "meat with vegetables");
    const dishName1 = document.createElement("h3");
    dishName1.textContent = "Meat with vegetables";
    const price1 = document.createElement("div");
    price1.classList.add("price");
    price1.textContent = "16 $";
    item1.append(meat, dishName1, price1);

    const item2 = document.createElement("div");
    item2.classList.add("item");
    const cheesecake = document.createElement("img");
    cheesecake.setAttribute("src", "sebastian-coman-photography-xqdv9g83gQk-unsplash.jpg");
    cheesecake.setAttribute("alt", "berry cheesecake");
    const dishName2 = document.createElement("h3");
    dishName2.textContent = "Berry cheesecake";
    const price2 = document.createElement("div");
    price2.classList.add("price");
    price2.textContent = "10 $";
    item2.append(cheesecake, dishName2, price2);

    const item3 = document.createElement("div");
    item3.classList.add("item");
    const tea = document.createElement("img");
    tea.setAttribute("src", "sebastian-coman-photography-Ekqld5tI3JA-unsplash.jpg");
    tea.setAttribute("alt", "afternoon tea for two");
    const dishName3 = document.createElement("h3");
    dishName3.textContent = "Afternoon tea for two";
    const price3 = document.createElement("div");
    price3.classList.add("price");
    price3.textContent = "25 $";
    item3.append(tea, dishName3, price3);


    const item4 = document.createElement("div");
    item4.classList.add("item");
    const cocktail = document.createElement("img");
    cocktail.setAttribute("src", "orange-mimosa-cocktail-wooden-table.jpg");
    cocktail.setAttribute("alt", "orange mimosa cocktail");
    const dishName4 = document.createElement("h3");
    dishName4.textContent = "Orange mimosa cocktail";
    const price4 = document.createElement("div");
    price4.classList.add("price");
    price4.textContent = "8 $";
    item4.append(cocktail, dishName4, price4);


    main.append(menu, item1, item2, item3, item4);
};

export { menu };