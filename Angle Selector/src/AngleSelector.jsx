import { useState } from 'react';

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);

  const handleAngleChange = (event) => {
    let newAngle = Number(event.target.value);
    if (newAngle < 0) {
      newAngle = (newAngle % 360) + 360;
    } else if (newAngle > 360) {
      newAngle = newAngle % 360;
    }
    setAngle(newAngle);
  };

  const presetAngles = [0, 45, 60, 90, 180, 360];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Angle Selector</h2>
        
        {/* Text input */}
        <div className="mb-6">
          <input
            type="number"
            value={angle}
            onChange={handleAngleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            min="0"
            max="360"
          />
        </div>
        
        {/* Slider */}
        <div className="mb-8">
          <input
            type="range"
            value={angle}
            onChange={handleAngleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="0"
            max="360"
          />
        </div>
        
        {/* Radio buttons */}
        <div className="grid grid-cols-3 gap-4">
          {presetAngles.map((presetAngle) => (
            <label key={presetAngle} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="anglePreset"
                value={presetAngle}
                checked={angle === presetAngle}
                onChange={handleAngleChange}
                className="form-radio text-blue-600 focus:ring-blue-500 h-5 w-5"
              />
              <span className="text-gray-700 text-lg">{presetAngle}°</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AngleSelector;