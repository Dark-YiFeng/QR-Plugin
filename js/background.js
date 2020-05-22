// 当前网页的地址:
chrome.tabs.getSelected(null, function(tab){
     var url = tab.url; 
     var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 200,
        height: 200
    });
    
    function makeCode() {
    
        qrcode.makeCode(url);
    
    }
    makeCode();
});