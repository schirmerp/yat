
const diceThrow = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,

 }
export  function three_kind(a){
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    let three = false
    Object.values(diceThrow).forEach((v)=>{
        if (v > 2){
            three = true
        }
    }) 
    return three
}
export function four_kind(a){
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    let four = false
    Object.values(diceThrow).forEach((v)=>{
        if (v > 3){
            three = true
        }
    }) 
    return four
}
export function full_house(a){
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    const values = Object.values(diceThrow)
    let full = false
    values.forEach((v)=>{
        if (v == 3){
            values.pop(v)
            values.forEach((v)=>{
                if (v == 2){
                    full = true
                }
            })
        }
    })
    return full
}
export function small(a){
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    const values = a.sort()
    let ss = false
    if((values.includes(1) && values.includes(2) && values.includes(3) && values.includes(4)) || (values.includes(2) && values.includes(3) && values.includes(4) && values.includes(5)) || (values.includes(3) && values.includes(4) && values.includes(5) && values.includes(6))){
        ss = true
    }
    return ss
}
export function large(a){
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    const values = a.sort()
    let ss = true
    let check = 0
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i + 1] - values[i] != 1 ){
            ss = false
        }
    }
    return ss
}
export function yatty(a){
    a.forEach((d)=>{
        diceThrow[d] += 1
    })
    const values = a.sort()
    let yat = true
    values.forEach((a)=>{
        if(a != values[0]){
            yat = false
        }
    })
    
    return yat
}
