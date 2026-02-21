import { useState } from 'react';
import { Scale, Flame, Plus, X } from 'lucide-react';
import { ProgressBar } from '@/components/ProgressBar';
import type { WeightData } from '@/types';

interface BiometricsModalProps {
  isOpen: boolean;
  onClose: () => void;
  weightData: WeightData;
  onUpdateWeight: (weight: number) => void;
  todayCal: number;
  onAddCalories: (amount: number) => void;
  calorieEntries: { date: string; amount: number }[];
}

export function BiometricsModal({
  isOpen,
  onClose,
  weightData,
  onUpdateWeight,
  todayCal,
  onAddCalories,
  calorieEntries
}: BiometricsModalProps) {
  const [newWeight, setNewWeight] = useState('');
  const [newCalories, setNewCalories] = useState('');

  if (!isOpen) return null;

  const weightLost = weightData.start - weightData.current;
  const weightTarget = weightData.start - weightData.target;

  const handleWeightSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(newWeight);
    if (w > 0) {
      onUpdateWeight(w);
      setNewWeight('');
    }
  };

  const handleCalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const c = parseInt(newCalories);
    if (c > 0) {
      onAddCalories(c);
      setNewCalories('');
    }
  };

  const todayEntries = calorieEntries.filter(c => c.date === new Date().toISOString().split('T')[0]);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content animate-fade-in-up max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-white/[0.02] rounded-t-3xl">
          <h3 className="text-xl font-bold text-white">Biometrics & Nutrition</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="p-5 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Weight Section */}
          <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                Body Weight
              </span>
            </div>
            
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-4xl font-black text-white">{weightData.current}</span>
              <span className="text-slate-500">kg · target {weightData.target}kg</span>
            </div>
            
            <ProgressBar 
              current={weightLost} 
              total={weightTarget}
              color="linear-gradient(90deg, #10b981, #059669)"
            />
            
            <p className="text-xs text-slate-500 mt-2">
              Progress: {((weightLost / weightTarget) * 100).toFixed(0)}% to target
            </p>

            <form onSubmit={handleWeightSubmit} className="flex gap-2 mt-3">
              <input
                type="number"
                step="0.1"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                placeholder="Update weight"
                className="input-glass flex-1 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 rounded-xl text-white font-semibold text-sm transition-colors"
              >
                Update
              </button>
            </form>
          </div>

          {/* Calories Section */}
          <div className="bg-orange-500/5 border border-orange-500/15 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">
                  Today's Calories
                </span>
              </div>
              <span className="text-xl font-bold text-orange-400">{todayCal} kcal</span>
            </div>
            
            <ProgressBar 
              current={todayCal} 
              total={1800}
              color="linear-gradient(90deg, #f97316, #ef4444)"
            />
            
            <p className="text-xs text-slate-500 mt-2">
              Target deficit: max 1800 kcal/day
            </p>

            <form onSubmit={handleCalSubmit} className="flex gap-2 mt-3">
              <input
                type="number"
                value={newCalories}
                onChange={(e) => setNewCalories(e.target.value)}
                placeholder="Add calories"
                className="input-glass flex-1 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 hover:bg-orange-400 rounded-xl text-white font-semibold text-sm transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </form>

            {todayEntries.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {todayEntries.map((entry, i) => (
                  <span 
                    key={i} 
                    className="tag bg-orange-500/10 text-orange-400 border border-orange-500/20"
                  >
                    {entry.amount} kcal
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
