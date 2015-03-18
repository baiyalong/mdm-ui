/**
 * Created by yalong on 2015/3/20.
 */
angular.module('mdmUi')


    .constant("SERVICES", [{
        name: "$mdMedia",
        type: "service",
        outputPath: "partials/api/material.core/service/$mdMedia.html",
        url: "api/material.core/service/$mdMedia",
        label: "$mdMedia",
        hasDemo: !1,
        module: "material.core",
        githubUrl: "https://github.com/angular/material/blob/master/src/core/services//material.core.js"
    }])


    .constant("COMPONENTS", [{
        name: "material.components.bottomSheet",
        type: "module",
        outputPath: "partials/api/material.components.bottomSheet/index.html",
        url: "api/material.components.bottomSheet",
        label: "material.components.bottomSheet",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "$mdBottomSheet",
            type: "service",
            outputPath: "partials/api/material.components.bottomSheet/service/$mdBottomSheet.html",
            url: "api/material.components.bottomSheet/service/$mdBottomSheet",
            label: "$mdBottomSheet",
            hasDemo: !1,
            module: "material.components.bottomSheet",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/bottomSheet/bottomSheet.js"
        }]
    }, {
        name: "material.components.button",
        type: "module",
        outputPath: "partials/api/material.components.button/index.html",
        url: "api/material.components.button",
        label: "material.components.button",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdButton",
            type: "directive",
            outputPath: "partials/api/material.components.button/directive/mdButton.html",
            url: "api/material.components.button/directive/mdButton",
            label: "mdButton",
            hasDemo: !0,
            module: "material.components.button",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/button/button.js"
        }]
    }, {
        name: "material.components.card",
        type: "module",
        outputPath: "partials/api/material.components.card/index.html",
        url: "api/material.components.card",
        label: "material.components.card",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdCard",
            type: "directive",
            outputPath: "partials/api/material.components.card/directive/mdCard.html",
            url: "api/material.components.card/directive/mdCard",
            label: "mdCard",
            hasDemo: !0,
            module: "material.components.card",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/card/card.js"
        }]
    }, {
        name: "material.components.checkbox",
        type: "module",
        outputPath: "partials/api/material.components.checkbox/index.html",
        url: "api/material.components.checkbox",
        label: "material.components.checkbox",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdCheckbox",
            type: "directive",
            outputPath: "partials/api/material.components.checkbox/directive/mdCheckbox.html",
            url: "api/material.components.checkbox/directive/mdCheckbox",
            label: "mdCheckbox",
            hasDemo: !0,
            module: "material.components.checkbox",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/checkbox/checkbox.js"
        }]
    }, {
        name: "material.components.content",
        type: "module",
        outputPath: "partials/api/material.components.content/index.html",
        url: "api/material.components.content",
        label: "material.components.content",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdContent",
            type: "directive",
            outputPath: "partials/api/material.components.content/directive/mdContent.html",
            url: "api/material.components.content/directive/mdContent",
            label: "mdContent",
            hasDemo: !0,
            module: "material.components.content",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/content/content.js"
        }]
    }, {
        name: "material.components.dialog",
        type: "module",
        outputPath: "partials/api/material.components.dialog/index.html",
        url: "api/material.components.dialog",
        label: "material.components.dialog",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "$mdDialog",
            type: "service",
            outputPath: "partials/api/material.components.dialog/service/$mdDialog.html",
            url: "api/material.components.dialog/service/$mdDialog",
            label: "$mdDialog",
            hasDemo: !1,
            module: "material.components.dialog",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/dialog/dialog.js"
        }]
    }, {
        name: "material.components.divider",
        type: "module",
        outputPath: "partials/api/material.components.divider/index.html",
        url: "api/material.components.divider",
        label: "material.components.divider",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdDivider",
            type: "directive",
            outputPath: "partials/api/material.components.divider/directive/mdDivider.html",
            url: "api/material.components.divider/directive/mdDivider",
            label: "mdDivider",
            hasDemo: !0,
            module: "material.components.divider",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/divider/divider.js"
        }]
    }, {
        name: "material.components.gridList",
        type: "module",
        outputPath: "partials/api/material.components.gridList/index.html",
        url: "api/material.components.gridList",
        label: "material.components.gridList",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdGridList",
            type: "directive",
            outputPath: "partials/api/material.components.gridList/directive/mdGridList.html",
            url: "api/material.components.gridList/directive/mdGridList",
            label: "mdGridList",
            hasDemo: !0,
            module: "material.components.gridList",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/gridList/gridList.js"
        }, {
            name: "mdGridTile",
            type: "directive",
            outputPath: "partials/api/material.components.gridList/directive/mdGridTile.html",
            url: "api/material.components.gridList/directive/mdGridTile",
            label: "mdGridTile",
            hasDemo: !0,
            module: "material.components.gridList",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/gridList/gridList.js"
        }]
    }, {
        name: "material.components.icon",
        type: "module",
        outputPath: "partials/api/material.components.icon/index.html",
        url: "api/material.components.icon",
        label: "material.components.icon",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdIcon",
            type: "directive",
            outputPath: "partials/api/material.components.icon/directive/mdIcon.html",
            url: "api/material.components.icon/directive/mdIcon",
            label: "mdIcon",
            hasDemo: !0,
            module: "material.components.icon",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/icon/icon.js"
        }, {
            name: "$mdIconProvider",
            type: "service",
            outputPath: "partials/api/material.components.icon/service/$mdIconProvider.html",
            url: "api/material.components.icon/service/$mdIconProvider",
            label: "$mdIconProvider",
            hasDemo: !1,
            module: "material.components.icon",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/icon/icon.js"
        }, {
            name: "$mdIcon",
            type: "service",
            outputPath: "partials/api/material.components.icon/service/$mdIcon.html",
            url: "api/material.components.icon/service/$mdIcon",
            label: "$mdIcon",
            hasDemo: !1,
            module: "material.components.icon",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/icon/icon.js"
        }]
    }, {
        name: "material.components.input",
        type: "module",
        outputPath: "partials/api/material.components.input/index.html",
        url: "api/material.components.input",
        label: "material.components.input",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdInputContainer",
            type: "directive",
            outputPath: "partials/api/material.components.input/directive/mdInputContainer.html",
            url: "api/material.components.input/directive/mdInputContainer",
            label: "mdInputContainer",
            hasDemo: !0,
            module: "material.components.input",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/input/input.js"
        }, {
            name: "mdInput",
            type: "directive",
            outputPath: "partials/api/material.components.input/directive/mdInput.html",
            url: "api/material.components.input/directive/mdInput",
            label: "mdInput",
            hasDemo: !0,
            module: "material.components.input",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/input/input.js"
        }]
    }, {
        name: "material.components.list",
        type: "module",
        outputPath: "partials/api/material.components.list/index.html",
        url: "api/material.components.list",
        label: "material.components.list",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdList",
            type: "directive",
            outputPath: "partials/api/material.components.list/directive/mdList.html",
            url: "api/material.components.list/directive/mdList",
            label: "mdList",
            hasDemo: !0,
            module: "material.components.list",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/list/list.js"
        }, {
            name: "mdItem",
            type: "directive",
            outputPath: "partials/api/material.components.list/directive/mdItem.html",
            url: "api/material.components.list/directive/mdItem",
            label: "mdItem",
            hasDemo: !0,
            module: "material.components.list",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/list/list.js"
        }]
    }, {
        name: "material.components.progressCircular",
        type: "module",
        outputPath: "partials/api/material.components.progressCircular/index.html",
        url: "api/material.components.progressCircular",
        label: "material.components.progressCircular",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdProgressCircular",
            type: "directive",
            outputPath: "partials/api/material.components.progressCircular/directive/mdProgressCircular.html",
            url: "api/material.components.progressCircular/directive/mdProgressCircular",
            label: "mdProgressCircular",
            hasDemo: !0,
            module: "material.components.progressCircular",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/progressCircular/progressCircular.js"
        }]
    }, {
        name: "material.components.progressLinear",
        type: "module",
        outputPath: "partials/api/material.components.progressLinear/index.html",
        url: "api/material.components.progressLinear",
        label: "material.components.progressLinear",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdProgressLinear",
            type: "directive",
            outputPath: "partials/api/material.components.progressLinear/directive/mdProgressLinear.html",
            url: "api/material.components.progressLinear/directive/mdProgressLinear",
            label: "mdProgressLinear",
            hasDemo: !0,
            module: "material.components.progressLinear",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/progressLinear/progressLinear.js"
        }]
    }, {
        name: "material.components.radioButton",
        type: "module",
        outputPath: "partials/api/material.components.radioButton/index.html",
        url: "api/material.components.radioButton",
        label: "material.components.radioButton",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdRadioGroup",
            type: "directive",
            outputPath: "partials/api/material.components.radioButton/directive/mdRadioGroup.html",
            url: "api/material.components.radioButton/directive/mdRadioGroup",
            label: "mdRadioGroup",
            hasDemo: !0,
            module: "material.components.radioButton",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/radioButton/radioButton.js"
        }, {
            name: "mdRadioButton",
            type: "directive",
            outputPath: "partials/api/material.components.radioButton/directive/mdRadioButton.html",
            url: "api/material.components.radioButton/directive/mdRadioButton",
            label: "mdRadioButton",
            hasDemo: !0,
            module: "material.components.radioButton",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/radioButton/radioButton.js"
        }]
    }, {
        name: "material.components.select",
        type: "module",
        outputPath: "partials/api/material.components.select/index.html",
        url: "api/material.components.select",
        label: "material.components.select",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdSelect",
            type: "directive",
            outputPath: "partials/api/material.components.select/directive/mdSelect.html",
            url: "api/material.components.select/directive/mdSelect",
            label: "mdSelect",
            hasDemo: !0,
            module: "material.components.select",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/select/select.js"
        }]
    }, {
        name: "material.components.sidenav",
        type: "module",
        outputPath: "partials/api/material.components.sidenav/index.html",
        url: "api/material.components.sidenav",
        label: "material.components.sidenav",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "$mdSidenav",
            type: "service",
            outputPath: "partials/api/material.components.sidenav/service/$mdSidenav.html",
            url: "api/material.components.sidenav/service/$mdSidenav",
            label: "$mdSidenav",
            hasDemo: !1,
            module: "material.components.sidenav",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/sidenav/sidenav.js"
        }, {
            name: "mdSidenav",
            type: "directive",
            outputPath: "partials/api/material.components.sidenav/directive/mdSidenav.html",
            url: "api/material.components.sidenav/directive/mdSidenav",
            label: "mdSidenav",
            hasDemo: !0,
            module: "material.components.sidenav",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/sidenav/sidenav.js"
        }]
    }, {
        name: "material.components.slider",
        type: "module",
        outputPath: "partials/api/material.components.slider/index.html",
        url: "api/material.components.slider",
        label: "material.components.slider",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdSlider",
            type: "directive",
            outputPath: "partials/api/material.components.slider/directive/mdSlider.html",
            url: "api/material.components.slider/directive/mdSlider",
            label: "mdSlider",
            hasDemo: !0,
            module: "material.components.slider",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/slider/slider.js"
        }]
    }, {
        name: "material.components.subheader",
        type: "module",
        outputPath: "partials/api/material.components.subheader/index.html",
        url: "api/material.components.subheader",
        label: "material.components.subheader",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdSubheader",
            type: "directive",
            outputPath: "partials/api/material.components.subheader/directive/mdSubheader.html",
            url: "api/material.components.subheader/directive/mdSubheader",
            label: "mdSubheader",
            hasDemo: !0,
            module: "material.components.subheader",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/subheader/subheader.js"
        }]
    }, {
        name: "material.components.swipe",
        type: "module",
        outputPath: "partials/api/material.components.swipe/index.html",
        url: "api/material.components.swipe",
        label: "material.components.swipe",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdSwipeLeft",
            type: "directive",
            outputPath: "partials/api/material.components.swipe/directive/mdSwipeLeft.html",
            url: "api/material.components.swipe/directive/mdSwipeLeft",
            label: "mdSwipeLeft",
            hasDemo: !0,
            module: "material.components.swipe",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/swipe/swipe.js"
        }, {
            name: "mdSwipeRight",
            type: "directive",
            outputPath: "partials/api/material.components.swipe/directive/mdSwipeRight.html",
            url: "api/material.components.swipe/directive/mdSwipeRight",
            label: "mdSwipeRight",
            hasDemo: !0,
            module: "material.components.swipe",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/swipe/swipe.js"
        }]
    }, {
        name: "material.components.switch",
        type: "module",
        outputPath: "partials/api/material.components.switch/index.html",
        url: "api/material.components.switch",
        label: "material.components.switch",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdSwitch",
            type: "directive",
            outputPath: "partials/api/material.components.switch/directive/mdSwitch.html",
            url: "api/material.components.switch/directive/mdSwitch",
            label: "mdSwitch",
            hasDemo: !0,
            module: "material.components.switch",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/switch/switch.js"
        }]
    }, {
        name: "material.components.toast",
        type: "module",
        outputPath: "partials/api/material.components.toast/index.html",
        url: "api/material.components.toast",
        label: "material.components.toast",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "$mdToast",
            type: "service",
            outputPath: "partials/api/material.components.toast/service/$mdToast.html",
            url: "api/material.components.toast/service/$mdToast",
            label: "$mdToast",
            hasDemo: !1,
            module: "material.components.toast",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/toast/toast.js"
        }]
    }, {
        name: "material.components.toolbar",
        type: "module",
        outputPath: "partials/api/material.components.toolbar/index.html",
        url: "api/material.components.toolbar",
        label: "material.components.toolbar",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdToolbar",
            type: "directive",
            outputPath: "partials/api/material.components.toolbar/directive/mdToolbar.html",
            url: "api/material.components.toolbar/directive/mdToolbar",
            label: "mdToolbar",
            hasDemo: !0,
            module: "material.components.toolbar",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/toolbar/toolbar.js"
        }]
    }, {
        name: "material.components.tooltip",
        type: "module",
        outputPath: "partials/api/material.components.tooltip/index.html",
        url: "api/material.components.tooltip",
        label: "material.components.tooltip",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdTooltip",
            type: "directive",
            outputPath: "partials/api/material.components.tooltip/directive/mdTooltip.html",
            url: "api/material.components.tooltip/directive/mdTooltip",
            label: "mdTooltip",
            hasDemo: !0,
            module: "material.components.tooltip",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/tooltip/tooltip.js"
        }]
    }, {
        name: "material.components.autocomplete",
        type: "module",
        outputPath: "partials/api/material.components.autocomplete/index.html",
        url: "api/material.components.autocomplete",
        label: "material.components.autocomplete",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdAutocomplete",
            type: "directive",
            outputPath: "partials/api/material.components.autocomplete/directive/mdAutocomplete.html",
            url: "api/material.components.autocomplete/directive/mdAutocomplete",
            label: "mdAutocomplete",
            hasDemo: !0,
            module: "material.components.autocomplete",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/autocomplete/autocomplete.js"
        }, {
            name: "mdHighlightText",
            type: "directive",
            outputPath: "partials/api/material.components.autocomplete/directive/mdHighlightText.html",
            url: "api/material.components.autocomplete/directive/mdHighlightText",
            label: "mdHighlightText",
            hasDemo: !0,
            module: "material.components.autocomplete",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/autocomplete/autocomplete.js"
        }]
    }, {
        name: "material.components.tabs",
        type: "module",
        outputPath: "partials/api/material.components.tabs/index.html",
        url: "api/material.components.tabs",
        label: "material.components.tabs",
        hasDemo: !1,
        module: ".",
        githubUrl: "https://github.com/angular/material/blob/master/src/components/./..js",
        docs: [{
            name: "mdTab",
            type: "directive",
            outputPath: "partials/api/material.components.tabs/directive/mdTab.html",
            url: "api/material.components.tabs/directive/mdTab",
            label: "mdTab",
            hasDemo: !0,
            module: "material.components.tabs",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/tabs/tabs.js"
        }, {
            name: "mdTabs",
            type: "directive",
            outputPath: "partials/api/material.components.tabs/directive/mdTabs.html",
            url: "api/material.components.tabs/directive/mdTabs",
            label: "mdTabs",
            hasDemo: !0,
            module: "material.components.tabs",
            githubUrl: "https://github.com/angular/material/blob/master/src/components/tabs/tabs.js"
        }]
    }])


    .constant("DEMOS", [{
        name: "material.components.autocomplete",
        label: "Autocomplete",
        demos: [{
            id: "autocompletedemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/autocomplete/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/autocomplete/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.autocomplete",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/autocomplete/demoBasicUsage/index.html"
            },
            ngModule: {module: "autocompleteDemo", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.autocomplete"
    }, {
        name: "material.components.bottomSheet",
        label: "Bottom Sheet",
        demos: [{
            id: "bottomSheetdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/bottomSheet/demoBasicUsage/style.css"
            }],
            html: [{
                name: "bottom-sheet-grid-template.html",
                label: "bottom-sheet-grid-template.html",
                fileType: "html",
                outputPath: "demo-partials/bottomSheet/demoBasicUsage/bottom-sheet-grid-template.html"
            }, {
                name: "bottom-sheet-list-template.html",
                label: "bottom-sheet-list-template.html",
                fileType: "html",
                outputPath: "demo-partials/bottomSheet/demoBasicUsage/bottom-sheet-list-template.html"
            }],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/bottomSheet/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.bottomSheet",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/bottomSheet/demoBasicUsage/index.html"
            },
            ngModule: {module: "bottomSheetDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.bottomSheet"
    }, {
        name: "material.components.button",
        label: "Button",
        demos: [{
            id: "buttondemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/button/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/button/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.button",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/button/demoBasicUsage/index.html"
            },
            ngModule: {module: "buttonsDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.button"
    }, {
        name: "material.components.card",
        label: "Card",
        demos: [{
            id: "carddemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/card/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/card/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.card",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/card/demoBasicUsage/index.html"
            },
            ngModule: {module: "cardDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.card"
    }, {
        name: "material.components.checkbox",
        label: "Checkbox",
        demos: [{
            id: "checkboxdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/checkbox/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/checkbox/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.checkbox",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/checkbox/demoBasicUsage/index.html"
            },
            ngModule: {module: "checkboxDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.checkbox"
    }, {
        name: "material.components.content",
        label: "Content",
        demos: [{
            id: "contentdemoBasicUsage",
            css: [],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/content/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.content",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/content/demoBasicUsage/index.html"
            },
            ngModule: {module: "contentDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.content"
    }, {
        name: "material.components.dialog",
        label: "Dialog",
        demos: [{
            id: "dialogdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/dialog/demoBasicUsage/style.css"
            }],
            html: [{
                name: "dialog1.tmpl.html",
                label: "dialog1.tmpl.html",
                fileType: "html",
                outputPath: "demo-partials/dialog/demoBasicUsage/dialog1.tmpl.html"
            }],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/dialog/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.dialog",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/dialog/demoBasicUsage/index.html"
            },
            ngModule: {module: "dialogDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.dialog"
    }, {
        name: "material.components.divider",
        label: "Divider",
        demos: [{
            id: "dividerdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/divider/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/divider/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.divider",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/divider/demoBasicUsage/index.html"
            },
            ngModule: {module: "dividerDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.divider"
    }, {
        name: "material.components.gridList",
        label: "Grid List",
        demos: [{
            id: "gridListdemoBasicUsage",
            css: [{
                name: "styles.css",
                label: "styles.css",
                fileType: "css",
                outputPath: "demo-partials/gridList/demoBasicUsage/styles.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/gridList/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.gridList",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/gridList/demoBasicUsage/index.html"
            },
            ngModule: {module: "gridListDemo1", dependencies: ["ngMaterial"]}
        }, {
            id: "gridListdemoDynamicTiles",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/gridList/demoDynamicTiles/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/gridList/demoDynamicTiles/script.js"
            }],
            moduleName: "material.components.gridList",
            name: "demoDynamicTiles",
            label: "Dynamic Tiles",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/gridList/demoDynamicTiles/index.html"
            },
            ngModule: {module: "gridListDemoApp", dependencies: ["ngMaterial"]}
        }, {
            id: "gridListdemoResponsiveUsage",
            css: [],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/gridList/demoResponsiveUsage/script.js"
            }],
            moduleName: "material.components.gridList",
            name: "demoResponsiveUsage",
            label: "Responsive Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/gridList/demoResponsiveUsage/index.html"
            },
            ngModule: {module: "gridListDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.gridList"
    }, {
        name: "material.components.icon",
        label: "Icon",
        demos: [{
            id: "icondemoFontIcons",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/icon/demoFontIcons/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/icon/demoFontIcons/script.js"
            }],
            moduleName: "material.components.icon",
            name: "demoFontIcons",
            label: "Font Icons",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/icon/demoFontIcons/index.html"
            },
            ngModule: {module: "appDemoFontIcons", dependencies: ["ngMaterial"]}
        }, {
            id: "icondemoLoadSvgIconsFromUrl",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/icon/demoLoadSvgIconsFromUrl/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/icon/demoLoadSvgIconsFromUrl/script.js"
            }],
            moduleName: "material.components.icon",
            name: "demoLoadSvgIconsFromUrl",
            label: "Load Svg Icons From Url",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/icon/demoLoadSvgIconsFromUrl/index.html"
            },
            ngModule: {module: "appDemoSvgIcons", dependencies: ["ngMaterial"]}
        }, {
            id: "icondemoSvgIconSets",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/icon/demoSvgIconSets/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/icon/demoSvgIconSets/script.js"
            }],
            moduleName: "material.components.icon",
            name: "demoSvgIconSets",
            label: "Svg Icon Sets",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/icon/demoSvgIconSets/index.html"
            },
            ngModule: {module: "appSvgIconSets", dependencies: ["ngMaterial"]}
        }, {
            id: "icondemoUsingTemplateCache",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/icon/demoUsingTemplateCache/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/icon/demoUsingTemplateCache/script.js"
            }],
            moduleName: "material.components.icon",
            name: "demoUsingTemplateCache",
            label: "Using Template Cache",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/icon/demoUsingTemplateCache/index.html"
            },
            ngModule: {module: "appUsingTemplateCache", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.icon"
    }, {
        name: "material.components.input",
        label: "Input",
        demos: [{
            id: "inputdemoBasicUsage",
            css: [],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/input/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.input",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/input/demoBasicUsage/index.html"
            },
            ngModule: {module: "inputBasicDemo", dependencies: ["ngMaterial", "ngMessages"]}
        }, {
            id: "inputdemoErrors",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/input/demoErrors/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/input/demoErrors/script.js"
            }],
            moduleName: "material.components.input",
            name: "demoErrors",
            label: "Errors",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/input/demoErrors/index.html"
            },
            ngModule: {module: "inputErrorsApp", dependencies: ["ngMaterial", "ngMessages"]}
        }, {
            id: "inputdemoIcons",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/input/demoIcons/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/input/demoIcons/script.js"
            }],
            moduleName: "material.components.input",
            name: "demoIcons",
            label: "Icons",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/input/demoIcons/index.html"
            },
            ngModule: {module: "inputIconDemo", dependencies: ["ngMaterial", "ngMessages"]}
        }],
        url: "/demo/material.components.input"
    }, {
        name: "material.components.list",
        label: "List",
        demos: [{
            id: "listdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/list/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/list/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.list",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/list/demoBasicUsage/index.html"
            },
            ngModule: {module: "listDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.list"
    }, {
        name: "material.components.progressCircular",
        label: "Progress Circular",
        demos: [{
            id: "progressCirculardemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/progressCircular/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/progressCircular/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.progressCircular",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/progressCircular/demoBasicUsage/index.html"
            },
            ngModule: {module: "progressCircularDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.progressCircular"
    }, {
        name: "material.components.progressLinear",
        label: "Progress Linear",
        demos: [{
            id: "progressLineardemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/progressLinear/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/progressLinear/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.progressLinear",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/progressLinear/demoBasicUsage/index.html"
            },
            ngModule: {module: "progressLinearDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.progressLinear"
    }, {
        name: "material.components.radioButton",
        label: "Radio Button",
        demos: [{
            id: "radioButtondemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/radioButton/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/radioButton/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.radioButton",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/radioButton/demoBasicUsage/index.html"
            },
            ngModule: {module: "radioDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.radioButton"
    }, {
        name: "material.components.select",
        label: "Select",
        demos: [{
            id: "selectdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/select/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/select/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.select",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/select/demoBasicUsage/index.html"
            },
            ngModule: {module: "selectDemoBasic", dependencies: ["ngMaterial"]}
        }, {
            id: "selectdemoOptionGroups",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/select/demoOptionGroups/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/select/demoOptionGroups/script.js"
            }],
            moduleName: "material.components.select",
            name: "demoOptionGroups",
            label: "Option Groups",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/select/demoOptionGroups/index.html"
            },
            ngModule: {module: "selectDemoOptGroups", dependencies: ["ngMaterial"]}
        }, {
            id: "selectdemoOptionsWithAsyncSearch",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/select/demoOptionsWithAsyncSearch/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/select/demoOptionsWithAsyncSearch/script.js"
            }],
            moduleName: "material.components.select",
            name: "demoOptionsWithAsyncSearch",
            label: "Options With Async Search",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/select/demoOptionsWithAsyncSearch/index.html"
            },
            ngModule: {module: "selectDemoOptionsAsync", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.select"
    }, {
        name: "material.components.sidenav",
        label: "Sidenav",
        demos: [{
            id: "sidenavdemoBasicUsage",
            css: [],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/sidenav/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.sidenav",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/sidenav/demoBasicUsage/index.html"
            },
            ngModule: {module: "sidenavDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.sidenav"
    }, {
        name: "material.components.slider",
        label: "Slider",
        demos: [{
            id: "sliderdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/slider/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/slider/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.slider",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/slider/demoBasicUsage/index.html"
            },
            ngModule: {module: "sliderDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.slider"
    }, {
        name: "material.components.subheader",
        label: "Subheader",
        demos: [{
            id: "subheaderdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/subheader/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/subheader/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.subheader",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/subheader/demoBasicUsage/index.html"
            },
            ngModule: {module: "subheaderBasicDemo", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.subheader"
    }, {
        name: "material.components.switch",
        label: "Switch",
        demos: [{
            id: "switchdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/switch/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/switch/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.switch",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/switch/demoBasicUsage/index.html"
            },
            ngModule: {module: "switchDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.switch"
    }, {
        name: "material.components.tabs",
        label: "Tabs",
        demos: [{
            id: "tabsdemoDynamicTabs",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/tabs/demoDynamicTabs/style.css"
            }],
            html: [{
                name: "readme.html",
                label: "readme.html",
                fileType: "html",
                outputPath: "demo-partials/tabs/demoDynamicTabs/readme.html"
            }],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/tabs/demoDynamicTabs/script.js"
            }],
            moduleName: "material.components.tabs",
            name: "demoDynamicTabs",
            label: "Dynamic Tabs",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/tabs/demoDynamicTabs/index.html"
            },
            ngModule: {module: "tabsDemo2", dependencies: ["ngMaterial"]}
        }, {
            id: "tabsdemoStaticTabs",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/tabs/demoStaticTabs/style.css"
            }],
            html: [{
                name: "readme.html",
                label: "readme.html",
                fileType: "html",
                outputPath: "demo-partials/tabs/demoStaticTabs/readme.html"
            }],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/tabs/demoStaticTabs/script.js"
            }],
            moduleName: "material.components.tabs",
            name: "demoStaticTabs",
            label: "Static Tabs",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/tabs/demoStaticTabs/index.html"
            },
            ngModule: {module: "tabsDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.tabs"
    }, {
        name: "material.components.toast",
        label: "Toast",
        demos: [{
            id: "toastdemoBasicUsage",
            css: [],
            html: [{
                name: "toast-template.html",
                label: "toast-template.html",
                fileType: "html",
                outputPath: "demo-partials/toast/demoBasicUsage/toast-template.html"
            }],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/toast/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.toast",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/toast/demoBasicUsage/index.html"
            },
            ngModule: {module: "toastDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.toast"
    }, {
        name: "material.components.toolbar",
        label: "Toolbar",
        demos: [{
            id: "toolbardemoBasicUsage",
            css: [],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/toolbar/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.toolbar",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/toolbar/demoBasicUsage/index.html"
            },
            ngModule: {module: "toolbarDemo1", dependencies: ["ngMaterial"]}
        }, {
            id: "toolbardemoScrollShrink",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/toolbar/demoScrollShrink/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/toolbar/demoScrollShrink/script.js"
            }],
            moduleName: "material.components.toolbar",
            name: "demoScrollShrink",
            label: "Scroll Shrink",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/toolbar/demoScrollShrink/index.html"
            },
            ngModule: {module: "toolbarDemo2", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.toolbar"
    }, {
        name: "material.components.tooltip",
        label: "Tooltip",
        demos: [{
            id: "tooltipdemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/tooltip/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/tooltip/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.tooltip",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/tooltip/demoBasicUsage/index.html"
            },
            ngModule: {module: "tooltipDemo1", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.tooltip"
    }, {
        name: "material.components.whiteframe",
        label: "Whiteframe",
        demos: [{
            id: "whiteframedemoBasicUsage",
            css: [{
                name: "style.css",
                label: "style.css",
                fileType: "css",
                outputPath: "demo-partials/whiteframe/demoBasicUsage/style.css"
            }],
            html: [],
            js: [{
                name: "script.js",
                label: "script.js",
                fileType: "js",
                outputPath: "demo-partials/whiteframe/demoBasicUsage/script.js"
            }],
            moduleName: "material.components.whiteframe",
            name: "demoBasicUsage",
            label: "Basic Usage",
            index: {
                name: "index.html",
                label: "index.html",
                fileType: "html",
                outputPath: "demo-partials/whiteframe/demoBasicUsage/index.html"
            },
            ngModule: {module: "whiteframeBasicUsage", dependencies: ["ngMaterial"]}
        }],
        url: "/demo/material.components.whiteframe"
    }])


    .constant("PAGES", {
        Theming: [{
            name: "Introduction and Terms",
            outputPath: "partials/Theming/01_introduction.html",
            url: "/Theming/01_introduction",
            label: "Introduction and Terms"
        }, {
            name: "Declarative Syntax",
            outputPath: "partials/Theming/02_declarative_syntax.html",
            url: "/Theming/02_declarative_syntax",
            label: "Declarative Syntax"
        }, {
            name: "Configuring a Theme",
            outputPath: "partials/Theming/03_configuring_a_theme.html",
            url: "/Theming/03_configuring_a_theme",
            label: "Configuring a Theme"
        }, {
            name: "Multiple Themes",
            outputPath: "partials/Theming/04_multiple_themes.html",
            url: "/Theming/04_multiple_themes",
            label: "Multiple Themes"
        }]
    })


    .constant("BUILDCONFIG", {
        ngVersion: "1.3.2",
        version: "0.8.3",
        repository: "https://github.com/angular/material",
        commit: "6e576c02dfebab5474c43d6069247ed32942e3e3",
        date: "2015-03-18 16:13:34 -0700"
    });