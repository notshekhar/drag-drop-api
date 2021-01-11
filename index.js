function validImage(filename) {
    let v = /\.(jpe?g|tiff?|png|webp|bmp|raw)$/i.test(filename)
    if (!v) {
        alert(
            `Not valid Image only "jpeg", "jpg", "png", "raw", and "webp" images are allowed`
        )
        return false
    }
    // let pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i
    // let extension = pattern.exec(filename)[1]
    // console.log(extension)
    return true
}
const choose_photo = document.querySelector(".drop_photo > input")
const drag_drop = document.querySelector(".drop_photo")
const choose_div = document.querySelector(".drop_photo > .choose")
//file change
choose_photo.onchange = (e) => {
    let file = choose_photo.files[0]
    if (!validImage(file.name)) return
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
        window.photo = reader.result
        drag_drop.innerHTML = file.name
        let image = new Image()
        image.src = reader.result
        image.height = 100
        drag_drop.prepend(image)
    }
}
drag_drop.onclick = (e) => {
    choose_photo.click()
}
//handling drag drop
drag_drop.ondragover = (e) => {
    e.preventDefault()
    drag_drop.classList.add("dragHover")
}
drag_drop.ondragleave = (e) => {
    e.preventDefault()
    drag_drop.classList.remove("dragHover")
}
drag_drop.ondrop = (e) => {
    drag_drop.classList.remove("dragHover")
    e.preventDefault()
    e.stopPropagation()
    choose_photo.files = e.dataTransfer.files
    let file = choose_photo.files[0]
    if (!validImage(file.name)) return
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
        window.photo = reader.result
        drag_drop.innerHTML = file.name
        let image = new Image()
        image.src = reader.result
        image.height = 100
        drag_drop.prepend(image)
    }
}
