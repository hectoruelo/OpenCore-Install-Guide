(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{590:function(e,t,a){"use strict";a.r(t);var r=a(25),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"limitaciones-de-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitaciones-de-hardware"}},[e._v("#")]),e._v(" Limitaciones de Hardware")]),e._v(" "),a("p",[e._v("Con macOS, hay numerosas limitaciones de hardware que debes tener en cuenta antes de iniciar una instalación. Esto se debe a la cantidad limitada de hardware que admite Apple, por lo que estamos limitados por Apple o por los parches que ha creado la comunidad.")]),e._v(" "),a("p",[e._v("Las secciones principales a verificar son:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#cpu-support"}},[e._v("CPU")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#gpu-support"}},[e._v("GPU")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#motherboard-support"}},[e._v("Placa base")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#storage-support"}},[e._v("Almacenamiento")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#wired-networking"}},[e._v("Internet cableado (Ethernet)")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#wireless-networking"}},[e._v("Internet inalámbrico (WiFi)")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#miscellaneous"}},[e._v("Otros")])])]),e._v(" "),a("p",[e._v("Para guías más detalladas en el tema, véase:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://dortania.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU Buyers Guide"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Verifica si tu GPU es compatible y qué version de macOS puedes correr.")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://dortania.github.io/Wireless-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wireless Buyers Guide"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Verifica si tu tarjeta WiFi es compatible.")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anti-Hardware Buyers Guide"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Guía en general en qué evitar y qué problemas podrías enfrentarte con tus componentes.")])])])]),e._v(" "),a("h2",{attrs:{id:"soporte-de-cpus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soporte-de-cpus"}},[e._v("#")]),e._v(" Soporte de CPUs")]),e._v(" "),a("p",[e._v("Para el soporte de CPUs, tenemos el siguiente desglose:")]),e._v(" "),a("ul",[a("li",[e._v("Las CPUs de escritorio de Intel son compatibles.\n"),a("ul",[a("li",[e._v("Esta guía soporta desde Ivy Bridge hasta Comet Lake.")])])]),e._v(" "),a("li",[e._v("CPUs de gama alta y servidores de Intel.\n"),a("ul",[a("li",[e._v("Esta guía soporta desde Haswell-E hasta Cascade Lake X.")])])]),e._v(" "),a("li",[e._v("CPUs de la serie i y Xeon para laptops\n"),a("ul",[a("li",[e._v("Esta guía soporta desde Ivy Bridge hasta Ice Lake.")]),e._v(" "),a("li",[e._v("A tener en cuenta: los CPUs de la serie Atom, Celeron y Pentium no son compatibles.")])])]),e._v(" "),a("li",[e._v("Las series Bulldozer (15h), Jaguar (16h) y Ryzen (17h) AMD de escritorio.\n"),a("ul",[a("li",[e._v("CPUs de laptop "),a("strong",[e._v("no")]),e._v(" son compatibles.")])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Requerimientos de la CPU")]),e._v(" "),a("p",[e._v("Requerimientos de arquitectura")]),e._v(" "),a("ul",[a("li",[e._v("CPUs de 32-Bits son soportadas desde 10.4.1 hasta 10.6.8\n"),a("ul",[a("li",[e._v("Ten en cuenta que 10.7.x requiere de un espacio de usuario de 64 bits, lo cual limita las CPUs de 32 bits")])])]),e._v(" "),a("li",[e._v("Las CPUs de 64 bits son soportadas de 10.4.1 en adelante.")])]),e._v(" "),a("p",[e._v("Requerimientos de SEE:")]),e._v(" "),a("ul",[a("li",[e._v("SSE3 es necesario para todas las versiones de Intel de OS X/macOS")]),e._v(" "),a("li",[e._v("SSSE3 es requerido para todas las versiones de 64 bits de OS X/macOS\n"),a("ul",[a("li",[e._v("Para las CPUs que no tengan SSSE3 (como ciertos Pentiums de 64 bits), recomendamos correr un espacio de usuario de 32 bits ("),a("code",[e._v("i386-user32")]),e._v(")")])])]),e._v(" "),a("li",[e._v("SSE4 es requerido para macOS 10.12 y posterior")]),e._v(" "),a("li",[e._v("SSE4.2 es necesario para macOS 10.14 y posterior\n"),a("ul",[a("li",[e._v("Las CPUs con SSE4.1 son soportadas con "),a("a",{attrs:{href:"https://forums.macrumors.com/threads/mp3-1-others-sse-4-2-emulation-to-enable-amd-metal-driver.2206682/post-28447707",target:"_blank",rel:"noopener noreferrer"}},[e._v("telemetrap.kext"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Los drivers nuevos de AMD también requieren SSE4.2, para resolver esto dirígete aquí (post en inglés): "),a("a",{attrs:{href:"https://forums.macrumors.com/threads/mp3-1-others-sse-4-2-emulation-to-enable-amd-metal-driver.2206682/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MouSSE: SSE4.2 emulation"),a("OutboundLink")],1)])])])]),e._v(" "),a("p",[e._v("Requerimientos de Firmware:")]),e._v(" "),a("ul",[a("li",[e._v("OS X 10.4.1 hasta 10.4.7 requiere EFI32(como la versión IA32(32-bit) de OpenCore)\n"),a("ul",[a("li",[e._v("OS X 10.4.8 hasta 10.7.5 soportan ambos EFI32 y EFI64")])])]),e._v(" "),a("li",[e._v("OS X 10.8 y posterior requieren EFI64(es decir una versión de OpenCore X64(64-bit))")]),e._v(" "),a("li",[e._v("OS X 10.7 hasta 10.9 requiere PartitionDxe.efi para arrancar desde la partición de recuperación (recovery en inglés)")])]),e._v(" "),a("p",[e._v("Requerimientos del Kernel:")]),e._v(" "),a("ul",[a("li",[e._v("OS X 10.4 y 10.5 requieren Kexts de 32-bits debido a que sólo soportan un kernelspace de 32 bits\n"),a("ul",[a("li",[e._v("OS X 10.6 y 10.7 soportan kernelspaces de ambos 32 y 64 bits")])])]),e._v(" "),a("li",[e._v("OS X 10.8 y posterior requieren Kexts de 64 bits debido a que sólo soportan un kernelspace de 64 bits\n"),a("ul",[a("li",[e._v("Corre "),a("code",[e._v("lipo -archs")]),e._v(" para saber la arquitectura que soporta tu kext (recuerda correr esto en el binario y no el bundle .kext)")])])])]),e._v(" "),a("p",[e._v("Notas especiales:")]),e._v(" "),a("ul",[a("li",[e._v("Lilu y sus plugins requieren de 10.8 y posterior para operar\n"),a("ul",[a("li",[e._v("Recomendamos usar FakeSMC para veriones viejas de OS X")])])]),e._v(" "),a("li",[e._v("OS X 10.6 y anterior requieren de RebuildAppleMemoryMap habilitado\n"),a("ul",[a("li",[e._v("Esto es para resolver un kernel panic temprano")])])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Tabla de CPUs soportadas de Intel")]),e._v(" "),a("p",[a("em",[e._v("Nota: Los links informativos están en inglés")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Generación de CPU")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Soporte Inicial")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Última versión soportada")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Notas")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("CPUID")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Pentium_4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pentium 4"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.4.1")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.5.8")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Sólo utilizado en kits de desarrolladores")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0F41")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Yonah_(microprocessor)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yonah"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.4.4")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.6.8")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("32Bit")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0006E6")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Conroe_(microprocessor)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Conroe"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Merom_(microprocessor)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Merom"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.4.7")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.11.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("No SSE4")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0006F2")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Penryn_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Penryn"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.4.8")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.13.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("No SSE4.2")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x010676")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Nehalem_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nehalem"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.5.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0106A2")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Lynnfield_(microprocessor)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lynnfield"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Clarksfield_(microprocessor)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clarksfield"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.6.3")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Sin soporte de iGPU en 10.14+")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0106E0")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Westmere_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Westmere, Clarkdale, Arrandale"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.6.4")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Sin soporte de iGPU en 10.14+")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0206C0")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Sandy_Bridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sandy Bridge"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.6.7")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Sin soporte de iGPU en 10.14+")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0206A0(M/H)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ivy_Bridge_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ivy Bridge"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.7.3")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Sin soporte de iGPU en 11+")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0306A0(M/H/G)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ivy_Bridge_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ivy Bridge-E5"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.9.2")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0306E0")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Haswell_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Haswell"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.8.5")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0306C0(S)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Broadwell_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Broadwell"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.10.0")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0306D4(U/Y)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Skylake_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Skylake"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.11.1")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0506e3(H/S) 0x0406E3(U/Y)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Kaby_Lake",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kaby Lake"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.12.4")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0906E9(H/S/G) 0x0806E9(U/Y)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coffee_Lake",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coffee Lake"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.12.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("iGPU supported added in 10.13.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0906EA(S/H/E) 0x0806EA(U)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Kaby_Lake#List_of_8th_generation_Amber_Lake_Y_processors",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amber"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Whiskey_Lake_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Whiskey"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Comet_Lake_(microprocessor)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comet Lake"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.14.1")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0806E0(U/Y)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Comet_Lake_(microprocessor)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comet Lake"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.15.4")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0906E0(S/H)")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ice_Lake_(microprocessor)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ice Lake"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.15.4")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0x0706E5(U)")])])])])]),e._v(" "),a("p",[a("strong",[e._v("Para obtener información más detallada, consulta aquí: "),a("a",{attrs:{href:"https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guía de compradores Anti-Hackintosh"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"soporte-de-gpus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soporte-de-gpus"}},[e._v("#")]),e._v(" Soporte de GPUs")]),e._v(" "),a("p",[e._v("El soporte de GPUs se vuelve mucho más complicado debido a la cantidad casi infinita de GPUs en el mercado, pero el desglose general es el siguiente:")]),e._v(" "),a("ul",[a("li",[e._v("Las GPUs AMD basadas en GCN son compatibles con las versiones más recientes de macOS.\n"),a("ul",[a("li",[e._v("Sin embargo, las APUs de AMD no son compatibles.")]),e._v(" "),a("li",[e._v("Las GPUs de AMD con "),a("a",{attrs:{href:"https://www.techpowerup.com/gpu-specs/amd-lexa.g806",target:"_blank",rel:"noopener noreferrer"}},[e._v("núcleos basados en Lexa"),a("OutboundLink")],1),e._v(" de la serie Polaris tampoco son compatibles.")])])]),e._v(" "),a("li",[e._v("El soporte de GPUs de Nvidia es complicado:\n"),a("ul",[a("li",[e._v("Las GPUs de la serie "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_900_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maxwell(9XX)"),a("OutboundLink")],1),e._v(" y "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_10_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pascal(10XX)"),a("OutboundLink")],1),e._v(" están limitadas a macOS 10.13: High Sierra")]),e._v(" "),a("li",[e._v("La serie de GPUs "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_20_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Turing de Nvidia(20XX,"),a("OutboundLink")],1),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_16_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("16XX)"),a("OutboundLink")],1),e._v(" "),a("strong",[e._v("no son compatibles con ninguna versión de macOS")])]),e._v(" "),a("li",[e._v("Las GPUs de la serie "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_700_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kepler(7XX)"),a("OutboundLink")],1),e._v(" son compatibles en las series más nuevas de macOS (Incluyendo macOS 11: Big Sur)\n"),a("ul",[a("li",[e._v("Esto es debido a que Apple sigue soportando algunas "),a("a",{attrs:{href:"https://dortania.github.io/GPU-Buyers-Guide/modern-gpus/nvidia-gpu.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MacBook Pros con GPUs de Nvidia"),a("OutboundLink")],1)])])])])]),e._v(" "),a("li",[e._v("iGPUs de Intel de la serie "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Intel_Graphics_Technology",target:"_blank",rel:"noopener noreferrer"}},[e._v("GT2+"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Esta guía cubre iGPUs desde Ivy Bridge hasta Ice lake")]),e._v(" "),a("li",[e._v("Cabe mencionar que GT2 se refiere a la serie del iGPU, iGPUs de la serie GT1, encontrada en Pentiums, Celerons y Atoms no son compatibles con macOS.")])])])]),e._v(" "),a("p",[e._v("Una nota importante para las "),a("strong",[e._v("Laptops con GPU dedicada")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("El 90% de las GPUs dedicadas en laptops no funcionarán porque están cableadas en una configuración que macOS no admite (gráficos intercambiables). Con las GPUs dedicadas de NVIDIA, esto generalmente se llama Optimus. No es posible utilizar estas GPUs para la pantalla interna, por lo que generalmente se recomienda desactivarlas y apagarlas (se tratará más adelante en esta guía).")]),e._v(" "),a("li",[e._v("Sin embargo, en algunos casos, la GPU dedicada alimenta cualquier salida externa (HDMI, mini DisplayPort, etc.), que puede o no funcionar; en caso de que funcione, deberás mantener la tarjeta en funcionamiento.")]),e._v(" "),a("li",[e._v("Sin embargo, hay algunas laptops que en raros casos no tienen gráficos intercambiables, por lo que se puede usar la tarjeta dedicada (si es compatible con macOS). Sin embargo, el cableado y la configuración de estas generalmente causan problemas.")])]),e._v(" "),a("p",[a("strong",[e._v("Si quieres una lista completa de las GPUs compatibles, visita la "),a("a",{attrs:{href:"https://dortania.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guía de compra de GPUs"),a("OutboundLink")],1)])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Tabla de soporte de GPUs AMD")]),e._v(" "),a("p",[a("em",[e._v("Nota: Los links informativos están en inglés")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Generación de GPU")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Soporte inicial")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Última versión soportada")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Notas")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Radeon_X800_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("X800"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.3.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.7.5")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Requiere de un kernel 32bit")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Radeon_X1000_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("X1000"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.4.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.7.5")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Requiere de un kernel 32bit")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/TeraScale_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terascale"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.5.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.13.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/TeraScale_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terascale 2/3"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.6.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.13.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Graphics_Core_Next",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCN 1"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.8.3")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Graphics_Core_Next",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCN 2/3"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.10.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Radeon_RX_400_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polaris 10"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Radeon_RX_500_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("20"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.12.1")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Radeon_RX_Vega_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vega 10"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.12.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Radeon_RX_Vega_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vega 20"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.14.5")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Radeon_RX_5000_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Navi 10"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.15.1")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Requiere "),a("code",[e._v("agdpmod=pikera")]),e._v(" en los boot-args")])])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Tabla de soporte de GPUs Nvidia")]),e._v(" "),a("p",[a("em",[e._v("Nota: Los links informativos están en inglés")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Generación de GPU")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Soporte Inicial")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Última versión soportada")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Notas")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_6_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("GeForce 6"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.2.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.7.5")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Requiere de un kernel 32bit")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_7_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("GeForce 7"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.4.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.7.5")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Requiere de un kernel 32bit")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tesla_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tesla"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.4.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.13.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tesla_(microarchitecture)#Tesla_2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tesla V2"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.5.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.13.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fermi_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fermi"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.7.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.13.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Kepler_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kepler Gen 1/2"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.8.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Actual")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Maxwell_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maxwell"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.10.x")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.13.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Requiere de los "),a("a",{attrs:{href:"https://www.nvidia.com/download/driverResults.aspx/159341/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Drivers"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Pascal_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pascal"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.12.4")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("10.13.6")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Requiere de los "),a("a",{attrs:{href:"https://www.nvidia.com/download/driverResults.aspx/159341/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Drivers"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Turing_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Turing"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("No hay drivers disponibles")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ampere_(microarchitecture)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ampere"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("No hay drivers disponibles")])])])]),e._v(" "),a("h2",{attrs:{id:"soporte-de-placas-madre"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#soporte-de-placas-madre"}},[e._v("#")]),e._v(" Soporte de placas madre")]),e._v(" "),a("p",[e._v("En su mayor parte, todas las placas madre son compatibles siempre que la CPU lo sea tambíen. Previamente, las placas B550 tenía problemas:")]),e._v(" "),a("ul",[a("li",[a("s",[a("a",{attrs:{href:"https://www.amd.com/es/chipsets/b550",target:"_blank",rel:"noopener noreferrer"}},[e._v("La placas base AMD B550"),a("OutboundLink")],1)])])]),e._v(" "),a("p",[e._v("Sin embargo, gracias a desarrollos recientes, las placas B550 son booteables con la adición de SSDT-CPUR. Daremos más información en ambas recolectando archivos y la página de config.plist de Zen.")]),e._v(" "),a("h2",{attrs:{id:"compatibilidad-de-almacenamiento"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibilidad-de-almacenamiento"}},[e._v("#")]),e._v(" Compatibilidad de almacenamiento")]),e._v(" "),a("p",[e._v("En su mayor parte, todas las unidades basadas en SATA son compatibles y la mayoría de las unidades NVMe también. Sin embargo, tenemos unas pocas excepciones:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("SSDs NVMe Samsung PM981, PM991 y Micron 2200S")]),e._v(" "),a("ul",[a("li",[e._v('Estos SSD no son compatibles desde el primer momento (lo que causa un "kernel panic") y, por lo tanto, requieren de '),a("a",{attrs:{href:"https://github.com/acidanthera/NVMeFix/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVMeFix.kext"),a("OutboundLink")],1),e._v(" para corregir este problema. Ten en cuenta que estas unidades pueden causar problemas de arranque incluso con NVMeFix.kext.")]),e._v(" "),a("li",[e._v("Otro caso similar fue con la SSD NVMe 970 EVO Plus de Samsung, pero esto fue corregido con una actualización de firmware. Puedes obtenerla via Windows usando la herramienta Samsung Magician o con una ISO booteable "),a("a",{attrs:{href:"https://www.samsung.com/semiconductor/minisite/ssd/download/tools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("aquí"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("También para tener en cuenta, las computadoras portátiles que usan "),a("a",{attrs:{href:"https://www.intel.com/content/www/us/en/architecture-and-technology/optane-memory.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Optane"),a("OutboundLink")],1),e._v(" o "),a("a",{attrs:{href:"https://www.micron.com/products/advanced-solutions/3d-xpoint-technology",target:"_blank",rel:"noopener noreferrer"}},[e._v("Micron 3D XPoint"),a("OutboundLink")],1),e._v(" para la aceleración de discos duros, no son compatibles con macOS. Sin embargo algunos usuarios han reportado éxito en Catalina incluso con soporte de lectura y escritura, pero recomendamos encarecidamente quitar la unidad para evitar posibles problemas de arranque.")])])])]),e._v(" "),a("h2",{attrs:{id:"conexion-a-internet-cableada-ethernet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conexion-a-internet-cableada-ethernet"}},[e._v("#")]),e._v(" Conexión a internet cableada (Ethernet)")]),e._v(" "),a("p",[e._v("Prácticamente todos los adaptadores de red con cable tienen algún tipo de soporte en macOS, ya sea por los controladores incorporados o por kexts hechos por la comunidad. Las principales excepciones son:")]),e._v(" "),a("ul",[a("li",[e._v("Ethernet i225 2.5GBe de Intel\n"),a("ul",[a("li",[e._v("Encontrado en placas base Comet Lake de gama alta de escritorio.")]),e._v(" "),a("li",[e._v("Son postibles soluciones alternativas: "),a("a",{attrs:{href:"https://www.hackintosh-forum.de/forum/thread/48568-i9-10900k-gigabyte-z490-vision-d-er-l%C3%A4uft/?postID=606059#post606059",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fuente"),a("OutboundLink")],1),e._v(" y "),a("a",{attrs:{href:"/config.plist/comet-lake#add-2"}},[e._v("Ejemplo")])])])]),e._v(" "),a("li",[e._v("NICs de servidores de Intel\n"),a("ul",[a("li",[e._v("Hay soluciones alternativas para los chipsets "),a("a",{attrs:{href:"https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/",target:"_blank",rel:"noopener noreferrer"}},[e._v("X520 y X540"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("NICs de servidores Mellanox y Qlogic")])]),e._v(" "),a("h2",{attrs:{id:"conexion-a-internet-inalambrica-wifi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conexion-a-internet-inalambrica-wifi"}},[e._v("#")]),e._v(" Conexión a internet inalámbrica (WiFi)")]),e._v(" "),a("p",[e._v("La mayoría de las tarjetas WiFi que vienen con las laptops no son compatibles, ya que generalmente son Intel/Qualcomm. Si tienes suerte, es posible que tengas una tarjeta Atheros compatible, pero son compatibles hasta High Sierra.")]),e._v(" "),a("p",[e._v("La mejor opción es tener una tarjeta Broadcom compatible; consulta la "),a("a",{attrs:{href:"https://dortania.github.io/Wireless-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guía de compras de WiFi"),a("OutboundLink")],1),e._v(" para obtener recomendaciones.")]),e._v(" "),a("h2",{attrs:{id:"otros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#otros"}},[e._v("#")]),e._v(" Otros")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Sensores de huellas")]),e._v(" "),a("ul",[a("li",[e._v("Actualmente no hay forma de emular el sensor Touch ID, por lo que los sensores de huellas digitales no funcionarán.")])])]),e._v(" "),a("li",[a("strong",[e._v("Reconocimiento Facial con Windows Hello")]),e._v(" "),a("ul",[a("li",[e._v("Algunas laptops vienen con WHFR que está conectado a I2C (y se usa a través de tu iGPU), esas no funcionarán.")]),e._v(" "),a("li",[e._v("Otras vienen con WHFR que está conectado por USB, y si tienes suerte, puedes obtener la funcionalidad de la cámara, pero nada más.")])])]),e._v(" "),a("li",[a("strong",[e._v("Tecnología Intel Smart Sound")]),e._v(" "),a("ul",[a("li",[e._v("Las laptops con Intel SST no tendrán nada conectado a través de ellas (generalmente micrófono interno) funcionando, ya que no es compatible. Puedes consultar con el Administrador de dispositivos en Windows.")])])]),e._v(" "),a("li",[a("strong",[e._v("Combo de headphone jack")]),e._v(" "),a("ul",[a("li",[e._v("Es posible que algunas laptops con un headphone jack combinado para auriculares no reciban la entrada de audio a través de ellas y tengan que usar el micrófono incorporado o un dispositivo externo de entrada de audio a través de USB.")])])]),e._v(" "),a("li",[a("strong",[e._v("Puertos Thunderbolt USB-C")]),e._v(" "),a("ul",[a("li",[e._v('En el caso de los hackintosh, la compatibilidad con Thunderbolt todavía es dudosa en macOS, aún más con los controladores Alpine Ridge, que son los que tienen la mayoría de las laptops actuales. Han habido intentos de mantener el controlador encendido, lo que permite que funcionen Thunderbolt y USB-C, pero esto trae como consecuencia "kernel panics" y/o la pérdida de USB-C después de suspender la laptop. Si deseas utilizar el lado USB-C del puerto y poder suspender tu hack, debes enchufarlo en el arranque y mantenerlo enchufado.')]),e._v(" "),a("li",[e._v("Nota: Esto no se aplica solo a los puertos USB-C, solo a los puertos combinados Thunderbolt 3 y USB-C.")]),e._v(" "),a("li",[e._v("Deshabilitar Thunderbolt en la BIOS también resolverá esto.")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);