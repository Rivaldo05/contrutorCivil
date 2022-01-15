// função loaddash pega da internet

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

const buscarElemento = document.querySelectorAll('[data-animeCard]')
const animationClass = 'animate'

function animeScrool(){
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 3)
    buscarElemento.forEach((parametro)=>{
        if(windowTop > parametro.offsetTop){
            parametro.classList.add(animationClass)
        }else{
            parametro.classList.remove(animationClass)
        }
    })
}

/* sem debouce */
animeScrool()
if(buscarElemento.length){
    window.addEventListener('scroll',debounce(()=>{
    animeScrool()
},200)) 
}

/**com Debounce */
animeScrool()
if(buscarElemento.length){
    window.addEventListener('scroll', ()=>{
    animeScrool()
})
}


/* encontrar elementos que causam o scrool x
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll('*'), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el);
  }
});*/