let div1=document.createElement('div')

function ten(){
    div1.innerHTML='10'
    setTimeout(nine,1000)
    function nine(){
        div1.innerHTML='9'
        setTimeout(eight,1000)
        function eight(){
            div1.innerHTML='8'
            setTimeout(seven,1000)
            function seven(){
                div1.innerHTML='7'
                setTimeout(six, 1000);
                function six(){
                    div1.innerHTML='6'
                    setTimeout(five, 1000);
                    function five(){
                        div1.innerHTML='5'
                        setTimeout(four, 1000);
                        function four(){
                            div1.innerHTML='4'
                            setTimeout(three, 1000);
                            function three(){
                                div1.innerHTML='3'
                                setTimeout(two, 1000);
                                function two(){
                                    div1.innerHTML='2'
                                    setTimeout(one, 1000);
                                    function one(){
                                        div1.innerHTML='1'
                                        setTimeout(hid, 1000);
                                        function hid(){
                                            div1.innerHTML='Happy Independence Day'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
    }

}
ten()

document.body.append(div1)

// let div=document.querySelector('.center')

// let timer=3
// let started=setInterval(startTimer,1000)

// function startTimer(){
//     timer=timer--
//     if (timer<1) {
//         timer='Happy Independence day'
//         clearInterval(started)
//     }
//     div.innerHTML=timer
//     timer--
}

// let start=setInterval(startTimer,1000)
// function startTimer (){
//     timer=timer--
//     if (timer===0){
//         timer='Happy Independence Day'
//         clearInterval(start)
//     }
//     div1.innerHTML=timer
//     timer--
// }
