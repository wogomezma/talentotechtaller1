document.addEventListener("DOMContentLoaded", function () {
    // Llama a la API para obtener datos de longitud de contraseñas
    fetch('http://127.0.0.1:5000/password_lengths')
        .then(response => response.json())
        .then(data => {
            // Extrae datos para el gráfico de barras
            const lengths = Object.keys(data.password_lengths);
            const counts = Object.values(data.password_lengths);

            // Crea el gráfico de barras utilizando Plotly
            const chartData = [{
                x: lengths,
                y: counts,
                type: 'bar',
                text: counts.map(String),
                textposition: 'auto',
            }];

            const chartLayout = {
                title: 'Longitud de Contraseñas',
                xaxis: { title: 'Longitud' },
                yaxis: { title: 'Cantidad' },
            };

            Plotly.newPlot('password-lengths-chart-container', chartData, chartLayout);
        })
        .catch(error => console.error('Error fetching password lengths:', error));

    // Llama a la API para obtener datos de dominios de correos electrónicos
    fetch('http://127.0.0.1:5000/email_domains')
        .then(response => response.json())
        .then(data => {
            // Extrae datos para el gráfico de torta
            const domains = Object.keys(data.email_domains);
            const counts = Object.values(data.email_domains);

            // Crea el gráfico de torta utilizando Plotly
            const pieChartData = [{
                labels: domains,
                values: counts,
                type: 'pie',
            }];

            const pieChartLayout = {
                title: 'Dominios de Correos Electrónicos',
            };

            Plotly.newPlot('email-domains-chart-container', pieChartData, pieChartLayout);
        })
        .catch(error => console.error('Error fetching email domains:', error));
});
