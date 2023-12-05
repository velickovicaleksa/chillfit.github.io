//Objekti
let sliderImg = [
    {id:1,src:"assets/img/cover_",alt:"Cover"},
    {id:2,src:"assets/img/cover_",alt:"Cover"},
    {id:3,src:"assets/img/cover_",alt:"Cover"},
    {id:4,src:"assets/img/cover_",alt:"Cover"}
];
let newArrivals = [
    {id:1,src:"assets/img/men/new_arrivals_",caption:"HUGO",desc:"HUGO - Muška jakna",discount:0,price:30490,alt:"Hugo Jacket"},
    {id:2,src:"assets/img/men/new_arrivals_",caption:"SUPERDRY",desc:"Muški duks",discount:30,price:10690,alt:"SuperDry Hoodie"},
    {id:3,src:"assets/img/men/new_arrivals_",caption:"LEVI'S",desc:"LEVIS - 511 muške",discount:0,price:12990,alt:"Levi's Jeans"},
    {id:4,src:"assets/img/men/new_arrivals_",caption:"SPRAYGROUND",desc:"Weird Shark",discount:20,price:14999,alt:"SprayGround Backpack"},
    {id:5,src:"assets/img/men/new_arrivals_",caption:"NIKE",desc:"AIR MAX 90",discount:0,price:20699,alt:"Nike Air Max 90 Shoes"},
    {id:6,src:"assets/img/men/new_arrivals_",caption:"THE NORTH FACE",desc:"M DREW PEAK",discount:0,price:10499,alt:"TNF Hoodie"}
];
let newArrivalsWomen = [
    {id:1,src:"assets/img/women/new_arrivals_w_",caption:"DIESEL",desc:"Jakna od eko krzna",discount:30,price:81999,alt:"Diesel Jacket"},
    {id:2,src:"assets/img/women/new_arrivals_w_",caption:"TOMMY HILFIGER",desc:"Duks sa orlom",discount:30,price:14990,alt:"Tommy Hoodie"},
    {id:3,src:"assets/img/women/new_arrivals_w_",caption:"GUESS",desc:"Roze mini haljina",discount:0,price:15990,alt:"Guess Dress"},
    {id:4,src:"assets/img/women/new_arrivals_w_",caption:"MICHAEL KORS",desc:"MK MK4519",discount:20,price:30390,alt:"Mk Watch"},
    {id:5,src:"assets/img/women/new_arrivals_w_",caption:"HUGO",desc:"Čizme",discount:0,price:13490,alt:"Hugo boots"},
    {id:6,src:"assets/img/women/new_arrivals_w_",caption:"CALVIN KLEIN",desc:"Jakna sa kapuljačom",discount:0,price:33990,alt:"CK Jacket"}
];
let boysNew = [
    {id:1,src:"assets/img/kids/new_arrivals_",caption:"GUESS",desc:"Plavi prsluk za dečake",discount:30,price:7990,alt:"Guess"},
    {id:2,src:"assets/img/kids/new_arrivals_",caption:"DIESEL",desc:"Plavi duks za dečake",discount:30,price:8390,alt:"Guess hoodie"},
    {id:3,src:"assets/img/kids/new_arrivals_",caption:"DIESEL",desc:"Donji deo trenerke",discount:0,price:10390,alt:"Diesel pants"},
    {id:4,src:"assets/img/kids/new_arrivals_",caption:"NIKE",desc:"Air Max Boy",discount:20,price:19199,alt:"Nike shoes"},
    {id:5,src:"assets/img/kids/new_arrivals_",caption:"CHAMPION",desc:"Boys backpack",discount:0,price:2699,alt:"Champion backpack"},
    {id:6,src:"assets/img/kids/new_arrivals_",caption:"GUESS",desc:"Duks sa zipom",discount:0,price:6590,alt:"Guess hoodie"}
];
let Banners = [
    {id:1,src:"assets/img/men/fall_jackets",alt:"Fall Jackets!"},
    {id:2,src:"assets/img/men/hoodies",alt:"Hot Trend Hoodies!"},
    {id:3,src:"assets/img/men/sneaker_guide",alt:"Sneaker Guide!"}
];
let BannersW = [
    {id:1,src:"assets/img/women/all-timejackets",alt:"Fall Jackets!"},
    {id:2,src:"assets/img/women/bags_to_buy",alt:"Hot Trend Bags!"},
    {id:3,src:"assets/img/women/sneaker_guide_w",alt:"Sneaker Guide!"}
];
let BannersK = [
    {id:1,src:"assets/img/kids/patike_za_decake",alt:"Boys Shoes!"},
    {id:2,src:"assets/img/kids/dress_up",alt:"Dress Up!"},
    {id:3,src:"assets/img/kids/sandale_za_devojcice",alt:"Girls Sandals!"}
];
let NovemberFavourites = [
    {id:1,src:"assets/img/men/november_fav_",caption:"Jack WolfSkin",desc:"PILVI DOWN JCKT",discount:0,price:19999,alt:"Jack WolfSkin Jacket"},
    {id:2,src:"assets/img/men/november_fav_",caption:"Calvin Clein",desc:"Duks sa kapuljačom",discount:30,price:11990,alt:"Calvin Clein Hoodie"},
    {id:3,src:"assets/img/men/november_fav_",caption:"Boss",desc:"Majica sa printom",discount:20,price:6990,alt:"Boss Tee"},
    {id:4,src:"assets/img/men/november_fav_",caption:"Under Armour",desc:"UA OUTRUN",discount:0,price:11199,alt:"Under Armour Jumpers"},
    {id:5,src:"assets/img/men/november_fav_",caption:"G-SHOCK",desc:"G-Shock GST-B-100-1A",discount:0,price:42430,alt:"G Shock Watch"},
    {id:6,src:"assets/img/men/november_fav_",caption:"Versace",desc:"Dylan Blue 50 ML",discount:0,price:9425,alt:"Versace Parfum"}
];
let NovemberFavouritesW = [
    {id:1,src:"assets/img/women/november_fav_w_",caption:"VERSACE JEANS",desc:"Lakovana Jakna",discount:0,price:93990,alt:"Versace Jacket"},
    {id:2,src:"assets/img/women/november_fav_w_",caption:"Diesel",desc:"Haljina sa logom",discount:30,price:69490,alt:"Diesel Dress"},
    {id:3,src:"assets/img/women/november_fav_w_",caption:"Steve madden",desc:"Čizme sa šnalama",discount:20,price:20390,alt:"Steve Madden Shoes"},
    {id:4,src:"assets/img/women/november_fav_w_",caption:"Calvin Klein",desc:"Sherpa ženska jakna",discount:0,price:29990,alt:"Calvin Klein Jacket"},
    {id:5,src:"assets/img/women/november_fav_w_",caption:"Scoth & Soda",desc:"Scoth & Soda- Prugasti",discount:0,price:16490,alt:"Scoth Soda jumper"},
    {id:6,src:"assets/img/women/november_fav_w_",caption:"Liu Jo",desc:"Zelene pantalone",discount:0,price:18990,alt:"Liu Jo pants"}
];
let girlsNew = [
    {id:1,src:"assets/img/kids/new_arrivals_w_",caption:"NIKE",desc:"Duks sa printom",discount:0,price:6590,alt:"Nike Hoodie"},
    {id:2,src:"assets/img/kids/new_arrivals_w_",caption:"ADDIDAS",desc:"J ALL SZN",discount:30,price:5399,alt:"J ALL SZN"},
    {id:3,src:"assets/img/kids/new_arrivals_w_",caption:"JORDAN",desc:"NOTEBOOK AOP",discount:20,price:2999,alt:" Jordan NOTEBOOK AOP"},
    {id:4,src:"assets/img/kids/new_arrivals_w_",caption:"GUESS",desc:"Haljina sa tilom",discount:0,price:9950,alt:"Guess dress"},
    {id:5,src:"assets/img/kids/new_arrivals_w_",caption:"GUESS",desc:"Logo torba za devojčice",discount:0,price:8990,alt:"Guess bag"},
    {id:6,src:"assets/img/kids/new_arrivals_w_",caption:"DIESEL",desc:"Duks-haljina",discount:0,price:23990,alt:"Diesel hoodie-dress"}
];
let MustHaves = [
    {id:1,src:"assets/img/men/must_have_",caption:"TOMMY HILFIGER",desc:"Teksas Jakna",discount:20,price:18990,alt:"Tommy Hilfiger Jakna"},
    {id:2,src:"assets/img/men/must_have_",caption:"Versace Couture",desc:"Bež muška rolka",discount:0,price:44990,alt:"Versace Hoodie"},
    {id:3,src:"assets/img/men/must_have_",caption:"Diesel",desc:"E-Krooley Farmerke",discount:30,price:43990,alt:"Diesel Jeans"},
    {id:4,src:"assets/img/men/must_have_",caption:"Seiko",desc:"Seiko SSK003K1 5",discount:0,price:61250,alt:"Seiko Watch"},
    {id:5,src:"assets/img/men/must_have_",caption:"Nike",desc:"NIKE AIR MAX",discount:0,price:22999,alt:"Nike Air Max"},
    {id:6,src:"assets/img/men/must_have_",caption:"Under Armour",desc:"Duks sa kapuljačom",discount:30,price:8299,alt:"Under Armour"}
];
let MustHavesW = [
    {id:1,src:"assets/img/women/must_have_w_",caption:"Guess",desc:"Leopard Pink Kaput",discount:20,price:23990,alt:"Leopard Pink Coat"},
    {id:2,src:"assets/img/women/must_have_w_",caption:"TOMMY HILFIGER",desc:"Vunena Mini Haljina",discount:0,price:27990,alt:"TOMMY HILFIGER Dress"},
    {id:3,src:"assets/img/women/must_have_w_",caption:"Premiata",desc:"Kožne patike",discount:30,price:41990,alt:"Premiata shoes"},
    {id:4,src:"assets/img/women/must_have_w_",caption:"Patrizia Pepe",desc:"Beli ženski sako",discount:0,price:66950,alt:"Patrizia Pepe suit"},
    {id:5,src:"assets/img/women/must_have_w_",caption:"Luisa Spagnoli",desc:"Bela bluza",discount:0,price:22990,alt:"Luisa Spagnoli blouse"},
    {id:6,src:"assets/img/women/must_have_w_",caption:"Liu Jo",desc:"Šljokičaste pantalone",discount:30,price:23990,alt:"Liu Jo pants"}
];
let menuHeader = [
    {id:1,href:"index.html",display:"index",content:"MUŠKARCI",isActive:false},
    {id:2,href:"women.html",display:"women",content:"ŽENE",isActive:false},
    {id:3,href:"kids.html",display:"kids",content:"DECA",isActive:false},
    {id:4,href:"contact.html",display:"contact",content:"KONTAKT",isActive:false},
    {id:5,href:"author.html",display:"author",content:"AUTOR",isActive:false},
];
let menuHeader_secondary = [
    {id_match:1,href:"index.html#h1_1",content:"NEW IN"},
    {id_match:1,href:"index.html#h1_2",content:"ODEĆA"},
    {id_match:1,href:"index.html#h1_3",content:"OBUĆA"},
    {id_match:1,href:"index.html#brands_1",content:"BRENDOVI"},
    {id_match:1,href:"index.html#banner_m",content:"AKTUELNO"},
    {id_match:2,href:"women.html#h1_1",content:"NEW IN"},
    {id_match:2,href:"women.html#h1_2",content:"ODEĆA"},
    {id_match:2,href:"women.html#h1_3",content:"OBUĆA"},
    {id_match:2,href:"women.html#brands_2",content:"BRENDOVI"},
    {id_match:2,href:"women.html#banner_w",content:"AKTUELNO"},
    {id_match:2,href:"women.html",content:"BEAUTY"},
    {id_match:2,href:"women.html",content:"TORBE"},
    {id_match:3,href:"kids.html#h1_m",content:"DEČACI"},
    {id_match:3,href:"kids.html#h1_g",content:"DEVOJČICE"},
    {id_match:4,href:"contact.html",content:"KONTAKT"},
    {id_match:5,href:"author.html",content:"O AUTORU"},
    {id_match:5,href:"https://velickovicaleksa.github.io/myportfolio/",content:"PORTFOLIO"},
];
let brands_m =[
    {id:1,path:"men.html",img:"assets/img/brands_we_love_1.jpg"},
    {id:2,path:"men.html",img:"assets/img/brands_we_love_2.jpg"}
];
let brands_w =[
    {id:1,path:"women.html",img:"assets/img/brands_we_love_3.jpg"},
    {id:2,path:"women.html",img:"assets/img/brands_we_love_4.jpg"}
];
footer_col_1 = [
    {title:"O NAMA"},
    {id:1,path:"https://velickovicaleksa.github.io/myportfolio/", text:"Portfolio"},
    {id:2,path:"dokumentacija.pdf", text:"Dokumentacija"},
    {id:3,path:"contact.html", text:"Kontakt"},
    {id:4,path:"author.html", text:"Autor"}
];
footer_col_2 = [
    {title:"NAVIGACIJA"},
    {id:1,path:"index.html", text:"Muškarci"},
    {id:2,path:"women.html", text:"Žene"},
    {id:3,path:"kids.html", text:"Deca"}
];
footer_col_3 = [
    {title:"KORISNIČKI SERVIS"},
    {id:1,path:"payment.html", text:"Načini plaćanja"},
    {id:2,path:"delivery.html", text:"Dostava"},
    {id:3,path:"refund.html", text:"Reklamacije"}
];
footer_col_4 = [
    {title:"PRONAĐITE NAS"},
    {id:1,path:"https://www.facebook.com/visokaictskola", text: "Facebook"},
    {id:2,path:"https://www.instagram.com/visokaict/?hl=sr", text:"Instagram"},
    {id:3,path:"https://www.youtube.com/", text:"YouTube"}
];
let Footer_last = [
    {iconClass: 'fas fa-mobile-alt',link: 'tel:+381621626189',},
    {text: 'Ponedeljak - Petak 08:00 - 18:00h',},
    {text: '&copy;ICT', },
    {iconClass: 'fab fa-instagram',link: 'https://www.instagram.com/',},
    {iconClass: 'fab fa-facebook',link: 'https://www.facebook.com/',},
    {iconClass: 'fab fa-youtube',link: 'https://www.youtube.com/',},
    {iconClass: 'fas fa-sitemap',link: 'sitemap.xml',},
    {iconClass: 'far fa-file',link: 'assets/dokumentacija.pdf'}
  ];

