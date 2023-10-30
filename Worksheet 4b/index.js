window.onload = () => {
    console.log("Página cargada");
    asociarEventos();
}

function asociarEventos() {
    function coloresAleatorios(cantidad) {
        function random(number) {
            return Math.floor(Math.random() * (number + 1));
        }

        const elementosSeleccionables = document.querySelectorAll(".id");

        const numeroAleatorio = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.querySelector(".titulos h1").textContent = numeroAleatorio;

        const indiceAleatorio = random(cantidad - 1);

        elementosSeleccionables.forEach((id, index) => {
            if (index === indiceAleatorio) {
                id.style.backgroundColor = numeroAleatorio;
            } else {
                id.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            }

            id.addEventListener("click", () => {
                if (id.style.backgroundColor === numeroAleatorio) {
                    elementosSeleccionables.forEach((element) => {
                        element.style.backgroundColor = numeroAleatorio;
                    });
                }
            });
        });
    }

    const newColorsLink = document.getElementById("newColors");
    const easyButton = document.getElementById("easy");
    const hardButton = document.getElementById("hard");

    newColorsLink.addEventListener("click", () => {
        coloresAleatorios(3);
    });
    coloresAleatorios(6);

    easyButton.addEventListener("click", () => {
        mostrarElementos(3);
    });

    hardButton.addEventListener("click", () => {
        mostrarElementos(6);
    });

    function mostrarElementos(cantidad) {
        const elementosSeleccionables = document.querySelectorAll(".id");
        elementosSeleccionables.forEach((element, index) => {
            element.style.display = index < cantidad ? "block" : "none";
        });

        coloresAleatorios(cantidad);
    }
}
