# Apoyando las guías

**Note**: Esta es una guía community run guide que no es endorsed fficialmente por Acidanthera. Por favor no molestan a Acidanthera con problemas de esta guía.

Want to help support the guide? Well there's some ways you can help!

* [Contribuir via Issues](#contributing-via-issues)
* [Contribuir via PRs](#contributing-via-prs)
* [Contribuir via Traduccions](#contributing-via-translations)

Note: For those wanting to contribute financially, we seriously appreciate it but we're a non-profit organization. We do this to teach, not to make money. If you have some money left over we highly recommend donating it to a charity. [Crohn's and Colitis Canada](https://crohnsandcolitis.donorportal.ca/Donation/DonationDetails.aspx?L=en-CA&G=159&F=1097&T=GENER) is one we recommend if you have none on mind.

## Contributing via Issues

 Contributing via Issues es pretty simple pero hay unas reglas:

* Mantén el tab de issues dedicado solamente a problemas de las guías, **no personal hackintosh issues**. No es el lugar para discuss problemas de instalación.
* If for a typo or better clarification, please indicate what page it was on. Would appreciate not going for a scavenger hunt on where these issues are.

Puedes encontrar el bugtracker aquí: [Bugtracker](https://github.com/dortania/bugtracker)

## Contributing via PRs

Some guidelines when contributing via PRs:

* Usa tu cerebro (porfa).
* Proofread your submissions.
* Pull Requests can be denied if we feel it does not fit o tiene información inaccurate. Generalmente te diremos por qué lo rejectamos o pedimos revisiones.
  * We would also appreciate sources for any bigger commits to make it easier on us to verify the info you provide is valid
* Images must be hosted locally in the repo under the `../images/` folder
* Your PR must be run through a markdown lint and have all issues fixed.
* Por lo general, intenta a evitar el uso de "non-Acidanthera" tools cuando sea posible. Generalmente queremos evitar el uso de herramientas de terceros  - though if it's impossible otherwise, then you can link it.
  * Herramientas explicitly banned:
    * UniBeast, MultiBeast y KextBeast
      * Se puede encontrar más información aquí: [Tonymacx86-stance](https://github.com/khronokernel/Tonymcx86-stance)
    * TransMac
      * Conocido por crear borked USB drives
    * Instaladores de Niresh
      * Quisiéramos evitar piracy con las guías

### Cómo Contribuir

La mejor manera de test tus commits y asegurarte de que están formateado correctamente es descargar Node.js y luego correr `npm install` para instalar dependencias. Cuando corres `npm run dev`, configurará un webserver local a que puedes conectar para ver los cambios que has hecho. `npm test` will throw any errors at you about formatting and spellchecking as well. Si quieras usar `markdownlint` para intentar a arreglar automáticamente arreglar el linting, corre `npm run fix-lint`.

Instrucciones paso-a-paso:

* [Forkear este repo](https://github.com/dortania/OpenCore-Install-Guide/fork/)
* Instalar las herraminetas requeridas:
  * [Node.js](https://nodejs.org/)
* Hacer tus cambios.
* Build el sitio:
  * `npm install` (Para instalar todos los plugins requeridos)
  * `npm run dev` (Preview el sitio)
    * Se puede encontrar en `http://localhost:8080`
* Check linting y spellcheck:
  * `npm test`
  * `npm run lint` y `npm run spellcheck` (para correrlos individualmente)
  * `npm run fix-lint` (To fix any potential issues)

### Tips

Algunas herramientas que facilitan contribucion:

* [Typora](https://typora.io) for real time markdown rendering.
* [TextMate](https://macromates.com) for easy and powerful mass find/replace.
* [Github Desktop](https://desktop.github.com) for more user friendly GUI.

## Contribuir via Traducciones

Aunque las guías de Dortania primarily English based, sabemos que hay un montón de otros idiomas en el mundo plenty and that not everyone is fluent in English. Si quieres ayudar a traducir nuestras guías a idiomas diferentes, we're more than happy to support you.

Main things to keep in mind:

* Traduciones deben ser un fork dedicado que no será and merged con las guías de Dortania
* Forks deben indicate que son traducciones de Dortania y que no son oficiales
* Forks también deben comply con nuestra [Licencia](LICENSE.md)

If the above are met, estás libre a host tu traducción sin problema! Los sitios de Dortania son built con [VuePress](https://vuepress.vuejs.org) usando [Travis-CI](https://travis-ci.org) y finalmente hosted en [Github Pages](https://pages.github.com), así que no hay nigún cuesto para hosting tu propia traducción.

If you have any questions or concerns with either translations or hosting, feel free to reach out on our [Bugtracker](https://github.com/dortania/bugtracker).

Current known translations:

* [UselessBanana](https://github.com/UselessBanana/OpenCore-Install-Guide)(Spanish)
* [macOS86](https://macos86.gitbook.io/guida-opencore/)(Italian)
* [Technopat](https://www.technopat.net/sosyal/konu/opencore-ile-macos-kurulum-rehberi.963661/)(Turkish)

And note that these translations are subject to authors preferences, translation changes and human errors. Por favor keep this in mind when reading dado que ya no son guías oficiales de Dortania.
