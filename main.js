document.querySelectorAll('.tasks .row').forEach((task) => {
    task.addEventListener('click', () => {
       task.classList.toggle('active')
    })
    task.children[1].addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('del')
        setTimeout(() => {
            e.target.parentElement.remove()
        },400)
    })
})

document.querySelectorAll('.box .date a:nth-of-type(2)').forEach((date) => {
    date.addEventListener('click', (e) => {
        e.preventDefault()
        date.parentElement.parentElement.parentElement.remove()
    })
})
 

let circles = document.querySelectorAll('.progress .row span:nth-of-type(1)')

circles.forEach((circle) => {
  circle.addEventListener('click', (e) => {
    circles.forEach((circle) => {
        circle.style.backgroundColor = 'white';
        circle.style.animation = 'none';
        circle.classList.remove('active')
        circle.classList.remove('last')
    })
   let index =  Array.from(circles).indexOf(e.target)
   circles[index].classList.toggle('last')
   for(let i = 0 ; i< index ; i++){
    circles[i].classList.add('active')
   }
  })
})