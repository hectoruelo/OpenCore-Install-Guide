(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{592:function(e,a,r){"use strict";r.r(a);var o=r(25),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"¿por-que-opencore-encima-de-clover-y-otros"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#¿por-que-opencore-encima-de-clover-y-otros"}},[e._v("#")]),e._v(" ¿Por qué OpenCore encima de Clover y otros?")]),e._v(" "),r("ul",[r("li",[e._v("Versión soportada 0.6.0")])]),e._v(" "),r("p",[e._v("Esta sección es un breve resumen de por qué la comunidad ha estado haciendo la transición a OpenCore. Aquellos que solo quieren una máquina con macOS pueden omitir esta página.")]),e._v(" "),r("h2",{attrs:{id:"caracteristicas-de-opencore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#caracteristicas-de-opencore"}},[e._v("#")]),e._v(" Características de OpenCore")]),e._v(" "),r("ul",[r("li",[e._v("En promedio, los sistemas con OpenCore se inician más rápido que los que usan Clover, ya que se realizan menos parches innecesarios.")]),e._v(" "),r("li",[e._v("Mejor estabilidad general debido a que los parches pueden ser mucho más precisos:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://www.reddit.com/r/hackintosh/comments/fo9bfv/macos_10154_update/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Actualización 10.15.4 de macOS (Post en inglés)"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Los parches AMD no necesitan actualizarse con cada actualización de seguridad menor")])])]),e._v(" "),r("li",[e._v("Mayor seguridad en general:\n"),r("ul",[r("li",[e._v("No es necesario deshabilitar la Protección de integridad del sistema (SIP)")]),e._v(" "),r("li",[e._v("Soporte de FileVault 2 incorporado")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/security.html#Vault",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vaulting"),r("OutboundLink")],1),e._v(" Permite crear EFIs instantáneas que eviten modificaciones no deseadas")]),e._v(" "),r("li",[e._v('Soporte de arranque seguro o "secure boot" (actualmente en auditoría de seguridad, vendrá próximamente)')])])]),e._v(" "),r("li",[e._v("Cambios de SO con BootCamp y la selección del dispositivo de arranque son compatibles ya que OpenCore lee las variables NVRAM configuradas por el disco de arranque como una Mac real.")]),e._v(" "),r("li",[e._v("Omite la tecla de acceso rápido de arranque a través de boot.efi. Mantiene presionada la tecla "),r("code",[e._v("Option")]),e._v(" o "),r("code",[e._v("ESC")]),e._v(" al inicio para elegir un dispositivo de arranque, "),r("code",[e._v("Cmd+R")]),e._v(" para ingresar a Recuperación o "),r("code",[e._v("Cmd+Opt+P+R")]),e._v(" para restablecer NVRAM.")])]),e._v(" "),r("h2",{attrs:{id:"soporte-de-software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#soporte-de-software"}},[e._v("#")]),e._v(" Soporte de Software")]),e._v(" "),r("p",[e._v("La principal razón por la que alguien puede querer cambiar de otros gestores de arranque a OpenCore es en realidad por el soporte de software:")]),e._v(" "),r("ul",[r("li",[e._v("No se hacen mas pruebas de Kexts con Clover:\n"),r("ul",[r("li",[e._v("Tienes un bug con un kext? Muchos desarrolladores incluyendo la organización "),r("a",{attrs:{href:"https://github.com/acidanthera",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acidanthera"),r("OutboundLink")],1),e._v(", la cual hace la mayoría de tus Kexts favoritos, no te darán soporte a menos que estés utilizando OpenCore.")])])]),e._v(" "),r("li",[e._v("Muchos drivers de firmware han sido fusionados en OpenCore:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Soporte de APFS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Soporte de FileVault"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/AptioFixPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parches de Firmware"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/AMD-OSX/AMD_Vanilla/tree/opencore",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parches para AMD"),r("OutboundLink")],1),e._v(":\n"),r("ul",[r("li",[e._v("Tienes hardware basado en AMD? Bueno, los parches de kernel requeridos para iniciar macOS ya no están soportados por Clover, y sólo funcionan con OpenCore.")])])])]),e._v(" "),r("h2",{attrs:{id:"inyeccion-de-kexts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inyeccion-de-kexts"}},[e._v("#")]),e._v(" Inyección de Kexts")]),e._v(" "),r("p",[e._v("Para entender mejor el sistema de inyección de Kexts de OpenCore, primero debemos mirar cómo funciona Clover:")]),e._v(" "),r("ol",[r("li",[e._v("Parchea el SIP para deshabilitarlo")]),e._v(" "),r("li",[e._v("Parchea para habilitar el código zombie del XNU para poder inyectar kexts")]),e._v(" "),r("li",[e._v("Parchea la condición de carrera con inyección de kexts")]),e._v(" "),r("li",[e._v("Inyecta los kexts")]),e._v(" "),r("li",[e._v("Parchea el SIP para habilitarlo de nuevo")])]),e._v(" "),r("p",[e._v("Cosas a tener en cuenta con el método de Clover:")]),e._v(" "),r("ul",[r("li",[e._v("El llamado al código zombie del XNU no se ha utilizado desde 10.7, es sorprendente que Apple no haya quitado este código aún.\n"),r("ul",[r("li",[e._v("Con este parche, las actualizaciones del SO se rompen frecuentemente, como ha ocurrido recientemente con macOS 10.14.4 y 10.15")]),e._v(" "),r("li",[e._v("Deshabilita el SIP y luego intenta habilitarlo nuevamente, no creo que sea necesario decir mucho más.")])])]),e._v(" "),r("li",[e._v("Probablemente se rompa con 10.16")]),e._v(" "),r("li",[e._v("Soporta macOS hasta versiones antiguas (10.5 en adelante)")])]),e._v(" "),r("p",[e._v("Hechémosle un vistazo al método de OpenCore:")]),e._v(" "),r("ol",[r("li",[e._v('Toma el llamado "prelinked kernel" y kexts listos para inyectar')]),e._v(" "),r("li",[e._v("Reconstruye el caché en el ambiente del EFI con los nuevos kexts")]),e._v(" "),r("li",[e._v("Agrega este nuevo cache")])]),e._v(" "),r("p",[e._v("Cosas a tener en cuenta con el método de OpenCore:")]),e._v(" "),r("ul",[r("li",[e._v('El formato del "prelinked kernel" sigue siendo el mismo desde 10.6, por lo que es más dificil perder soporte.\n'),r("ul",[r("li",[e._v('Esto significa que el soporte comienza en 10.7, pero 10.6 puede ser utilizado debido a que esta versión no tiene un "prelinked kernel"')])])]),e._v(" "),r("li",[e._v("Es mucho más estable, ya que se hacen mucho menos parches.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);