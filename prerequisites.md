# Comenzando con OpenCore

Antes de comenzar a hacer un sistema basado en OpenCore, debemos repasar algunas cosas.

## Prerequisitos
  
1. _**[CRUCIAL]**_ Tiempo y paciencia.
   * No comienzes a trabajar en esto si tienes plazos que cumplir o trabajo importante para hacer. Los hackintoshes no son algo en lo que debas confiar como máquina de trabajo. 
2. _**[CRUCIAL]**_ **CONOCE TU HARWARE**
   * El nombre de tu CPU al igual que su generación
   * Tu(s) GPU(s)
   * La configuración de tus dispositivos de almacenamiento (HDD/SSD, NVMe/AHCI/RAID/IDE)
   * El modelo de tu PC/Laptop si es de un OEM
   * Tu **Chipset de ethernet**
   * Tu chipset WLAN/Bluetooth
3. _**[CRUCIAL]**_ **CONOCIMINETO BÁSICO DE LAS LINEAS DE COMANDOS Y CÓMO USAR TERMINAL/CMD**
   * Esto nó solo es [CRUCIAL], es la base de toda esta guía. No te podemos ayudar si no sabes como usar `cd` o si no sabes cómo borrar un archivo, por ejemplo.
4. _**[CRUCIAL]**_ Una computadora que es compatible, como se ve en la sección de _**Compatibilidad**_ .
   * [Página de limitaciones de hardwarwe](/macos-limits.md)
5. _**[CRUCIAL]**_ Un USB con un mínimo de:
   * 12GB si usarás macOS para crear el USB
   * 4GB si usarás Windows o Linux para crear el USB
6. _**[CRUCIAL]**_ Una **conección a Ethernet** (No adaptadores WiFi, y los adaptadores USB de Ethernet pueden o no funcionar dependiendo del soporte de macOS). Debes saber el modelo de tu tarjeta LAN.
   * Debes tener ya sea un puerto de Ethernet físico, o un adaptador/"dongle" compatible con macOS. En el caso de que tengas una [tarjeta WiFi compatible](https://dortania.github.io/Wireless-Buyers-Guide/), puedes usarla.
     * Ten en cuenta que la mayoría de las tarjetas WiFi no son compatibles con macOS.
   * Para las personas que no pueden usar ethernet pero tienen un teléfono android, pueden conectar su teléfono android a el WiFi y después compartir internet via USB con [HoRNDIS](https://joshuawise.com/horndis#available_versions).
7. _**[CRUCIAL]**_ **Una instalación adecuada de un SO:**
   * Puede ser:
     * macOS (mejor si es una versión relativamente nueva)
     * Windows (Windows 10, 1703 o posterior)
     * Linux (con Python 2.7 o posterior), asegúrate que esté limpia y funcionando correctamente.
   * Para usuarios de Windows o Linux, **15GB** de espacio libre en el disco que estés trabajando. En Windows, el disco de tu SO, (C:), debe tener al menos 15GB libres.
   * Para usuarios de macOS, **30GB** de espacio libre en el disco de tu sistema.

## Otros tips de OpenCore

* Las extensiones del kernel son cargadas en el orden especificado en tu archivo de configuración, así que debes cargar las dependencias de estas extenciones antes de cargar la extensión en sí. Por ejemplo, Lilu debe ser cargado antes de WhateverGreen o VirtualSMC. 
* Los datos del SMBIOS, parches del ACPI y los SSDTs/DSDT son aplicados a todos los sistemas operativos. Puedes ajustar tus SSDTs con `If (_OSI ("Darwin")) {}`
  * Ten en cuenta que todos los SSDTs mencionados en esta guía han sido actualizados respectivamente y no deberían afectar el arranque del sistema.
* Algunos sistemas requieren UEFI puro para arrancar (esta configuración es comúnmente llamada "Windows 8.1/10 UEFI Mode" por los fabricantes de placas base. Véase también [flashear una ROM UEFI en GPUs más antiguas](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Radeon.en.md))
* OpenCore requiere una versión de macOS que soporta ya sea el Prelinked Kernel, MKext, cacheless o las Kernel Collections. Esto significa que el soporte va hasta 10.4, aunque fue introducido adecuadamente en 10.6.
* Aquellos que tengan problemas cambiando a OpenCore pueden referirse a la página de [Conversión desde Clover](https://github.com/dortania/OpenCore-Install-Guide/tree/master/clover-conversion) 
