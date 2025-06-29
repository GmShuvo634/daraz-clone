import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  onComplete?: () => void;
  className?: string;
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  onComplete,
  className = '',
  showLabels = false,
  size = 'md'
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Check if countdown is complete
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        if (onComplete) {
          onComplete();
        }
        clearInterval(timer);
      }
    }, 1000);

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'text-xs',
          digit: 'px-1 py-0.5',
          separator: 'text-xs'
        };
      case 'lg':
        return {
          container: 'text-lg',
          digit: 'px-3 py-2',
          separator: 'text-lg'
        };
      default:
        return {
          container: 'text-sm',
          digit: 'px-2 py-1',
          separator: 'text-sm'
        };
    }
  };

  const sizeClasses = getSizeClasses();

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={`flex items-center space-x-1 ${sizeClasses.container} ${className}`}>
      {/* Days */}
      <div className="flex flex-col items-center">
        <span className={`bg-black text-white rounded font-mono ${sizeClasses.digit}`}>
          {formatNumber(timeLeft.days)}
        </span>
        {showLabels && (
          <span className="text-xs text-gray-500 mt-1">Days</span>
        )}
      </div>
      
      <span className={`text-gray-600 ${sizeClasses.separator}`}>:</span>
      
      {/* Hours */}
      <div className="flex flex-col items-center">
        <span className={`bg-black text-white rounded font-mono ${sizeClasses.digit}`}>
          {formatNumber(timeLeft.hours)}
        </span>
        {showLabels && (
          <span className="text-xs text-gray-500 mt-1">Hours</span>
        )}
      </div>
      
      <span className={`text-gray-600 ${sizeClasses.separator}`}>:</span>
      
      {/* Minutes */}
      <div className="flex flex-col items-center">
        <span className={`bg-black text-white rounded font-mono ${sizeClasses.digit}`}>
          {formatNumber(timeLeft.minutes)}
        </span>
        {showLabels && (
          <span className="text-xs text-gray-500 mt-1">Min</span>
        )}
      </div>
      
      <span className={`text-gray-600 ${sizeClasses.separator}`}>:</span>
      
      {/* Seconds */}
      <div className="flex flex-col items-center">
        <span className={`bg-black text-white rounded font-mono ${sizeClasses.digit}`}>
          {formatNumber(timeLeft.seconds)}
        </span>
        {showLabels && (
          <span className="text-xs text-gray-500 mt-1">Sec</span>
        )}
      </div>
    </div>
  );
};
