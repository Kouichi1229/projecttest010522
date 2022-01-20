var xhttp = new XMLHttpRequest()


function getAler() {
    const apiKey='https://cors-anywhere.herokuapp.com/https://alerts.ncdr.nat.gov.tw/api/datastore?apikey=gP4XbD%2B7guPo2GApZ6TxTn5u4Y%2FtNcNb0nuKjGdbOa4%2FRNpZO26PSAnOlPAdtvd6&format=json&capcode=RA&govcode=CWB';
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var dataObject = JSON.parse(xhttp.responseText);
            var RA_summary =dataObject.result[0].description;
            var str = '恆春';
            if( RA_summary.match(str)){
                document.getElementById('alercontent').innerHTML = RA_summary;
            }
            else{
                document.getElementById('alercontent').innerHTML = '目前沒有特別需要注意的狀況';
            }
            
        }
    };
    xhttp.open("GET", apiKey, true);
    xhttp.send();
}


getAler();