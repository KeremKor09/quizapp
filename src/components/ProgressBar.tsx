import { motion } from "framer-motion";

interface ProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => {
  return (
    <div className="w-full bg-appBackground">
      <motion.div
        className="bg-black py-0.5"
        animate={{ width: `${percent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
