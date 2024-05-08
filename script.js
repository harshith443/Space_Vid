const body =document.querySelector('body')
const div = document.querySelector('div')
const vid=document.querySelector('video')

isPlaying =false

document.addEventListener('keydown',(event)=>{
    if(event.code =='Space'){
        vid.play()
    }
    else{
        vid.pause()
    }
})

document.addEventListener('touchstart',(event)=>{
    event.preventDefault();
    if(!isPlaying){
        vid.play()
        isPlaying = true
    }
    
})
document.addEventListener('touchend',(event)=>{
    if(isPlaying){
        vid.pause()
        isPlaying = false
    }
    
})