//Loader

var loader = document.querySelector('.loader');
setTimeout(function() {
    if (loader) {
        loader.style.display = 'none';
    }
    var navbarHeight = 146; //Visina #header_wrap (nav_bar-a)
    var hash = window.location.hash; //Fragment identifikator URL-a (ex: #section_1)
    if (hash) {
        var target = document.querySelector(hash);
        if (target) {
            //Od vrha elementa do vrha vidljivog dela ekrana (view-port-a)
            var adjustedScrollPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
            // Scroll do elementa sa izmenjenom pozicijom radi oduzimanja visine navigacije
            window.scrollTo({
                top: adjustedScrollPosition,
                behavior: 'smooth'
            });
        }
    }
}, 2000);



//Dinamicko odredjivanje aktivnog linka
let currentPage = window.location.pathname.split("/").pop().split(".")[0];
console.log(currentPage);
let activeMenu = null;
for (let index in menuHeader) {
    if(currentPage==menuHeader[index].display) {
        menuHeader[index].isActive = true;
        activeMenu = menuHeader[index].id;
        console.log(activeMenu);
    }
}
//Primarni meni

function HeaderMenu(menuHeader,containerID) {
    let container =("#"+containerID);
    let ul = document.createElement("ul");
    for (index in menuHeader) {
        let li = document.createElement("li");
        li.id = "item_" + menuHeader[index].id;
        li.className = "menu_header" + (menuHeader[index].isActive ? ' active' : '');
        let a = document.createElement("a");
        a.href = menuHeader[index].href;
        a.textContent = menuHeader[index].content;
        li.appendChild(a);
        ul.appendChild(li);
    }
    document.querySelector(container).appendChild(ul);
}
HeaderMenu(menuHeader,'header_menu');


