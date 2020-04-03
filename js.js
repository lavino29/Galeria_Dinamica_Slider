const input = document.querySelector("#file");
const btn = document.querySelector(".btn");
const img = document.querySelector("#img");
const imagenes = document.querySelector("#images");
const contenido = document.querySelector(".contenido");
const punto = document.querySelector(".punto");
let id = 0;
const nodes = [...contenido.children];
btn.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", () => {
    const fragmen = document.createDocumentFragment();
    const reader = new FileReader();
    const img = document.createElement("img");

    reader.readAsDataURL(input.files[0]);
    reader.addEventListener("load", e => {
        img.setAttribute("src", e.target.result);
        img.setAttribute("id", id);

        imagenes.appendChild(img);

        ADD(id + 1);
        slide(img);

        // intervalos()
        //slide_punto()
        id++;
    });
});
///////// agregar punto + style //////////////////


const ADD = id => {
    const nodos = [...contenido.children];
    const punto = document.createElement("a");

    punto.setAttribute("id", id);
    punto.classList.add("punto");
    contenido.appendChild(punto);
    punto.style = "background-color:#9BB2BB";
    for (let i = 0; i < nodos.length; i++) {
        nodos[i].style = "background-color:#cyan";
    }

    contenido.addEventListener("click", e => {
        //console.log(punto.parentElement.children)

        if (e.target.classList.value === "punto") {
            contenido.lastChild.style = "background-color:#cyan";
            for (let i = 0; i < nodos.length; i++) {
                nodos[i].style = "background-color:#cyan";
               
                if (i == e.target.id - 1) {
                    nodos[i].style = "background-color:##9BB2BB";
                  
                }
            }
        }
    });
};

///////////// mostrar imagen ///////////////
const slide = ida => {
    ida.classList.add("hide");
    contenido.addEventListener("click", e => {
        const image = [...document.querySelectorAll("#images")];
        image.forEach(link => {
            if (e.target.classList.value === "punto") {
                e.target.style = "background-color:#9BB2BB";
                for (let i = 0; i < image.length; i++) {
                    link.children[i].classList.remove("hide");

                    // if(e.target.classList.value === "focus" ){  e.target.classList.remove('focus')}
                }
                //  console.log(e.target);
                ida.classList.remove("hide");
                link.children[e.target.id - 1].classList.add("hide");
            }
        });
    });
};
//////////////// Slide Automatico/////////////////////

let active = true;
let cont = 0;
const contenedor = document.querySelector(".contenedor");
contenedor.addEventListener("mouseover", e => {
    active = false;
});

contenedor.addEventListener("mouseout", e => {
    active = true;
});
let variable = 0;
let verdad = true;

const intervalos = () => setInterval(movimiento, 3000);

const movimiento = () => {
    const nodos = [...contenido.children];
    if (variable < nodos.length && active === true) {
        nodos[variable].click();
        variable++;
    }
    if (variable >= nodos.length) variable = 0;
};

intervalos();
