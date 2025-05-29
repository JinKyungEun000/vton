import { useNavigate } from 'react-router-dom';
import { Download, Share2, RotateCcw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import { useEffect } from 'react';

const Results = () => {
  const navigate = useNavigate();
  const { selectedPerson, selectedClothing, resultImage, resetSelections } = useAppContext();
  
  useEffect(() => {
    if (!selectedPerson || !selectedClothing || !resultImage) {
      navigate('/');
    }
  }, [selectedPerson, selectedClothing, resultImage, navigate]);

  if (!selectedPerson || !selectedClothing || !resultImage) {
    return null;
  }

  const handleReset = () => {
    resetSelections();
    navigate('/');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-900 p-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-6">가상 피팅 결과</h1>
          
          <div className="mb-8">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-xl mb-6">
              <img
                src={resultImage}
                alt="시뮬레이션 결과"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={selectedPerson.imageUrl}
                  alt="Original"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={selectedClothing.imageUrl}
                  alt={selectedClothing.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button 
              variant="secondary"
              icon={<Download size={18} />}
              className="text-sm"
            >
              결과 저장
            </Button>
            
            <Button 
              variant="secondary"
              icon={<Share2 size={18} />}
              className="text-sm"
            >
              공유하기
            </Button>
          </div>
          
          <Button 
            onClick={handleReset}
            icon={<RotateCcw size={18} />}
            className="w-full"
          >
            다시 시작하기
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Results;