//Dodavanje klase za centriranje linkova za sekundarne menije stranica po default-u
const pagesWithCenteredLinks = ['kids', 'contact', 'author'];
for(let index in pagesWithCenteredLinks) {
    if(currentPage==pagesWithCenteredLinks[index]) {
        document.querySelector("#header_hover").classList.add("centered-links");
    }
}

//Sekundarni meni

function SecondaryMenu(menuHeader_secondary){
    let ul = document.createElement("ul");
    for(let index in menuHeader) {
        if(menuHeader[index].isActive) {
            var menuHeader_secondary_filtered = menuHeader_secondary.filter((element)=>element.id_match ==menuHeader[index].id);
            console.log(menuHeader_secondary_filtered);
        }
    }
    for (index in menuHeader_secondary_filtered) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.className = "smooth";
        a.href = menuHeader_secondary_filtered[index].href;
        a.textContent = menuHeader_secondary_filtered[index].content;
        li.appendChild(a);
        ul.appendChild(li);
    }
    document.querySelector("#header_hover").appendChild(ul);
}
SecondaryMenu(menuHeader_secondary);

//Dinamicko ispisivanje sekundarnog menija u zavisnosti od hover-a(mouseover+mouseout)
//Dinamicko odredjivanje aktivnog linka menija
//Dinamicko dodavanje klasa za centriranje linkova

