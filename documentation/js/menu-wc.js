'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crud_nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccessModule.html" data-type="entity-link" >AccessModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AccessModule-786ceff05ff78dde9073180fde1891d2bd16e45a08c0ab8b6a82c23e3f8f41cddacd43dea9bf5c82b541d629d11139f6244f398f940b06e777c0be645f4f6b74"' : 'data-bs-target="#xs-controllers-links-module-AccessModule-786ceff05ff78dde9073180fde1891d2bd16e45a08c0ab8b6a82c23e3f8f41cddacd43dea9bf5c82b541d629d11139f6244f398f940b06e777c0be645f4f6b74"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccessModule-786ceff05ff78dde9073180fde1891d2bd16e45a08c0ab8b6a82c23e3f8f41cddacd43dea9bf5c82b541d629d11139f6244f398f940b06e777c0be645f4f6b74"' :
                                            'id="xs-controllers-links-module-AccessModule-786ceff05ff78dde9073180fde1891d2bd16e45a08c0ab8b6a82c23e3f8f41cddacd43dea9bf5c82b541d629d11139f6244f398f940b06e777c0be645f4f6b74"' }>
                                            <li class="link">
                                                <a href="controllers/AccessController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AccessModule-786ceff05ff78dde9073180fde1891d2bd16e45a08c0ab8b6a82c23e3f8f41cddacd43dea9bf5c82b541d629d11139f6244f398f940b06e777c0be645f4f6b74"' : 'data-bs-target="#xs-injectables-links-module-AccessModule-786ceff05ff78dde9073180fde1891d2bd16e45a08c0ab8b6a82c23e3f8f41cddacd43dea9bf5c82b541d629d11139f6244f398f940b06e777c0be645f4f6b74"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccessModule-786ceff05ff78dde9073180fde1891d2bd16e45a08c0ab8b6a82c23e3f8f41cddacd43dea9bf5c82b541d629d11139f6244f398f940b06e777c0be645f4f6b74"' :
                                        'id="xs-injectables-links-module-AccessModule-786ceff05ff78dde9073180fde1891d2bd16e45a08c0ab8b6a82c23e3f8f41cddacd43dea9bf5c82b541d629d11139f6244f398f940b06e777c0be645f4f6b74"' }>
                                        <li class="link">
                                            <a href="injectables/AccessService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-42054ff34b1ce52de1ade3471a5632ebd081632e235fca648525908a644eb6adf1262b8fa02a0f12218a0309d0e8909659186d853e0c16c32217c964de88e98b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-42054ff34b1ce52de1ade3471a5632ebd081632e235fca648525908a644eb6adf1262b8fa02a0f12218a0309d0e8909659186d853e0c16c32217c964de88e98b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-42054ff34b1ce52de1ade3471a5632ebd081632e235fca648525908a644eb6adf1262b8fa02a0f12218a0309d0e8909659186d853e0c16c32217c964de88e98b"' :
                                        'id="xs-injectables-links-module-AppModule-42054ff34b1ce52de1ade3471a5632ebd081632e235fca648525908a644eb6adf1262b8fa02a0f12218a0309d0e8909659186d853e0c16c32217c964de88e98b"' }>
                                        <li class="link">
                                            <a href="injectables/MessengerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessengerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-f65e99866d54f892804a1bd4708b73da59550878fa4c16db7d30fdcf1a6dc4bd771fb39271226d2ee508881738a96f798bf93083da9140989bd2fb6ee27f3388"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-f65e99866d54f892804a1bd4708b73da59550878fa4c16db7d30fdcf1a6dc4bd771fb39271226d2ee508881738a96f798bf93083da9140989bd2fb6ee27f3388"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-f65e99866d54f892804a1bd4708b73da59550878fa4c16db7d30fdcf1a6dc4bd771fb39271226d2ee508881738a96f798bf93083da9140989bd2fb6ee27f3388"' :
                                            'id="xs-controllers-links-module-AuthModule-f65e99866d54f892804a1bd4708b73da59550878fa4c16db7d30fdcf1a6dc4bd771fb39271226d2ee508881738a96f798bf93083da9140989bd2fb6ee27f3388"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-f65e99866d54f892804a1bd4708b73da59550878fa4c16db7d30fdcf1a6dc4bd771fb39271226d2ee508881738a96f798bf93083da9140989bd2fb6ee27f3388"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-f65e99866d54f892804a1bd4708b73da59550878fa4c16db7d30fdcf1a6dc4bd771fb39271226d2ee508881738a96f798bf93083da9140989bd2fb6ee27f3388"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-f65e99866d54f892804a1bd4708b73da59550878fa4c16db7d30fdcf1a6dc4bd771fb39271226d2ee508881738a96f798bf93083da9140989bd2fb6ee27f3388"' :
                                        'id="xs-injectables-links-module-AuthModule-f65e99866d54f892804a1bd4708b73da59550878fa4c16db7d30fdcf1a6dc4bd771fb39271226d2ee508881738a96f798bf93083da9140989bd2fb6ee27f3388"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryModule-073a3d635c30eadcc7789922c4501f5941b9999818f5b79051681c16a7c112d2444ff6f5686946f9cb4d6f9ffbeb17bb8d15d3c5904874f348be18d17459caba"' : 'data-bs-target="#xs-controllers-links-module-CategoryModule-073a3d635c30eadcc7789922c4501f5941b9999818f5b79051681c16a7c112d2444ff6f5686946f9cb4d6f9ffbeb17bb8d15d3c5904874f348be18d17459caba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-073a3d635c30eadcc7789922c4501f5941b9999818f5b79051681c16a7c112d2444ff6f5686946f9cb4d6f9ffbeb17bb8d15d3c5904874f348be18d17459caba"' :
                                            'id="xs-controllers-links-module-CategoryModule-073a3d635c30eadcc7789922c4501f5941b9999818f5b79051681c16a7c112d2444ff6f5686946f9cb4d6f9ffbeb17bb8d15d3c5904874f348be18d17459caba"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-073a3d635c30eadcc7789922c4501f5941b9999818f5b79051681c16a7c112d2444ff6f5686946f9cb4d6f9ffbeb17bb8d15d3c5904874f348be18d17459caba"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-073a3d635c30eadcc7789922c4501f5941b9999818f5b79051681c16a7c112d2444ff6f5686946f9cb4d6f9ffbeb17bb8d15d3c5904874f348be18d17459caba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-073a3d635c30eadcc7789922c4501f5941b9999818f5b79051681c16a7c112d2444ff6f5686946f9cb4d6f9ffbeb17bb8d15d3c5904874f348be18d17459caba"' :
                                        'id="xs-injectables-links-module-CategoryModule-073a3d635c30eadcc7789922c4501f5941b9999818f5b79051681c16a7c112d2444ff6f5686946f9cb4d6f9ffbeb17bb8d15d3c5904874f348be18d17459caba"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeosModule.html" data-type="entity-link" >GeosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeosModule-bc6733469eeee6f82989872ec68e222285a7961fe229766effcf94f48b2eed6d8e298a7d58657feb25fad8aef674d0fde20aaf8419fd7da902e6243441c15ec4"' : 'data-bs-target="#xs-controllers-links-module-GeosModule-bc6733469eeee6f82989872ec68e222285a7961fe229766effcf94f48b2eed6d8e298a7d58657feb25fad8aef674d0fde20aaf8419fd7da902e6243441c15ec4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeosModule-bc6733469eeee6f82989872ec68e222285a7961fe229766effcf94f48b2eed6d8e298a7d58657feb25fad8aef674d0fde20aaf8419fd7da902e6243441c15ec4"' :
                                            'id="xs-controllers-links-module-GeosModule-bc6733469eeee6f82989872ec68e222285a7961fe229766effcf94f48b2eed6d8e298a7d58657feb25fad8aef674d0fde20aaf8419fd7da902e6243441c15ec4"' }>
                                            <li class="link">
                                                <a href="controllers/GeosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeosModule-bc6733469eeee6f82989872ec68e222285a7961fe229766effcf94f48b2eed6d8e298a7d58657feb25fad8aef674d0fde20aaf8419fd7da902e6243441c15ec4"' : 'data-bs-target="#xs-injectables-links-module-GeosModule-bc6733469eeee6f82989872ec68e222285a7961fe229766effcf94f48b2eed6d8e298a7d58657feb25fad8aef674d0fde20aaf8419fd7da902e6243441c15ec4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeosModule-bc6733469eeee6f82989872ec68e222285a7961fe229766effcf94f48b2eed6d8e298a7d58657feb25fad8aef674d0fde20aaf8419fd7da902e6243441c15ec4"' :
                                        'id="xs-injectables-links-module-GeosModule-bc6733469eeee6f82989872ec68e222285a7961fe229766effcf94f48b2eed6d8e298a7d58657feb25fad8aef674d0fde20aaf8419fd7da902e6243441c15ec4"' }>
                                        <li class="link">
                                            <a href="injectables/GeosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryModule.html" data-type="entity-link" >InventoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-InventoryModule-6713124b25dfa20dacb0fb2e490cb9405df9a2f19486413ec67661ab73475f0556656c5045bb36e8b22e4a1a0a6781e11e23f6df7ee6e1320640f4919c0d5701"' : 'data-bs-target="#xs-controllers-links-module-InventoryModule-6713124b25dfa20dacb0fb2e490cb9405df9a2f19486413ec67661ab73475f0556656c5045bb36e8b22e4a1a0a6781e11e23f6df7ee6e1320640f4919c0d5701"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InventoryModule-6713124b25dfa20dacb0fb2e490cb9405df9a2f19486413ec67661ab73475f0556656c5045bb36e8b22e4a1a0a6781e11e23f6df7ee6e1320640f4919c0d5701"' :
                                            'id="xs-controllers-links-module-InventoryModule-6713124b25dfa20dacb0fb2e490cb9405df9a2f19486413ec67661ab73475f0556656c5045bb36e8b22e4a1a0a6781e11e23f6df7ee6e1320640f4919c0d5701"' }>
                                            <li class="link">
                                                <a href="controllers/InventoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-InventoryModule-6713124b25dfa20dacb0fb2e490cb9405df9a2f19486413ec67661ab73475f0556656c5045bb36e8b22e4a1a0a6781e11e23f6df7ee6e1320640f4919c0d5701"' : 'data-bs-target="#xs-injectables-links-module-InventoryModule-6713124b25dfa20dacb0fb2e490cb9405df9a2f19486413ec67661ab73475f0556656c5045bb36e8b22e4a1a0a6781e11e23f6df7ee6e1320640f4919c0d5701"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InventoryModule-6713124b25dfa20dacb0fb2e490cb9405df9a2f19486413ec67661ab73475f0556656c5045bb36e8b22e4a1a0a6781e11e23f6df7ee6e1320640f4919c0d5701"' :
                                        'id="xs-injectables-links-module-InventoryModule-6713124b25dfa20dacb0fb2e490cb9405df9a2f19486413ec67661ab73475f0556656c5045bb36e8b22e4a1a0a6781e11e23f6df7ee6e1320640f4919c0d5701"' }>
                                        <li class="link">
                                            <a href="injectables/InventoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessengerModule.html" data-type="entity-link" >MessengerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MessengerModule-1a86ee898278e420ca637562170e2230561192a901bf0e06ab4fe91f1f3505844082fc6601f82af5ff13c52604876ba143466b805a4d5509f103b57bebd9425c"' : 'data-bs-target="#xs-controllers-links-module-MessengerModule-1a86ee898278e420ca637562170e2230561192a901bf0e06ab4fe91f1f3505844082fc6601f82af5ff13c52604876ba143466b805a4d5509f103b57bebd9425c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MessengerModule-1a86ee898278e420ca637562170e2230561192a901bf0e06ab4fe91f1f3505844082fc6601f82af5ff13c52604876ba143466b805a4d5509f103b57bebd9425c"' :
                                            'id="xs-controllers-links-module-MessengerModule-1a86ee898278e420ca637562170e2230561192a901bf0e06ab4fe91f1f3505844082fc6601f82af5ff13c52604876ba143466b805a4d5509f103b57bebd9425c"' }>
                                            <li class="link">
                                                <a href="controllers/MessengerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessengerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MessengerModule-1a86ee898278e420ca637562170e2230561192a901bf0e06ab4fe91f1f3505844082fc6601f82af5ff13c52604876ba143466b805a4d5509f103b57bebd9425c"' : 'data-bs-target="#xs-injectables-links-module-MessengerModule-1a86ee898278e420ca637562170e2230561192a901bf0e06ab4fe91f1f3505844082fc6601f82af5ff13c52604876ba143466b805a4d5509f103b57bebd9425c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MessengerModule-1a86ee898278e420ca637562170e2230561192a901bf0e06ab4fe91f1f3505844082fc6601f82af5ff13c52604876ba143466b805a4d5509f103b57bebd9425c"' :
                                        'id="xs-injectables-links-module-MessengerModule-1a86ee898278e420ca637562170e2230561192a901bf0e06ab4fe91f1f3505844082fc6601f82af5ff13c52604876ba143466b805a4d5509f103b57bebd9425c"' }>
                                        <li class="link">
                                            <a href="injectables/MessengerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessengerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-0a017f4c50d15ff1a5f9e53a27da8fc841188460d6b895f543df1c427be02df3282fd4fb2b5c16252ef79b4bccefd64ca6cc270e9d6c6e4e22b7ebe6ee2b20f7"' : 'data-bs-target="#xs-controllers-links-module-UserModule-0a017f4c50d15ff1a5f9e53a27da8fc841188460d6b895f543df1c427be02df3282fd4fb2b5c16252ef79b4bccefd64ca6cc270e9d6c6e4e22b7ebe6ee2b20f7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-0a017f4c50d15ff1a5f9e53a27da8fc841188460d6b895f543df1c427be02df3282fd4fb2b5c16252ef79b4bccefd64ca6cc270e9d6c6e4e22b7ebe6ee2b20f7"' :
                                            'id="xs-controllers-links-module-UserModule-0a017f4c50d15ff1a5f9e53a27da8fc841188460d6b895f543df1c427be02df3282fd4fb2b5c16252ef79b4bccefd64ca6cc270e9d6c6e4e22b7ebe6ee2b20f7"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-0a017f4c50d15ff1a5f9e53a27da8fc841188460d6b895f543df1c427be02df3282fd4fb2b5c16252ef79b4bccefd64ca6cc270e9d6c6e4e22b7ebe6ee2b20f7"' : 'data-bs-target="#xs-injectables-links-module-UserModule-0a017f4c50d15ff1a5f9e53a27da8fc841188460d6b895f543df1c427be02df3282fd4fb2b5c16252ef79b4bccefd64ca6cc270e9d6c6e4e22b7ebe6ee2b20f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-0a017f4c50d15ff1a5f9e53a27da8fc841188460d6b895f543df1c427be02df3282fd4fb2b5c16252ef79b4bccefd64ca6cc270e9d6c6e4e22b7ebe6ee2b20f7"' :
                                        'id="xs-injectables-links-module-UserModule-0a017f4c50d15ff1a5f9e53a27da8fc841188460d6b895f543df1c427be02df3282fd4fb2b5c16252ef79b4bccefd64ca6cc270e9d6c6e4e22b7ebe6ee2b20f7"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccessController.html" data-type="entity-link" >AccessController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GeosController.html" data-type="entity-link" >GeosController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InventoryController.html" data-type="entity-link" >InventoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MessengerController.html" data-type="entity-link" >MessengerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Access.html" data-type="entity-link" >Access</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAccessDto.html" data-type="entity-link" >CreateAccessDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInventoryDto.html" data-type="entity-link" >CreateInventoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterCategroyDto.html" data-type="entity-link" >FilterCategroyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterInventoryDto.html" data-type="entity-link" >FilterInventoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterUserDto.html" data-type="entity-link" >FilterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Geo.html" data-type="entity-link" >Geo</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetCategoryDto.html" data-type="entity-link" >GetCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetInventoryDto.html" data-type="entity-link" >GetInventoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserDto.html" data-type="entity-link" >GetUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Inventory.html" data-type="entity-link" >Inventory</a>
                            </li>
                            <li class="link">
                                <a href="classes/OTPDto.html" data-type="entity-link" >OTPDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OTPRequestDto.html" data-type="entity-link" >OTPRequestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RequestLatitudeLongitudeGeoDto.html" data-type="entity-link" >RequestLatitudeLongitudeGeoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInResponseWithEmailPasswordDto.html" data-type="entity-link" >SignInResponseWithEmailPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInWithEmailPasswordDto.html" data-type="entity-link" >SignInWithEmailPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInventoryDto.html" data-type="entity-link" >UpdateInventoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerificationJWTTokenDto.html" data-type="entity-link" >VerificationJWTTokenDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccessMiddleware.html" data-type="entity-link" >AccessMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccessService.html" data-type="entity-link" >AccessService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeosService.html" data-type="entity-link" >GeosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InventoryService.html" data-type="entity-link" >InventoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessengerService.html" data-type="entity-link" >MessengerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SanitizeFiterPipe.html" data-type="entity-link" >SanitizeFiterPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SanitizeUpdateRequestPipe.html" data-type="entity-link" >SanitizeUpdateRequestPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});