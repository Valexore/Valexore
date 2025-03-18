
  // Initialize the first map centered on the Philippines
  const map1 = L.map('map1').setView([14.5995, 120.9842], 10); // Centered on Manila

  // Add a tile layer (OpenStreetMap) to the first map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map1);

  // Define terminal locations for the first map (latitude, longitude)
  const terminals1 = [
    { name: "Infanta Terminal", coords: [14.7453, 121.6499] },
    { name: "Real", coords: [14.6633, 121.6044] },
    { name: "Famy", coords: [14.4375, 121.4486] },
    { name: "Mabitac", coords: [14.4258, 121.4283] },
    { name: "Pila", coords: [14.443888, 121.342733] },   
    { name: "Tanay", coords: [14.4964, 121.2864] },
    { name: "Baras", coords: [14.5214, 121.2658] },
    { name: "Morong", coords: [14.5119, 121.2397] },
    { name: "Teresa", coords: [14.5586, 121.2086] },
    { name: "Antipolo", coords: [14.5842, 121.1764] },
    { name: "Masinag", coords: [14.6181, 121.1189] },
    { name: "Marikina", coords: [14.6500, 121.1000] },
    { name: "Quezon City", coords: [14.6760, 121.0437] },
    { name: "San Juan", coords: [14.6019, 121.0358] },
    { name: "Legarda", coords: [14.6036, 121.0036] },
    { name: "Sta. Teresita", coords: [14.6036, 120.9936] },
    { name: "Sampaloc Manila Terminal", coords: [14.602222511881717, 120.99771993966442] } 
  ];

  // Add markers for terminals on the first map
  terminals1.forEach(terminal => {
    L.marker(terminal.coords)
      .addTo(map1)
      .bindPopup(`<b>${terminal.name}</b><br>Coordinates: ${terminal.coords}`);
  });

  // Define route coordinates for the first map
  const routeCoordinates1 = terminals1.map(terminal => terminal.coords);

  // Draw the route on the first map
  L.polyline(routeCoordinates1, { color: 'blue' }).addTo(map1);

  // Initialize the second map centered on the Philippines
  const map2 = L.map('map2').setView([14.5995, 120.9842], 10); // Centered on Manila

  // Add a tile layer (OpenStreetMap) to the second map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map2);

  // Define terminal locations for the second map (latitude, longitude)
  const terminals2 = [
    { name: "Infanta Terminal", coords: [14.7453, 121.6499] },
    { name: "Real", coords: [14.6633, 121.6044] },
    { name: "Sta. Mana", coords: [14.6500, 121.5500] }, // Approximate coordinates
    { name: "Sampaloc Baras", coords: [14.5214, 121.2658] },
    { name: "Pinugay", coords: [14.5000, 121.2500] }, // Approximate coordinates
    { name: "Boso boso", coords: [14.5500, 121.2000] }, // Approximate coordinates
    { name: "Padilla", coords: [14.5600, 121.1800] }, // Approximate coordinates
    { name: "Cogeo", coords: [14.6181, 121.1189] },
    { name: "Antipolo", coords: [14.5842, 121.1764] },
    { name: "Marikina", coords: [14.6500, 121.1000] },
    { name: "Rizal", coords: [14.6760, 121.0437] }, // Approximate coordinates
    { name: "Quezon City", coords: [14.6760, 121.0437] },
    { name: "San Juan", coords: [14.6019, 121.0358] },
    { name: "Sta. Mesa", coords: [14.6036, 121.0036] },
    { name: "Sta. Teresita", coords: [14.6036, 120.9936] },
    { name: "Sampaloc Manila Terminal", coords: [14.602222511881717, 120.99771993966442] } 
  ];

  // Add markers for terminals on the second map
  terminals2.forEach(terminal => {
    L.marker(terminal.coords)
      .addTo(map2)
      .bindPopup(`<b>${terminal.name}</b><br>Coordinates: ${terminal.coords}`);
  });

  // Define route coordinates for the second map
  const routeCoordinates2 = terminals2.map(terminal => terminal.coords);

  // Draw the route on the second map
  L.polyline(routeCoordinates2, { color: 'red' }).addTo(map2); // Use a different color for the second route