let menu_header_links = document.getElementsByClassName("menu_header");
for (let index in menu_header_links) {
    if (!isNaN(index)) {
        menu_header_links[index].addEventListener("mouseover", function() {
            if(index==2 || index==3 || index==4) {
                document.querySelector("#header_hover").classList.add("centered-links");
            }
            else {
                document.querySelector("#header_hover").classList.remove("centered-links");
            }
            for (let i in menuHeader) {
                if (menuHeader[i].isActive) {
                    document.getElementById(`item_${menuHeader[i].id}`).classList.remove("active");
                    menuHeader[i].isActive = false;
                }
            }
            menu_header_links[index].classList.add("active");
            menuHeader[index].isActive = true;

            let ul = document.createElement("ul");
            let menuHeader_secondary_filtered = menuHeader_secondary.filter((element) => element.id_match == menuHeader[index].id);
            for (let i in menuHeader_secondary_filtered) {
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.href = menuHeader_secondary_filtered[i].href;
                a.textContent = menuHeader_secondary_filtered[i].content;
                li.appendChild(a);
                ul.appendChild(li);
            }
            document.querySelector("#header_hover").innerHTML = '';
            document.querySelector("#header_hover").appendChild(ul);
        });

        document.querySelector("#wrap_head").addEventListener("mouseleave",function(){
            if(pagesWithCenteredLinks.some(page => currentPage.includes(page))) {
                document.querySelector("#header_hover").classList.add("centered-links");
            } else {
                document.querySelector("#header_hover").classList.remove("centered-links");
            }
            menu_header_links[index].classList.remove("active");
            menuHeader[index].isActive = false;
            if (activeMenu !== null) {
                document.getElementById(`item_${activeMenu}`).classList.add("active");
                menuHeader.find(item => item.id === activeMenu).isActive = true;
            }
	        document.querySelector("#header_hover").innerHTML = '';
            SecondaryMenu(menuHeader_secondary);
        });
    }
}


