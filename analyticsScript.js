document.addEventListener('DOMContentLoaded', function() {
    // Sample stock data (replace with your actual data)
    const stockData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Stock Levels',
            data: ['76', '35', '12', '299', '8', '54', '18', '91', '63', '22', '47', '105'],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    // Sample sales data (replace with your actual data)
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Sales',
            data: ['145', '87', '212', '56', '193', '28', '117', '254', '99', '161', '73', '238'],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    // Get the canvas elements
    const stockChartCanvas = document.getElementById('stockChart').getContext('2d');
    const salesChartCanvas = document.getElementById('salesChart').getContext('2d');

    // Create the charts using Chart.js
    new Chart(stockChartCanvas, {
        type: 'bar', // You can change this to 'line', 'pie', etc.
        data: stockData,
        options: {
            // Add any chart options here (e.g., title, scales, etc.)
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(salesChartCanvas, {
        type: 'line', // You can change this to 'bar', 'pie', etc.
        data: salesData,
        options: {
            // Add any chart options here (e.g., title, scales, etc.)
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});