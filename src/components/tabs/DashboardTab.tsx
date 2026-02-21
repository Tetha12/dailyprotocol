import { 
  Activity, Calendar, Scale, Code2, TrendingDown, 
  Target, Flame, BookOpen
} from 'lucide-react';
import { ProgressBar } from '@/components/ProgressBar';
import type { WeightData, Book } from '@/types';
import { ROADMAP_DATA } from '@/data/roadmap';

interface DashboardTabProps {
  dayN: number;
  pct: number;
  endDate: Date;
  weightData: WeightData;
  fitnessProgress: { done: number; total: number };
  roadmapProgress: Record<string, boolean>;
  todayCal: number;
  books: Book[];
}

export function DashboardTab({
  dayN,
  pct,
  endDate,
  weightData,
  fitnessProgress,
  roadmapProgress,
  todayCal,
  books
}: DashboardTabProps) {
  const allItemIds = ROADMAP_DATA.flatMap(p => [
    ...p.videos.map(v => v.id),
    ...p.casestudies.map(cs => cs.id)
  ]);
  const totalDone = allItemIds.filter(id => roadmapProgress[id]).length;
  const weightLost = weightData.start - weightData.current;
  const weightTarget = weightData.start - weightData.target;

  const stats = [
    { 
      icon: Activity, 
      color: '#ef4444', 
      label: 'Fitness', 
      value: `${fitnessProgress.done}/${fitnessProgress.total}`,
      sub: 'Today'
    },
    { 
      icon: Calendar, 
      color: '#6366f1', 
      label: 'Days', 
      value: `${dayN}`,
      sub: 'of 60'
    },
    { 
      icon: Scale, 
      color: '#10b981', 
      label: 'Weight', 
      value: `${weightData.current}kg`,
      sub: `→ ${weightData.target}kg`
    },
    { 
      icon: Code2, 
      color: '#818cf8', 
      label: 'Coding', 
      value: `${totalDone}`,
      sub: `${Math.round((totalDone/allItemIds.length)*100)}% done`
    },
  ];

  const totalPagesRead = books.reduce((sum, b) => sum + b.currentPage, 0);

  return (
    <div className="animate-fade-in-up space-y-5">
      <h2 className="text-2xl font-bold text-white">Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="stats-card">
              <div 
                className="p-3 rounded-full mb-3"
                style={{ background: `${stat.color}15` }}
              >
                <Icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
            </div>
          );
        })}
      </div>

      {/* Weight Progress */}
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-emerald-400" />
              Weight Journey
            </h3>
            <p className="text-sm text-slate-500">
              {weightData.start}kg → {weightData.target}kg in 60 days
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-400">-{weightLost.toFixed(1)}kg</div>
            <div className="text-xs text-slate-500">so far</div>
          </div>
        </div>
        <ProgressBar 
          current={weightLost} 
          total={weightTarget}
          color="linear-gradient(90deg, #10b981, #059669)"
        />
        <div className="text-sm text-slate-500 mt-2">
          {((weightLost / weightTarget) * 100).toFixed(0)}% to target · {weightData.current - weightData.target}kg remaining
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* Calories */}
        {todayCal > 0 && (
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-400" />
                Today's Calories
              </h3>
              <span className="text-2xl font-bold text-orange-400">{todayCal} kcal</span>
            </div>
            <ProgressBar 
              current={todayCal} 
              total={1800}
              color="linear-gradient(90deg, #f97316, #ef4444)"
            />
            <p className="text-sm text-slate-500 mt-2">Target deficit: max 1800 kcal/day</p>
          </div>
        )}

        {/* Reading Stats */}
        <div className="glass-card rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              Reading Progress
            </h3>
            <span className="text-2xl font-bold text-amber-400">{totalPagesRead}</span>
          </div>
          <p className="text-sm text-slate-500">Total pages read across {books.length} books</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {books.map(book => (
              <span key={book.id} className="tag bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {Math.round((book.currentPage / book.totalPages) * 100)}% {book.title.slice(0, 15)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge Progress */}
      <div className="glass-card rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              60-Day Challenge
            </h3>
            <p className="text-sm text-slate-500">
              Ends: {endDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          <div className="text-5xl font-black text-indigo-400">{pct}%</div>
        </div>
        <ProgressBar current={dayN} total={60} />
        
        {/* Timeline */}
        <div className="mt-5">
          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: 60 }).map((_, i) => {
              const past = i < dayN;
              const current = i === dayN;
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-md flex items-center justify-center text-[9px] font-bold ${
                    current 
                      ? 'bg-indigo-500 text-white border-2 border-indigo-400 shadow-lg shadow-indigo-500/30' 
                      : past 
                        ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' 
                        : 'bg-white/5 text-slate-700 border border-white/5'
                  }`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
