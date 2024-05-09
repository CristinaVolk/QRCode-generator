const generateQRCodeButton = document.querySelector("#button")
const form = document.querySelector("#Form");
const qrCode = document.querySelector("#qr-code");

const clearQR = () => {
    qrCode.innerHTML = "";
};

function generateQrCode(url) {
    const qrCode = new QRCode(document.getElementById("qr-code"), {
        text: url,
        width: 300,
        height: 300,
    });
    console.log(qrCode)
}

const onGenerateQrCodeSubmit = (event) => {
    event.preventDefault()
    clearQR();

    const url = document.querySelector("#formData").value;
    console.log(url);

    if (url === "") {
        alert("Please enter a valid URL")
    } else {
        generateQrCode(url);
    }
}
form.addEventListener("submit", onGenerateQrCodeSubmit)