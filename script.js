function fn1() 
        {
            var str = document.getElementById("text1").value;
            var result = document.getElementById("resultat");
//MAHAM
            if (str == '001')       {
                result.innerHTML = '<a href="/neticeler/maham.html" id="maham" target="_blank"></a>';
                document.getElementById("maham").click()
            }
//ALEX
            else if (str == '002')       {
                result.innerHTML = '<a href="/neticeler/alex.html" id="alex" target="_blank"></a>';
                document.getElementById("alex").click()
            } 
//ROVSEN
            else if (str == '003')       {
                result.innerHTML = '<a href="/neticeler/rovsen.html" id="rovsen" target="_blank"></a>';
                document.getElementById("rovsen").click()
            } 
//MARTIN
            else if (str == '004')       {
                result.innerHTML = '<a href="/neticeler/martin.html" id="martin" target="_blank"></a>';
                document.getElementById("martin").click()
            } 

            else{result.innerHTML = 'Yanlis netice'}
        }