'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  className?: string;
}

export function Slider({
  min,
  max,
  step = 1,
  value,
  onChange,
  className,
}: SliderProps) {
  const [localValue, setLocalValue] = useState(value);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleMinChange = (newMin: number) => {
    const minVal = Math.max(min, Math.min(newMin, localValue[1]));
    const newValue: [number, number] = [minVal, localValue[1]];
    setLocalValue(newValue);
    onChange(newValue);
  };

  const handleMaxChange = (newMax: number) => {
    const maxVal = Math.min(max, Math.max(newMax, localValue[0]));
    const newValue: [number, number] = [localValue[0], maxVal];
    setLocalValue(newValue);
    onChange(newValue);
  };

  const leftPercent = ((localValue[0] - min) / (max - min)) * 100;
  const rightPercent = ((localValue[1] - min) / (max - min)) * 100;

  return (
    <div className={cn('relative w-full', className)} ref={sliderRef}>
      <div className="relative h-2 rounded-full bg-neutral-200">
        <div
          className="absolute h-full rounded-full bg-neutral-900"
          style={{
            left: `${leftPercent}%`,
            right: `${100 - rightPercent}%`,
          }}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={localValue[0]}
        onChange={(e) => handleMinChange(Number(e.target.value))}
        className="absolute top-0 h-2 w-full cursor-pointer appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-neutral-900 [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-neutral-900 [&::-moz-range-thumb]:shadow-md"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={localValue[1]}
        onChange={(e) => handleMaxChange(Number(e.target.value))}
        className="absolute top-0 h-2 w-full cursor-pointer appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-neutral-900 [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-neutral-900 [&::-moz-range-thumb]:shadow-md"
      />
    </div>
  );
}
