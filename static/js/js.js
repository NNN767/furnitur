

let NotMedia = '/media/'

var divan_container_name = document.getElementById('divan_container');

;(() => {
  divan_container_name.addEventListener('scroll',throttle(checkPosition,250))
  divan_container_name.addEventListener('resize', throttle(checkPosition,250))
})()





function GetDivan_container(){
    var divan_container = document.getElementById('divan_container').getBoundingClientRect() // получение divan_container статичный элемент
    var divan_container_bottom = divan_container.bottom
    return divan_container_bottom
}


function gettAllDivans(){                           // возвращает список диванов
    var divan = document.getElementsByName("divan");
    return divan;
}


function getLenchDivans(divans){
    var divans = divans
    var lench_divans = divans.length - 1                  //возвращает последнее значение списка принимает список диванов
    return lench_divans;
}

function GetHeight_el(divan,lench){
    var el = divan
    var lench_el = lench
    var result = el[lench_el].getBoundingClientRect()
    return result.bottom
}





let counter_start = 4
let counter_end = 7


function checkPosition(){

    var divan_container_bottom = GetDivan_container()
    var divan = gettAllDivans()
    var lench = getLenchDivans(divan)
    var height_el =GetHeight_el(divan,lench)
    var height_container = divan_container_bottom
    if(height_el < height_container){
        console.log('true')
        test(counter_start,counter_end)
        counter_end += 3
        counter_start += 3
    }
    if(height_el > height_container){
        console.log('false')
    }
}



function throttle(callee, timeout) {
  let timer = null

  return function perform(...args) {
    if (timer) return

    timer = setTimeout(() => {
      callee(...args)

      clearTimeout(timer)
      timer = null
    }, timeout)
  }
}



function test(start_id,end_id){
fetch(start_id+'/'+end_id+'/', {
    headers:{
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
    },
})
.then(response => {
    return response.json() //Convert response to JSON
})
.then(data => {
    var length= data.length
    if (length > 0){
        const template = document.getElementById('divan_container')
        for (let i = 0; i < length; i++) {
        var date = data[i]['image']
        var clone = document.getElementById('divan')
        var new_clone = clone.cloneNode(true);
        new_clone.querySelector('img').src =NotMedia+date

        template.append(new_clone)
    }

    }

})

}





var divan = document.getElementsByName('divan')
lench = divan.length

for (let i = 0; i < lench; i++){
    divan[i].addEventListener('click', myFunction)
}


let divan_foto = document.getElementById('divan_foto_container')
let img_foto = document.getElementById('img_foto')
function myFunction(e) {
    var new_foto = e.target.cloneNode(true)
    img_foto.src = new_foto.getAttribute('src')

}



// new cod \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\





const two_block = document.getElementById('two_block') // нужен для очистки этого элемента
var item_buy_id = document.getElementById('item_buy_id') // шаблон для товаров



function GetDivans_Fetch(start_id,end_id,name){
fetch(start_id+'/'+end_id+'/'+name+'/', {
    headers:{
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
    },
})
.then(response => {
    return response.json() //Convert response to JSON
})
.then(data => {
    var length= data.length
    if (length > 0){

        for (let i = 0; i < length; i++) {
            var date = data[i]['image']
            var clone = item_buy_id.cloneNode(true)
            clone.querySelector('img').src =NotMedia+date
            two_block.append(clone.cloneNode(true))
            }
        }
})

}







function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function challenge(e){
    removeAllChildNodes(two_block)
    name = e.id
    GetDivans_Fetch(0,3,name)
}




