const formulario = document.getElementById("formEmpresa");

// Sección donde aparecerán los resultados
const resultado = document.getElementById("resultado");

// Botón para limpiar
const btnLimpiar = document.getElementById("btnLimpiar");


formulario.addEventListener("submit", function (event) {

    // Evita que la página se recargue
    event.preventDefault();


    // ==============================
    // OBTENER LOS DATOS
    // ==============================

    const nombre = document.getElementById("nombre").value.trim();

    const empleados = Number(
        document.getElementById("empleados").value
    );

    const ambito =
        document.getElementById("ambito").value;

    const lucro =
        document.getElementById("lucro").value;

    const capital =
        document.getElementById("capital").value;

    const sector =
        document.getElementById("sector").value;

    const juridica =
        document.getElementById("juridica").value;


    // ==============================
    // VALIDACIÓN
    // ==============================

    if (
        nombre === "" ||
        empleados <= 0 ||
        ambito === "" ||
        lucro === "" ||
        capital === "" ||
        sector === "" ||
        juridica === ""
    ) {

        alert("Por favor, completa correctamente todos los campos.");

        return;
    }


    // ==============================
    // 1. CLASIFICACIÓN POR ÁMBITO
    // ==============================

    let clasificacionAmbito;

    if (ambito === "Local") {

        clasificacionAmbito = "Empresa local";

    } else if (ambito === "Nacional") {

        clasificacionAmbito = "Empresa nacional";

    } else {

        clasificacionAmbito = "Empresa multinacional";

    }


    // ==============================
    // 2. DESTINO DE LOS BENEFICIOS
    // ==============================

    let clasificacionBeneficio;

    if (lucro === "si") {

        clasificacionBeneficio = "Con fines de lucro";

    } else {

        clasificacionBeneficio = "Sin fines de lucro";

    }


    // ==============================
    // 3. ORIGEN DEL CAPITAL
    // ==============================

    let clasificacionCapital;

    if (capital === "Privada") {

        clasificacionCapital = "Empresa privada";

    } else if (capital === "Publica") {

        clasificacionCapital = "Empresa pública";

    } else {

        clasificacionCapital = "Empresa mixta";

    }


    // ==============================
    // 4. TAMAÑO DE LA EMPRESA
    // ==============================

    let clasificacionTamano;

    if (empleados >= 1 && empleados <= 10) {

        clasificacionTamano = "Microempresa";

    } else if (empleados <= 35) {

        clasificacionTamano = "Pequeña empresa";

    } else if (empleados <= 100) {

        clasificacionTamano = "Mediana empresa";

    } else {

        clasificacionTamano = "Gran empresa";

    }


    // ==============================
    // 5. SECTOR ECONÓMICO
    // ==============================

    let clasificacionSector;

    if (sector === "Primario") {

        clasificacionSector = "Sector primario";

    } else if (sector === "Secundario") {

        clasificacionSector = "Sector secundario";

    } else {

        clasificacionSector = "Sector terciario";

    }


    // ==============================
    // 6. FORMA JURÍDICA
    // ==============================

    let clasificacionJuridica;

    if (juridica === "Empresa individual") {

        clasificacionJuridica = "Empresa individual";

    } else if (juridica === "Sociedad Anónima") {

        clasificacionJuridica = "Sociedad Anónima (S.A.)";

    } else if (
        juridica === "Sociedad de Responsabilidad Limitada"
    ) {

        clasificacionJuridica =
            "Sociedad de Responsabilidad Limitada (S.R.L.)";

    } else if (juridica === "Cooperativa") {

        clasificacionJuridica = "Cooperativa";

    } else {

        clasificacionJuridica = "Asociación";

    }


    // ==============================
    // MOSTRAR RESULTADOS
    // ==============================

    document.getElementById(
        "nombreResultado"
    ).textContent = nombre;


    document.getElementById(
        "resultadoAmbito"
    ).textContent = clasificacionAmbito;


    document.getElementById(
        "resultadoBeneficio"
    ).textContent = clasificacionBeneficio;


    document.getElementById(
        "resultadoCapital"
    ).textContent = clasificacionCapital;


    document.getElementById(
        "resultadoTamano"
    ).textContent = clasificacionTamano;


    document.getElementById(
        "resultadoSector"
    ).textContent = clasificacionSector;


    document.getElementById(
        "resultadoJuridica"
    ).textContent = clasificacionJuridica;


    // ==============================
    // CREAR RESUMEN AUTOMÁTICO
    // ==============================

    const resumen =
        `${nombre} se clasifica como una ${clasificacionTamano.toLowerCase()}, ` +
        `${clasificacionAmbito.toLowerCase()}, ` +
        `${clasificacionCapital.toLowerCase()}, ` +
        `${clasificacionBeneficio.toLowerCase()}, ` +
        `perteneciente al ${clasificacionSector.toLowerCase()} ` +
        `y constituida como ${clasificacionJuridica}.`;


    document.getElementById(
        "resumenEmpresa"
    ).textContent = resumen;


    // Mostrar sección
    resultado.classList.remove("oculto");


    // Bajar automáticamente al resultado
    resultado.scrollIntoView({
        behavior: "smooth"
    });

});


// ==============================
// BOTÓN LIMPIAR
// ==============================

btnLimpiar.addEventListener("click", function () {

    resultado.classList.add("oculto");

});  