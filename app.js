const tmp1 = document.querySelector('#temp-1')
const tmp2 = document.querySelector('#temp-2')
const txt1 = document.querySelector('#txt-1')
const txt2 = document.querySelector('#txt-2')
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')

txt1.defaultValue = 0
txt2.defaultValue = 32

var p_tmp1 = tmp1.value;
var p_tmp2 = tmp2.value;

tmp1.addEventListener("change", () => {
    if (tmp1.value == tmp2.value) {
        tmp2.value = p_tmp1
        p_tmp2 = tmp2.value
        p_tmp1 = tmp1.value
    }
})

tmp2.addEventListener("change", () => {
    if (tmp1.value == tmp2.value) {
        tmp1.value = p_tmp2
        p_tmp2 = tmp2.value
        p_tmp1 = tmp1.value
    }
})

const cel_fr = (num) => {
    return (((num * 9) / 5) + 32);
}

const cel_kel = (num) => {
    return (num + 273.15)
}

const fr_cel = (num) => {
    return (((num - 32) * 5) / 9)
}

const fr_kel = (num) => {
    return (cel_kel(fr_cel(num)))
}

const kel_cel = (num) => {
    return (num - 273.15)
}

const kel_fr = (num) => {
    return (cel_fr(kel_cel));
}

btn1.addEventListener("click", () => {
    var num = parseFloat(txt1.value)
    var ans = 0;
    if (num == txt1.value) {
        if (tmp1.value == 'cel' && tmp2.value == 'fr') {
            ans = cel_fr(num);
        }
        else if (tmp1.value == 'cel' && tmp2.value == 'kel') {
            ans = cel_kel(num)
        }
        else if (tmp1.value == 'fr' && tmp2.value == 'cel') {
            ans = fr_cel(num)
        }
        else if (tmp1.value == 'fr' && tmp2.value == 'kel') {
            ans = fr_kel(num)
        }
        else if (tmp1.value == 'kel' && tmp2.value == 'cel') {
            ans = kel_cel(num)
        }
        else if (tmp1.value == 'kel' && tmp2.value == 'fr') {
            ans = kel_fr(num)
        }

        txt2.value = ans
    }
    else {
        tmp1.value = 'cel'
        tmp2.value = 'fr'
        txt1.value = 0
        txt2.value = 32
    }

})

btn2.addEventListener("click", () => {
    var num = parseFloat(txt2.value)
    var ans = 0;
    if (num == txt2.value) {
        if (tmp2.value == 'cel' && tmp1.value == 'fr') {
            ans = cel_fr(num);
        }
        else if (tmp2.value == 'cel' && tmp1.value == 'kel') {
            ans = cel_kel(num)
        }
        else if (tmp2.value == 'fr' && tmp1.value == 'cel') {
            ans = fr_cel(num)
        }
        else if (tmp2.value == 'fr' && tmp1.value == 'kel') {
            ans = fr_kel(num)
        }
        else if (tmp2.value == 'kel' && tmp1.value == 'cel') {
            ans = kel_cel(num)
        }
        else if (tmp2.value == 'kel' && tmp1.value == 'fr') {
            ans = kel_fr(num)
        }

        txt1.value = ans
    }
    else {
        tmp1.value = 'cel'
        tmp2.value = 'fr'
        txt1.value = 0
        txt2.value = 32
    }

})