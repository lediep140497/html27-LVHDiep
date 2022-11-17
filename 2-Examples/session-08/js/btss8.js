// bai 1
function handleClick() {
    console.log('click')
    let inputNum = prompt('Enter number')
    let outputNum = inputNum * 2
    let elm = document.getElementById('result')
    elm.innerHTML = outputNum
}

// bai 2
function handleClick2() {
    let outPut2 = prompt('so 1')
    let b = prompt('so 2')
    let c = prompt('so 3')
    let d = prompt('so 3')

    if (outPut2 > b) {
        outPut2 = b
    }
    if (outPut2 > c) {
        outPut2 = c
    }
    if (outPut2 > d) {
        outPut2 = d
    }
    console.log(outPut2)
    let elm2 = document.getElementById('result2')
    elm2.innerHTML = outPut2
}

//bai 3
function handleClick3() {
    let inputNum3 = prompt('Enter number')
    let outPut3 = (inputNum3 - 1) / 2
    console.log(outPut3)
    let elm3 = document.getElementById('result3')
    elm3.innerHTML = outPut3
}

//bai 4

// function handleClick4() {
//     let n = prompt('nhap so: 10 < n < 99')
//     let donvi = n % 10
//     let chuc = ( n / 10 ) % 10

//     console.log(chuc, 'la so hang chuc')
//     console.log(donvi, 'la so hang don vi')


//     let elm4 = document.getElementById('result4')
//     elm4.innerHTML = chuc, donvi


// }

// bai 5


function handleClick5() {
    let inputNum5 = prompt('Nhap so nguyen vao')

    let flag = true
    if (inputNum5 < 2) {
        flag = false       // inputNum5 k phai SNT
    }
    else if (inputNum5 == 2) {
        flag = true
    }
    else if (inputNum5 % 2 == 0) {
        flag = false
    }
    else { // tao vong lap
        for (let a = 3; a < (inputNum5 - 1); a += 2) {
            if (inputNum5 % a == 0) {
                flag = false
                break
            }

        }
    }
    //kiem tra bien flag
    if (flag == true) {
        document.getElementById('result5').innerHTML = inputNum5 + ' ' + 'YES'
    } else {
        document.getElementById('result5').innerHTML = inputNum5 + ' ' + 'NO'
    }

}


// bai 6

