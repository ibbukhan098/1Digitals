import ShowMore from "./showmore.js";

let $body = document.querySelector('body');


document.addEventListener('DOMContentLoaded', ()=>{
    ShowMore();

    /* Owl NAvigation Icon changes */

    /* Testimonials Section */

    let testimonials = document.getElementById('section-testimonials');
    // console.log(testimonials)
    if(testimonials != null){
        setTimeout(()=>{
            let testowlleft = testimonials.querySelector('.owl-prev');
            let testowlright = testimonials.querySelector('.owl-next');
            testowlleft.innerHTML = `<i class="fa fa-angle-left"></i>`;
            testowlright.innerHTML = `<i class="fa fa-angle-right"></i>`;
        },10)
    }  
})




let primaryMenu = $('.primary-menu'),
    $body1 = $('body'),
    menuSpeed = primaryMenu.attr( 'data-trigger-speed' ) || 200,
    menuContainer = $('.primary-menu .menu-container'),
    menuSocials = $('.primary-menu .menu-socials');
menuSpeed = Number(menuSpeed);   
let clicked = false;
let navItems = [...menuContainer[0].children].filter((ele)=>{
    return ele.classList.contains('menu-item')
})
$('#custom-primary-menu-trigger').off( 'click' ).on( 'click', function() {
    // primaryMenu.attr('data-state') == 'closed'? primaryMenu.attr('data-state','opened') : primaryMenu.attr('data-state','closed');
    // isOpened = !isOpened;
    if(clicked){
        return;
    }
    
    clicked = true;
    const isOpened = primaryMenu.attr('aria-expanded');

    if(isOpened == "false"){
        openedNavPopup();
        
    }
    else{
        closingNavPopup();
        
    }
    
    
    if( $body1.hasClass('device-md') || $body1.hasClass('device-sm') || $body1.hasClass('device-xs') ) {
        if( primaryMenu.find('.mobile-primary-menu').length > 0 ) {
            $( '.primary-menu:not(.mobile-menu-off-canvas) .mobile-primary-menu' ).stop( true, true ).slideToggle( menuSpeed );
            $( '.primary-menu.mobile-menu-off-canvas .mobile-primary-menu' ).toggleClass('d-block');
        } else {
            $( '.primary-menu:not(.mobile-menu-off-canvas) .menu-container' ).stop( true, true ).slideToggle( menuSpeed );
            $( '.primary-menu.mobile-menu-off-canvas .menu-container' ).toggleClass('d-block');
        }
    }
    clicked = false;
});

// let animDynamic = function(ele,animName,type){
//     return new Promise (function(resolve,reject){
//         if(type == 'remove'){
//             ele.classList.remove(`${animName}`,'animated')
//         }
//         else{
//             ele.classList.add(`${animName}`,'animated')
//         }
//         resolve()
//     })
// }





function openedNavPopup(){
    primaryMenu.attr('aria-expanded','true');
    $body1.addClass("primary-menu-open");
    primaryMenu.attr('data-state','opened');

    let openedEle = document.querySelector('.primary-menu[data-state="opened"] .primary-row-overlay');
    if(openedEle != null){
        openedEle.addEventListener('animationend',async()=>{
            menuContainer.css({
                'opacity':'1',
                'visibility':'visible'
            });
            menuSocials.css({
                'opacity':'1',
                'visibility':'visible'
            })

            // for(let i=0;i<navItems.length;i++){
            //     // setTimeout(()=>{
            //         await animTimer(500)
            //         navItems[i].classList.remove('backOutLeft','animated');
            //         navItems[i].classList.add('backInRight','animated');
            //     // },600)
            // }
            

            navItems.forEach(async(ele,index)=>{
                // setTimeout(()=>{
                    // await animTimer(5000)
                    ele.classList.remove('backOutLeft','animated');
                    ele.classList.add('backInRight','animated');
                // },500)
                // await animDynamic(ele,'backOutLeft','remove').then().then(()=>{
                //     ele.classList.add('backInRight','animated')
                // })
            })
        },{once:true})
    }

}

