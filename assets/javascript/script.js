//get all tabs and pages
const tabsArray = document.getElementsByClassName("tab");
const pagesArray = document.getElementsByClassName("page");


// header desc element
const headerDesc = document.getElementById("isTypeing");
//texts
const sentence = {
    text1: "  یعنی با بروز ترین ابزار ها",
    text2: "  با برترین مهندسین",
    text3: "  با تضمین صد در صدی کار"
};
const length1 = sentence.text1.length;
let letters1 = sentence.text1.split("");

const length2 = sentence.text2.length;
let letters2 = sentence.text2.split("");

const length3 = sentence.text3.length;
let letters3 = sentence.text3.split("");

// index
let i1 = 0,
    i = 0,
    z1 = 0,
    z = 0,
    y1 = 0,
    y = 0;

//typing-1
function typeing1() {

    if (i1 < length1) {
        headerDesc.innerHTML = headerDesc.innerHTML + sentence.text1.charAt(i1);
        i1++
        setTimeout(typeing1, 90);
        // i = 0;
    } else if (i1 >= length1) {

        if (i < length1) {
            letters1.pop(i);
            headerDesc.textContent = letters1.join("");
            i++;
            setTimeout(typeing1, 90);
        } else {
            letters1 = sentence.text1.split("");
            z1 = 0;
            z = 0;
            typeing2();
        }
    }
}
//typing-2
function typeing2() {

    if (z1 < length2) {
        headerDesc.innerHTML = headerDesc.innerHTML + sentence.text2.charAt(z1);
        z1++
        setTimeout(typeing2, 90);

    } else if (z1 >= length2) {

        if (z < length2) {
            letters2.pop(z);
            headerDesc.textContent = letters2.join("");
            z++;
            setTimeout(typeing2, 90);
        } else {
            letters2 = sentence.text2.split("");
            y1 = 0;
            y = 0;
            typeing3();
        }

    }
}
//typing-3
function typeing3() {

    if (y1 < length3) {
        headerDesc.innerHTML = headerDesc.innerHTML + sentence.text3.charAt(y1);
        y1++
        setTimeout(typeing3, 90);
    } else if (i1 >= length3) {

        if (y < length3) {
            letters3.pop(y);
            headerDesc.textContent = letters3.join("");
            y++;
            setTimeout(typeing3, 90);
        } else {
            letters3 = sentence.text3.split("");
            i1 = 0;
            i = 0;
            typeing1();
        }

    }
}

//! tabs
for (let tab of tabsArray) {
    tab.addEventListener("click", function tabAction(event) {
        //tab id 
        const tabId = tab.id;
        if (tab.classList.contains("active-tab")) {
            return;
        } else {
            //activetab
            document.getElementsByClassName("active-tab")[0].classList.remove("active-tab");
            tab.classList.add("active-tab");
            //activepage
            const currentActive = document.getElementsByClassName("active-page")[0];
            currentActive.classList.remove("active-page");
            const activePage = pagesArray[tabId];
            activePage.classList.add("active-page");

        }

    });
}



// scroll buttons
const btnRight = document.getElementById("moveRight");
const btnLeft = document.getElementById("moveLeft");
const item = document.getElementsByClassName("sliderItem")[0];
const silderBox = document.getElementsByClassName("sliderBox")[0];

function moveRight() {
    silderBox.scrollLeft += +230;
}

function moveLeft() {
    silderBox.scrollLeft += -230;
}

window.addEventListener("load", () => {

    typeing1();

    const numberOfTabs = tabsArray.length;

    for (let index = 0; index < numberOfTabs; index++) {
        tabsArray[index].setAttribute("id", index);
        pagesArray[index].setAttribute("id", index);
    }

});