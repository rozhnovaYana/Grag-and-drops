"use strict"
document.addEventListener("DOMContentLoaded", ()=>{
    const item=document.querySelector(".item"),
    placeholders=document.querySelectorAll(".placeholder")
    const dragstart=(e)=>{
        e.target.classList.add("hold") 
        setTimeout(()=>{
            e.target.classList.add("hide") 
        })
    }
    const dragend=(e)=>{        
        e.target.classList.remove("hold", "hide") 
    }
    item.addEventListener("dragstart", dragstart)
    item.addEventListener("dragend", dragend)
    placeholders.forEach(placeholder=>{
        bindPlaceholderEventListener(placeholder,"dragover",dragover )
        bindPlaceholderEventListener(placeholder,"dragenter", dragenter)
        bindPlaceholderEventListener(placeholder,"dragleave", dragleave)
        bindPlaceholderEventListener(placeholder,"drop", drop)
    })
    function bindPlaceholderEventListener(item, event, f){
        item.addEventListener(event, f)
    }
    function dragover(e){
        e.preventDefault()
    }
    function dragenter(e){
        e.target.classList.add("hovered")
    }
    function dragleave(e){
        e.target.classList.remove("hovered")
    }
    function drop(e){
        e.target.append(item)
        e.target.classList.remove("hovered")
    }
})