//Dinamicko ispisivanje menija i sekundarnog menija za mobilne uredjaje

function createMenu(menuHeader, menuHeader_secondary, containerID) {
    let container = $("#" + containerID);
    let ul = $("<ul></ul>");

    for (let index in menuHeader) {
        let li = $("<li></li>", {
            id: "item_" + menuHeader[index].id,
            class: "menu_header" + (menuHeader[index].isActive ? ' active' : '')
        });

        let a = $("<a></a>", {
            href: menuHeader[index].href,
            text: menuHeader[index].content
        });

        let img = $("<img></img>", {
            src: "assets/img/arrow.png",
            class: "arrow-icon"
        });

        li.append(a);
        li.append(img);

        let menuHeader_secondary_filtered = menuHeader_secondary.filter((element) => element.id_match == menuHeader[index].id);
        let ul_secondary = $("<ul></ul>");

        for (let index in menuHeader_secondary_filtered) {
            let li_secondary = $("<li></li>");
            let a_secondary = $("<a></a>", {
                class: "smooth",
                href: menuHeader_secondary_filtered[index].href,
                text: menuHeader_secondary_filtered[index].content
            });

            li_secondary.append(a_secondary);
            ul_secondary.append(li_secondary);
        }

        li.append(ul_secondary);
        ul.append(li);
    }
    container.append(ul);
}