function closingNavPopup(){
    primaryMenu.attr('aria-expanded','false');
    primaryMenu.attr('data-state','closing');

    let closingEle = document.querySelector('.primary-menu[data-state="closing"] .primary-row-overlay');
    if(closingEle != null){
        closingEle.addEventListener('animationstart',()=>{
            const navAnim = new Promise((resolve,reject)=>{
                // debugger;
                navItems.forEach((ele,index)=>{
                    ele.classList.remove('backInRight', 'animated');
                    ele.classList.add('backOutLeft', 'animated');
                })
                resolve();
                
            })
            navAnim.then((res)=>{
                // debugger;
                menuSocials.css({
                    'opacity':'0',
                    'visibility':'hidden'
                })
                menuContainer.css({
                    'opacity':'0',
                    'visibility':'hidden',
                    'animation-duration':'350ms !important'
                });
            })
            
        },{once:true})
        closingEle.addEventListener('animationend',()=>{
            closedNavPopup();
        },{once:true})
    }
}

function closedNavPopup(){
    $body1.removeClass("primary-menu-open");
    primaryMenu.attr('data-state','closed');    
}





/* Tab Functionality */

let btnList = document.querySelectorAll('.section-tabs .btn-list .list-btn');
let effectImg = document.querySelector('.click-effect img');

if(btnList != null){
    btnList.forEach((btn,index)=>{
        // if(!(btn.classList.contains('active'))){

            btn.addEventListener('click',()=>{
                if((btn.classList.contains('active'))){
                    return;
                }
                let cls =[...btnList].filter((ele)=>{
                    return ele.classList.contains('active');
                });
                cls[0].classList.remove('active');
                btn.classList.add('active');
                if(effectImg != null){
                    let boom = new Promise((resolve,reject)=>{
                        effectImg.classList.remove('backInUp','animated');
                        resolve();
                    })
                    boom.then(()=>{
                        setTimeout(()=>{
                            effectImg.classList.add('backOutDown','animated');
                        },10)
                    }).then(()=>{
                        setTimeout(()=>{
                            effectImg.classList.remove('backOutDown','animated');
                        },10)
                    }).then(()=>{
                        setTimeout(()=>{
                            effectImg.classList.add('backInUp','animated');
                        },10)
                    }).then(()=>{
                        setTimeout(()=>{
                            effectImg.setAttribute('src',`images/services/ecom/${btn.getAttribute('data-ptype')}-portal.svg`);
                        },10)
                    })
                }
            })
        // }
    })
}




/* Sub Menu Desktop Hover Functionality */

let submenuitem = document.querySelector('.desktop-submenu-parent'),
    desktopsubmenu = document.querySelector('.submenu-desktop');

submenuitem.addEventListener('mouseover',(event)=>{
    desktopsubmenu.classList.add('active')
})

submenuitem.addEventListener('mouseout',(event)=>{
    desktopsubmenu.classList.remove('active')
})

desktopsubmenu.addEventListener('mouseover',(event)=>{
    desktopsubmenu.classList.add('active')
})

desktopsubmenu.addEventListener('mouseout',(event)=>{
    desktopsubmenu.classList.remove('active')
})


/* Contact Form Popup */

let footerbtn = document.querySelector('.footer-btn'),
    contactformpopup = document.querySelector('.contactform-popup'),
    closeicon = document.querySelector('.close-icon'),
    popupform = document.querySelector('#template-contactform[data-formtype="popup"]')

footerbtn.addEventListener('click',()=>{
    $body.classList.add('overflow-y-hidden');
    contactformpopup.setAttribute('data-popup','opened');
    // contactformpopup.classList.add('active');
})

closeicon.addEventListener('click', ()=>{
    // popupform.style.animation = 'formAnimReverse .5s ease-in-out 1 alternate-reverse';
    contactformpopup.setAttribute('data-popup','closing');
    let closingele = document.querySelector('.contactform-popup[data-popup="closing"] #template-contactform[data-formtype="popup"]');

    closingele.addEventListener('animationend',() => {
        contactformpopup.setAttribute('data-popup','closed')
        $body.classList.remove('overflow-y-hidden');
    },{once:true})
})