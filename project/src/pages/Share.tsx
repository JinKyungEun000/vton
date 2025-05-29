import { useNavigate } from 'react-router-dom';
import { Download, Share2, RotateCcw } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';

const Share = () => {
  const navigate = useNavigate();
  const { resetSelections } = useAppContext();

  const handleReset = () => {
    resetSelections();
    navigate('/');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-900 p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6">결과 공유</h1>
          
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

export default Share;