export const productDetails = {
  "vertical-autoclave": {
    intro:
      "Aureole's vertical autoclave range combines stainless-steel construction, automatic process control and layered safety systems for dependable steam sterilization.",
    applications: [
      "Research laboratories",
      "Hospitals and healthcare facilities",
      "QC and microbiology laboratories",
      "Pharmaceutical and institutional sterilization",
    ],
    keyFeatures: [
      "SS 316L working chamber with stainless-steel lid, flange and bottom sheet",
      "Triple-wall construction with integrated water-heating arrangement",
      "Microprocessor-based digital temperature control with PT100 sensing",
      "Single-lever door configuration with pressure indication",
      "Argon-welded joints and jointless silicone gasket",
      "Standard operating temperature range of 121°C to 125°C",
    ],
    safetyFeatures: [
      "Safety valves for chamber and jacket",
      "Automatic purging system",
      "Water-level control for heater protection",
      "Pressure release valve and chamber pressure gauge",
      "Audio-visual cycle-completion alarm",
      "Gauge glass for water-level visibility",
    ],
    automation: [
      "Digital controller for pressure and temperature",
      "Thermal printer with F0 value calculation",
      "21 CFR Part 11 compliance available as an add-on",
      "SCADA compliance available as an add-on",
    ],
    specifications: [
      ["Pressure range", "15–22 PSI (factory set at 15 PSI)"],
      ["Temperature range", "121°C–125°C"],
      ["Temperature resolution", "0.1°C"],
      ["Temperature accuracy", "±0.5°C"],
      ["Electrical supply", "230V / 32A / 50Hz"],
      ["Hydraulic test pressure", "60 PSI"],
    ],
    modelTable: {
      columns: ["Model", "Capacity", "Chamber Dia.", "Chamber Height", "Load"],
      rows: [
        ["APEQ_VA_WN_0.35", "35 L", "300 mm", "650 mm", "2 kW"],
        ["APEQ_VA_WN_0.52", "52 L", "350 mm", "700 mm", "3 kW"],
        ["APEQ_VA_WN_0.75", "75 L", "400 mm", "750 mm", "3 kW"],
        ["APEQ_VA_WN_0.95", "95 L", "450 mm", "750 mm", "4 kW"],
        ["APEQ_VA_WN_1.25", "125 L", "450 mm", "900 mm", "4 kW"],
      ],
      note: "Standard sizes shown. Aureole states that customised sizes can also be offered.",
    },
    sourceUrl: "https://aureoleproequip.com/verticle-autoclave-single-lever.html",
  },

  "horizontal-autoclave": {
    intro:
      "Aureole horizontal autoclaves are built for larger sterilization loads with configurable doors, automated cycle control, vacuum-assisted air removal and material-handling options.",
    applications: [
      "Hospitals and central sterile departments",
      "Pharmaceutical manufacturing",
      "Research and laboratory facilities",
      "Industrial sterilization applications",
    ],
    keyFeatures: [
      "Door construction in SS 304 or SS 316L",
      "Single- or double-door configurations",
      "Vertical or horizontal automatic sliding and radial-arm door options",
      "Advanced PLC or microprocessor process control",
      "Programmed sterilization cycles with manual-operation backup",
      "Water-ring vacuum pump and condenser for effective air removal",
    ],
    safetyFeatures: [
      "Manual opening arrangement for power-failure conditions",
      "Automatic door reopening when an obstruction is detected",
      "Movable silicone-rubber gasket sealing",
      "Configuration-dependent pressure and door safety systems",
    ],
    automation: [
      "PLC or microprocessor control architecture",
      "SCADA integration available depending on configuration",
      "21 CFR Part 11 compliant control options",
      "Manual-operation backup",
    ],
    specifications: [
      ["Door options", "Single / double; sliding / radial arm"],
      ["Door material", "SS 304 or SS 316L"],
      ["Vacuum system", "Water-ring vacuum pump with condenser"],
      ["Material handling", "Removable shelves, trays, carriage or trolley"],
    ],
    modelTable: {
      columns: ["Model", "Capacity", "W", "H", "D", "Load"],
      rows: [
        ["APEQ_HA_HS_1.2", "120 L", "450", "450", "600 mm", "12 kW"],
        ["APEQ_HA_HS_1.80", "180 L", "450", "450", "900 mm", "18 kW"],
        ["APEQ_HA_HS_3.00", "300 L", "500", "500", "1200 mm", "18 kW"],
        ["APEQ_HA_HS_3.2", "325 L", "600", "600", "900 mm", "18 kW"],
        ["APEQ_HA_HS_4.3", "430 L", "600", "600", "1200 mm", "24 kW"],
      ],
      note: "Representative standard sliding-type models from Aureole's current product page.",
    },
    sourceUrl: "https://aureoleproequip.com/horizontal-automatic-autoclave-horizontal-sliding-autoclave.html",
  },

  "table-top-autoclave": {
    intro:
      "A compact sterilization platform designed for fast, controlled cycles where bench space, usability and repeatable performance are important.",
    applications: [
      "Research laboratories",
      "Hospitals",
      "Dental clinics",
      "Operation theatres",
      "QC and microbiology laboratories",
    ],
    keyFeatures: [
      "Automatic computer control with LCD status display",
      "Fault self-diagnosis and error indication",
      "Class B-style pre-vacuum and vacuum deep-drying functionality",
      "SS 316L chamber and sealing cover",
      "Integrated steam generation for rapid saturated-steam delivery",
      "Adjustable sterilization and drying time",
    ],
    safetyFeatures: [
      "Double-pressure protection safety door lock",
      "Door interlock during sterilization",
      "Automatic over-pressure exhaust",
      "High-temperature sensor protection",
      "Water-level indication for refill and drainage reminders",
    ],
    automation: [
      "LCD process display",
      "Bowie-Dick, Helix and vacuum test support",
      "External printer and USB functions available as options",
    ],
    specifications: [
      ["Construction", "SS 316L chamber and sealing cover"],
      ["Control", "Automatic computer control"],
      ["Cycle support", "Sterilization + adjustable drying"],
      ["Available classes", "B-class and N-class variants"],
    ],
    sourceUrl: "https://aureoleproequip.com/our-products.html",
  },

  fermenter: {
    intro:
      "Aureole fermenter systems are configured around process demand, aseptic operation, contamination control and scalable automation for laboratory through industrial bioprocessing.",
    applications: [
      "Laboratory fermentation",
      "Pilot-scale bioprocess development",
      "Industrial fermentation",
      "Process scale-up and research",
    ],
    keyFeatures: [
      "SS 316L wetted parts with SS 304 non-wetted construction options",
      "SIP/CIP capability depending on configuration",
      "Automatic temperature, pH and dissolved-oxygen cascade control",
      "Foam control and gas-flow management",
      "High-speed PLC with touchscreen HMI or IPC",
      "Mechanical- or magnetic-seal agitation options for aseptic operation",
    ],
    automation: [
      "Temperature and pressure sensing",
      "Speed, pH, DO2, cell-density and foam sensing options",
      "SCADA-based control architecture",
      "21 CFR compliant control options",
      "Manual flow meter or automatic MFC gas regulation",
    ],
    specifications: [
      ["Wetted construction", "SS 316L; SS 904 available by requirement"],
      ["Non-wetted construction", "SS 304"],
      ["Impeller options", "Rushton, marine, pitched blade, CD6, HE3 and others"],
      ["Cleaning / sterilization", "CIP / SIP options"],
      ["Validation support", "FAT / SAT and associated documentation"],
    ],
    sourceUrl: "https://aureoleproequip.com/industrial-fermenter.html",
  },

  "pure-steam-generator": {
    intro:
      "A clean-utility system for generating high-purity steam for pharmaceutical sterilization and SIP duties, with PLC-based control and hygienic construction details.",
    applications: [
      "Steam sterilizers",
      "SIP of vessels",
      "SIP of process pipelines",
      "Lyophilizer sterilization support",
      "Pharmaceutical clean-utility systems",
    ],
    keyFeatures: [
      "Double tube sheets in the first column to separate boiler steam",
      "Sanitary tri-clover fittings for preventive maintenance",
      "Seamless pipes and tubes with PTFE gaskets",
      "High-purity flow-diversion valve for steam-quality protection",
      "Mineral-wool insulation with SS 304 cladding",
      "Magnetic water-level control in the first column",
    ],
    automation: [
      "PLC-based control with interlocks and validated logic",
      "Skid-mounted SS 304 control panel",
      "Printing facility",
      "Fast response to pure-steam demand",
    ],
    specifications: [
      ["Plant steam", "6 bar, dry and saturated"],
      ["Feed water", "Purified water at 30°C–35°C"],
      ["Output range", "100–1500 kg/hr across listed standard models"],
      ["Control", "PLC-based with interlocks"],
    ],
    modelTable: {
      columns: ["Model", "Capacity", "Feed Water", "Steam @ 6 bar", "Output", "Weight"],
      rows: [
        ["APEQ_PSG_1.0", "100 kg/hr", "120", "125", "100", "185 kg"],
        ["APEQ_PSG_1.5", "150 kg/hr", "180", "185", "150", "225 kg"],
        ["APEQ_PSG_2.0", "200 kg/hr", "240", "250", "200", "300 kg"],
        ["APEQ_PSG_3.0", "300 kg/hr", "360", "375", "300", "330 kg"],
        ["APEQ_PSG_5.0", "500 kg/hr", "600", "625", "500", "530 kg"],
        ["APEQ_PSG_7.5", "750 kg/hr", "900", "925", "750", "650 kg"],
      ],
      note: "Aureole lists higher-capacity standard models as well and states that customised sizes can be offered.",
    },
    sourceUrl: "https://aureoleproequip.com/pure-steam-generator.html",
  },

  sterilizer: {
    intro:
      "Aureole's super-heated water spray sterilizer platform combines automated process control, validated temperature distribution and configurable chamber and door systems.",
    applications: [
      "Pharmaceutical sterilization processes",
      "Validated hot-water spray cycles",
      "Production environments requiring controlled thermal processing",
    ],
    keyFeatures: [
      "Fully automatic PLC-based process control",
      "Touch-screen process interface",
      "Online and offline process printing and recording",
      "F0 calculation support",
      "Configurable circular or rectangular chamber arrangements",
      "Single- or double-wall chamber configurations depending on application",
    ],
    safetyFeatures: [
      "Door interlocks prevent opening during a running process",
      "Independent front and rear door seals",
      "Food-grade silicone pressure gaskets",
      "Door sensors can reverse closing action when an obstruction is detected",
      "Three-level password protection",
    ],
    automation: [
      "21 CFR Part 11-oriented process recording functionality",
      "Touch-screen visualization and signal interfaces",
      "Manual operating mode independent of PLC",
      "Temperature-distribution control including drain temperature",
    ],
    specifications: [
      ["Control", "Fully automatic PLC"],
      ["Operator interface", "Touch screen"],
      ["Door options", "Horizontal / vertical sliding or hinged"],
      ["Gasket", "Food-grade silicone rubber"],
      ["Recording", "Online / offline printing and process recording"],
    ],
    sourceUrl: "https://aureoleproequip.com/super-heated-water-spray-sterilizer.html",
  },

  "steam-sterilizer-cum-bung-processor": {
    intro:
      "A pass-through double-door system developed for pharmaceutical rubber bung processing, integrating washing, siliconization, sterilization and drying within one automated process platform.",
    applications: [
      "Rubber stopper and bung processing",
      "Pharmaceutical vial-closure preparation",
      "Pass-through sterile processing",
      "Biotech and injectable-product facilities",
    ],
    keyFeatures: [
      "Double-door pass-through configuration",
      "Processing sequence includes washing, rinsing, siliconization, sterilization and drying",
      "Capacity up to 100,000 bungs per cycle and above depending on plug diameter",
      "SS 304 / 316L construction",
      "Horizontal sliding doors",
      "Floor-mounted construction with all-side panelling",
    ],
    safetyFeatures: [
      "Temperature-resistant food-grade silicone gasket",
      "Steam traps for condensate removal",
      "Process programs include vacuum leak testing",
    ],
    automation: [
      "Advanced PLC with optional SCADA",
      "21 CFR Part 11 compliant control option",
      "Manual-operation backup",
      "Multiple selectable process programs including HPHV and Bowie-Dick cycles",
    ],
    specifications: [
      ["Capacity", "Up to 100,000 bungs/cycle and above, plug dependent"],
      ["Pressure", "1.2 kg/cm²"],
      ["Temperature", "121°C"],
      ["Construction", "SS 304 / SS 316L"],
      ["Door", "Two horizontally sliding doors"],
      ["Mounting", "Floor mounted with panelling"],
    ],
    sourceUrl: "https://aureoleproequip.com/steam-sterilizer-cum-bung-processor.html",
  },

  "multicolumn-distillation-plant": {
    intro:
      "A multi-column distillation system designed for high-purity, sterile and pyrogen-free Water for Injection generation with hygienic construction and automated utility control.",
    applications: [
      "Water for Injection generation",
      "Critical sterile dosage-form manufacturing",
      "Pharmaceutical clean-water systems",
      "High-purity distillate production",
    ],
    keyFeatures: [
      "AISI 316 / SS 316L contact parts",
      "Electropolished internal contact surfaces",
      "Double-tube-sheet first-column heat-exchanger design",
      "Sanitary tri-clover fittings",
      "Seamless pipes and tubes with PTFE gaskets",
      "Spiral-baffle vapour treatment for pyrogen carryover control",
    ],
    automation: [
      "PLC-based system with interlocks and validated logic",
      "Skid-mounted SS 304 control panel with printing facility",
      "Optional automatic plant control for steam and water flow rates",
      "Magnetic float-switch level control for surge tank",
    ],
    specifications: [
      ["Product", "Sterile, pyrogen-free WFI"],
      ["Capacity", "Starts from 50 L/hr; multiple standard sizes listed"],
      ["Contact material", "AISI 316 / SS 316L"],
      ["Surface finish", "Electropolished contact surfaces"],
      ["Design reference", "FINN AQUA design concept stated by Aureole"],
    ],
    modelTable: {
      columns: ["Model", "Columns", "Capacity @ 3 bar", "Capacity @ 8 bar", "Approx. Weight"],
      rows: [
        ["APEQ_MCDP_0.8", "4", "80 L/hr", "145 L/hr", "350 kg"],
        ["APEQ_MCDP_1.5", "4", "150 L/hr", "285 L/hr", "800 kg"],
        ["APEQ_MCDP_3.0", "4", "300 L/hr", "570 L/hr", "900 kg"],
        ["APEQ_MCDP_5.0", "5", "500 L/hr", "920 L/hr", "1200 kg"],
      ],
      note: "Representative standard models. Aureole states that customised sizes can also be offered.",
    },
    sourceUrl: "https://aureoleproequip.com/multicolumn-distillation-plant.html",
  },
};

export function getProductTechnicalDetails(slug) {
  return productDetails[slug] ?? {};
}
