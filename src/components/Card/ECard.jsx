
import './ECard.css';

const ECard = ({ title = "País Ejemplo", cities = "Ciudad 1, Ciudad 2, Ciudad 3", gradient }) => {
  // Convertir el gradiente de Tailwind a CSS válido
  const getGradientStyle = (gradient) => {
    if (!gradient) {
      return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    }
    
    // Si el gradiente viene en formato Tailwind (ej: "from-green-400 to-green-700")
    if (gradient.includes('from-') && gradient.includes('to-')) {
      const colors = {
        'green-400': '#4ade80',
        'green-700': '#15803d',
        'blue-400': '#60a5fa',
        'blue-700': '#1d4ed8',
        'purple-400': '#c084fc',
        'purple-700': '#7c3aed',
        'pink-400': '#f472b6',
        'pink-700': '#be185d',
        'red-400': '#f87171',
        'red-700': '#dc2626',
        'yellow-400': '#facc15',
        'yellow-700': '#a16207',
        'indigo-400': '#818cf8',
        'indigo-700': '#4338ca'
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

  return (
    <div className="e-card playing">
      <div className="wave" style={waveStyle}></div>
      <div className="wave" style={waveStyle}></div>
      <div className="wave" style={waveStyle}></div>
      <div className="infotop">
        <div className="country-title">{title}</div>
        <div className="cities-list">{cities}</div>
      </div>
    </div>
  );
};

export default ECard;
