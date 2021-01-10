const izaberi = document.querySelector('#izaberi')
const btnOK = document.querySelector('#enter')
const iznos = document.querySelector("#iznos")
const rezultat = document.querySelector('#stanje')
const dodato = document.querySelector('#dodato')
const oduzeto = document.querySelector('#oduzeto')
const opis = document.querySelector('#opis')
const lprihoda = document.querySelector('#lprihoda')
const lrashoda = document.querySelector('#lrashoda')
let UkupanPrihod = 0
let UkupanRashod = 0
let stanje = 0
let niz = []

btnOK.addEventListener('click', (e) => {
    e.preventDefault()
    if (izaberi.value == 'prihod' && iznos.value > 0 && opis.value != '') {
        UkupanPrihod += Number(iznos.value)
        dodato.innerHTML = `+ ${UkupanPrihod}`
        const divPrihod = document.createElement('div')
        lprihoda.appendChild(divPrihod)
        const pPrihod = document.createElement('p')
        pPrihod.textContent = `${opis.value}   +   ${iznos.value}`
        const btnDLT = document.createElement("button")
        btnDLT.innerText = "X"
        divPrihod.append(pPrihod, btnDLT)
        btnDLT.addEventListener('click', () => {
            btnDLT.parentElement.remove()

        })


    } else if (izaberi.value == 'rashod' && iznos.value > 0 && opis.value != '') {
        UkupanRashod += Number(iznos.value)
        oduzeto.innerHTML = `- ${UkupanRashod}`
        const divRashod = document.createElement('div')
        lrashoda.appendChild(divRashod)
        const pRashod = document.createElement('p')
        pRashod.textContent = `${opis.value}   -   ${iznos.value}`
        const btnDLT2 = document.createElement("button")
        btnDLT2.innerText = "X"
        divRashod.append(pRashod, btnDLT2)
        btnDLT2.addEventListener('click', () => {
            btnDLT2.parentElement.remove()

        })

    } else {
        alert("proverite da li ste pravilno popunili sva polja")
    }

    let element = {
        izbor: izaberi.value,
        opis: opis.value,
        iznos: iznos.value
    }
    niz.push(element)

    stanje = UkupanPrihod - UkupanRashod
    rezultat.innerHTML = `${stanje}`
    opis.value = ''
    iznos.value = ''
    izaberi.value = ''

    console.log('ukupan prihod je=', UkupanPrihod)
    console.log('ukupan rashod je=', UkupanRashod)
    console.log('stanje=', stanje)
    console.log(niz)
})