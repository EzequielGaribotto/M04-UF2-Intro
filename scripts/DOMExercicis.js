function estiljs() {
    let parrafo = document.getElementById("text");
    parrafo.style.color = "red";
}

function prenValorForm() {
    let inputs = document.getElementsByTagName("input")
    let nom = inputs[0].value;
    let cognom = inputs[1].value;
    console.log(nom +" "+ cognom)
}

function cambiarColorDeFondo() {
    let parrafos = document.getElementsByTagName("p")
    for (parrafo in parrafos) {
        parrafos[parrafo].style.backgroundColor = "red";
    }
}
function obtenirAtributs() {
    let enlace = document.getElementById('itb');
    let atributos = enlace.attributes; 

    for (let i = 0; i < atributos.length; i++) {
        console.log(atributos[i].name + ': ' + atributos[i].value);
    }
}
function insertarFila(posicion, form) {
    if (form == "formulari1") {
        var table = document.getElementById("Taula");

        var newRow = document.createElement("tr");

        for (let i = 1; i <= 2; i++) {
            var newCell = document.createElement("td");
            newCell.innerHTML = "fila " + (table.rows.length + 1) + " cel·la " + i;
            newRow.appendChild(newCell);
        }

        if (posicion === 'inicio') {
            table.insertBefore(newRow, table.firstChild);
        } else {
            table.appendChild(newRow);
        }
    } else if (form == "formulari2") {
        var table = document.getElementById("Taula2");
        var newRow = document.createElement("tr");
        for (let i = 0; i <= 1; i++) {
            var newCell = document.createElement("td");
            let input = document.getElementsByClassName("input_usuario")
            newCell.innerHTML = input[i].value
            newRow.appendChild(newCell);
        }
        if (posicion === 'inicio') {
            table.insertBefore(newRow, table.firstChild);
        } else {
            table.appendChild(newRow);
        }
    }
}

function crearTabla() {
    let tablaPadre = document.getElementById("tabla_padre");
    let tablaCreada = document.getElementById("tabla_creada");

    if (tablaCreada) {
        tablaCreada.remove();
    }

    tablaCreada = document.createElement("table");
    tablaCreada.id = "tabla_creada";

    let filas = document.getElementById("filas").value;
    let columnas = document.getElementById("columnas").value;

    for (let fila = 0; fila < filas; fila++) {
        let nuevaFila = document.createElement("tr");
        for (let columna = 0; columna < columnas; columna++) {
            let nuevaColumna = document.createElement("td");
            nuevaColumna.innerHTML = "1";
            nuevaFila.appendChild(nuevaColumna);
            nuevaColumna.classList.add("celda");
        }
        tablaCreada.appendChild(nuevaFila);
    }
    tablaPadre.appendChild(tablaCreada);
}

function eliminarSeleccion() {
    let dropdown = document.getElementById("dropDownRemove");
    dropdown.remove(dropdown.selectedIndex);
}

function mostrarSeleccion() {
    let opciones = document.getElementsByClassName('opc_show');
    let alertext = ""
    for (let opc = 0; opc < opciones.length; opc++) {
        let indice = opc;
        let valor = opciones[opc].value;
        let texto = opciones[opc].text;
        alertext += "Elemento " + indice + "\nValor: " + valor + "\nTexto: " + texto + "\n\n"
    }
    alert(alertext)
}

function calcularVolumen() {
    // Obtener valores del formulario
    let altura = parseFloat(document.getElementById("altura").value);
    let radio = parseFloat(document.getElementById("radio").value);

    // Calcular volumen del cilindro
    let volumen = Math.PI * Math.pow(radio, 2) * altura;

    // Mostrar resultado en HTML
    document.getElementById("resultado").innerText = "El volumen del cilindro es: " + volumen + " u^3"
}

function resaltar() {
    let resaltables = document.getElementsByTagName('strong')
    for (let element = 0; element < resaltables.length; element++) {
        resaltables[element].style.backgroundColor = "red";
    }
}

function tornaNormal() {
    let resaltables = document.getElementsByTagName('strong')
    for (let element = 0; element < resaltables.length; element++) {
        resaltables[element].style.backgroundColor = "";
    }
}