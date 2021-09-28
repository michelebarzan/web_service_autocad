function test()
{
    /*$.get("test_login_xml.php",
    function(response, status)
    {
        if(status=="success")
        {
            if(status=="success")
                console.log(response);
            else
                console.log(status);
        }
    });*/
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function()
    {
        if(httpRequest.readyState === XMLHttpRequest.DONE)
        {
            var status = httpRequest.status;
            if (status === 0 || (status >= 200 && status < 400))
                console.log(httpRequest.responseText);
            else
                console.log(status);
        }
    };
    httpRequest.withCredentials = true;
    httpRequest.open("GET", 'http://192.168.6.31/web_service_autocad/test_login_xml.php?parameter=<n0:ZwsClassEquiResponse xmlns:n0="urn:sap-com:document:sap:soap:functions:mc-style"><EtOut></EtOut></n0:ZwsClassEquiResponse>', true, "admin", "admin");
    httpRequest.send();
}