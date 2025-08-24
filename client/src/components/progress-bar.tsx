interface ProgressBarProps {
  progress: number;
  color?: "primary" | "secondary" | "success";
  className?: string;
}

export default function ProgressBar({ 
  progress, 
  color = "primary", 
  className = "" 
}: ProgressBarProps) {
  const getColorClass = () => {
    switch (color) {
      case "secondary":
        return "bg-secondary";
      case "success":
        return "bg-success";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div 
        className={`${getColorClass()} h-2 rounded-full transition-all duration-500 ease-in-out`}
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        data-testid="progress-bar-fill"
      />
    </div>
  );
}
