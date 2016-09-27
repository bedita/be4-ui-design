/*
** include html
** [xho]
** <div src="path_to_file-html"></div will be substituted by html file loaded via ajax
*/
function myInclude() {
    var elements = document.getElementsByTagName('include'),
        i;
    for (i in elements) {
        if (elements[i].hasAttribute && elements[i].hasAttribute('src')) {
            fragment(elements[i], elements[i].getAttribute('src'));
        }
    }
    function fragment(el, url) {
        var localTest = /^(?:file):/,
            xmlhttp = new XMLHttpRequest(),
            status = 0;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                status = xmlhttp.status;
            }
            if (localTest.test(location.href) && xmlhttp.responseText) {
                status = 200;
            }
            if (xmlhttp.readyState == 4 && status == 200) {
                el.outerHTML = xmlhttp.responseText;
                myInclude();
            }
        }

        try { 
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        } catch(err) {
            /* todo catch error */
        }
    }
}