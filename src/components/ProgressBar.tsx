interface ProgressBarProps {
  current: number;
  total: number;
  color?: string;
  className?: string;
}

export function ProgressBar({ 
  current, 
  total, 
  color = 'linear-gradient(90deg, #6366f1, #818cf8)',
  className = ''
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (current / (total || 1)) * 100));
  
  return (
    <div className={`progress-bar ${className}`}>
      <div 
        className="progress-fill"
        style={{ width: `${percentage}%`, background: color }}
      />
    </div>
  );
}