$(document).ready(function () {
    // Sakrivanje menija i sekundarnih menija po default-u
    $('#responsive_menu, .menu_header ul').hide();

    // Toggle funckija za sakrivanje i prikazivanje primarnog menija kao i sliku hamburgera
    $('#more, #less').click(function () {
        $('#responsive_menu').slideToggle();
        $('#more, #less').toggle();
    });

    // Toggle funckija za prikazivanje sekundarnih menija klikom na ikonicu strelica koja se rotira
    $(document).on('click', '.arrow-icon', function () {
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass('rotate');
    });
});

createMenu(menuHeader,menuHeader_secondary,"responsive_menu");

//Dinamicko ispisivanje sadrzaja bannera za brendove

function createBrands(brands_array,containerId) {
    brands_open=``;
    for(let i=0;i<brands_array.length;i++) {
        brands_open+=`<div class="brands_we_love"><a href="${brands_array[i].path}"><img src="${brands_array[i].img}" alt="Brands we Love!" /></a></div>`;
    }
    if(document.querySelector(`#${containerId}`)){
        document.querySelector(`#${containerId}`).innerHTML = brands_open;
    }
    
}
createBrands(brands_m,'brands_m');
createBrands(brands_w,'brands_w');
            
//Jquery
$(document).ready(function () {
    // Ispisivanje kucaceg teksta koriscenjem jquery typed.js plug-in-a
    if ($(".typing").length) {
        var typed = new Typed(".typing", {
            strings: ["Student.", "Developer.", "Basketball player.", "Designer.", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }
    // Prikazivanje i sakrivanje teksta, kao i menjanje teskta na dugmetu
    function toggleText(buttonSelector, textSelector) {
        if ($(buttonSelector).length && $(textSelector).length) {
            $(buttonSelector).click(function () {
                $(textSelector).slideToggle(function () {
                    var buttonText = $(textSelector).is(":visible") ? "Show Less" : "Show More";
                    $(buttonSelector).text(buttonText);
                });
            });
        }
    }
    toggleText("#button_toggle", ".hidden_text");
    toggleText("#button_toggle_1", ".hidden_text_1");
    toggleText("#button_toggle_2", ".hidden_text_2");
    toggleText("#button_toggle_3", ".hidden_text_3");
    toggleText("#button_toggle_4", ".hidden_text_4");
    
    // Slajder slika koriscenjem jquery plug-in-a slick.js
    var slider = $('#slider');
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });
    // Dinamicko ispisivanje indikatora slajdera
    var indicatorsContainer = $('#indicators-container');
    for (var i = 0; i < slider.slick('getSlick').slideCount; i++) {
        indicatorsContainer.append('<div class="slider-indicator" data-index="' + i + '"></div>');
    }
    // Azuriranje indikatora na promenu slike
    slider.on('afterChange', function(event, slick, currentSlide){
        $('.slider-indicator').removeClass('active-indicator');
        $('.slider-indicator[data-index="' + currentSlide + '"]').addClass('active-indicator');
    });
    // Poromena slike klikom na indikator
    indicatorsContainer.on('click', '.slider-indicator', function(){
        var index = $(this).data('index');
        slider.slick('slickGoTo', index);
    });

    if ($(".newArrivalsItem img").length) {
        $(".newArrivalsItem img").css('transition', 'transform 0.3s ease');
    
        $(".newArrivalsItem").mouseover(function () {
            $(this).find('img').css('transform', 'scale(1.15)');
        });
    
        $(".newArrivalsItem").mouseout(function () {
            $(this).find('img').css('transform', 'scale(1)');
        });
    }

    //Dodavanje stiki pozicije navigacije i prikazivanje button-a za na gore nakon predjenog dela stranice dinamicki
    $(window).scroll(function () {
        this.scrollY > 20 ? $("#wrap_head").addClass("sticky") : $("#wrap_head").removeClass("sticky"),
        this.scrollY > 500 ? $("#scroll-up-btn").addClass("show") : $("#scroll-up-btn").removeClass("show");
    });
    //Funckionalnost skrol up-button-a
    $("#scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 }), $("html").css("scrollBehavior", "auto");
    });
});


