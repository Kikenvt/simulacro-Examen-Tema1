

const button = document.getElementById("send")
const resultArea = document.getElementById("resultArea")
const resultPerimeter = document.getElementById("resultPerimeter")

button.addEventListener("click", () => {
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)

  if (!isNaN(length) && !isNaN(width)) {
    const area = length * width
    const perimeter = 2*length + 2*width

    resultArea.innerHTML = `El area de es ${area}`
    resultPerimeter.innerHTML = `El perimetro es ${perimeter}`
  } else {
    resultArea.innerHTML = `Por favor ingrese valores correctos`
  }
})
