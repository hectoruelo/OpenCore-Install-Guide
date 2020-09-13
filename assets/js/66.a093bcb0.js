(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{589:function(e,t,a){"use strict";a.r(t);var r=a(25),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"recolectando-archivos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recolectando-archivos"}},[e._v("#")]),e._v(" Recolectando archivos")]),e._v(" "),a("ul",[a("li",[e._v("Versión soportada: 0.6.1")])]),e._v(" "),a("p",[e._v("Esta sección es para obtener otros archivos necesarios para arrancar macOS, esperamos que conozcas bien tu hardware  antes de comenzar y que hayas hecho un hackintosh antes, ya que no entraremos en detalle aquí.")]),e._v(" "),a("blockquote",[a("p",[e._v("¿Cuál es la mejor manera de averiguar si mi hardware es compatible?")])]),e._v(" "),a("p",[e._v("Consulta la "),a("RouterLink",{attrs:{to:"/macos-limits.html"}},[a("strong",[e._v("Página de limitaciones de hardware")])]),e._v(" para obtener una mejor idea de lo que requiere macOS para arrancar, el soporte de hardware entre Clover y OpenCore es bastante similar.")],1),e._v(" "),a("blockquote",[a("p",[e._v("¿Cuáles son algunas formas de averiguar qué hardware tengo?")])]),e._v(" "),a("p",[e._v("En general, la página de especificaciones del producto tiene toda la información que necesitas, pero si todavía tienes problemas, hay algunas opciones:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Windows")]),e._v(":\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.ccleaner.com/speccy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Speccy"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.aida64.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Aida64"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Administrador de dispositivos")])])]),e._v(" "),a("li",[a("strong",[e._v("Linux")]),e._v(":\n"),a("ul",[a("li",[e._v("Correr "),a("code",[e._v("hwinfo")]),e._v(" en la terminal")])])])]),e._v(" "),a("h2",{attrs:{id:"drivers-del-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drivers-del-firmware"}},[e._v("#")]),e._v(" Drivers del firmware")]),e._v(" "),a("p",[e._v("Los controladores de firmware son controladores utilizados por OpenCore en el entorno UEFI. Se requieren principalmente para arrancar una computadora, ya sea ampliando la capacidad de parcheo de OpenCore o mostrándole diferentes tipos de discos en el selector de OpenCore (específicamente, discos HFS).")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Dato a tener en cuenta sobre la ubicación")]),e._v(": Estos archivos "),a("strong",[e._v("deben")]),e._v(" colocarse en "),a("code",[e._v("EFI / OC / Drivers /")])])]),e._v(" "),a("h3",{attrs:{id:"universal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#universal"}},[e._v("#")]),e._v(" Universal")]),e._v(" "),a("p",[e._v("Para la mayoría de los sistemas, solo necesitarás 2 controladores "),a("code",[e._v(".efi")]),e._v(" para comenzar a funcionar:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OcBinaryData/blob/master/Drivers/HfsPlus.efi",target:"_blank",rel:"noopener noreferrer"}},[e._v("HfsPlus.efi"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Necesario para ver volúmenes HFS (es decir, instaladores de macOS y particiones/imágenes de recuperación). "),a("strong",[e._v("No mezclar con otros drivers HFS")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenRuntime.efi"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Reemplazo para "),a("a",{attrs:{href:"https://github.com/acidanthera/AptioFixPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("AptioMemoryFix.efi"),a("OutboundLink")],1),e._v(", usado como una extensión para OpenCore que sirve para ayudar a parchear boot.efi, para arreglos relacionados a NVRAM y para una mejor administración de memoria.")])])])]),e._v(" "),a("h3",{attrs:{id:"usuarios-legacy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usuarios-legacy"}},[e._v("#")]),e._v(" Usuarios Legacy")]),e._v(" "),a("p",[e._v("Además de lo anterior, si tu hardware no es compatible con UEFI (2011 y anterior), necesitarás lo siguiente. Presta atención a cada entrada, ya que es posible que no necesites todas:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenUsbKbDxe.efi"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Se utiliza para el menú de selección de OpenCore en "),a("strong",[e._v("sistemas legacy que ejecutan DuetPkg")]),e._v(", "),a("a",{attrs:{href:"https://applelife.ru/threads/opencore-obsuzhdenie-i-ustanovka.2944066/page-176#post-856653",target:"_blank",rel:"noopener noreferrer"}},[e._v("no recomendado e incluso dañino en UEFI (Ivy Bridge y más reciente)"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OcBinaryData/blob/master/Drivers/HfsPlusLegacy.efi",target:"_blank",rel:"noopener noreferrer"}},[e._v("HfsPlusLegacy.efi"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Variante legacy de HfsPlus, utilizada para sistemas que carecen de soporte de instrucción RDRAND. Esto se ve generalmente en Sandy Bridge y anteriores.")])])])]),e._v(" "),a("p",[e._v("Estos archivos irán en tu carpeta Drivers en tu EFI:")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Legacy macOS installs")]),e._v(" "),a("p",[e._v("Si planeas en bootear versiónes antiguas de macOS/OS X, estos drivers serán útiles para ti:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OcBinaryData/blob/master/Drivers/PartitionDxe.efi",target:"_blank",rel:"noopener noreferrer"}},[e._v("PartitionDxe"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Requerido para arrancar recovery desde 10.7 hasta 10.9, ya que sin este tendrás el error "),a("code",[e._v("LoadImage - error")])]),e._v(" "),a("li",[e._v("Para Sandy Bridge y anterior tendrás que usar "),a("a",{attrs:{href:"https://github.com/acidanthera/OcBinaryData/blob/master/Drivers/PartitionDxeLegacy.efi",target:"_blank",rel:"noopener noreferrer"}},[e._v("PartitionDxeLegacy"),a("OutboundLink")],1),e._v(" debido a instrucciones RDRAND faltantes.")]),e._v(" "),a("li",[e._v("Ten en cuenta que 10.10 Yosemite y posterior no requieren de PartitionDxe en absoluto.")])])])])]),e._v(" "),a("h2",{attrs:{id:"kexts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kexts"}},[e._v("#")]),e._v(" Kexts")]),e._v(" "),a("p",[e._v("Un kext es una extensión del kernel, o "),a("strong",[e._v("k")]),e._v("ernel "),a("strong",[e._v("ext")]),e._v("ension en inglés, puedes pensar en esto como un driver para macOS, estos archivos irán en la carpeta Kexts en tu EFI.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Nota para Windows y Linux")]),e._v(": Los kexts se verán como carpetas normales en tu sistema operativo, "),a("strong",[e._v("verifica")]),e._v(" que la carpeta que estás instalando tiene una extensión .kext visible (y no agregues una manualmente si falta).\n"),a("ul",[a("li",[e._v("Si cualquier kext también include un archivo "),a("code",[e._v(".dSYM")]),e._v(", puedes simplemente eliminarlo, ya que sólo son para depuración.")])])]),e._v(" "),a("li",[a("strong",[e._v("Nota importante sobre la ubicación")]),e._v(": Estos archivos "),a("strong",[e._v("deben")]),e._v(" ser puestos en "),a("code",[e._v("EFI/OC/Kexts/")]),e._v(".")])]),e._v(" "),a("p",[e._v("Todos los kexts mencionados abajo pueden ser encontrados "),a("strong",[e._v("pre-compilados")]),e._v(" "),a("a",{attrs:{href:"http://kexts.goldfish64.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("en el repositorio de kexts"),a("OutboundLink")],1),e._v(". Los kexts aquí son compilados cada vez que hay un commit.")]),e._v(" "),a("h3",{attrs:{id:"kexts-imprescindibles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kexts-imprescindibles"}},[e._v("#")]),e._v(" Kexts imprescindibles")]),e._v(" "),a("p",[e._v("Sin los siguientes 2, ningún sistema es booteable:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/VirtualSMC/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("VirtualSMC"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Emula el chip SMC que se encuentra en Macs reales, sin este macOS no se iniciará")]),e._v(" "),a("li",[e._v("La alternativa es FakeSMC, que puede tener mejor o peor soporte, más comúnmente utilizado en hardware Legacy.")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/Lilu/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Un kext para parchear muchos procesos, requerido para AppleALC, WhateverGreen, VirtualSMC y muchos otros kexts. Sin Lilu, no funcionarán.")]),e._v(" "),a("li",[e._v("Ten en cuenta que Lilu y sus plugins requieren de OS X 10.8 y posterior para funcionar")])])])]),e._v(" "),a("h3",{attrs:{id:"plugins-de-virtualsmc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins-de-virtualsmc"}},[e._v("#")]),e._v(" Plugins de VirtualSMC")]),e._v(" "),a("p",[e._v("Los complementos a continuación no son necesarios para bootear, y simplemente agregan funcionalidad adicional al sistema, como la supervisión del hardware:")]),e._v(" "),a("ul",[a("li",[e._v("SMCProcessor.kext\n"),a("ul",[a("li",[e._v("Utilizado para monitorear la temperatura de la CPU, "),a("strong",[e._v("No funciona en sistemas basados en CPUs de AMD")])])])]),e._v(" "),a("li",[e._v("SMCSuperIO.kext\n"),a("ul",[a("li",[e._v("Utilizado para monitorear la velocidad de los ventiladores, "),a("strong",[e._v("No funciona en sistemas basados en CPUs de AMD")])])])]),e._v(" "),a("li",[e._v("SMCLightSensor.kext\n"),a("ul",[a("li",[e._v("Utilizado para el sensor de luz ambiental en laptops, "),a("strong",[e._v("las computadoras de escritorio pueden ignorar esto")])]),e._v(" "),a("li",[e._v("No lo uses si no tienes un sensor de luz ambiental, de lo contrario este kext puede causar problemas")])])]),e._v(" "),a("li",[e._v("SMCBatteryManager.kext\n"),a("ul",[a("li",[e._v("Utilizado para medir lecturas de batería en laptops, "),a("strong",[e._v("las computadoras de escritorio pueden ignorar esto")])]),e._v(" "),a("li",[e._v("No usar hasta que la batería haya sido parcheada correctamente, de lo contrario puede causar problemas")])])]),e._v(" "),a("li",[e._v("SMCDellSensors.kext\n"),a("ul",[a("li",[e._v("Permite una supervisión y un control más preciso de los ventiladores en las computadoras Dell. No lo uses si no tienes una computadora Dell compatible")])])])]),e._v(" "),a("h3",{attrs:{id:"graficos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graficos"}},[e._v("#")]),e._v(" Gráficos")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("WhateverGreen"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Utilizado para DRM, el boardID, arreglos del framebuffer, etc., todas las GPUs se benefician de este kext.")]),e._v(" "),a("li",[e._v("Ten en cuenta que el archivo SSDT-PNLF.dsl incluido sólo se requiere para laptops y computadoras All-In-One, consulta "),a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introducción a ACPI"),a("OutboundLink")],1),e._v(" para obtener más información")])])])]),e._v(" "),a("h3",{attrs:{id:"audio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audio"}},[e._v("#")]),e._v(" Audio")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/AppleALC/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleALC"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Se usa para parchear AppleHDA, el cual se usa para brindarte audio integrado. AMD 15h/16h pueden tener problemas con esto y los sistemas Ryzen/Threadripper rara vez tienen soporte de micrófono.")])])])]),e._v(" "),a("h3",{attrs:{id:"ethernet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethernet"}},[e._v("#")]),e._v(" Ethernet")]),e._v(" "),a("p",[e._v("Ahora asumiremos que sabes qué tarjeta de ethernet tiene tu sistema, recuerda que las páginas de especificaciones probablemente incluyan esta información")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/IntelMausi/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelMausi"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Requerido por la mayoría de NICs de Intel, chipsets basados en I211 necesitarán el kext SmallTreeIntel82576.")]),e._v(" "),a("li",[e._v("Los NICs 82578, 82579, i217, i218 e i219 de Intel son soportados oficialmente.")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/khronokernel/SmallTree-I211-AT-patch/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("SmallTreeIntel82576 kext"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Necesario para NICs i211 de Intel, este kext está basado en el kext SmallTree pero ha sido parcheado para soportar I211.")]),e._v(" "),a("li",[e._v("Necesario para la mayoría de placas base AMD con NICs de Intel")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Mieze/AtherosE2200Ethernet/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("AtherosE2200Ethernet"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Necesario para NICs Atheros y Killer")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Mieze/RTL8111_driver_for_OS_X/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("RealtekRTL8111"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Para el Ethernet Gigabit de Realtek")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Mieze/LucyRTL8125Ethernet",target:"_blank",rel:"noopener noreferrer"}},[e._v("LucyRTL8125Ethernet"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Para el Ethernet Realtek de 2.5Gb")])])]),e._v(" "),a("li",[e._v('Para las NICs i225-V de Intel, los parches se mencionan en la sección de "Device Properties" en la guía para Comet Lake de escritorio. No se requiere kext.')])]),e._v(" "),a("h3",{attrs:{id:"usb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb"}},[e._v("#")]),e._v(" USB")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/Sniki/OS-X-USB-Inject-All/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("USBInjectAll"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Se utiliza para inyectar controladores USB Intel en sistemas sin puertos USB definidos en ACPI")]),e._v(" "),a("li",[e._v("No necesario en SkyLake y posterior (AsRock es tonto y necesita esto)")]),e._v(" "),a("li",[a("strong",[e._v("No funciona")]),e._v(" en CPUs de AMD")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/RehabMan/OS-X-USB-Inject-All",target:"_blank",rel:"noopener noreferrer"}},[e._v("XHCI-unsupported"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Necesario para controladores USB no nativos")]),e._v(" "),a("li",[e._v("Sistemas basados en CPUs de AMD no necesitan esto")]),e._v(" "),a("li",[e._v("Chipsets que comúnmente necesitan esto:\n"),a("ul",[a("li",[e._v("H370")]),e._v(" "),a("li",[e._v("B360")]),e._v(" "),a("li",[e._v("H310")]),e._v(" "),a("li",[e._v("Z390 (No necesario en Mojave y posterior)")]),e._v(" "),a("li",[e._v("X79")]),e._v(" "),a("li",[e._v("X99")]),e._v(" "),a("li",[e._v("Placas madre AsRock (en las placas base Intel específicamente, sin embargo las placas Z490 no lo necesitan)")])])])])])]),e._v(" "),a("h3",{attrs:{id:"wifi-y-bluetooth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wifi-y-bluetooth"}},[e._v("#")]),e._v(" WiFi y Bluetooth")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/AirportBrcmFixup/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("AirportBrcmFixup"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Se usa para parchear tarjetas Broadcom que no son de Apple, "),a("strong",[e._v("no funcionará en Intel, Killer, Realtek, etc.")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/BrcmPatchRAM/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("BrcmPatchRAM"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Se utiliza para cargar firmware en el chipset Bluetooth Broadcom, requerido para todas las tarjetas que no sean Apple/Airport de Fenvi.")]),e._v(" "),a("li",[e._v("Debe ser emparejado con BrcmFirmwareData.kext\n"),a("ul",[a("li",[e._v("BrcmPatchRAM3 para 10.14+ (debe estar acompañado de BrcmBluetoothInjector)")]),e._v(" "),a("li",[e._v("BrcmPatchRAM2 para 10.11-10.14")]),e._v(" "),a("li",[e._v("BrcmPatchRAM para 10.10 o anterior")])])])])])]),e._v(" "),a("p",[e._v("El órden en "),a("code",[e._v("Kernel -> Add")]),e._v(" debe ser:")]),e._v(" "),a("ol",[a("li",[e._v("BrcmBluetoothInjector")]),e._v(" "),a("li",[e._v("BrcmFirmwareData")]),e._v(" "),a("li",[e._v("BrcmPatchRAM3")])]),e._v(" "),a("h3",{attrs:{id:"kexts-especificos-de-amd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kexts-especificos-de-amd"}},[e._v("#")]),e._v(" Kexts específicos de AMD")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",rel:"noopener noreferrer"}},[a("s",[e._v("NullCPUPowerManagment")]),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Tenemos una solución mucho mejor conocida como "),a("code",[e._v("DummyPowerManagement")]),e._v(" que se encuentra en "),a("code",[e._v("Kernel -> Quirks")]),e._v(" en su config.plist, esto se tratará en una página luego")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://cdn.discordapp.com/attachments/566705665616117760/566728101292408877/XLNCUSBFix.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("XLNCUSBFIX"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Arreglo de USBs para sistemas AMD FX, no recomendado para Ryzen")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://sourceforge.net/projects/voodoohda/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VoodooHDA"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Audio para sistemas FX y soporte de Mic+Audio en panel frontal para sistemas Ryzen, no mezclar con AppleALC. La calidad de audio es notablemente peor que AppleALC en CPUs Zen")])])])]),e._v(" "),a("h3",{attrs:{id:"extras"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extras"}},[e._v("#")]),e._v(" Extras")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleMCEReporterDisabler"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Útil desde Catalina en adelante para deshabilitar el kext AppleMCEReporter que causará pánicos en el kernel en las CPUs AMD y los sistemas de doble socket.")]),e._v(" "),a("li",[e._v("SMBIOS afectadas:\n"),a("ul",[a("li",[e._v("MacPro6,1")]),e._v(" "),a("li",[e._v("MacPro7,1")]),e._v(" "),a("li",[e._v("iMacPro1,1")])])])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/lvs1974/CpuTscSync",target:"_blank",rel:"noopener noreferrer"}},[e._v("CpuTscSync"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Necesario para sincronizar el TSC en algunas de las placas madre de servidores y HEDT de Intel, sin este macOS puede ser extremadamente lento o incluso no booteable. Skylake-X debería usar TSCAdjustReset en su lugar")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/interferenc/TSCAdjustReset",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSCAdjustReset"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("En Skylake-X, muchos firmwares, incluidos Asus y EVGA, no escribirán el TSC en todos los núcleos, por lo que tendremos que restablecer el TSC en el arranque en frío y en la reactivación luego de suspender el PC. La versión compilada se puede encontrar aquí: "),a("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/extra-files/TSCAdjustReset.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSCAdjustReset.kext"),a("OutboundLink")],1),e._v(". Ten en cuenta que  "),a("strong",[e._v("debe")]),e._v(" abrir el kext (Mostrar contenidos del paquete en Finder, "),a("code",[e._v("Contents -> Info.plist")]),e._v(") y cambiar el Info.plist -> "),a("code",[e._v("IOKitPersonalities -> IOPropertyMatch -> IOCPUNumber")]),e._v(" a la cantidad de hilos de CPU que tener desde "),a("code",[e._v("0")]),e._v(" (por ejemplo, el i9 7980xe, que tiene 18 núcleos sería "),a("code",[e._v("36")]),e._v(",  ya que tiene 36 hilos en total)")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/acidanthera/NVMeFix/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVMeFix"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Se utiliza para arreglar la administración de energía y la inicialización en NVMes que no sean de Apple, requiere macOS 10.14 o posterior")])])])]),e._v(" "),a("h3",{attrs:{id:"especificos-de-laptops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#especificos-de-laptops"}},[e._v("#")]),e._v(" Específicos de laptops")]),e._v(" "),a("p",[e._v("Para saber qué tipo de teclado y trackpad tienes, consulta el Administrador de dispositivos en Windows o "),a("code",[e._v("dmesg | grep input")]),e._v(" en Linux")]),e._v(" "),a("h4",{attrs:{id:"input-drivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-drivers"}},[e._v("#")]),e._v(" Input drivers")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/VoodooPS2/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("VoodooPS2"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Necesario para sistemas con teclados y trackpads PS/2")]),e._v(" "),a("li",[e._v("Usuarios de Trackpad también deben emparejar esto con "),a("a",{attrs:{href:"https://github.com/acidanthera/VoodooInput/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("VoodooInput"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/alexandred/VoodooI2C/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("VoodooI2C"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Se utiliza para reparar dispositivos I2C, los cuales se encuentran en algunas laptops con touchpads y pantallas táctiles más elegantes.")]),e._v(" "),a("li",[e._v("Debe ser emparejado a un plugin:\n"),a("ul",[a("li",[e._v("VoodooI2CHID - Implementa la especificación del dispositivos HID de Microsoft.")]),e._v(" "),a("li",[e._v("VoodooI2CElan - Implementa soporte para dispositivos propietarios de Elan. (no funciona en ELAN1200 +, usa el HID en vez de este)")]),e._v(" "),a("li",[e._v("VoodooI2CSynaptics - Implementa soporte para dispositivos propietarios de Synaptics.")]),e._v(" "),a("li",[e._v("VoodooI2CFTE - Implementa soporte para el touchpad FTE1001.")]),e._v(" "),a("li",[e._v("VoodooI2CUPDDEngine - Implementa el soporte de drivers Touchbase.")])])])])])]),e._v(" "),a("h4",{attrs:{id:"otros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#otros"}},[e._v("#")]),e._v(" Otros")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/al3xtjames/NoTouchID/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("NoTouchID"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("Recomendado para SMBIOS de MacBook que incluyen un sensor TouchID para solucionar problemas de autenticación, generalmente las SMBIOS de 2016 en adelante requerirán esto")])])])]),e._v(" "),a("p",[e._v("Consulta "),a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Kexts.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kexts.md"),a("OutboundLink")],1),e._v(" para obtener una lista completa de los kexts compatibles")]),e._v(" "),a("h2",{attrs:{id:"ssdts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssdts"}},[e._v("#")]),e._v(" SSDTs")]),e._v(" "),a("p",[e._v("Probablemente cuando veas todos esos SSDTs en la carpeta AcpiSamples te preguntarás si necesitas alguno de ellos. Por eso, ahora repasaremos qué SSDT(s) necesitas en "),a("strong",[e._v("TU sección ACPI específica de tu config.plist")]),e._v(", ya que los SSDTs que necesitas son específicos de cada plataforma. Algunos pueden ser incluso específicos de algun sistema en particular donde deben configurarse. Es posible que te pierdas fácilmente si te doy una lista de SSDTs para elegir.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comenzando con ACPI"),a("OutboundLink")],1),e._v(" tiene una sección más a fondo sobre SSDTs que incluye la información de cómo compilarlos en diferentes plataformas.")]),e._v(" "),a("p",[e._v("Un dato rápido importante de los SSDTs necesarios por si no lo sabías (este es el código fuente, deberás compilarlos en un archivo .aml):")]),e._v(" "),a("h3",{attrs:{id:"pcs-de-escritorio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pcs-de-escritorio"}},[e._v("#")]),e._v(" PCs de escritorio")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Platforms")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("CPU")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("EC")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("AWAC")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("NVRAM")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("USB")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("SandyBridge")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management",target:"_blank",rel:"noopener noreferrer"}},[e._v("CPU-PM"),a("OutboundLink")],1),e._v(" (Correr en post instalación)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Ivy Bridge")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"5"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"5"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Haswell")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/plug.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PLUG"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Broadwell")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Skylake")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC-USBX"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Kaby Lake")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Coffee Lake")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/awac.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-AWAC"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/nvram.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PMC"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Comet Lake")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/rhub.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-RHUB"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("AMD (15/16h)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("AMD (17h)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-CPUR.aml",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-CPUR para B550"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")])])])]),e._v(" "),a("h3",{attrs:{id:"pcs-de-escritorio-de-gama-alta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pcs-de-escritorio-de-gama-alta"}},[e._v("#")]),e._v(" PCs de escritorio de gama alta")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Platforms")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("CPU")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("EC")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("AWAC")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Nehalem and Westmere")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Ivy Bridge-E")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/plug.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PLUG"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Haswell-E")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC-USBX"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Broadwell-E")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Skylake-X")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/awac.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-AWAC"),a("OutboundLink")],1)])])])]),e._v(" "),a("h3",{attrs:{id:"laptops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#laptops"}},[e._v("#")]),e._v(" Laptops")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Platformas")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("CPU")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("EC")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Backlight")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("I2C Trackpad")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("AWAC")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("USB")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("IRQ")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("SandyBridge")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management",target:"_blank",rel:"noopener noreferrer"}},[e._v("CPU-PM"),a("OutboundLink")],1),e._v(" (Correr en post instalación)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Laptops/backlight.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PNLF"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"7"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"9"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/irq.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IRQ SSDT"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Ivy Bridge")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Haswell")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"8"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/plug.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PLUG"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"8"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Laptops/trackpad.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-GPI0"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Broadwell")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Skylake")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC-USBX"),a("OutboundLink")],1)]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"6"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Kaby Lake")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Coffee Lake (8va Gen) y Whiskey Lake")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"4"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Laptops/backlight.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PNLF-CFL"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Coffee Lake (9na Gen)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"3"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/awac.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-AWAC"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Comet Lake")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Ice Lake")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/rhub.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-RHUB"),a("OutboundLink")],1)])])])]),e._v(" "),a("p",[e._v("Continuando:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Platformas")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("NVRAM")])]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("IMEI")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Sandy Bridge")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"7"}},[e._v("N/A")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/imei.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-IMEI"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Ivy Bridge")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Haswell")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"8"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Broadwell")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Skylake")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Kaby Lake")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Coffee Lake (8va Gen) y Whiskey Lake")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Coffee Lake (9na Gen)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Universal/nvram.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-PMC"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Comet Lake")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"},attrs:{rowspan:"2"}},[e._v("N/A")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Ice Lake")])])])]),e._v(" "),a("h1",{attrs:{id:"ahora-con-todo-esto-hecho-dirigete-a-comenzando-con-acpi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ahora-con-todo-esto-hecho-dirigete-a-comenzando-con-acpi"}},[e._v("#")]),e._v(" Ahora, con todo esto hecho dirígete a "),a("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Comenzando con ACPI"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);