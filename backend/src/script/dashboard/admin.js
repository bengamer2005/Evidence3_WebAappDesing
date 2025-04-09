document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")
    const userList = document.getElementById("list")

    if(!form) {
        console.error("Formulario no encontrado")
    }

    if(!userList) {
        console.error("No se encontro la lista")
    }

    fetchUsers()

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const username = document.getElementById("username").value
        const role = document.getElementById("role").value

        if(!email || !password || !username || !role ) {
            alert("debes de ingresar todos los campos")
            return
        }

        const user = {
            email, password, username, role
        }

        try {
            const response = await fetch("/halcon/user/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })

            const userData = await response.json()

            if (response.ok) {
                form.reset() 
                fetchUsers()
            } else {
                alert(`error: ${userData.message}`)
            }
        } catch (error) {
            console.error("error al enviar los datos: ", error)
        }
    })

    async function fetchUsers() {
        userList.innerHTML = ""
        const response = await fetch("/halcon/user/getUsers")
        const users = await response.json()

        users.forEach((User) => {
            const userInfo = document.createElement("div")
            userInfo.innerHTML = `
            <table>
                <tr>
                    <td>Email: </td>
                    <td>${User.email}</td>
                </tr>

                <tr>
                    <td>Password: </td>
                    <td>${User.password}</td>
                </tr>

                <tr>
                    <td>Username: </td>
                    <td>${User.username}</td>
                </tr>
                
                <tr>
                    <td>Role: </td>
                    <td>${User.role}</td>
                </tr>

                <tr>
                    <td>Created at: </td>
                    <td>${User.dateCreated}</td>
                </tr>
                
                <tr>
                    <td>Status: </td>
                    <td>${User.active}</td>
                </tr>
            </table>

            <button onclick="editUser('${User._id}')">Editar</button>
            <button onclick="deleteUser('${User._id}')">Eliminar</button>

            <p>-----------------------------------------</p>
            `
            userList.appendChild(userInfo)
        })

        window.editUser = async (id) => {
            const newEmail = prompt("New email:")
            const newPassword = prompt("New password:")
            const newUsername = prompt("New username:")
            const newRole = prompt("New role:")
    
            if (newEmail && newPassword && newUsername && newRole) {
                const response = await fetch(`/halcon/user/update/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: newEmail,
                        password: newPassword,
                        username: newUsername,
                        role: newRole
                    })
                })
    
                if (response.ok) {
                    fetchUsers()
                } else {
                    console.error("Error al actualizar el User")
                }
            }
        }

        window.deleteUser = async (id) => {
            const confirmation = confirm("¿Estás seguro de que deseas eliminar este User?")
            if (confirmation) {
                const response = await fetch(`/halcon/user/delete/${id}`, {
                    method: "DELETE"
                })

                if (response.ok) {
                    fetchUsers()
                } else {
                    console.error("Error al eliminar el User")
                }
            }
        }   
    }
})