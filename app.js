document.addEventListener("DOMContent", () => {

    const images = document.querySelectorAll("img");

    for (const image of images){
        console.log(image)
    }

})