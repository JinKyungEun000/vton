import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { people } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';
import Button from '../components/Button';

const PersonSelect = () => {
  const navigate = useNavigate();
  const { setSelectedPerson } = useAppContext();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  const handleContinue = () => {
    const selected = people.find(person => person.id === selectedId);
    if (selected) {
      setSelectedPerson(selected);
      navigate('/clothing');
    }
  };

  return (
    <PageTransition>
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">모델 선택</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {people.map(person => (
            <Card
              key={person.id}
              isSelected={selectedId === person.id}
              onClick={() => handleSelect(person.id)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-center">{person.name}</p>
            </Card>
          ))}
        </div>
        
        <Button
          onClick={handleContinue}
          disabled={!selectedId}
          className="w-full"
          icon={<ChevronRight size={18} />}
        >
          다음 단계
        </Button>
      </div>
    </PageTransition>
  );
};

export default PersonSelect;