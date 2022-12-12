function change() {    
        // let img = document.getElementById("change")
        let hero = document.getElementById("hero");
        console.log(hero.url);
        if (hero.src.match("asian")) {
            hero.src = "./img/books.jpg";
        }
        else  {
            hero.src = "./img/asian.jpg";
        }
        console.log(hero);
    
}
