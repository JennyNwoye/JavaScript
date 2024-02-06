const icons = Array.from(document.querySelectorAll('.menuIcon'));

icons.forEach(function(icon){
    icon.addEventListener('click', function(){
        const menuCard = icon.parentElement.nextElementSibling;
        if(menuCard.classList.contains('fly-in-menu')){
            menuCard.classList.remove('fly-in-menu');
            menuCard.classList.add('fly-in-menu-new');
        } else if(menuCard.classList.contains('fly-in-menu-new')){
            menuCard.classList.remove('fly-in-menu-new');
            menuCard.classList.add('fly-in-menu');
        }
    });
});
















// const icons = Array.from(document.querySelectorAll(`.menuIcon`));
// // const menuCard = Array.from(document.querySelectorAll)(`.menuCard`);

// icons.forEach(function(icon){
//     icons.addEventListener(`click`, function(){
//         const menuCard = icon.parentElement.nextElementSibling
//         if(menuCard.classList.contains(`fly-in-menu`)){
//             menuCard.classList.remove(`fly-in-menu`)
//             menuCard.classList.add(`fly-in-menu-new`)
//         }else if(menuCard.classList.contains(`fly-in-menu-new`)){
//             menuCard.classList.remove(`fly-in-menu-new`)
//             menuCard.classList.add(`fly-in-menu`)
//         }
        
    
//     })
// });








// let icon = document.getElementById(`icon`)
// let menuCard = document.getElementById(`FlyIn`)

// icon.addEventListener(`click`, function(){
//     if(menuCard.classList.contains(`fly-in-menu`)){
//         menuCard.classList.remove(`fly-in-menu`)
//         menuCard.classList.add(`fly-in-menu-new`)
//     }else if(menuCard.classList.contains(`fly-in-menu-new`)){
//         menuCard.classList.remove(`fly-in-menu-new`)
//         menuCard.classList.add(`fly-in-menu`)
//     }
    

// })

