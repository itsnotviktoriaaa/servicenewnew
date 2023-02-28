$(document).ready(function () {

    (function () {

        let burger = $('.burger');
        let burgerMenu = $('.burger-menu');
        let burgerMenuTextCancel = $('.burger-menu-text-cancel');

        burger.on('click', function () {
            burgerMenu.removeClass('closeBurgerMenu');
            burgerMenu.addClass('openBurgerMenu');
        });

        burgerMenuTextCancel.on('click', function () {
            burgerMenu.removeClass('openBurgerMenu');
            burgerMenu.addClass('closeBurgerMenu');
        });

        let burgerMenuItemCatalog = $('.burger-menu-item-catalog');

        burgerMenuItemCatalog.on('click', function() {
            $('.main-products')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let burgerMenuItemSteps = $('.burger-menu-item-steps');

        burgerMenuItemSteps.on('click', function() {
            $('.steps')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let burgerMenuItemGallery = $('.burger-menu-item-gallery');

        burgerMenuItemGallery.on('click', function() {
            $('.gallery')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let burgerMenuItemOther = $('.burger-menu-item-other');

        burgerMenuItemOther.on('click', function() {
            $('.other')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let forCatalogPop = $('.forCatalogPop');
        let popCommon = $('.pop-common');

        forCatalogPop.on('click', function (event) {
            event.stopPropagation();
            popCommon.toggleClass('popOpen');
        });

        document.addEventListener('click', function() {
            popCommon.removeClass('popOpen');
        });

        let catalogPopItemCheap = $('.catalog-pop-item-cheap');

        catalogPopItemCheap.on('click', function() {
            $('.product-cheap')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemSingle = $('.catalog-pop-item-single');

        catalogPopItemSingle.on('click', function() {
            $('.product-single')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemPars = $('.catalog-pop-item-pars');

        catalogPopItemPars.on('click', function() {
            $('.product-pars')[0].scrollIntoView({behavior: "smooth"});
        });

        let liItemSteps = $('.li-item-steps');

        liItemSteps.on('click', function() {
            $('#steps')[0].scrollIntoView({behavior: "smooth"});
        });

        let liItemGallery = $('.li-item-gallery');

        liItemGallery.on('click', function() {
            $('#gallery')[0].scrollIntoView({behavior: "smooth"});
        });

        let liItemOther = $('.li-item-other');

        liItemOther.on('click', function() {
            $('#other')[0].scrollIntoView({behavior: "smooth"});
        });

        let mainBtnCatalog = $('#main-btn-catalog');

        mainBtnCatalog.on('click', function() {
            $('#main-products')[0].scrollIntoView({behavior: "smooth"});
        });

        let mainBtnConsult = $('#main-btn-consult');
        let takeInfoFromUserWrapper = $('.takeInfoFromUser-wrapper');

        mainBtnConsult.on('click', function() {
            takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
        });

        let takeInfoFromUserImg = $('.takeInfoFromUser-img');

        takeInfoFromUserImg.on('click', () => {
            takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
        });

        let btnKnowPrice = $('#btn-know-price');

        btnKnowPrice.on('click', () => {
            takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
        });

        let btnKnowPrice1 = $('#btn-know-price1');

        btnKnowPrice1.on('click', () => {
            takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
        });

        let btnCallAll = document.getElementsByClassName('btn-call');

        for (let i = 0; i < btnCallAll.length; i++) {
            btnCallAll[i].onclick =  function() {
                takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
            }
        }

        let footerItemGalleryLi = $('.footer-item-gallery-li');

        footerItemGalleryLi.on('click', function() {
            $('#gallery')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemStepsLi = $('.footer-item-steps-li');

        footerItemStepsLi.on('click', function() {
            $('#steps')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemOtherLi = $('.footer-item-other-li');

        footerItemOtherLi.on('click', function() {
            $('#other')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemAboutLi = $('.footer-item-about-li');

        footerItemAboutLi.on('click', function() {
            $('#about')[0].scrollIntoView({behavior: "smooth"});
        });

        let cheapMonument1btn = $('.cheap-monument-btn1');
        let cheapMonument1block = $('.cheap-monument1');
        let cheapMonumentCancel = $('.info-product-cancel');

        for (let i = 0; i < cheapMonument1btn.length; i++) {
            cheapMonument1btn.eq(i).click(function() {
                cheapMonument1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            cheapMonument1block.css('display', 'none');
        });

        let singleMonument1btn = $('.single-monument-btn1');
        let singleMonument1block = $('.single-monument1');

        for (let i = 0; i < singleMonument1btn.length; i++) {
            singleMonument1btn.eq(i).click(function() {
                singleMonument1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            singleMonument1block.css('display', 'none');
        });

        let parsMonument1btn = $('.pars-monument-btn1');
        let parsMonument1block = $('.pars-monument1');

        for (let i = 0; i < parsMonument1btn.length; i++) {
            parsMonument1btn.eq(i).click(function() {
                parsMonument1block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            parsMonument1block.css('display', 'none');
        });

        let parsMonument2btn = $('.pars-monument-btn2');
        let parsMonument2block = $('.pars-monument2');

        for (let i = 0; i < parsMonument2btn.length; i++) {
            parsMonument2btn.eq(i).click(function() {
                parsMonument2block.css('display', 'flex');
            });
        }

        cheapMonumentCancel.click(function () {
            parsMonument2block.css('display', 'none');
        });






    })();

});