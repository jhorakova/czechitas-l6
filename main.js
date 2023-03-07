// tady je místo pro náš program

/*Cvičení 1
Bez použití knihovny dayjs napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a 
vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

> parseDate('12.03.2015')
{ day: 12, month: 3, year: 2015 }
> parseDate('06.04.2021')
{ day: 6, month: 4, year: 2021 }*/


/*const enterDate = prompt('Zadej libovolné datum ve formátu den.měsíc.rok: ')

const parseDate = (enterDate) => {
    return {
        day: enterDate.slice(0,2),
        month: enterDate.slice(3,5),
        year: enterDate.slice(-4)
    }
}
console.log(parseDate(enterDate))*/

/*Cvičení 2
Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt představující datum v následujícím formátu.

{ day: 12, month: 3, year: 2015 }
Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY. Příklad použití.

> formatDate({ day: 6, month: 4, year: 2021 })
"06.04.2021"
V tomto cvičení se vám jistě bude hodit metoda padStart. Zkuste také uvnitř těla funkce použít destrukturování.*/

/*const enterDay = prompt('Zadej libovolný den v měsíci: ')
const enterMonth = prompt('Zadej libovolný měsíc v roce: ')
const enterYear = prompt('Zadej libovolný rok: ')

const date = {
    day: enterDay,
    month: enterMonth,
    year: enterYear
}

//console.log(date)

const { day, month, year } = date

const formatDate = (date) => {
    return `
    ${day.padStart(2,0)}.${month.padStart(2,0)}.${year.padStart(4,'??')}
      `
}

console.log(formatDate(date))*/

/*Cvičení 3
Jak jistě znalci jazyka Python dobře vědí, funkce round v tomto jazyce zaokrouhluje malinko jinak, než jsme zvyklí. 
Pokud je desetinná část čísla přesně 0.5, Python zaokrouhluje k nejbližšímu sudému číslu. 
JavaScriptová funkce Math.round naopak provádí zaokrouhlování způsobem, na který jste zvyklí, tedy pro 0.5 vždy nahoru. 
Někomu by se po po Pythonovském zaokrouhlování mohlo stýskat. Napište proto funkci jménem round, 
která bude zaokrouhlovat čísla na celé jednotky podle následujících pravidel.

Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů.
Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru.
Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu. 
Tedy například 3.5 se zaokrouhlí na 4, naopak 2.5 se zaokrouhlí na 2.
V tomto cvičení se vám může hodit funkce Math.trunc, která umí odříznout desetinnou část čísla.

Bonus
Zajistěte, aby funkce správně fungovala i pro záporná čísla.

Tedy například -3.5 se zaokrouhlí na -4, naopak -2.5 se zaokrouhlí na -2.*/

//const desetinneCislo = prompt('Zadej číslo s jedním desetinným místem, místo čárky použij tečku: ')
//console.log(desetinneCislo)
const desetinneCislo = document.querySelector('.desetinneCislo')
desetinneCislo.onselect = function(){desetinneCislo}
const vysledek = document.querySelector('.vysledek')

const round = (desetinneCislo) => {
    if (desetinneCislo.slice(-1) < 5) {
        return (Math.floor(desetinneCislo))            //Math.trunc(desetinneCislo)
    } else if (desetinneCislo.slice(-1) > 5) {
        return (Math.ceil(desetinneCislo))            //Math.trunc(desetinneCislo) + 1
    } else if ((desetinneCislo.slice(-3, -2) % 2) === 0) {
        return (Math.trunc(desetinneCislo))
    } else if (desetinneCislo.indexOf('-') !== -1) {
        return (Math.trunc(desetinneCislo) - 1)
    } else {
        return (Math.ceil(desetinneCislo))
    }
}

//console.log(desetinneCislo.slice(-3, -2))
//console.log(Math.trunc(Number(desetinneCislo)))
//console.log(desetinneCislo.slice(-1))
console.log(round(desetinneCislo))

vysledek.onselect = round()










