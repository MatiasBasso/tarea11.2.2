document.addEventListener('DOMContentLoaded', function() {
    const enviarButton = document.getElementById("enviar");

    enviarButton.addEventListener("click", function() {
        const formulario = document.getElementById("registroForm");
        const formData = new FormData(formulario);

        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        const url = "https://jsonplaceholder.typicode.com/users";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);
            alert("Registro exitoso.");
        })
        .catch(error => {
            console.error("Error al enviar la solicitud:", error);
            alert("Hubo un error en el registro.");
        });
    });
});
