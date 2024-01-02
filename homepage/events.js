const searchPri = document.querySelectorAll('.searchBar');
const searchpSec = document.querySelector('.auxSearchCont');
const secInput = searchpSec.querySelector('input')

searchPri.forEach(val =>{
    val.addEventListener('click', e =>{
        searchpSec.style.display = 'flex';
        secInput.focus();
    })
})

secInput.addEventListener('focusout', e =>{
    searchpSec.style.display = 'none';
})

addEventListener('resize', e =>{
    setParameters()
})
addEventListener('load', e =>{
    setParameters()
})
function setParameters()
{
    const subCont = document.querySelectorAll('.subContainer')
    let length = window.getComputedStyle(subCont[0]).height
    length = Number(length.slice(0,length.length-2));
    document.querySelector('.scrollCustom').style.top = `${(length-50)/2}px`;
    bars.forEach(val =>{
        val.style.height = `${length-50}px`;
    })
}