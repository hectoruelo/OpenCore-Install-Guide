const {
    description
} = require('../package')

module.exports = {
    title: 'Guía de instalación de OpenCore',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/OpenCore-Install-Guide/',
	
	watch: {
	    $page(newPage, oldPage) {
	      if (newPage.key !== oldPage.key) {
	        requestAnimationFrame(() => {
	          if (this.$route.hash) {
	            const element = document.getElementById(this.$route.hash.slice(1));

	            if (element && element.scrollIntoView) {
	              element.scrollIntoView();
	            }
	          }
	        });
	      }
	    }
	  },
	
	markdown: {
		extendMarkdown: md => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	},
	
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/InyextcionES/OpenCore-Install-Guide',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
        logo: 'homepage.png',
        nav: [{
            text: 'Guías originales',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Página principal',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Comenzando con ACPI',
                link: 'https://dortania.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'Post instalación',
                link: 'https://dortania.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Guía de compradores de GPU',
                link: 'https://dortania.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Guía de compradores de Wifi',
                link: 'https://dortania.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Guía de compradores Anti-Hackintosh',
                link: 'https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introducción',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
				['prerequisites', 'Comenzando con OpenCore'],
				'macos-limits',
                'terminology',
                'why-oc',
            ]

        },
        {
            title: 'Creación del USB',
            collapsable: false,
            sidebarDepth: 2,
            children: [{
                title: 'Creando el USB',
                collapsable: true,
                path: '/installer-guide/',
                sidebarDepth: 2,
                children: [
                    '/installer-guide/mac-install',
                    '/installer-guide/winblows-install',
                    '/installer-guide/linux-install',
                ],
            },
                '/installer-guide/opencore-efi',
                'ktext',
            ['https://dortania.github.io/Getting-Started-With-ACPI/', 'Comenzando con ACPI'],
                '/config.plist/',
            ]
        },
        {
            title: 'Configs',
            collapsable: false,
            children: [{
                title: 'config.plist Intel de Escritorio',
                collapsable: true,
				sidebarDepth: 1,
                children: [
                    ['/config.plist/sandy-bridge', 'Sandy Bridge'],
                    ['/config.plist/ivy-bridge', 'Ivy Bridge'],
                    ['/config.plist/haswell', 'Haswell'],
                    ['/config.plist/skylake', 'Skylake'],
                    ['/config.plist/kaby-lake', 'Kaby Lake'],
                    ['/config.plist/coffee-lake', 'Coffee Lake'],
                    ['/config.plist/comet-lake', 'Comet Lake'],
                ]
            },
        ]
    },
    {
            title: 'Instalación',
            collapsable: false,
            children: [
                '/installation/installation-process',
            ]
        },
        {
            title: 'Solución de problemas',
            collapsable: true,
            children: [
                '/troubleshooting/troubleshooting',
                '/troubleshooting/debug',
                '/troubleshooting/boot',
            ]
        },
        {
            title: 'Post Instalación',
            collapsable: false,
            children: [
                ['https://inyextciones.github.io/OpenCore-Post-Install/', 'Post-Install'],
                {
                    title: 'Universal',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['https://inyextciones.github.io/OpenCore-Post-Install/universal/security', 'Seguridad y FileVault'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/universal/audio', 'Arreglar Audio'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/universal/oc2hdd', 'Arrancar sin USB'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/universal/update', 'Actualizar OpenCore, kexts y macOS'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/universal/drm', 'Arreglar DRM'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/universal/iservices', 'Arreglar iServices'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/universal/pm', 'Fixing Power Management'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/universal/sleep', 'Arreglar Suspensión'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/usb/', 'Arreglar USB'],
                    ]
                },
                {
                    title: 'Específicos de Laptops',
                    collapsable: true,
                    children: [
                        ['https://inyextciones.github.io/OpenCore-Post-Install/laptop-specific/battery', 'Arreglar las lecturas de la batería'],

                    ]
                },
                {
                    title: 'Cosméticos',
                    collapsable: true,
                    children: [
                        ['https://inyextciones.github.io/OpenCore-Post-Install/cosmetic/verbose', 'Arreglar la resolución y verbose'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/cosmetic/gui', 'Agregar el GUI y el chime de arranque'],
                    ]
                },
                {
                    title: 'Multiboot',
                    collapsable: true,
                    children: [
                        ['https://inyextciones.github.io/OpenCore-Post-Install/multiboot/bootstrap', 'Configurar Bootstrap.efi'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/multiboot/bootcamp', 'Instalar BootCamp'],
                    ]
                },
                {
                    title: 'Misceláneo',
                    collapsable: true,
                    children: [
                        ['https://inyextciones.github.io/OpenCore-Post-Install/misc/rtc', 'Arreglar RTC'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/misc/msr-lock', 'Arreglar CFG Lock'],
                        ['https://inyextciones.github.io/OpenCore-Post-Install/misc/nvram', 'NVRAM Emulada'],
                    ]
                },
            ]
        },
        {
            title: 'Extras',
            collapsable: true,
            children: [
                '/extras/legacy',
                '/extras/gpu-patches',
                '/extras/kaslr-fix',
                '/extras/spoof',
                '/extras/big-sur/',
                ['https://github.com/inyextciones/OpenCore-Install-Guide/tree/master/clover-conversion', 'Clover Conversion'],
		'/extras/smbios-support.md',
            ]
        },
        {
            title: 'Otros',
            collapsable: false,
            children: [
                'CONTRIBUTING',
                '/misc/credit',
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
