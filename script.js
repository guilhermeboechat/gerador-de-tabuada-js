function tabuada(){
    let numero = document.querySelector('#numero')
    let tab = document.querySelector('#seltab')

    if(numero.value.length == 0){
        window.alert('Digite um número!')
    } else{
        tab.innerHTML = ''
        let num = Number(numero.value)
        for(let x = 1; x <= 10; x++){
            let item = document.createElement('option')
            item.text = `${num} x ${x} = ${num*x}`
            tab.appendChild(item)
        }
    }
}