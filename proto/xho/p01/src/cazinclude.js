/*
** cazInclude.js - include html files in html files
** [xho+bato]
** <include src="path_to_file-html"> will be substituted by html file loaded via ajax
*/

var cazInclude = {
    queryElements: function() {
        var elements = document.getElementsByTagName('include');
        if (!elements.length) {
            return;
        }

        var promises = [];
        for (var i in elements) {
            if (elements[i].hasAttribute && elements[i].hasAttribute('src')) {
                promises.push(this.fragment(elements[i], elements[i].getAttribute('src')));
            }
        }

        Promise.all(promises)
            .then(function(result) {
                cazInclude.queryElements();
            });
    },

    fragment: function(el, url) {

        var promise = new Promise(function(resolve, reject) {

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
                    resolve("Stuff worked!");
                }
            }

            try { 
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
            } catch(err) {
                /* todo catch error */
            }

        });

        return promise;
    }

}

window.onload = function() {
    cazInclude.queryElements();
}
