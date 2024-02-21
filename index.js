document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('calculator-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var solution = parseFloat(document.getElementById('solution-input').value);
        var dropFactor = parseFloat(document.getElementById('drop-factor-input').value);
        var time = parseFloat(document.getElementById('time-input').value);

        var flowRate = (solution * dropFactor) / time;
        flowRate = Math.ceil(flowRate); // Round up to the nearest integer

        var resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `
            <div class="result-box">
                <p class="input-label">Flow Rate (in drops per minute):</p>
                <p class="input-field">${flowRate} gtt/min</p>
            </div>
        `;
    });
});