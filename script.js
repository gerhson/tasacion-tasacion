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
const data = {
  "San Isidro": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "San Isidro Sur (Financiero)": 11781,
      "San Isidro Centro": 10850,
      "San Isidro Norte": 10200,
      "El Golf": 11500,
      "Country Club": 11200,
      "Orrantia": 10800,
      "Corpac": 9950
    }
  },
  "Miraflores": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Malecon de Miraflores": 10800,
      "Parque Kennedy": 10200,
      "Reducto": 9800,
      "San Antonio": 9500,
      "Miraflores Alto": 9200,
      "28 de Julio": 8900,
      "Limite Barranco": 8700
    }
  },
  "Barranco": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Barranco Cultural (Centro)": 9974,
      "Nuevo Barranco": 9400,
      "Malecon Barranco": 9600,
      "Plaza de Armas Barranco": 8800,
      "Barranco Tradicional": 8500,
      "Limite Chorrillos": 8200,
      "Zona Residencial": 8000
    }
  },
  "Santiago de Surco": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Monterrico": 7800,
      "Chacarilla": 7400,
      "Las Gardenias": 7200,
      "Valle Hermoso": 7000,
      "Surco Centro": 6800,
      "Surco Viejo": 5750,
      "Limite SJM": 5200
    }
  },
  "La Molina": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Molina Club": 7200,
      "La Planicie": 6900,
      "Rinconada": 6800,
      "Sol de la Molina": 6600,
      "La Molina Vieja": 6400,
      "Cieneguilla limite": 6100,
      "Zona Alta": 6000
    }
  },
  "Jesus Maria": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Plaza San Martin": 7500,
      "Hospital Rebagliati": 7200,
      "Brasil": 7000,
      "Centro Jesus Maria": 6900,
      "Limite Breña": 6600,
      "Jesus Maria Residencial": 6800,
      "Zona Industrial": 6400
    }
  },
  "Lince": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Petit Thouars": 7400,
      "Arequipa": 7200,
      "Lince Centro": 7000,
      "Estadio Nacional": 6800,
      "Limite La Victoria": 6500,
      "Zona Residencial": 6900,
      "Parque Mariscal Castilla": 7100
    }
  },
  "Magdalena del Mar": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Costa Verde": 7200,
      "Plaza Tupac Amaru": 6800,
      "Magdalena Centro": 6600,
      "Limite San Miguel": 6400,
      "Zona Residencial": 6700,
      "Playa Magdalena": 6900,
      "Magdalena Baja": 6300
    }
  },
  "San Miguel": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Marina": 6400,
      "Plaza San Miguel": 6200,
      "Bertolotto": 6000,
      "San Miguel Centro": 5900,
      "Limite Callao": 5600,
      "Zona Residencial": 6100,
      "Costa Verde San Miguel": 6300
    }
  },
  "Pueblo Libre": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Plaza Bolivar": 6300,
      "Cuadra 20 Brasil": 6100,
      "Pueblo Libre Centro": 5900,
      "Limite Magdalena": 5800,
      "Zona Universitaria": 6000,
      "San Marcos": 5700,
      "Pueblo Libre Alto": 6200
    }
  },
  "Surquillo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Surquillo Centro": 6800,
      "Angamos": 6600,
      "Limite San Borja": 6500,
      "Limite Miraflores": 6900,
      "Mercado Surquillo": 6300,
      "Zona Residencial": 6400,
      "Surquillo Norte": 6700
    }
  },
  "San Borja": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Centro Empresarial": 7200,
      "Aviacion": 7000,
      "San Borja Norte": 6800,
      "San Borja Sur": 6900,
      "Javier Prado": 7100,
      "Parques de San Borja": 6700,
      "Biblioteca Nacional": 6600
    }
  },
  "Ate": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Santa Clara": 5200,
      "Vitarte": 4800,
      "Ate Centro": 4600,
      "Ceres": 4400,
      "Mayorazgo": 4900,
      "La Molina limite": 5000,
      "Huaycan": 4200
    }
  },
  "San Juan de Lurigancho": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Zarate": 4200,
      "Canto Grande": 3800,
      "Bayovar": 3900,
      "Las Flores": 3700,
      "Mangomarca": 3500,
      "SJL Centro": 3600,
      "Huascar": 3400
    }
  },
  "El Agustino": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "El Agustino Centro": 4800,
      "10 de Octubre": 4600,
      "Limite Ate": 4700,
      "Zona Alta": 4500,
      "Zona Industrial": 4400,
      "Residencial": 4900,
      "Cerros": 4200
    }
  },
  "Santa Anita": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Santa Anita Centro": 5200,
      "Los Jardines": 5000,
      "Parques Industriales": 4800,
      "Limite Ate": 4900,
      "Zona Residencial": 5100,
      "Santa Anita Norte": 4700,
      "Santa Anita Sur": 5300
    }
  },
  "Lurigancho-Chosica": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Chosica Centro": 4200,
      "Chaclacayo limite": 4400,
      "Ñaña": 4000,
      "Ricardo Palma": 4100,
      "Carapongo": 3800,
      "Jicamarca": 3600,
      "Huachipa": 4300
    }
  },
  "Los Olivos": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Los Olivos Centro": 3800,
      "Pro": 3600,
      "Mercado Unicachi": 3500,
      "Los Olivos Norte": 3400,
      "Los Olivos Oeste": 3196,
      "Las Palmeras": 3700,
      "Sol de Oro": 3900
    }
  },
  "San Martin de Porres": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Universitaria": 3400,
      "Tomas Valle": 3300,
      "Fiori": 3200,
      "SMP Centro": 3100,
      "Infantas": 3000,
      "Condevilla": 2900,
      "Limite Callao": 2800
    }
  },
  "Comas": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Comas Centro": 3200,
      "Año Nuevo": 3100,
      "La Libertad": 3000,
      "Carabayllo limite": 2900,
      "Zona Alta": 2800,
      "Collique": 3300,
      "Tupac Amaru": 3400
    }
  },
  "Independencia": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "MegaPlaza": 4400,
      "Tahuantinsuyo": 4200,
      "Independencia Centro": 4000,
      "Ermitaño": 3800,
      "Payet": 4100,
      "Zona Industrial": 3900,
      "Unificada": 4300
    }
  },
  "Puente Piedra": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Puente Piedra Centro": 3300,
      "Chillon": 3100,
      "Copacabana": 3200,
      "Shangrila": 3000,
      "Ensenada": 2900,
      "Cercado": 3400,
      "Ventanilla limite": 3500
    }
  },
  "Carabayllo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Carabayllo Centro": 2900,
      "Santa Isabel": 3000,
      "San Pedro": 2800,
      "Raul Porras": 2700,
      "Lomas": 2600,
      "El Progreso": 3100,
      "Tungasuca": 2950
    }
  },
  "Chorrillos": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Chorrillos Centro": 6200,
      "Agua Dulce": 5800,
      "Villa": 5600,
      "Malecon Grau": 6000,
      "Matellini": 5400,
      "Villa El Salvador limite": 5200,
      "Huertos de Villa": 5900
    }
  },
  "San Juan de Miraflores": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "SJM Centro": 3800,
      "Villa Maria": 3600,
      "Panamericana Sur": 3700,
      "Ciudad de Dios": 3500,
      "Pampas de San Juan": 3400,
      "Maria Auxiliadora": 3900,
      "Villa El Salvador limite": 3300
    }
  },
  "Villa El Salvador": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "VES Centro": 3400,
      "Sector 1": 3200,
      "Sector 2": 3300,
      "Sector 3": 3100,
      "Jose Carlos Mariategui": 3000,
      "Zona Industrial": 3500,
      "Lomo de Corvina": 3600
    }
  },
  "Villa Maria del Triunfo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "VMT Centro": 3200,
      "Nueva Esperanza": 3000,
      "Jose Galvez": 3100,
      "Inca Pachacutec": 2900,
      "Tablada de Lurin": 3300,
      "Cercado VMT": 3400,
      "Zona Alta": 2800
    }
  },
  "Lurin": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Lurin Centro": 4400,
      "Mamacona": 4200,
      "Villa Alejandro": 4000,
      "Julio C. Tello": 4300,
      "Km 40 Panamericana": 4500,
      "Pachacamac limite": 4100,
      "Zona Arqueologica": 3900
    }
  },
  "Pachacamac": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Pachacamac Pueblo": 3500,
      "Cieneguilla": 4800,
      "La Molina limite": 4600,
      "Club Hipico": 5200,
      "Manchay": 3200,
      "Villa Salvador": 3300,
      "Zona Arqueologica": 3400
    }
  },
  "Callao": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Callao Cercado": 3800,
      "Puerto": 3600,
      "Carmen de la Legua": 4200,
      "Bellavista": 4400,
      "Centro Historico": 3500,
      "Zona Industrial": 3400,
      "Aeropuerto": 3300
    }
  },
  "Bellavista": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Bellavista Centro": 4400,
      "Av. Colonial": 4200,
      "Plaza Bellavista": 4300,
      "Residencial": 4100,
      "La Perla limite": 4000,
      "Oscar Benavides": 4500,
      "Zona Alta": 3900
    }
  },
  "La Perla": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Perla Centro": 4200,
      "Residencial La Perla": 4400,
      "Costanera": 4600,
      "Plaza La Perla": 4100,
      "Elmer Faucett": 4000,
      "San Miguel limite": 4300,
      "Zona Baja": 3900
    }
  },
  "La Punta": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Malecon La Punta": 7200,
      "Centro La Punta": 6800,
      "Fortaleza": 6600,
      "Cantolao": 6400,
      "Avenida Grau": 6900,
      "Zona Residencial": 7000,
      "Terminal Maritimo": 6200
    }
  },
  "Ventanilla": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Ventanilla Centro": 3600,
      "Pachacutec": 3200,
      "Mi Peru": 3000,
      "Santa Rosa": 3400,
      "Angamos": 3500,
      "Ventanilla Alta": 3300,
      "Ventanilla Baja": 3700
    }
  },
  "Mi Peru": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Mi Peru Centro": 3000,
      "Jose Galvez": 2900,
      "Bartolome Herrera": 2800,
      "Ventanilla limite": 3100,
      "Ciudad Satelite": 2700,
      "Zona Industrial": 3200,
      "Costa Verde": 3300
    }
  },
  "Santa Maria del Mar": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa Santa Maria": 7800,
      "Club Playa": 7600,
      "Santa Maria Centro": 7200,
      "Zona Residencial": 7400,
      "Punta Hermosa limite": 7000,
      "Malecon": 8000,
      "Zona Alta": 6800
    }
  },
  "Punta Hermosa": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa Punta Hermosa": 5800,
      "Centro Punta Hermosa": 5400,
      "Zona Residencial": 5600,
      "Punta Negra limite": 5200,
      "Club de Playa": 6000,
      "Malecon Sur": 5000,
      "Zona Alta": 5300
    }
  },
  "Punta Negra": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa Punta Negra": 5400,
      "Centro Punta Negra": 5000,
      "Zona Residencial": 5200,
      "San Bartolo limite": 4800,
      "Club Nautico": 5600,
      "Malecon": 4600,
      "Zona Alta": 4900
    }
  },
  "San Bartolo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa San Bartolo": 5200,
      "Centro San Bartolo": 4800,
      "Zona Residencial": 5000,
      "Pucusana limite": 4600,
      "Malecon San Bartolo": 4400,
      "Club de Playa": 5400,
      "Zona Alta": 4700
    }
  },
  "Pucusana": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Puerto Pucusana": 4000,
      "Pucusana Centro": 3800,
      "Playa Pucusana": 4200,
      "Zona Residencial": 3600,
      "Malecon": 3400,
      "Club Nautico": 4400,
      "Zona Alta": 3500
    }
  },
  "Ancon": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Balneario Ancon": 3800,
      "Ancon Centro": 3400,
      "Playa Hermosa": 3600,
      "Zona Residencial": 3200,
      "Santa Rosa limite": 3000,
      "Malecon Ancon": 4000,
      "Zona Alta": 3100
    }
  },
  "Santa Rosa": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Santa Rosa Centro": 3200,
      "Playa Santa Rosa": 3400,
      "Chancay limite": 3000,
      "Ancon limite": 3100,
      "Zona Residencial": 2900,
      "Malecon": 3600,
      "Zona Rural": 2700
    }
  },
  "Cercado de Lima": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Centro Historico": 6400,
      "Plaza Mayor": 6600,
      "Barrios Altos": 5800,
      "Monserrate": 6000,
      "Cinco Esquinas": 5600,
      "Abancay": 6200,
      "Tacna": 6100
    }
  },
  "Rimac": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Centro Historico Rimac": 5400,
      "Amancaes": 5000,
      "Cerro San Cristobal": 4800,
      "Rimac Centro": 5200,
      "Zona Industrial": 4600,
      "Martinete": 5100,
      "Quinta Heeren": 5300
    }
  },
  "La Victoria": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Gamarra": 6800,
      "La Victoria Centro": 6400,
      "Balconcillo": 6200,
      "Guadalupe": 6000,
      "Santa Catalina": 6600,
      "San Cosme": 5800,
      "Apolo": 6100
    }
  },
  "Breña": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Breña Centro": 5400,
      "Plaza Castilla": 5600,
      "Hospital Loayza": 5300,
      "Brasil Breña": 5200,
      "Jesus Maria limite": 5500,
      "Zona Residencial": 5100,
      "Bolivia": 5000
    }
  },
  "San Luis": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "San Luis Centro": 6400,
      "Residencial San Luis": 6200,
      "Ate limite": 6000,
      "San Borja limite": 6600,
      "Zona Industrial": 5800,
      "Parques San Luis": 6300,
      "San Luis Norte": 6100
    }
  },
  "Chaclacayo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Chaclacayo Centro": 5400,
      "Club Chaclacayo": 5800,
      "Chosica limite": 5200,
      "Cieneguilla limite": 5600,
      "Zona Residencial": 5000,
      "Rio Rimac": 4800,
      "Zona Alta": 5300
    }
  }
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

  if (!data[distrito] || !data[distrito].zones[zona]) {
    alert("Selecciona distrito y zona válidos");
    return;
  }

  let base = data[distrito].zones[zona] * (areaConstruida + areaLibre * FACTORES_TASACION.areaLibre[tipo]);
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




