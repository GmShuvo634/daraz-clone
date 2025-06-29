import React from 'react';
import { Countdown } from '../ui/Countdown';

export const CountdownExamples: React.FC = () => {
  // Example 1: Flash sale ending in 1 day
  const flashSaleEnd = new Date();
  flashSaleEnd.setDate(flashSaleEnd.getDate() + 1);
  flashSaleEnd.setHours(flashSaleEnd.getHours() + 12);

  // Example 2: Event starting in 3 days
  const eventStart = new Date();
  eventStart.setDate(eventStart.getDate() + 3);
  eventStart.setHours(eventStart.getHours() + 6);
  eventStart.setMinutes(eventStart.getMinutes() + 30);

  // Example 3: Limited offer ending soon
  const offerEnd = new Date();
  offerEnd.setHours(offerEnd.getHours() + 2);
  offerEnd.setMinutes(offerEnd.getMinutes() + 15);

  const handleCountdownComplete = () => {
    alert('Countdown completed!');
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Countdown Component Examples</h1>
      
      {/* Example 1: Small size without labels */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Flash Sale (Small Size)</h2>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Ends in:</span>
          <Countdown 
            targetDate={flashSaleEnd}
            size="sm"
          />
        </div>
      </div>

      {/* Example 2: Medium size with labels */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Upcoming Event (Medium Size with Labels)</h2>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Starts in:</span>
          <Countdown 
            targetDate={eventStart}
            size="md"
            showLabels={true}
          />
        </div>
      </div>

      {/* Example 3: Large size with completion callback */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Limited Offer (Large Size with Callback)</h2>
        <div className="flex flex-col items-center space-y-4">
          <span className="text-gray-600 text-lg">Offer expires in:</span>
          <Countdown 
            targetDate={offerEnd}
            size="lg"
            showLabels={true}
            onComplete={handleCountdownComplete}
            className="bg-red-50 p-4 rounded-lg"
          />
        </div>
      </div>

      {/* Example 4: Custom styling */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg text-white">
        <h2 className="text-xl font-semibold mb-4">Custom Styled Countdown</h2>
        <div className="flex items-center justify-center">
          <Countdown 
            targetDate={flashSaleEnd}
            size="md"
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};
