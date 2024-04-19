import React from 'react';

interface TalentsCardProps {
  title: string;
  details: {
    category: string;
    age: string;
    height: string;
    bust: string;
    waist: string;
    hips: string;
    dress: string;
    shoe: string;
  };
}

const TalentsCard: React.FC<TalentsCardProps> = ({ title, details }) => {
  return (
    <div className="flex justify-center">
      <div className="text-center text-white">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm font-bold">{details.category}</p>
        <p className="font text-xs">Age: {details.age}</p>
        <p className="font text-xs">Height: {details.height}m</p>
        <p className="font text-xs">Bust: {details.bust}cm</p>
        <p className="font text-xs">Waist: {details.waist}cm</p>
        <p className="font text-xs">Hips: {details.hips}cm</p>
        <p className="font text-xs">Dress Size: {details.dress}</p>
        <p className="font text-xs">Shoe Size: {details.shoe} BR</p>
      </div>
    </div>
  );
};

export default TalentsCard;
