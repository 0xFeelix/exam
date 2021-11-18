function fn1() 
        {
            var str = document.getElementById("text1").value;
            var result = document.getElementById("resultat");
//MAHAM
            if (str == '001')       {
                result.innerHTML = '<a href="/neticeler/maham.html" id="maham"></a>';
                document.getElementById("maham").click()
            }
//ALEX
            else if (str == '002')       {
                result.innerHTML = '<a href="/neticeler/alex.html" id="alex"></a>';
                document.getElementById("alex").click()
            } 
//ROVSEN
            else if (str == '003')       {
                result.innerHTML = '<a href="/neticeler/rovsen.html" id="rovsen"></a>';
                document.getElementById("rovsen").click()
            } 
//MARTIN
            else if (str == '004')       {
                result.innerHTML = '<a href="/neticeler/martin.html" id="martin"></a>';
                document.getElementById("martin").click()
            } 

            else{result.innerHTML = 'Yanlis netice'}
        }