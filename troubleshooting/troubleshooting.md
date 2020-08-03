# Solución de problemas

* Versión soportada: 0.5.9

Esta sección es para aquellos que tienen problemas al iniciar OpenCore, macOS o que tienen problemas dentro de macOS. Si estás confundido acerca de dónde exactamente en el proceso de arranque de macOS estás atascado, leer la página [Proceso de arranque de macOS](../troubleshooting/boot.md) puede ayudar a aclarar tus dudas.

<extoc></extoc>

Si bien todavía es un trabajo en progreso, los usuarios de laptops que desean convertir una instalación de Clover existente pueden ver la [Conversión de Clover a OpenCore](https://github.com/dortania/OpenCore-Install-Guide/blob/master/clover-conversion) para más información

**Y si su problema no está cubierto, lee la documentación oficial de OpenCore: [Configuration.pdf](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf)**

# Arranque de OpenCore

* [Trancado en `no vault provided!`](#stuck-on-no-vault-provided)
* [Trancado en EndRandomSeed](#stuck-on-endrandomseed)
* [Trancado en `[EB|#LOG:EXITBS:START]`](#stuck-on-eblogexitbsstart)
* [No puedo ver particiones de macOS](#cant-see-macos-partitions)
* [Pantalla negra luego del picker](#black-screen-after-picker)
* [Trancado en `OC: OcAppleGenericInput... - Success`](#stuck-on-oc-ocapplegenericinput---success)
* [Trancado en `OCB: OcScanForBootEntries failure - Not Found`](#stuck-on-ocb-ocscanforbootentries-failure---not-found)
* [Trancado en `OCB: failed to match a default boot option`](#stuck-on-ocb-failed-to-match-a-default-boot-option)
* [Trancado en `OCABC: Memory pool allocation failure - Not Found`](#stuck-on-ocabc-memory-pool-allocation-failure---not-found)
* [Trancado en `OCS: No schema for DSDT, KernelAndKextPatch, RtVariable, SMBIOS, SystemParameters...`](#stuck-on-ocs-no-schema-for-dsdt-kernelandkextpatch-rtvariable-smbios-systemparameters)
* [Trancado en `OC: Driver XXX.efi at 0 cannot be found`](#stuck-on-oc-driver-xxxefi-at-0-cannot-be-found)
* [Trancado en `Buffer Too Small`](#stuck-on-buffer-too-small)
* [Trancado en `Plist only kext has CFBundleExecutable key`](#stuck-on-plist-only-kext-has-cfbundleexecutable-key)
* [Recibiendo `Failed to parse real field of type 1`](#receiving-failed-to-parse-real-field-of-type-1)
* [Trancado luego de la selección de la partición de macOS en OpenCore](#stuck-after-selection-macos-partition-on-opencore)
* [No puedo seleccionar nada en el menú](#cant-select-anything-in-the-picker)
* [Stuck on `This version of Mac OS X is not supported: Reason Mac...`](#stuck-on-this-version-of-mac-os-x-is-not-supported-reason-mac)
* [Errores `Couldn't allocate runtime area`](#couldnt-allocate-runtime-area-errors)
* [SSDTs no siendo agregados](#ssdts-not-being-added)
* [Bootear opencore reinicia a la BIOS](#booting-opencore-reboots-to-bios)
* [OCABC: Incompatible OpenRuntime r4, require r10](#ocabc-incompatible-openruntime-r4-require-r10)

## Trancado en `no vault provided!`

Apaga el vaulting en tu config.plist debajo de `Misc -> Security -> Vault`, debes configurarlo a:

* `Optional`

Si ya has ejecutado el `sign.command`, deberás restaurar el archivo OpenCore.efi ya que se ha introducido la firma RSA-2048 de 256 bytes. Puedes obtener una nueva copia de OpenCore.efi aquí: [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg/releases)

**Nota**: Vault y FileVault son 2 cosas distintas, consulta [Seguridad y FileVault](https://dortania.github.io/OpenCore-Post-Install/universal/security.html) para obtener más detalles.

## Trancado en `OC: Invalid Vault mode`

Es probable que sea un error ortográfico, las opciones en OpenCore distinguen entre mayúsculas y minúsculas, así que asegúrate de verificar detenidamente, **O**ptional es la forma correcta de ingresarlo en `Misc -> Security -> Vault`

## Trancado en EndRandomSeed

Algunos problemas:

**Problemas del Booter:**

* `DevirtualiseMmio` puede estar tomando áreas importantes en la memoria que son necesarias para otras cosas, puede que necesites deshabilitar este quirk o incluir en la lista blanca las regiones defectuosas: [Usando DevirtualiseMmio](../extras/kaslr-fix.md#using-devirtualisemmio)
* `SetupVirtualMap` puede ser necesario dependiendo del firmware, generalmente este quirk debe evitarse, pero la mayoría de los usuarios de Gigabyte y hardware antiguo (Broadwell y anterior) necesitarán esta peculiaridad para arrancar.
   * Se sabe que las placas madre Z490 fallan con `SetupVirtualMap` habilitado, especialmente en las placas Asus y AsRock.
* `RebuildAppleMemoryMap` puede no ser un fanático de tu firmware, y el uso de este quirk depende de tener `EnableWriteUnprotector` deshabilitado y `SyncRuntimePermissions` habilitado con la adición de tener una `Tabla de atributos de memoria (MAT)` en tu firmware. Si su firmware no tiene MATs, desactiva tanto `RebuildAppleMemoryMap` como `SyncRuntimePermissions` y luego habilita `EnableWriteUnprotector`.

Para verificar si tu placa madre tiene MATs, busca algo así en los logs:

```
OCABC: MAT support is 1
```

**Problemas con Kernel:**

* **AMD:** Faltan los [parches del kernel](https://github.com/AMD-OSX/AMD_Vanilla/tree/opencore)(sólo aplica para CPUs de AMD, asegúrate que son parches de OpenCore y no de Clover. Clover usa `MatchOS` mientras que OpenCore tiene `MinKernel` y `Maxkernel`)
* **Intel:** Faltan parches de CFG or XCPM
  * Habilita `AppleXcpmCfgLock` y `AppleCpuPmCfgLock`, lo cual deshabilita `PKG_CST_CNFIG_CONTROL` en el XNU y AppleIntelCPUPowerManagement respectivamente. No es recomendado como una solución a largo plazo porque puede causar inestabilidad.
  * Alternativamente puedes deshabilitar el CFG Lock correctamente: [Arreglando CFG Lock](https://dortania.github.io/OpenCore-Post-Install/misc/msr-lock.html)
* **Intel:** `AppleXcpmExtraMsrs` puede ser necesario, generalmente para Pentiums, HEDT y otros sistemas que no están soportados nativamente en macOS. **No usar en AMD**
  
**UEFI Issues:**

* `ProvideConsoleGop` probablemente no está presente ya que es necesario para trancisionar a la próxima pantalla. Originalmente esto era parte de AptioMemoryFix pero ahora está fusionado dentro de OpenCore con este quirk. Puede ser encontrado en UEFI -> Output
* `IgnoreInvalidFlexRatio` falta, esto es necesario para Broadwell y anteriores. **No para AMD o para Skylake y posterior**

## Trancado en `[EB|#LOG:EXITBS:START]`

Esto es en realidad el mismo error que `EndRandomSeed` así que aplican los mismos arreglos (10.15.4 y posterior cambiaron el protocolo del debug por si eres curioso):

**Problemas del Booter:**

* `DevirtualiseMmio` puede estar tomando áreas importantes en la memoria que son necesarias para otras cosas, puede que necesites deshabilitar este quirk o incluir en la lista blanca las regiones defectuosas: [Usando DevirtualiseMmio](../extras/kaslr-fix.md#using-devirtualisemmio)
* `SetupVirtualMap` puede ser necesario dependiendo del firmware, generalmente este quirk debe evitarse, pero la mayoría de los usuarios de Gigabyte y hardware antiguo (Broadwell y anterior) necesitarán esta peculiaridad para arrancar.
   * Se sabe que las placas madre Z490 fallan con `SetupVirtualMap` habilitado, especialmente en las placas Asus y AsRock.
* `RebuildAppleMemoryMap` puede no ser un fanático de tu firmware, y el uso de este quirk depende de tener `EnableWriteUnprotector` deshabilitado y `SyncRuntimePermissions` habilitado con la adición de tener una `Tabla de atributos de memoria (MAT)` en tu firmware. Si su firmware no tiene MATs, desactiva tanto `RebuildAppleMemoryMap` como `SyncRuntimePermissions` y luego habilita `EnableWriteUnprotector`.

Para verificar si tu placa madre tiene MATs, busca algo así en los logs:

```
OCABC: MAT support is 1
```

**Problemas con Kernel:**

* **AMD:** 
* **Intel:** Faltan parches de CFG or XCPM
  * Habilita `AppleXcpmCfgLock` y `AppleCpuPmCfgLock`, lo cual deshabilita `PKG_CST_CNFIG_CONTROL` en el XNU y AppleIntelCPUPowerManagement respectivamente. No es recomendado como una solución a largo plazo porque puede causar inestabilidad.
  * Alternativamente puedes deshabilitar el CFG Lock correctamente: [Arreglando CFG Lock](https://dortania.github.io/OpenCore-Post-Install/misc/msr-lock.html)
* **Intel:** `AppleXcpmExtraMsrs` puede ser necesario, generalmente para Pentiums, HEDT y otros sistemas que no están soportados nativamente en macOS. **No usar en AMD**
  
**UEFI Issues:**

* `ProvideConsoleGop` probablemente no está presente ya que es necesario para trancisionar a la próxima pantalla. Originalmente esto era parte de AptioMemoryFix pero ahora está fusionado dentro de OpenCore con este quirk. Puede ser encontrado en UEFI -> Output
* `IgnoreInvalidFlexRatio` falta, esto es necesario para Broadwell y anteriores. **No para AMD o para Skylake y posterior**

## No puedo ver particiones de macOS

Cosas principales a verificar:

* ScanPolicy configurado a `0` para mostrar todos los discos
* Tener los drivers del firmware correctos como HfsPlus (ten en cuenta que no deberías usar ApfsDriverLoader desde 0.5.8)
* Configurar UnblockFsConnect a True en tu config.plist -> UEFI -> Quirks. Necesario por algunos sistemas HP
* Configura `UEFI -> APFS` para ver discos basados en APFS:
  * **EnableJumpstart**: YES
  * **HideVerbose**: YES
  * **MinDate**: `-1`
  * **MinVersion**: `-1`

## Pantalla negra luego de el menú

Esto es debido a la falta de ConsoleGOP, habilítalo en tu config:

* `UEFI -> Output -> ProvideConsoleGop`

Otra posibilidad es que el problema sea porque `RebuildAppleMemoryMap` está habilitado, así que deshabilitalo en tu config:

* `Booter -> Quirks -> RebuildAppleMemoryMap`

Si esto no ayuda, toma las [versiones debug](https://github.com/acidanthera/OpenCorePkg/releases) de `OpenCore.efi` y `BOOTx64.efi` y reemplázalas en su EFI. Esto mostrará mucha más información sobre dónde se está atascando tu hack.

## Trancado en `OC: OcAppleGenericInput... - Success`

Esto en realidad no es un error, es en realidad que OpenCore no te está mostrando toda la información de depuración. Esto es antes/mientras se está cargando el kernel así que tenemos que verificar que:

* Intel:
  * CFG-Lock deshabilitado en la BIOS **o** `AppleCpuPmCfgLock` y `AppleCpuPmCfgLock` habilitados en Kernel -> Quirks (si puedes es mejor que deshabilites CFG lock desde la BIOS, pero muchos no tienen la opción de hacer esto)
* AMD:
  * Verifica que tienes los parches del kernel correctos en tu config (recuerda que OpenCore usa `MinKernel` y `MaxKernel` mientras que Clover usa `MatchOS`)
    * [Ryzen/Threadripper(17h)](https://github.com/AMD-OSX/AMD_Vanilla/tree/opencore/17h)
    * [Bulldozer/Jaguar(15h/16h)](https://github.com/AMD-OSX/AMD_Vanilla/tree/opencore/15h_16h)

Si esto no ayuda, toma las [versiones debug](https://github.com/acidanthera/OpenCorePkg/releases) de `OpenCore.efi` y `BOOTx64.efi` y reemplázalas en su EFI. Esto mostrará mucha más información sobre dónde se está atascando tu hack.

## Trancado en `OCB: OcScanForBootEntries failure - Not Found`

Esto es debido a que OpenCore no puede encontrar ningún disco con tu ScanPolicy actual, configurándolo a `0` permite que se muestren todas las opciones de arranque

* `Misc -> Security -> ScanPolicy -> 0`

## Trancado en `OCB: failed to match a default boot option`


El mismo arreglo que `OCB: OcScanForBootEntries failure - Not Found`, OpenCore no puede encontrar ningún disco con el ScanPolicy actual, la configuración a` 0` permitirá mostrar todas las opciones de arranque

* `Misc -> Security -> ScanPolicy -> 0`

## Trancado en `OCABC: Memory pool allocation failure - Not Found`

Esto se debe a configuraciones incorrectas del BIOS y/o valores incorrectos del Booter. Asegúrate de que config.plist -> Booter -> Quirks sea correcto y verifica la configuración de tu BIOS:

* Above 4G Decoding está habilitado
* CSM está deshabilitado (Habilitar el modo WHQL de Windows8.1/10 puede hacer lo mismo en algunas placas madre)
* Que tu BIOS está actualizado (Z390 y HEDT son conocidos por tener firmware mal escrito)

## Trancado en `OCS: No schema for DSDT, KernelAndKextPatch, RtVariable, SMBIOS, SystemParameters...`

Esto es debido a que, o estás usando un config de Clover o estás usando un configurador como OpenCore y Clover configurator de Mackie. Necesitarás comenzar de nuevo y hacer un config nuevo o intentar darte cuenta toda la basura que tienes que eliminar de tu config. **Esto es por lo que no soportamos configuradores, son conocidos por estos errores**

## Trancado en `OC: Driver XXX.efi at 0 cannot be found`

Verifica que lo que tienes en EFI/OC/Drivers también está en tu config.plist -> UEFI -> Drivers

Ten en cuenta que las entradas distinguen entre mayúsculas y minúsculas

## Trancado en `Buffer Too Small`

* Habilita Above 4G Decoding en tu BIOS

## Trancado en `Plist only kext has CFBundleExecutable key`

`Executable path` falta o es incorrecto

## Recibiendo "Failed to parse real field of type 1"

* Un valor que fue configurado a `real` cuando no debería serlo, esto generalmente es cuando Xcode convierte  `HaltLevel` por accidente:

  ```
  <key>HaltLevel</key>
  ```

  ```
  <real>2147483648</real>
  ```

  Para arreglar esto, cambia `real` por `integer`:

  ```
  <key>HaltLevel</key>
  ```

  ```
  <integer>2147483648</integer>
  ```
  
## Trancado luego de la selección de la partición de macOS en OpenCore

* CFG-Lock no está deshabilitado (Sólo para usuarios de Intel). Estas son algunas soluciones:
  * [Parchear tu MSR E2](https://dortania.github.io/OpenCore-Post-Install/misc/msr-lock.html)(Solución recomendada)
  * Habilita `AppleXcpmCfgLock` y `AppleCpuPmCfgLock`, lo cual deshabilita `PKG_CST_CNFIG_CONTROL` en el XNU y AppleIntelCPUPowerManagement respectivamente. No es recomendado como una solución a largo plazo porque puede causar inestabilidad.
* Parches del kernel AMD no están funcionando (sólo para usuarios AMD):
  * Parches faltantes o desactualizados
* Driver de teclado incompatible:
  * Deshabilita `PollAppleHotKeys` y habilita `KeySupport`, luego elimina [OpenUsbKbDxe](https://github.com/acidanthera/OpenCorePkg/releases) de tu config.plist -> UEFI -> Drivers
  * Si lo anterior no funciona, haz lo contrario: deshabilita `KeySupport`, luego agrega [OpenUsbKbDxe](https://github.com/acidanthera/OpenCorePkg/releases) a tu config.plist -> UEFI -> Drivers

## No puedo seleccionar nada en el menú de OpenCore

  * Deshabilita `PollAppleHotKeys` y habilita `KeySupport`, luego elimina [OpenUsbKbDxe](https://github.com/acidanthera/OpenCorePkg/releases) de tu config.plist -> UEFI -> Drivers
  * Si lo anterior no funciona, haz lo contrario: deshabilita `KeySupport`, luego agrega [OpenUsbKbDxe](https://github.com/acidanthera/OpenCorePkg/releases) a tu config.plist -> UEFI -> Drivers

## Trancado en `This version of Mac OS X is not supported: Reason Mac...`

Este error para cuando tu SMBIOS no está soportada por esa versión de macOS. Asegúrate que tus valores de SMBIOS están configuradas en `PlatformInfo->Generic` con `Automatic` habilitado. Recordatorio de SMBIOS soportadas en macOS 10.15 Catalina:

* iMac13,x+
* iMacPro1,1
* MacPro6,1+
* MacBook8,1+
* MacBookAir5,x+
* MacBookPro9,x+

Otro recordatorio, las siguientes SMBIOS requieren versiones más nuevas de macOS:

* iMac19,x       10.14.4 (18E226)
* MacPro7,1      10.15.0 (19A583)
* MacBookAir9,1  10.15.4 (19E287)
* MacBookPro16,1 10.15.1 (19B2093)
* MacBookPro16,2 10.15.4 (19E2269)
* MacBookPro16,3 10.15.4 (19E2269)

## Errores de `Couldn't allocate runtime area` 

Mira [Arreglando valores slide de KASLR](../extras/kaslr-fix.md)

## SSDTs no siendo agregados

Con OpenCore, hay algunas comprobaciones de seguridad adicionales agregadas alrededor de los archivos ACPI, específicamente que el encabezado de la longitud de la tabla debe ser igual al tamaño del archivo. Esto es culpa de iASL cuando compiló el archivo. Ejemplo de cómo encontrarlo:

```
* Original Table Header:
*     Signature        "SSDT"
*     Length           0x0000015D (349)
*     Revision         0x02
*     Checksum         0xCF
*     OEM ID           "ACDT"
*     OEM Table ID     "SsdtEC"
*     OEM Revision     0x00001000 (4096)
*     Compiler ID      "INTL"
*     Compiler Version 0x20190509 (538510601)
```


El valor de `Length` y `checksum` es lo que nos importa, por lo que si nuestro SSDT es de 347 bytes, entonces queremos cambiar `Length` a `0x0000015B (347) `(el` 015B` está en HEX)

La mejor manera de arreglar esto es tomar una copia más reciente de iASL o la copia de Acidanthera de [MaciASL](https://github.com/acidanthera/MaciASL/releases) y rehacer el SSDT



## Arrancando OpenCore reinicia a la BIOS

* Estructura de carpetas EFI incorrecta, asegúrate de que todos tus archivos OC estén dentro de una carpeta EFI ubicada en su ESP (partición del sistema EFI)

 ![Estructura del directorio de los docs de OpenCore](../images/troubleshooting/troubleshooting-md/oc-structure.png)

## OCABC: Incompatible OpenRuntime r4, require r10

OpenRuntime.efi desactualizado, asegúrate de que BOOTx64.efi, OpenCore.efi y OpenRuntime son **todos de la misma versión**. Cualquier cosa que no coincida interrumpirá el arranque

* **Nota**: FwRuntimeServices ha cambiado su nombre a OpenRuntime con 0.5.7 y más reciente

# Booteo de macOS

* [Trancado en `RTC...`, `PCI ConfigurationBegins`, `Previous Shutdown...`, `HPET`, `HID: Legacy...`](#stuck-on-rtc-pci-configuration-begins-previous-shutdown-hpet-hid-legacy)
* ["Waiting for Root Device" o signo de prohibido](#waiting-for-root-device-or-prohibited-sign-error)
* [Instalador de macOS en ruso](#macos-installer-in-russian)
* [Instalador de macOS dañado](#macos-installer-being-damaged)
* [Trancado en o cerca de `IOConsoleUsers: gIOScreenLock...`](#stuck-on-or-near-ioconsoleusers-gioscreenlockgiolockstate-3)
* [Pantalla revuelta y perturbada en laptops](#scrambled-screen-on-laptops)
* [Pantalla negra luego de `IOConsoleUsers: gIOScreenLock...` en Navi](#black-screen-after-ioconsoleusers-gioscreenlock-on-navi)
* [Intel de serie 300 trancados en `apfs_module_start...`](#300-series-intel-stalling-on-apfsmodulestart)
* [Kernel Panic `Cannot perform kext summary`](#kernel-panic-cannot-perform-kext-summary)
* [Kernel Panic `AppleIntelMCEReporter`](#kernel-panic-appleintelmcereporter)
* [Kernel Panic `AppleIntelCPUPowerManagement`](#kernel-panic-appleintelcpupowermanagement)
* [Trancado en el instalador de macOS luego de 30 segundos](#frozen-in-the-macos-installer-after-30-seconds)
* [15h/16h CPU reinicio luego de pantalla de datos y privacidad](#15h16h-cpu-reboot-after-data--privacy-screen)
* [Teclado funciona pero el trackpad no](#keyboard-works-but-trackpad-does-not)
* [Suspensión crasheando en AMD](#sleep-crashing-on-amd)
* [Kernel Panic en `Invalid frame pointer`](#kernel-panic-on-invalid-frame-pointer)
* [`kextd stall[0]: AppleACPICPU`](#kextd-stall0-appleacpicpu)
* [MediaKit reporta que no hay espacio suficiente](#mediakit-reports-not-enough-space)
* [DiskUtility error al eliminar](#diskutility-failing-to-erase)

## Stuck on `RTC...`, `PCI Configuration Begins`, `Previous Shutdown...`, `HPET`, `HID: Legacy...`

Esta área en general es cuando muchos dispositivos PCI son configurados y preparados por primera vez y aquí es cuando la mayoría de los errores sucederán. Otros nombres pueden incluir:

* `apfs_module_start...`,
* `Waiting for Root device`,
* `Waiting on...IOResources...`,
* `previous shutdown cause...`

Lugares principales a revisar:


* **Falta parche de EC**:
  * Para computadoras de escritorio, asegúrate de tener tu SSDT de EC tanto en EFI/OC/ACPI como en ACPI -> Add, **verifica que esté habilitado.**
  * Si no tienes uno, consíguelo aquí: [Introducción a ACPI](https://dortania.github.io/Getting-Started-With-ACPI/)
* **Conflicto IRQ**:
  * Común en las computadoras portátiles y computadoras prehechas antiguas, ejecuta la opción FixHPET de SSDTTime y agrega los parches SSDT-HPET.aml y ACPI resultantes a tu configuración (el SSDT no funcionará sin los parches ACPI)
* **Problema de asignación de PCI**:
  * **ACTUALIZA TU BIOS**, asegúrate de que esté actualizado. La mayoría de los OEM tienen una asignación de PCI rota en firmwares antiguos, especialmente en AMD
  * Asegúrate de que Above 4G decoding esté habilitado en el BIOS, si no hay una opción disponible, agrega `npci = 0x2000` a los boot args.
    * Nota de CPUs AMD: **No tengas habilitada la configuración Above 4G y npci en los argumentos de arranque, entrarán en conflicto**. Esta regla no se aplica a X99
  * Otras configuraciones de BIOS que son importantes: CSM deshabilitado, Windows 8.1 / 10 Modo UEFI habilitado

* **Problemas NVMe o SATA**:
  * A veces, si se utiliza un controlador SATA defectuoso o una unidad NVMe no compatible, normalmente puede quedarse atascado aquí. Cosas que puedes consultar:
    * No estás usando una unidad de estado sólido Samsung PM981 o Micron 2200S NVMe
    * Samsung 970 Evo Plus con el último firmware (los firmwares más antiguos eran conocidos por la inestabilidad y los bloqueos, [consulta aquí para obtener más información](https://www.samsung.com/semiconductor/minisite/ssd/download/tools/))
    * SATA HotPlug está deshabilitado en la BIOS (causa problemas más comunmente en sistemas basados ​​en CPUs AMD)
    * Asegúrate de que las unidades NVMe estén configuradas como modo NVMe en la BIOS (algunas BIOS tienen un error en el que puede configurar las unidades NVMe como SATA)
* **Falla de NVRAM**:
  * Problema común en placas madre HEDT y de la serie 300, tienes un par de caminos para seguir:
    * Series 300 de Intel: Consulta [Introducción a ACPI](https://dortania.github.io/Getting-Started-With-ACPI/) sobre cómo hacer SSDT-PMC.aml
    * HEDT: Consulta [Emulación de NVRAM](https://dortania.github.io/OpenCore-Post-Install/misc/nvram.html) sobre cómo detener la escritura de NVRAM, ten en cuenta que para la instalación no necesitas ejecutar el script. Simplemente configura tu config.plist

* **Falta RTC**:
   * Comúnmente encontrado en la serie 300 y las placas madre X299/Cascade Lake-X refresh, debido a que el reloj RTC está deshabilitado de forma predeterminada. Consulta [Introducción a ACPI](https://dortania.github.io/Getting-Started-With-ACPI/) sobre cómo crear un SSDT-AWAC.aml
   * Algunos firmwares de HP también deshabilitaron el RTC en el HP 250 G6 sin ninguna forma de volver a habilitarlo realmente, los usuarios maldecidos con dicho hardware necesitarán crear un reloj RTC falso para que macOS juegue:

Ejemplo de cómo se ve un RTC deshabilitado sin forma de habilitarlo (ten en cuenta que no hay ningún valor para volver a habilitarlo como `STAS`):

![](../images/troubleshooting/troubleshooting-md/rtc.png)

## "Waiting for Root Device" o signo de prohibido

Generalmente visto como un error de USB, hay dos formas de arreglarlo:

* Si estás alcanzando el límite de 15 puertos, puedes evitar esto temporalmente con `XhciPortLimit` pero para uso a largo plazo, te recomendamos que hagas un [USB map](https://github.com/corpnewt/USBMap). CorpNewt también tiene una guía para esto: [Guía de USBmap](https://dortania.github.io/OpenCore-Post-Install/usb/)
* Otro problema puede ser que ciertos firmwares no pasarán las propiedades de USBs a macOS, para solucionar esto podemos habilitar `UEFI -> Quirks -> ReleaseUsbOwnership` en tu config.plist
  * Habilitar XHCI Handoff en el BIOS también puede solucionar esto
* Para las CPU AMD de 15h y 16h, es posible que debas agregar lo siguiente:
  * [XLNCUSBFix.kext](https://cdn.discordapp.com/attachments/566705665616117760/566728101292408877/XLNCUSBFix.kext.zip)
* Si XLNCUSBFix aún no funciona, intenta lo siguiente:
  * [AMD StopSign-fixv5](https://cdn.discordapp.com/attachments/249992304503291905/355235241645965312/StopSign-fixv5.zip)
  
Otro posible problema es la falta de puertos USB en tu DSDT, macOS no es excelente para encontrar hardware y necesita propiedades explícitamente definidas para muchas cosas. Esto significa que si un puerto USB no está definido, macOS no podrá encontrarlo. Para solucionar esto, utilizamos [USBInjectAll](https://github.com/Sniki/OS-X-USB-Inject-All/releases) para corregir el arranque, ten en cuenta que esto **solo funciona en los chipsets USB de Intel** y debería requerirse en Broadwell y sistemas más antiguos (con algunas placas AsRock más nuevas que también lo necesitan)

Los usuarios de AMD con puertos faltantes en su DSDT, tendrán que probar todos los puertos en su sistema y rezar, generalmente los puertos 3.1  AsMedia funcionan sin problemas.

En raras ocasiones (principalmente en laptops), el controlador SATA no es oficialmente compatible con macOS. Para resolver esto, queremos hacer algunas cosas:

* Establecer SATA en modo AHCI en el BIOS
  * macOS no admite el modo RAID o IDE de hardware correctamente.
  * Ten en cuenta que las unidades que ya utilizan la tecnología Intel Rapid Storage (RST, soft RAID para Windows y Linux) no serán accesibles en macOS.
* [SATA-unsupported.kext] (https://github.com/RehabMan/hack-tools/tree/master/kexts/SATA-unsupported.kext)
  * Agrega soporte para controladores SATA no soportados, comúnmente en laptops.
  * Para controladores SATA muy antiguos, [AHCIPortInjector.kext] (https://www.insanelymac.com/forum/files/file/436-ahciportinjectorkext/) puede ser más adecuado.

Ten en cuenta que solo experimentarás este problema después de instalar macOS en la unidad, al iniciar el instalador de macOS no se producirá un error debido a problemas de SATA.

## instalador de macOS en ruso

La configuración del sample predeterminada está en ruso porque los Slavs gobiernan el mundo de los Hackintoshes, verifica tu valor `prev-lang: kbd` en` NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82`. Se establece a `656e2d55533a30` para Inglés de EEUU: en-US: 0 y se puede encontrar una lista completa en [AppleKeyboardLayouts.txt](https://github.com/acidanthera/OpenCorePkg/blob/master/Utilities/AppleKeyboardLayouts/AppleKeyboardLayouts.txt ) Para aquellos que usan un editor de texto simple (es decir, UEFI Shell, Notepad++, etc.), `656e2d55533a30` se convertirá a `ZW4tVVM6MA==`

Default sample config is in Russian because slavs rule the Hackintosh world, check your `prev-lang:kbd` value under `NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82`. Set to `656e2d55533a30` for American: en-US:0 and a full list can be found in [AppleKeyboardLayouts.txt](https://github.com/acidanthera/OpenCorePkg/blob/master/Utilities/AppleKeyboardLayouts/AppleKeyboardLayouts.txt). For those using with a simple text editor(ie. UEFI Shell, Notepad++, etc), `656e2d55533a30` will become `ZW4tVVM6MA==`

Es posible que también debas restablecer la NVRAM en el selector de arranque

¿Aún no funcionó? Bueno, tiempo para las armas pesadas. Forzaremos la eliminación de esa propiedad exacta y dejaremos que OpenCore la reconstruya:

`NVRAM -> Block -> 7C436110-AB2A-4BBB-A880-FE41995C9F82 -> Item 0` luego configura el tipo a `String` y el valor `prev-lang:kbd`

![](../images/troubleshooting/troubleshooting-md/lang.png)

## Instalador de macOS dañado

Si ha descargado macOS antes de Octubre de 2019, es probable que tenga un certificado de instalador de macOS vencido, hay 2 formas de solucionar esto:

* Descargar la copia más reciente de macOS
* Cambiar la fecha en la terminal a cuando el certificado era válido

Para ese último:

* Desconecta todos los dispositivos de red (Ethernet, deshabilita el Wifi)
* En el terminal del recovery establece la fecha al 1 de septiembre de 2019:

```
date 0901000019
```

## Trancado en o cerca de `IOConsoleUsers: gIOScreenLock...`/`gIOLockState (3...`

Esto es justo antes de que la GPU es inicializada, verifica lo siguiente:

* Que tu GPU este capacitada para UEFI (GTX 7XX/2013+)
* CSM está desactivado en la BIOS
* Estás forzando el link speed de PCIe a 3.0
* Verifica que el ig-platform-id y device-id son válidos si estás corriendo con tu iGPU.
  * UHD 630s de escritorio pueden llegar a necesitar `00009B3E`
* Prueba [arreglos de WhateverGreen](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)
  * El boot arg `-igfxmlr`. Esto también se puede manifestar como el error de "división entre cero".
* Usuarios de iGPU Coffee Lake pueden necesitar `igfxonln=1` en 10.15.4 y posterior

## Pantalla revuelta y perturbada en laptops

Habilita CSM en tus ajustes UEFI. Esto también puede aparecer como"Boot legacy ROMs" u otro ajuste legacy.

## Black screen after `IOConsoleUsers: gIOScreenLock...` on Navi

* Agrega `agdpmod=pikera` a tus boot args
* Cambia de conector de monitor en tu GPU
* Intenta arrancar con el SMBIOS MacPro7,1 y el boot arg `agdpmod=ignore`

Para usuarios Navi MSI, necesitarán aplicar el parche mencionado aquí: [Instalador no funcionando con 5700XT #901](https://github.com/acidanthera/bugtracker/issues/901)

Específicamente, agregando lo siguiente debajo de `Kernel -> Patch`:

```
Base:
Comment: Navi VBIOS Bug Patch
Count: 1
Enabled: YES
Find: 4154592C526F6D2300
Identifier: com.apple.kext.AMDRadeonX6000Framebuffer
Limit: 0
Mask:
MinKernel:
MaxKernel:
Replace: 414D442C526F6D2300
ReplaceMask:
Skip: 0
```

## 300 series Intel stalling on `apfs_module_start...`

Comúnmente siendo por sistemas que corren relojes AWAC, dirígete a la sección [Comenzando con ACPI](https://dortania.github.io/Getting-Started-With-ACPI/) section

## Kernel Panic `Cannot perform kext summary`

Generalmente visto como un problema que rodea al prelinked kernel, específicamente que macOS está teniendo dificultades para interpretar los que inyectamos. Verifica que tus kexts estén en el orden correcto (el kext principal y luego los complementos, Lilu siempre es el primero) y que los kexts con ejecutables los tienen y que los kexts de sólo plist kexts no.

## Kernel Panic `AppleIntelMCEReporter`

Con macOS Catalina, el soporte de doble socket está roto, y un dato curioso sobre el firmware de AMD es que algunas placas informarán en realidad múltiples CPU enchufadas. Para solucionar esto, agrega [AppleMCEReporterDisabler](https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip) a EFI/OC/Kexts y config.plist -> Kernel -> Add

## Kernel Panic `AppleIntelCPUPowerManagement`

Esto probablemente se deba a que NullCPUPowerManagement no está presente o no funciona, el que está alojado en la Guía Vanilla de AMD OSX está dañado. Ve a gritarle a Shannee para que lo arregle. Para solucionar el problema, elimina NullCPUPowerManagement de `Kernel -> Add` y` EFI/OC/Kexts` y luego habilita `DummyPowerManagement` en` Kernel -> Quirks`

## Frozen in the macOS installer after 30 seconds

Esto probablemente se deba a que NullCPUPowerManagement no está presente o no funciona, el que está alojado en la Guía Vanilla de AMD OSX está dañado. Ve a gritarle a Shannee para que lo arregle. Para solucionar el problema, elimina NullCPUPowerManagement de `Kernel -> Add` y` EFI/OC/Kexts` y luego habilita `DummyPowerManagement` en` Kernel -> Quirks`

## 15h/16h CPU reboot after Data & Privacy screen

Sigue las instrucciones aquí luego de UPDATE 2: [Arreglar reinicio en data y privacidad](https://www.insanelymac.com/forum/topic/335877-amd-mojave-kernel-development-and-testing/?do=findComment&comment=2658085)

## macOS congelado just antes del loggueo

Este es un ejemplo común de TSC malo, para la mayoría de los sistemas agrega [CpuTscSync](https://github.com/lvs1974/CpuTscSync)

En Skylake-X, muchos firmwares, incluidos Asus y EVGA, no escribirán el TSC en todos los núcleos, por lo que tendremos que restablecer el TSC en el arranque en frío y en la reactivación luego de suspender el PC. La versión compilada se puede encontrar aquí: [TSCAdjustReset.kext](https://github.com/dortania/OpenCore-Install-Guide/blob/master/extra-files/TSCAdjustReset.kext.zip). Ten en cuenta que  **debes** abrir el kext (Mostrar contenidos del paquete en Finder, `Contents -> Info.plist`) y cambiar el Info.plist -> `IOKitPersonalities -> IOPropertyMatch -> IOCPUNumber` a la cantidad de hilos de CPU que tener desde `0` (por ejemplo, el i9 7980xe, que tiene 18 núcleos sería `36`,  ya que tiene 36 hilos en total)

La manera más común de ver el problema del TSC:

Caso 1    |  Caso 2
:-------------------------:|:-------------------------:
![](../images/troubleshooting/troubleshooting-md/asus-tsc.png)  |  ![](../images/troubleshooting/troubleshooting-md/asus-tsc-2.png)

## El teclado funciona pero el trackpad no

Asegúrate de que VoodooInput está listado *antes* que VoodooPS2 y VoodooI2C en tu config.plist.

### Solución de problemas con VoodooI2C

Fíjate en el orden de la carga de tus kexts, asegúrate que el orden coincide con lo mostrado en [Recolectando archivos Files](../ktext.md):

1. VoodooGPIO, VoodooInput, and VoodooI2CServices en cualquier orden (Encontrado en VoodooI2C.kext/Contents/PlugIns)
2. VoodooI2C
3. Satellite/Plugin Kext

Asegurate de que tienes SSDT-GPIO en EFI/OC/ACPI y en tu config.plist debajo de ACPI -> Add. Si sigues teniendo problemas, consulta la página de [Comenzando con ACPI GPIO](https://dortania.github.io/Getting-Started-With-ACPI/Laptops/trackpad.html).

## Kernel Panic en `Invalid frame pointer`

Esto se debe a algún problema relacionado con  `Booter -> Quirks` que configuraste, los principales aspectos a verificar:

* `DevirtualiseMmio`
  * Todavía se requieren ciertos espacios MMIO para funcionar correctamente, por lo que deberás excluir estas regiones en Booter -> MmioWhitelist o deshabilitar este quirk por completo
* `SetupVirtualMap`
  * requerido para los firmwares que necesitan que se corrija la dirección de memoria virtual, esto se encuentra comúnmente en laptops y sistemas Gigabyte
  * Ten en cuenta que las protecciones de memoria de Icelake y Comet Lake rompen este quirk, así que evítalo
  * Las máquinas virtuales como QEMU también requieren este quirk deshabilitada
  
Otro problema puede ser que macOS está en conflicto con la protección contra escritura del registro CR0, para resolver esto tenemos 2 opciones:

* Si tu firmware es compatible con MATs (firmware de 2018+):
  * EnableWriteUnprotector -> False
  * RebuildAppleMemoryMap -> True
  * SyncRuntimePermissions -> True
* Para firmwares más antiguos:
  * EnableWriteUnprotector -> True
  * RebuildAppleMemoryMap -> False
  * SyncRuntimePermissions -> False

Con respecto al soporte de MAT, los firmwares construidos luego de EDK 2018 lo respaldarán y muchos OEM incluso han agregado soporte desde las laptops Skylake. El problema es que no siempre es fácil saber si un OEM ha actualizado el firmware, puedes verificar los registros de OpenCore para ver si el suyo lo admite:

```
OCABC: MAT support is 1
```

Nota: `1` significa que admite MAT, mientras que `0` significa que no.


## `kextd stall[0]: AppleACPICPU`

Esto se debe a que falta un emulador SMC o está roto, asegúrate de lo siguiente:

* Lilu y VirtualSMC están en EFI/OC/kexts y en tu config.plist
* Lilu está antes de VirtualSMC en la lista de kexts
* El último recurso es probar FakeSMC en su lugar, **no uses FakeSMC y VirtualSMC al mismo tiempo**

## MediaKit reporta que no hay espacio suficiente

This error is due to a small EFI, by default Windows will create a 100MB EFI whereas macOS will expect 200MB. To get around this you have 2 way to go:

* Expand the EFI of the drive to 200MB(See Google on how)
* Format the entire drive instead of just the partition
  * Note by default Disk Utility only shows partitions, press Cmd/Win+2 to show all devices(Alternatively you can press the view button)

Default           |  Show All Devices(Cmd+2)
:-------------------------:|:-------------------------:
![](../images/troubleshooting/troubleshooting-md/Default.png)  |  ![](../images/troubleshooting/troubleshooting-md/Showalldevices.png)

## DiskUtility failing to erase

This is either 1(or more) of 5 issues:

* Formatting partition and not the drive, see [MediaKit reports not enough space](#mediakit-reports-not-enough-space)
* DiskUtility has an odd bug where it will fail on first erase, try erasing again
* SATA Hot-plug support in the BIOS is causing issues(try disabling this option)
* Old firmware, make sure the drive is on the latest firmware
* And finally, you may just have a bad drive

# macOS post-install

* [Broken iMessage and Siri](#broken-imessage-and-siri)
* [No on-board audio](#no-on-board-audio)
* [BIOS reset or sent into Safemode after reboot/shutdown?](#bios-reset-or-sent-into-safemode-after-rebootshutdown)
* [macOS GPU acceleration missing on AMD X570](#macos-gpu-acceleration-missing-on-amd-x570)
* [DRM Broken](#drm-broken)
* ["Memory Modules Misconfigured" on MacPro7,1](#memory-modules-misconfigured-on-macpro71)
* [Apps crashing on AMD](#apps-crashing-on-amd)
* [AssetCache Content Caching unavailable in virtual machine](#assetcache-content-caching-unavailable-in-virtual-machine)
* [Coffee Lake systems failing to wake](#coffee-lake-systems-failing-to-wake)

## Broken iMessage and Siri

* En0 device not setup as `Built-in`, couple ways to fix:
  * Find PCI path for your NIC with [gfxutil](https://github.com/acidanthera/gfxutil/releases)(ie: `ethernet`, GBE1, ). Then via DeviceProperties in your config.plist, apply the property of `built-in` with the value of `01` and type `Data`. Hackintool can also grab the PciRoot path if you're having issues with gfxutil. **Recommended method**
  * [NullEthernet.kext](https://bitbucket.org/RehabMan/os-x-null-ethernet/downloads/) + [SSDT-RMNE](https://github.com/RehabMan/OS-X-Null-Ethernet/blob/master/ssdt-rmne.aml). **Only recommended when first solution doesn't work**

![](../images/troubleshooting/troubleshooting-md/en0-built-in.png)

If these fixes do not work, see the [Fixing iServices page](https://dortania.github.io/OpenCore-Post-Install/universal/iservices.html) for more in-depth guide.

## No on-board audio

Refer to [Fixing Audio with AppleALC](https://dortania.github.io/OpenCore-Post-Install/) section

## BIOS reset or sent into Safemode after reboot/shutdown

Issue with AppleRTC, quite a simple fix:

* config.plist -> Kernel -> Quirks -> DisableRtcChecksum -> true

**Note**: If you still have issues, you'll need to use [RTCMemoryFixup](https://github.com/acidanthera/RTCMemoryFixup/releases) and exclude ranges. See [here for more info](https://github.com/acidanthera/bugtracker/issues/788#issuecomment-604608329)

The following boot-arg should handle 99% of cases(pair this with RTCMemoryFixup):

```
rtcfx_exclude=00-FF
```

If this works, slowly shorten the excluded area until you find the part macOS is getting fussy on

## macOS GPU acceleration missing on AMD X570

Verify the following:

* GPU is UEFI capable(GTX 7XX/2013+)
* CSM is off in the BIOS
* Forcing PCIe 3.0 link speed

## DRM Broken

See [Fixing DRM](https://dortania.github.io/OpenCore-Post-Install/universal/drm.html) page

## "Memory Modules Misconfigured" on MacPro7,1

Add [MacProMemoryNotificationDisabler kext](https://github.com/IOIIIO/MacProMemoryNotificationDisabler/releases/) to EFI/OC/Kexts and `Kernel -> Add`. Note that this kext has an odd quirk here it requires WhateverGreen to function correctly.

## Apps crashing on AMD

~~Easy fix, buy Intel~~

So with AMD, whenever Apple calls CPU specific functions the app will either not work or outright crash. Here are some apps and their "fixes":

* Adobe Products don't always work
  * Some fixes can be found here: [Adobe Fixes](https://adobe.amd-osx.com/)
  * Do note these fixes just disables functionality, they're not really fixes
* Virtual Machine running off of AppleHV's framework will not work(ie: Parallels 15, VMware)
  * VirtualBox works fine as it doesn't use AppleHV
  * VMware 10 and older can work as well
  * Parallels 13.1.0 and older are known to work as well
* Docker broken
  * Docker toolbox is the only solution as it's based off of VirtualBox, many features are unavailable with this version
* Xcode Apple Watch simulator is broken in Catalina
  * Mojave works fine
* IDA Pro won't install
  * There's an Intel specific check in the installer, app itself is likely fine
* 15/16h CPU web pages crashing
  * Follow directions here after UPDATE 5: [Fix web pages](https://www.insanelymac.com/forum/topic/335877-amd-mojave-kernel-development-and-testing/?do=findComment&comment=2661857)

## Sleep crashing on AMD

This is generally seen on AMD who use the chipset's USB controller, specifically for the Ryzen series and newer. The main way to tell if you're having issues with this is checking logs after either sleeping or waking:

* In terminal:
  * `log show --last 1d | grep "Wake reason"` verify it

Should result in something like this:

```
Sleep transition timed out after 180 seconds while calling power state change callbacks. Suspected bundle: com.apple.iokit.IOUSBHostFamily.
```

You can double check which controller is XHC0 via IOReg and checking the Vendor ID(1022 for AMD chipset). The fix for this sleep issue is either:

* Avoid the chipset USB all together(ideally set `_STA = 0x0` to disable the controller outright with an SSDT)
* Correct the USBX power properties to what the controller expects

## AssetCache Content Caching unavailable in virtual machine

Errors such as:

```bash
$ sudo AssetCacheManagerUtil activate
AssetCacheManagerUtil[] Failed to activate content caching: Error Domain=ACSMErrorDomain Code=5 "virtual machine"...
```

arise due to `VMM` flag being exposed by sysctl.

Apply [VmAssetCacheEnable](https://github.com/ofawx/VmAssetCacheEnable) kernel patch to disguise the flag and allow normal operation.

## Coffee Lake systems failing to wake

In macOS 10.15.4, there were some changes made to AGPM that can cause wake issues on Coffee Lake systems. Specifically displays hooked up to the iGPU would fail to wake. To resolve this:

* Add `igfxonln=1` to boot-args
* Make sure you're using [WhateverGreen v1.3.8](https://github.com/acidanthera/WhateverGreen/releases) or newer

# Other issues

* [Can't run `acpidump.efi`](#cant-run-acpidumpefi)
* [Fixing SSDTTime: `Could not locate or download iasl!`](#fixing-ssdttime-could-not-locate-or-download-iasl)
* [Fix Python: `Python is not installed or not found on PATH`](#fix-python-python-is-not-installed-or-not-found-on-path)
* [Windows Startup Disk can't see APFS drives](#windows-startup-disk-cant-see-apfs-drives)
* [Incorrect resolution with OpenCore](#incorrect-resolution-with-opencore)
* [No temperature/fan sensor output](#no-temperaturefan-sensor-output)
* [Can't find Windows/BootCamp drive in picker](#cant-find-windowsbootcamp-drive-in-picker)
* ["You can't change the startup disk to the selected disk" error](#you-cant-change-the-startup-disk-to-the-selected-disk-error)
* [Booting Windows results in BlueScreen or Linux crashes](#booting-windows-results-in-bluescreen-or-linux-crashes)
* [Booting Windows error: `OCB: StartImage failed - Already started`](#booting-windows-error-ocb-startimage-failed---already-started)
* [iASL warning, # unresolved](#iasl-warning--unresolved)
* [No Volume/Brightness control on external monitors](#no-volumebrightness-control-on-external-monitors)
* [Disabling SIP](#disabling-sip)

## Can't run `acpidump.efi`

Call upon OpenCore shell:

```
shell> fs0: //replace with proper drive

fs0:\> dir //to verify this is the right directory

  Directory of fs0:\

   01/01/01 3:30p  EFI

fs0:\> cd EFI\OC\Tools //note that its with forward slashes

fs0:\EFI\OC\Tools> acpidump.efi -b -n DSDT -z
```

## Fixing SSDTTime: `Could not locate or download iasl!`

This is usually due to an outdated version of Python, try either updating Python or add iasl to the scripts folder for SSDTTime:

* [iasl macOS version](https://bitbucket.org/RehabMan/acpica/downloads/iasl.zip)
* [iasl Windows version](https://acpica.org/downloads/binary-tools)
* [iasl Linux version](http://amdosx.kellynet.nl/iasl.zip)

## Fix Python: `Python is not installed or not found on PATH`

Easy fix, download and install the latest python:

* [macOS link](https://www.python.org/downloads/macos)
* [Windows link](https://www.python.org/downloads/windows/)
* [Linux link](https://www.python.org/downloads/source/)

Make sure `Add Python to PATH`

![](../images/troubleshooting/troubleshooting-md/python-path.png)

## Windows Startup Disk can't see APFS drives

* Outdated BootCamp drivers(generally ver 6.0 will come with brigadier, BootCamp Utility in macOS provides newer version like ver 6.1). CorpNewt has also forked brigadier fixing these issues as well: [CorpNewt's brigadier](https://github.com/corpnewt/brigadier)

## Incorrect resolution with OpenCore

* Follow [Fixing Resolution and Verbose](https://dortania.github.io/OpenCore-Post-Install/cosmetic/verbose.html) for correct setup, set `UIScale` to `02` for HiDPI
* Users also have noticed that setting `ConsoleMode` to Max will sometimes fail, leaving it empty can help

## No temperature/fan sensor output

So couple things:

* iStat Menus doesn't yet support MacPro7,1 readouts
* VirtualSMC's bundled sensors do not support AMD

For iStat, you'll have to wait for an update. For AMD users, you can use either:

* [SMCAMDProcessor](https://github.com/trulyspinach/SMCAMDProcessor/releases)
  * Still in early beta but great work has been done, note it's been mainly tested on Ryzen
* [FakeSMC3_with_plugins](https://github.com/CloverHackyColor/FakeSMC3_with_plugins/releases)

**Note for AMD with FakeSMC**:

* FileVault support requires more work with FakeSMC
* Make sure no other SMC kexts are present, specifically those from [VirtualSMC](https://github.com/acidanthera/VirtualSMC/releases)

## Can't find Windows/BootCamp drive in picker

So with OpenCore, we have to note that legacy Windows installs are not supported, only UEFI. Most installs now are UEFI based but those made by BootCamp Assistant are legacy based, so you'll have to find other means to make an installer(Google's your friend). This also means MasterBootRecord/Hybrid partitions are also broken so you'll need to format the drive you want to install onto with DiskUtility. See the [Multiboot Guide](https://hackintosh-multiboot.gitbook.io/hackintosh-multiboot/) on best practices

Now to get onto troubleshooting:

* Make sure `Misc -> Security -> ScanPolicy` is set to `0` to show all drives
* Enable `Misc -> Boot -> Hideself` is enabled when Windows bootloader is located on the same drive

## "You can't change the startup disk to the selected disk" error

This is commonly caused by irregular partition setup of the Windows drive, specifically that the EFI is not the first partition. To fix this, we need to enable this quirk:

* `PlatformInfo -> Generic -> AdviseWindows -> True`

![](../images/troubleshooting/troubleshooting-md/error.png)

## Booting Windows results in BlueScreen or Linux crashes

This is due to alignment issues, make sure `SyncRuntimePermissions` is enabled on firmwares supporting MATs. Check your logs whether your firmware supports Memory Attribute Tables(generally seen on 2018 firmwares and newer)

Common Windows error code:

* `0xc000000d`

## Booting Windows error: `OCB: StartImage failed - Already started`

This is due to OpenCore getting confused when trying to boot Windows and accidentally thinking it's booting OpenCore. This can be avoided by either move Windows to it's own drive *or* adding a custom drive path under BlessOverride. See [Configuration.pdf](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf) for more details.

## iASL warning, # unresolved

If you try to decompile your DSDT and get an error similar to this:

```
iASL Warning: There were 19 external control methods found during disassembly, but only 0 were resolved (19 unresolved)
```

This happens when one ACPI table requires the rest for proper referencing, it does not accept the creation of DSDTs as we're only using it for creating a select few SSDTs. For those who are worried, you can run the following:

```
iasl * [insert all ACPI files here]
```

## No Volume/Brightness control on external monitors

Oddly enough, macOS has locked down digital audio from having control. To bring back some functionality, the app [MonitorControl](https://github.com/the0neyouseek/MonitorControl/releases) has done great work on improving support in macOS

## Disabling SIP

SIP or proper known as System Integrity Protection, is a security technology that attempts to prevent any malicious software and the end user from damaging the OS. First introduced with OS X El Capitan, SIP has grown over time to control more and more things in macOS, including limiting edits to restricted file locations and 3rd party kext loading with `kextload`(OpenCore is unaffected as kexts are injected at boot). To resolve this, Apple has provided numerous configuration options in the NVRAM variable `csr-active-config` which can either be set in the macOS recovery environment or with OpenCore's NVRAM section(The latter will be discussed below).

You can choose different values to enable or disable certain flags of SIP. Some useful tools to help you with these are [CsrDecode](https://github.com/corpnewt/CsrDecode) and [csrstat](https://github.com/JayBrown/csrstat-NG). Common values are as follows (bytes are pre-hex swapped for you):

* `00000000` - SIP completely enabled (0x0).
* `03000000` - Disable kext signing (0x1) and filesystem protections (0x2).
* `FF030000` - Disable all [flags in macOS High Sierra](https://opensource.apple.com/source/xnu/xnu-4570.71.2/bsd/sys/csr.h.auto.html) (0x3ff).
* `FF070000` - Disable all [flags in macOS Mojave](https://opensource.apple.com/source/xnu/xnu-4903.270.47/bsd/sys/csr.h.auto.html) and in [macOS Catalina](https://opensource.apple.com/source/xnu/xnu-6153.81.5/bsd/sys/csr.h.auto.html) (0x7ff) as Apple introduced a value for executable policy.
* `FF0F0000` - Disable all flags in macOS Big Sur (0xfff) which has another new [flag for authenticated root](https://eclecticlight.co/2020/06/25/big-surs-signed-system-volume-added-security-protection/).

**Note**: Disabling SIP with OpenCore is quite a bit different compared to Clover, specifically that NVRAM variables will not be overwritten unless explicitly told so under the `Delete` section. So if you've already set SIP once either via OpenCore or in macOS, you must override the variable:

* `NVRAM -> Block -> 7C436110-AB2A-4BBB-A880-FE41995C9F82 -> csr-active-config`
  
![](../images/troubleshooting/troubleshooting-md/sip.png)

## Writing to the macOS system partition

With macOS Catalina and newer, Apple split the OS and user data into 2 volumes where the system volume is read-only by default. To make these drives writable we'll need to do a few things:

**macOS Catalina**

1. [Disable SIP](#disabling-sip)
2. Mount drive as writable (Run `sudo mount -uw /` in terminal)

**macOS Big Sur**

1. [Disable SIP](#disabling-sip)
2. Mount drive as writable (See below link for command)
3. Create a new snapshot after the changes (See below link for command)
4. Tag this snapshot for next boot (See below link for command)

Full credit and command links provided by [ASentientBot](https://forums.macrumors.com/threads/macos-11-big-sur-on-unsupported-macs-thread.2242172/post-28603788) and [@mac_editor](https://egpu.io/forums/profile/mac_editor/):

* [MacRumors Thread](https://forums.macrumors.com/threads/macos-11-big-sur-on-unsupported-macs-thread.2242172/post-28603788)
* [eGPU.io thread](https://egpu.io/forums/postid/82119/)

