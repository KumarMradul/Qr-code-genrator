const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const genrateBtn = document.getElementById('genrate');
const downloadBtn = document.getElementById('download');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
genrateBtn.addEventListener('click',(e)=>{
    e.preventDefault();//stop to refresh page
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    // genrateQRCode();
    isEmptyInput();
});

downloadBtn.addEventListener('click',() =>{
    let img = document.querySelector('.qr-body img');
    if(img !==null){
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttr)
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`)
    }

})

function isEmptyInput(){
    if(qrText.value.length > 0){
        genrateQRCode();
        }
        else{
            alert("Enter the text or URL to genrate your QR Code")
        }
}

function genrateQRCode(){
    qrContainer.innerHTML = '';
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark: "#000",
    });
}
