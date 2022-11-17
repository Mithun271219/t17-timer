let htmlform = document.createElement("form")
let container = document.createElement('div')
container.setAttribute('class', 'container')
let row = document.createElement('div')
row.setAttribute('class', 'row')
let col1 = document.createElement('div')
col1.setAttribute('class', 'col-md-4')
let col2 = document.createElement('div')
col2.setAttribute('class', 'col-md-4')
let col3 = document.createElement('div')
col3.setAttribute('class', 'col-md-4')

let div1 = divis('div')
div1.innerHTML = '<h2>Form Submission:</h2>'


let div2 = divis('div')
let lab2 = label('first-name', 'FirstName')
let br2 = br()
let inp2 = inpt('text', 'first-name')
div2.append(lab2, br2, inp2)

let div3 = divis('div')
let lab3 = label('last-name', 'LastName')
let br3 = br()
let inp3 = inpt('text', 'last-name')
div3.append(lab3, br3, inp3)

let div4 = divis('div')
let lab4 = label('address', 'Address Line-1')
let br4 = br()
let inp4 = inpt('text', 'address')
div4.append(lab4, br4, inp4)

let div6 = divis('div')
let lab6 = label('pin', 'PIN-Code')
let br5 = br()
let inp6 = inpt('number', 'pin')
div6.append(lab6, br5, inp6)

let div7 = divis('div')
let lab7 = label('gender', 'Gender:')
let div71 = divis('div')
let labm = label('gmale', 'Male')
let gm = inpt('radio', 'gmale')
gm.setAttribute('name', 'gender')
let labf = label('gmale', 'Female')
let gf = inpt('radio', 'gmale')
gf.setAttribute('name', 'gender')
div7.append(lab7, div71, labm, gm, labf, gf)

let div8 = divis('div')
div8.innerHTML = 'Choice of food <span>(must choose atleast 2 out of 5)</span>'
let div81 = divis('div')
let lab81 = label('food', 'North-Indain')
let inp81 = inpt('checkbox', 'food')
let br81 = br()
let lab82 = label('food', 'South-Indain')
let inp82 = inpt('checkbox', 'food')
let br82 = br()
let lab84 = label('food', 'Chinese')
let inp84 = inpt('checkbox', 'food')
let br83 = br()
let lab85 = label('food', 'Jaspnese')
let inp85 = inpt('checkbox', 'food')
let br84 = br()
let lab86 = label('food', 'Sea-Food')
let inp86 = inpt('checkbox', 'food')
div8.append(div81, lab81, inp81, br81, lab82, inp82, br82, lab84, inp84, br83, lab85, inp85, br84, lab86, inp86,)

let div9 = divis('div')
let lab9 = label('state', 'State')
let br9 = br()
let inp9 = inpt('text', 'state')
div9.append(lab9, br9, inp9)

let div10 = divis('div')
let lab10 = label('cont', 'Country')
let br10 = br()
let inp10 = inpt('text', 'cont')
div10.append(lab10, br10, inp10)

let div11 = divis('div')
let button = document.createElement('button')
button.setAttribute('id', 'enter')
button.addEventListener('click',pulldata)
button.innerHTML = "Submit"
div11.append(button)

col1.append(div1, div2, div3, div4, div6, div7, div8, div9, div10, div11)

let div12 = divis('div')
div12.innerHTML = "<h2>Temporary Database"
col2.append(div12)

let div13 = divis('div')
let tabl = document.createElement('table')
tabl.className = "table"
let thead = document.createElement('thead')
thead.className = 'thead-dark'
let tr = document.createElement('tr')
let th1 = th('th', 'FirstName')
let th2 = th('th', 'LastName')
let th3 = th('th', 'Address')
let th4 = th('th', 'Pincode')
let th5 = th('th', 'Gender')
let th6 = th('th', 'Food')
let th7 = th('th', 'State')
let th8 = th('th', 'Country')

tr.append(th1, th2, th3, th4, th5, th6, th7, th8)
thead.append(tr)



///let tb1=document.createElement('tbody')
//let tr1=document.createElement('tr')
//let td1=td('td','firstname')
//let td2=td('td','lastname')
//let td3=td('td','address')
//let td4=td('td','pin')
//let td5=td('td','pin')
//let td6=td('td','pin')
//let td7=td('td','state')
//let td8=td('td','cont')

//tr1.append(td1,td2,td3,td4,td5,td6,td7,td8,)
//tbody.append(tr1)


tabl.append(thead)
div13.append(tabl)


col2.append(div12, div13)


function pulldata(){
    
    let row=1

    let firstname=document.getElementById('first-name')
    let lastname=document.getElementById('last-name')
    let address=document.getElementById('address')
    let pin=document.getElementById('pin')
    let gender=document.getElementById('gmale')
    let food=document.getElementById('food')
    let state=document.getElementById('state')
    let Country=document.getElementById('cont')

    document.write(firstname.value)
    document.write(lastname.value)
    document.write(address.value)
    document.write(pin.value)
    document.write(gender.value)
    document.write(food.value)
    document.write(state.value)
    document.write(Country.value)
}












function th(tn, value) {
    let res = document.createElement(tn)
    res.innerHTML = value
    return res
}


function br() {
    let res = document.createElement('br')
    return res
}

function divis(tn) {
    let res = document.createElement(tn)
    return res
}

function label(labname, value) {
    let res = document.createElement('label')
    res.setAttribute('for', labname)
    res.innerHTML = value
    return res
}

function inpt(kind, idname) {
    let res = document.createElement('input')
    res.setAttribute('type', kind)
    res.setAttribute('id', idname)
    return res
}



row.append(col1, col2, col3)
container.append(row)
htmlform.append(container)
document.body.append(htmlform)
