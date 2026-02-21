import { Check, Zap } from 'lucide-react';
import { ProgressBar } from '@/components/ProgressBar';
import type { WorkoutDay } from '@/types';

interface FitnessTabProps {
  dayName: string;
  workout: WorkoutDay;
  fitnessProgress: { done: number; total: number };
  isExerciseDone: (exerciseName: string) => boolean;
  onToggleExercise: (exerciseName: string) => void;
}

export function FitnessTab({
  dayName,
  workout,
  fitnessProgress,
  isExerciseDone,
  onToggleExercise
}: FitnessTabProps) {
  return (
    <div className="animate-fade-in-up max-w-2xl mx-auto">
      {/* Header */}
      <div className="glass-card rounded-2xl p-6 mb-5 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            {dayName} — {workout.type}
          </h2>
          <div className="flex items-center gap-2 flex-wrap">
            <span 
              className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-lg"
              style={{ 
                background: `${workout.col}15`, 
                color: workout.col,
                border: `1px solid ${workout.col}30`
              }}
            >
              {workout.type}
            </span>
            <span className="text-sm text-slate-500">{workout.focus}</span>
          </div>
        </div>
        <div className="text-center bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4">
          <div className="text-4xl font-black text-white leading-none">
            {fitnessProgress.done}
            <span className="text-xl text-slate-500">/{fitnessProgress.total}</span>
          </div>
          <div className="text-xs text-slate-500 mt-1 tracking-wider uppercase">Selesai</div>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar 
        current={fitnessProgress.done} 
        total={fitnessProgress.total}
        color={`linear-gradient(90deg, ${workout.col}, ${workout.col}88)`}
      />

      {/* Exercise List */}
      <div className="space-y-3 mt-5">
        {workout.exercises.map((ex, idx) => {
          const done = isExerciseDone(ex.name);
          return (
            <div
              key={idx}
              onClick={() => onToggleExercise(ex.name)}
              className={`exercise-card ${done ? 'completed' : ''}`}
            >
              <div 
                className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  done 
                    ? 'bg-emerald-500/20 border-emerald-500' 
                    : 'bg-white/5 border-white/10'
                }`}
              >
                {done ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <span className="text-lg font-bold text-slate-500">{idx + 1}</span>
                )}
              </div>
              <div className="flex-1">
                <p className={`text-base font-semibold ${done ? 'text-slate-500 line-through' : 'text-white'}`}>
                  {ex.name}
                </p>
                <p className="text-sm text-slate-500">
                  {ex.detail} · <span className="text-indigo-400">{ex.target}</span>
                </p>
              </div>
              {done && <Zap className="w-4 h-4 text-emerald-500" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
