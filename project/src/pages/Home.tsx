import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Sparkles size={60} className="text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Virtual Try-On</h1>
          <p className="text-slate-300 max-w-md mx-auto">
            AI 기술을 활용한 가상 의류 시착 서비스를 경험해보세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-xs"
        >
          <Button 
            onClick={() => navigate('/person')}
            className="w-full mb-4"
          >
            시작하기
          </Button>
          
          <p className="text-sm text-slate-400 mt-8">
            의류 이미지와 모델 이미지를 선택하여<br />가상 피팅을 시작하세요.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;