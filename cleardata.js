const clear = document.getElementById("clear")

clear.addEventListener("click", (event) => {

    localStorage.clear()

    if (document.getElementById("deleted")) {
        document.getElementById("deleted").remove()
    }


    const success = document.createElement("span")
    success.textContent = "Deleted local data"
    success.id = "deleted"
    clear.appendChild(success)
})