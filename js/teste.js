document.addEventListener("DOMContentLoaded", () => {
    const calcularBtn = document.getElementById("calcular");
    
    calcularBtn.addEventListener("click", () => {
        const resistor1 = parseFloat(document.getElementById("resistor1").value);
        const resistor2 = parseFloat(document.getElementById("resistor2").value);
        const tensao = parseFloat(document.getElementById("tensao").value);
        const resultadoDiv = document.getElementById("resultado");

        if (isNaN(resistor1) || isNaN(resistor2) || isNaN(tensao)) {
            resultadoDiv.innerHTML = "Por favor, insira valores válidos.";
            resultadoDiv.style.color = "#ff5555";
            return;
        }

        
        const resistenciaEquivalente = resistor1 + resistor2;
     
        const corrente = tensao / resistenciaEquivalente;

        resultadoDiv.innerHTML = `Resistência Equivalente: ${resistenciaEquivalente.toFixed(2)} Ω <br> Corrente Total: ${corrente.toFixed(2)} A`;
        resultadoDiv.style.color = "#50fa7b";
    });
});