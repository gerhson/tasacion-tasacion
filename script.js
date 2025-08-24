const CLAVE_GLOBAL = "12345";

// Elementos
const gate = document.getElementById('gate');
const app = document.getElementById('app');
const gateMsg = document.getElementById('gateMsg');
const btnLogin = document.getElementById('btnLogin');
const logout = document.getElementById('logout');

// Login
btnLogin.onclick = () => {
  const inputClave = document.getElementById('clave').value;
  if (inputClave === CLAVE_GLOBAL) {
    gate.style.display = 'none';
    app.style.display = 'block';
    gateMsg.textContent = "";
  } else {
    gateMsg.textContent = "Clave incorrecta 🚫";
  }
};

// Logout
logout.onclick = () => {
  app.style.display = 'none';
  gate.style.display = 'block';
  document.getElementById('clave').value = "";
};

// Datos de distritos y zonas
const DATA = {
  "San Isidro": { zones: { "San Isidro Sur": 11781, "San Isidro Centro": 10850 } },
  "Miraflores": { zones: { "Malecon de Miraflores": 10800, "Parque Kennedy": 10200 } },
  "Barranco": { zones: { "Barranco Centro": 9600, "Nuevo Barranco": 9400 } },
  "Santiago de Surco": { zones: { "Monterrico": 7800, "Chacarilla": 7400 } },
  "La Molina": { zones: { "La Molina Club": 7200, "La Planicie": 6900 } }
};

// Factores de tasación
const FACTORES_TASACION = {
  antiguedad: { depreciacionAnual: 0.01, depreciacionMaxima: 0.3 },
  dormitorios: { base: 2, incrementoPorDormitorio: 0.08, maximoIncremento: 0.25 },
  banos: { base: 2, incrementoPorBano: 0.06, maximoIncremento: 0.18 },
  areaLibre: { departamento: 0.25, casa: 0.4, terreno: 0.9 },
  tipoInmueble: { departamento: 1.0, casa: 1.12, terreno: 0.8 },
  eficienciaEnergetica: { A:1.1, B:1.05, C:1, D:0.95, E:0.9, F:0.85 },
  estadoConservacion: { excelente:1.05, bueno:1.0, regular:0.9, remodelar:0.75 }
};

// Función de cálculo
function calcular() {
  const tipo = document.getElementById('tipo').value;
  const distrito = document.getElementById('distrito').value;
  const zona = document.getElementById('zona').value;
  const antiguedad = parseFloat(document.getElementById('antiguedad').value) || 0;
  const dormitorios = parseInt(document.getElementById('dormitorios').value) || 0;
  const banos = parseInt(document.getElementById('banos').value) || 0;
  const areaConstruida = parseFloat(document.getElementById('areaConstruida').value) || 0;
  const areaLibre = parseFloat(document.getElementById('areaLibre').value) || 0;
  const areaTerreno = parseFloat(document.getElementById('areaTerreno').value) || 0;
  const moneda = document.getElementById('moneda').value;
  const estado = document.getElementById('estado').value;
  const eficiencia = document.getElementById('eficiencia').value;

  if (!DATA[distrito] || !DATA[distrito].zones[zona]) {
    alert("Selecciona distrito y zona válidos");
    return;
  }

  let base = DATA[distrito].zones[zona] * (areaConstruida + areaLibre * FACTORES_TASACION.areaLibre[tipo]);
  if(tipo === "casa") base += areaTerreno;
  base *= FACTORES_TASACION.tipoInmueble[tipo];
  base *= Math.min(1 - antiguedad * FACTORES_TASACION.antiguedad.depreciacionAnual, 1 - FACTORES_TASACION.antiguedad.depreciacionMaxima);
  base *= FACTORES_TASACION.estadoConservacion[estado] || 1;
  base *= FACTORES_TASACION.eficienciaEnergetica[eficiencia] || 1;
  base *= 1 + Math.min((dormitorios - FACTORES_TASACION.dormitorios.base) * FACTORES_TASACION.dormitorios.incrementoPorDormitorio, FACTORES_TASACION.dormitorios.maximoIncremento);
  base *= 1 + Math.min((banos - FACTORES_TASACION.banos.base) * FACTORES_TASACION.banos.incrementoPorBano, FACTORES_TASACION.banos.maximoIncremento);

  const min = base * 0.9;
  const medio = base;
  const max = base * 1.1;

  document.getElementById('resultado').innerHTML = 
    `Precio mínimo: ${moneda} ${min.toFixed(2)}<br>
     Precio medio: ${moneda} ${medio.toFixed(2)}<br>
     Precio máximo: ${moneda} ${max.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const distritoSel = document.getElementById("distrito");
  const zonaSel = document.getElementById("zona");
  const tipoSel = document.getElementById("tipo");
  const form = document.getElementById("calc");

  // Cargar distritos
  Object.keys(DATA).forEach(distrito => {
    const option = document.createElement("option");
    option.value = distrito;
    option.textContent = distrito;
    distritoSel.appendChild(option);
  });

  // Cargar zonas según distrito
  distritoSel.addEventListener("change", () => {
    const distrito = distritoSel.value;
    zonaSel.innerHTML = '<option value="">Selecciona una zona</option>';
    if (DATA[distrito]?.zones) {
      Object.keys(DATA[distrito].zones).forEach(zone => {
        const option = document.createElement("option");
        option.value = zone;
        option.textContent = zone;
        zonaSel.appendChild(option);
      });
    }
  });

  // Habilitar/deshabilitar campos según tipo
  tipoSel.addEventListener("change", () => {
    const t = tipoSel.value;
    const campos = {
      piso: document.getElementById('piso'),
      ascensor: document.getElementById('ascensor'),
      dormitorios: document.getElementById('dormitorios'),
      banos: document.getElementById('banos'),
      areaConstruida: document.getElementById('areaConstruida'),
      areaLibre: document.getElementById('areaLibre'),
      areaTerreno: document.getElementById('areaTerreno'),
      antiguedad: document.getElementById('antiguedad'),
      distrito: document.getElementById('distrito'),
      zona: document.getElementById('zona'),
      moneda: document.getElementById('moneda'),
      estado: document.getElementById('estado'),
      eficiencia: document.getElementById('eficiencia')
    };
    // Reset
    Object.values(campos).forEach(c => c.disabled = true);
    // Habilitar según tipo
    if(t === "departamento") {
      ['distrito','zona','antiguedad','piso','ascensor','dormitorios','banos','areaConstruida','areaLibre','moneda','estado','eficiencia'].forEach(id => campos[id].disabled = false);
    } else if(t === "casa") {
      ['distrito','zona','antiguedad','dormitorios','banos','areaConstruida','areaLibre','areaTerreno','moneda','estado','eficiencia'].forEach(id => campos[id].disabled = false);
    } else if(t === "terreno") {
      ['distrito','zona','antiguedad','areaTerreno','moneda'].forEach(id => campos[id].disabled = false);
    }
  });

  // Calcular
  form.addEventListener("submit", e => {
    e.preventDefault();
    calcular();
  });
});
