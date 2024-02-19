

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





function checkPosition(){

    var divan_container_bottom = GetDivan_container()

    var divan = gettAllDivans()
    var lench = getLenchDivans(divan)
    var height_el =GetHeight_el(divan,lench)

    var height_container = divan_container_bottom
    if(height_el < height_container){
        console.log('true')         // добовляет элемент следует получить новый список элементов

    }
    if(height_el > height_container){
        console.log('false')         // добовляет элемент следует получить новый список элементов

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




fetch('date/', {
    headers:{
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
    },
})
.then(response => {
    return response.json() //Convert response to JSON
})
.then(data => {
    console.log(data)
})

function test(){
fetch('date/', {
    headers:{
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', //Necessary to work with request.is_ajax()
    },
})
.then(response => {
    return response.json() //Convert response to JSON
})
.then(data => {

})


}
test()






