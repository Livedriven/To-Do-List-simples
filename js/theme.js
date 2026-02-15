// theme.js 

const storange = localStorage;

export function salvarTheme(theme){
    storange.setItem("theme", theme);
}

export function carregarTheme(){
    return storange.getItem('theme');
}