//Prikazivanje banera preko tajmera
function prikaziBaner() {
    let baner =  document.querySelector("#banner_open");
    if(baner) {
        baner.style.display = "block";
    }
}
function zatvoriBaner() {
    let baner =  document.querySelector("#banner_open");
    if(baner) {
        baner.style.display = "none";
    }
}
function zatvoriIPrikazi(){
    zatvoriBaner();
    setTimeout(function () {
        prikaziBaner();
    }, 60000);
}
setTimeout(function(){
    prikaziBaner();
},60000);
document.querySelector("#close").addEventListener("click",zatvoriIPrikazi);
document.querySelector("#shop_now").addEventListener("click",zatvoriIPrikazi);


//Dinamicko ispisivanje proizvoda

function itemWrite(Content, containerID) {
    let divContent = "";
    for (let index = 0; index < Content.length; index++) {
        let discountedPrice = Content[index].price;
        if (Content[index].discount > 0) {
            discountedPrice = Content[index].price - (Content[index].price * (Content[index].discount / 100));
        }
        divContent +=
            `<div class="newArrivalsItem">
                <img src="${Content[index].src}${Number(index) + 1}.png" alt="${Content[index].alt}" />
                <h4>${Content[index].caption}</h4>
                <p>${Content[index].desc}</p>
                <p class="standard_price ${Content[index].discount > 0 ? 'price_old' : ''}">
                    ${Content[index].price},00 RSD
                </p>`;
                if(Content[index].discount>0) {
                    divContent+=`<p class='discount_price'>${discountedPrice},00 RSD</p>`;
                }
                else{
                    divContent+=`<p> </p>`;
                }
                //<p class='discount_price'>${discountedPrice},00 RSD</p>
                divContent+=`${Content[index].discount > 0 ? `<p>Popust: ${Content[index].discount}%</p>` : `<p> </p>`}
                <img class="heart" src="assets/img/heart-outline.svg" alt="Add to favourites" />
            </div>`;
    }
    let container = document.querySelector(`#${containerID}`);
    if (container) {
        container.innerHTML = divContent;
    }
}
//Dinamicko ispisivanje proizvoda
itemWrite(newArrivals, "newArrivals_1");
itemWrite(NovemberFavourites, "newArrivals_2");
itemWrite(MustHaves, "newArrivals_3");
itemWrite(newArrivalsWomen, "newArrivals_4");
itemWrite(NovemberFavouritesW, "newArrivals_5");
itemWrite(MustHavesW, "newArrivals_6");
itemWrite(boysNew,"newArrivals_7");
itemWrite(girlsNew,"newArrivals_8")

function BannerWrite(Content, containerID) {  //Funkcija za ispisivanje banera
    let bannerOpen="";
    for (index in Content) {
        bannerOpen += `<div class="banner">
                            <a href="#">
                                <img src="${Content[index].src}.jpg" alt="${Content[index].alt}" />
                            </a>
                        </div>`;
    }
    let container = document.querySelector(`#${containerID}`);
    if(container) {
        document.querySelector(`#${containerID}`).innerHTML = bannerOpen;
    }
}
//Dinamicko ispisivanje banera
BannerWrite(Banners,"banner_m");
BannerWrite(BannersW,"banner_w");
BannerWrite(BannersK,"banner_k");

//Dodaj u omiljene
let hearts = document.getElementsByClassName("heart");

for (let index = 0; index < hearts.length; index++) {
    hearts[index].addEventListener("click", function() {
        if (hearts[index].src.endsWith('heart-red.svg')) {
            hearts[index].src = 'assets/img/heart-outline.svg';
        } else {
            hearts[index].src = 'assets/img/heart-red.svg';
        }
    });
 
}

