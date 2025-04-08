document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")

    if(!form) {
        console.error("No se encotro el formulario")
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const username = document.getElementById("username").value
        const role = document.getElementById("role").value

        if(!email || !password || !username || !role) {
            return alert("todos los campos son obligatorios")
        }

        const user = {
            email, password, username, role
        }

        try {
            const response = await fetch("/halcon/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })

            const dataUser = await response.json()

            if(response.ok) {
                alert("User login sucesfully")
                window.location.href = "halcon-user/dashboard"
            } else {
                return alert(`verifica tus datos: ${dataUser.message}`)
            }
        } catch (error) {
            console.error("Error de conexión:", error)
        }
    })
})