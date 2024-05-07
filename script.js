const body =document.querySelector('body')
const div = document.querySelector('div')
const vid=document.querySelector('video')
console.log(vid)

body.addEventListener('keydown',(event)=>{
    if(event.code =='Space'){
        vid.play()
    }
    else{
        vid.pause()
    }
})