/*NewsLetter validacija*/
let checkMail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let srediNewsLetter = document.getElementById("news-mail");
let srediCheckNews = document.getElementById("news_agree");
if(srediNewsLetter){
    srediNewsLetter.addEventListener("blur",function(){
        if(checkMail.test(srediNewsLetter.value)){
            srediNewsLetter.style.border = '2px solid green';
            document.getElementById('danger_1').style.display="none";
        }
        else {
            srediNewsLetter.style.border = '2px solid red';
            document.getElementById('danger_1').style.display="block";
            document.getElementById('danger_1').textContent = "Email mora biti formata: slovo+@+domen. Ex: \"aleksavelickovic@.icloud.com\"";
        }
        SrediNewsLetter()
    });
}
if(srediCheckNews){
    srediCheckNews.addEventListener("change",function(){
        if(srediCheckNews.checked) {
            document.getElementById('danger_2').style.display="none";
        }
        else {
            document.getElementById('danger_2').style.display="block";
            document.getElementById('danger_2').textContent = "Morate odabrati ovo polje!";
        }
        SrediNewsLetter()
    });
}
function SrediNewsLetter() {
    if(checkMail.test(srediNewsLetter.value)&& srediCheckNews.checked){
        document.getElementById("send_news").classList.remove("disabled");
        document.getElementById("send_news").removeAttribute("disabled","disabled");
    }
    else {
        document.getElementById("send_news").classList.add("disabled");
        document.getElementById("send_news").setAttribute("disabled","disabled");
    }
    
}
function Proveri(){
    if(checkMail.test(srediNewsLetter.value)&& srediCheckNews.checked){
        event.preventDefault();
        document.getElementById("danger_2").style.display = "block";
        document.getElementById("danger_2").style.color = "green";
        document.getElementById("danger_2").textContent = "Uspešno ste se prijavili na newsletter!";
    }
}

//Dinamicko ispisivanje linkova i menjanje njihovih putanja, slajder slika
let nizSlika = ["assets/img/about.JPEG","assets/img/about_2.JPEG","assets/img/about_3.jpeg"];
let nizTeksta = [{text:"Prijavi se na newsletter" ,href:"#newsletter"},{text:"Kontakt" ,href:"contact.html"}];
function slider(sliderArr, containerID,interval) {
    var p = document.querySelector(`#${containerID}`);
    if(p) {
    var brojac=1;
    setInterval(function(){
        if(p.hasAttribute("src")){
            p.src = sliderArr[brojac];
        }
        else {
            /*p.href=sliderArr[brojac];*/
            p.textContent=sliderArr[brojac].text;
            p.href =sliderArr[brojac].href;
        }
        if(brojac+1==sliderArr.length) {
            brojac=0;
        }
        else {
            brojac++;
        }    
    },interval)
}
}
slider(nizSlika,"pic",3000);
slider(nizTeksta,"banner_text",5000);

//Dinamicko ispisivanje futera i kolona futera
function FooterWrite(FooterColumnId, FooterColumn){
    let footer=`<h3>${FooterColumn[0].title}</h3>`;
    let ulOpen = `<ul>`;
    for (let i=1; i<FooterColumn.length; i++) {
        ulOpen+=` <li><a href="${FooterColumn[i].path}">${FooterColumn[i].text}</a></li>`;
    }
    ulOpen+=`</ul>`;
    footer+=ulOpen;
    let isFooter = document.querySelector(`#${FooterColumnId}`);
    if(isFooter){
        isFooter.innerHTML=footer;
    }
}
FooterWrite('footer_column_1',footer_col_1);
FooterWrite('footer_column_2',footer_col_2);
FooterWrite('footer_column_3',footer_col_3);
FooterWrite('footer_column_4',footer_col_4);
//}

//Dinamicko ispisivanje banera futera
function bannerLast(){
    let zadnjiBaner = document.querySelector("#last_banner_wrap");
    let zadnjiOtvori = `<div id="last_banner"><ul>`;
    for(let index of Footer_last) {
        if(index.iconClass) {
            zadnjiOtvori+=`<li><a href="${index.link}"><i class="${index.iconClass}"></i></a></li>`;
        }
        else if(index.text) {
            zadnjiOtvori+=`<li><p>${index.text}</p></li>`;
        }
    }
    zadnjiOtvori+=`</ul></div>`;
    if(zadnjiBaner){zadnjiBaner.innerHTML= zadnjiOtvori;}
    
}
bannerLast();