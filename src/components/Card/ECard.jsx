
import './ECard.css';

const ECard = ({ title = "País Ejemplo", cities = "Ciudad 1, Ciudad 2, Ciudad 3", gradient, countryCode }) => {
  // Convertir el gradiente de Tailwind a CSS válido
  const getGradientStyle = (gradient) => {
    if (!gradient) {
      return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    }
    
    // Si el gradiente viene en formato Tailwind (ej: "from-green-400 to-green-700")
    if (gradient.includes('from-') && gradient.includes('to-')) {
      const colors = {
        'green-400': '#4ade80',
        'green-500': '#22c55e',
        'green-600': '#16a34a',
        'green-700': '#15803d',
        'blue-400': '#60a5fa',
        'blue-500': '#3b82f6',
        'blue-600': '#2563eb',
        'blue-700': '#1d4ed8',
        'blue-800': '#1e40af',
        'purple-400': '#c084fc',
        'purple-700': '#7c3aed',
        'pink-400': '#f472b6',
        'pink-700': '#be185d',
        'red-400': '#f87171',
        'red-500': '#ef4444',
        'red-600': '#dc2626',
        'red-700': '#b91c1c',
        'yellow-400': '#facc15',
        'yellow-700': '#a16207',
        'indigo-400': '#818cf8',
        'indigo-700': '#4338ca',
        'white': '#ffffff',
        'black': '#000000'
      };
      
      const fromMatch = gradient.match(/from-(\w+-\d+)/);
      const toMatch = gradient.match(/to-(\w+-\d+)/);
      
      if (fromMatch && toMatch) {
        const fromColor = colors[fromMatch[1]] || '#667eea';
        const toColor = colors[toMatch[1]] || '#764ba2';
        return `linear-gradient(135deg, ${fromColor} 0%, ${toColor} 100%)`;
      }
    }
    
    // Si ya es un gradiente CSS válido, devolverlo tal como está
    return gradient;
  };

  const waveStyle = {
    background: getGradientStyle(gradient),
  };

  // Convertir las ciudades en array si vienen como string
  const citiesArray = typeof cities === 'string' ? cities.split(', ') : cities;

  // Países que tendrán fondo blanco para mejor visibilidad de la bandera
  const whiteBackgroundCountries = [
    'DE', // Alemania
    'CH', // Suiza
    'BY', // Bielorrusia
    'RU', // Rusia
    'GE', // Georgia
    'ID', // Indonesia
    'JP', // Japón
    'NZ'  // Nueva Zelanda
  ];

  // Función para determinar qué alternativa de fondo usar para banderas problemáticas
  const getFlagContainerClass = (countryCode) => {
    if (whiteBackgroundCountries.includes(countryCode)) {
      return 'flag-alt-1';
    }

    return '';
  };

  return (
    <div className={`e-card playing ${whiteBackgroundCountries.includes(countryCode) ? 'white-background' : ''}`}>
      <div className="wave" style={waveStyle}></div>
      <div className="wave" style={waveStyle}></div>
      <div className="wave" style={waveStyle}></div>
      <div className="infotop">
        {countryCode && (
          <div className={`flag-container ${getFlagContainerClass(countryCode)}`}>
            <img 
              src={`https://flagsapi.com/${countryCode}/flat/64.png`}
              alt={`${title} flag`}
              className="country-flag"
              loading="lazy"
            />
          </div>
        )}
        <div className="country-title">{title}</div>
        <div className="cities-list">
          {citiesArray.map((city, index) => (
            <div key={index}>{city}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ECard;
