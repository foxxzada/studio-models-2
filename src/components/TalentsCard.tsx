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
    <div className="flex justify-between pt-12">
      <div className="text-left text-white">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-xs font-bold">{details.category}</p>
        <p className="text-xs">Age: {details.age}</p>
        <p className="text-xs">Height: {details.height}m</p>
        <p className="text-xs">Bust: {details.bust}cm</p>
        <p className="text-xs">Waist: {details.waist}cm</p>
        <p className="text-xs">Hips: {details.hips}cm</p>
        <p className="text-xs">Dress Size: {details.dress}</p>
        <p className="text-xs">Shoe Size: {details.shoe} BR</p>
      </div>
    </div>
  );
};

export default TalentsCard;
