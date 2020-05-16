$(document).ready( function() {

    // refs
    const dropdownHere = $('.dropdown-here');
    const dropdownMenu =  $('.navbar__list__link__dropdown-menu');
    const chatIcon = $('.chat-icon');
    const chatPanel = $('.chat');
    const chatCtn = $( '.chat-ctn' )
    
    // dropdown menu show and hide
    dropdown(dropdownHere, dropdownMenu);

    // Chat Icon change and toggle class for open chat
    chat(chatIcon, chatPanel);
    
    // Opacity header chat on scroll
    opacityOnScroll(chatCtn)
    
});

// Dropdown menu action
function dropdown(dropdownHere, dropdownMenu) {
    // dropdown menu over 
    dropdownHere.mouseover( function() {
        dropdownMenu.addClass('show-dropdown');
    });

    // dropdown menu leave
    dropdownMenu.mouseleave( function() {
        dropdownMenu.removeClass('show-dropdown');
    });
};


// Chat Icon change and toggle class for open chat

function chat(chatIcon, chatPanel) {
    chatIcon.click( function() {
        chatIcon.children('.icon-chat').toggle(); 
        chatIcon.children('.icon-arrow').toggle();
        chatPanel.toggleClass('active-chat');
    });
};

// Opacity header chat on scroll

function opacityOnScroll(chatCtn) {
    chatCtn.on('scroll', function() {
        const scrolled = $( '.chat-ctn' ).scrollTop();
        const scrollable = 165;

        if (scrolled == scrollable) {
            $('.chat__header__info').addClass('chat-scrolled');
        } else if (scrolled == 0) {
            $('.chat__header__info').removeClass('chat-scrolled');
        }
    });
};
