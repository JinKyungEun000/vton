import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { clothingItems } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';
import Button from '../components/Button';

const ClothingSelect = () => {
  const navigate = useNavigate();
  const { setSelectedClothing, selectedPerson } = useAppContext();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    // Only redirect if there's no selected person
    if (!selectedPerson) {
      navigate('/person');
    }
  }, [selectedPerson, navigate]);

  // Return null while checking the condition
  if (!selectedPerson) {
    return null;
  }

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  const handleContinue = () => {
    const selected = clothingItems.find(item => item.id === selectedId);
    if (selected) {
      setSelectedClothing(selected);
      navigate('/loading');
    }
  };

  return (
    <PageTransition>
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">의류 선택</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {clothingItems.map(item => (
            <Card
              key={item.id}
              isSelected={selectedId === item.id}
              onClick={() => handleSelect(item.id)}
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-center">{item.name}</p>
            </Card>
          ))}
        </div>
        
        <Button
          onClick={handleContinue}
          disabled={!selectedId}
          className="w-full"
          icon={<ChevronRight size={18} />}
        >
          가상 피팅 시작
        </Button>
      </div>
    </PageTransition>
  );
};

export default ClothingSelect;