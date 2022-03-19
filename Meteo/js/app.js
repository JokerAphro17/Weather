


let Envoi = document.querySelector("#Envoi");

Envoi.addEventListener("click", () => {
        let vil=document.querySelector("#vil");
        let ville = vil.value;
        ville= ville.toLowerCase();

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ville}&limit=5&appid=5bd401c67c4b8025bcac06471be76b0b`)
                .then(response => response.json())
                .then(data=>{
                    
                    let lat= data[0].lat;
                    let lon=data[0].lon;
                    console.log(lat)

                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5bd401c67c4b8025bcac06471be76b0b`)
                        .then((response)=>response.json())
                        .then((data)=>{
                            console.log(data);
                            let temp= (data.main.temp - 273.15).toFixed(1);
                            let humi= data.main.humidity;
                            let vent = data.wind.speed;
                            document.querySelector("#ville").textContent=ville.toUpperCase();
                            document.querySelector("#temp").textContent=temp+" degré";
                            document.querySelector("#humid").textContent=humi+"%";
                            document.querySelector("#vent").textContent=vent+" km/h";
                            
                        })
                        .catch((e)=>(console.log(e)));
                    
                }).catch((e)=>alert("Enter le nom d'une ville valide"))
    })
