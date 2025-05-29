import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { mockResults } from '../data/mockData';

const Loading = () => {
  const navigate = useNavigate();
  const { selectedPerson, selectedClothing, setResultImage } = useAppContext();

  useEffect(() => {
    if (!selectedPerson || !selectedClothing) {
      navigate('/');
      return;
    }
    
    // Simulate progressive loading with multiple steps
    const steps = [
      { delay: 1000, message: "의상 분석 중..." },
      { delay: 2000, message: "체형 분석 중..." },
      { delay: 3000, message: "가상 피팅 적용 중..." }
    ];
    
    steps.forEach(({ delay, message }, index) => {
      setTimeout(() => {
        const progressElement = document.getElementById('loading-message');
        if (progressElement) {
          progressElement.textContent = message;
        }
      }, delay);
    });

    // Final step - set result and navigate
    setTimeout(() => {
      setResultImage(mockResults.resultUrl);
      navigate('/results');
    }, 4000);
    
  }, [selectedPerson, selectedClothing, setResultImage, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="mx-auto mb-8 relative">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 rounded-full bg-blue-500/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="loading-spinner mx-auto" />
        </div>
        
        <motion.h1 
          id="loading-message"
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          의상 분석 중...
        </motion.h1>
        
        <motion.p 
          className="text-slate-400 max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AI가 자연스러운 가상 피팅을 위해 분석하고 있습니다
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;