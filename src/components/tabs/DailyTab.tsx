import { 
  Dumbbell, Play, Code2, ExternalLink, BookOpen, Plus,
  Target, TrendingUp, CheckCircle2
} from 'lucide-react';
import { ProgressBar } from '@/components/ProgressBar';
import type { WorkoutDay, Book, RoadmapProgress } from '@/types';
import { getRecommendedItems } from '@/data/roadmap';

interface DailyTabProps {
  dayN: number;
  workout: WorkoutDay;
  fitnessProgress: { done: number; total: number };
  onStartWorkout: () => void;
  roadmapProgress: RoadmapProgress;
  onToggleRoadmapItem: (id: string) => void;
  books: Book[];
  onLogReading: () => void;
  totalDone: number;
  totalItems: number;
}

export function DailyTab({
  dayN,
  workout,
  fitnessProgress,
  onStartWorkout,
  roadmapProgress,
  onToggleRoadmapItem,
  books,
  onLogReading,
  totalDone,
  totalItems
}: DailyTabProps) {
  // Get recommended items for today
  const recommendedItems = getRecommendedItems(dayN);
  const completedToday = recommendedItems.filter(item => roadmapProgress[item.id]).length;

  return (
    <div className="animate-fade-in-up space-y-5">
      {/* Welcome Banner */}
      <div className="glass-card rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">
            Selamat Datang Kembali! 👋
          </h2>
          <p className="text-slate-400">
            Day <span className="text-indigo-400 font-semibold">{dayN + 1}</span> of 60 · 
            <span className="text-emerald-400 font-semibold ml-1">{totalDone}/{totalItems}</span> items completed
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
          <Target className="w-4 h-4 text-indigo-400" />
          <span className="text-sm text-indigo-300">Target: 2 videos/hari</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Fitness Card */}
        <div className="glass-card rounded-2xl p-6 space-y-5">
          <div className="flex items-start justify-between">
            <div 
              className="p-3 rounded-xl"
              style={{ background: `${workout.col}20` }}
            >
              <Dumbbell className="w-6 h-6" style={{ color: workout.col }} />
            </div>
            <span 
              className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg"
              style={{ 
                background: `${workout.col}15`, 
                color: workout.col,
                border: `1px solid ${workout.col}30`
              }}
            >
              {workout.type}
            </span>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Fitness Hari Ini</h3>
            <p className="text-slate-400 text-sm">{workout.focus}</p>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-500">Progress</span>
              <span className="text-white font-semibold">
                {fitnessProgress.done}/{fitnessProgress.total}
              </span>
            </div>
            <ProgressBar 
              current={fitnessProgress.done} 
              total={fitnessProgress.total}
              color={`linear-gradient(90deg, ${workout.col}, ${workout.col}88)`}
            />
          </div>
          
          <button 
            onClick={onStartWorkout}
            className="btn-primary w-full"
            style={{ 
              background: `linear-gradient(135deg, ${workout.col}, ${workout.col}cc)` 
            }}
          >
            <Play className="w-4 h-4" />
            Mulai Workout
          </button>
        </div>

        {/* Recommended Coding Tasks */}
        <div className="glass-card rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl">
                <Code2 className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Coding Tasks</h3>
                <p className="text-xs text-slate-500">Recommended for today</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-white">{completedToday}</span>
              <span className="text-slate-500 text-sm">/{recommendedItems.length}</span>
            </div>
          </div>

          <ProgressBar 
            current={completedToday} 
            total={recommendedItems.length}
            color="linear-gradient(90deg, #6366f1, #818cf8)"
          />

          <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
            {recommendedItems.length === 0 ? (
              <div className="text-center py-8 text-slate-500">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
                <p>All caught up! 🎉</p>
              </div>
            ) : (
              recommendedItems.map((item) => {
                const isDone = roadmapProgress[item.id];
                return (
                  <div 
                    key={item.id}
                    className={`p-3 rounded-xl border transition-all ${
                      isDone 
                        ? 'bg-emerald-500/5 border-emerald-500/20' 
                        : 'bg-slate-900/50 border-white/5 hover:border-indigo-500/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => onToggleRoadmapItem(item.id)}
                        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                          isDone 
                            ? 'bg-emerald-500 border-emerald-500' 
                            : 'border-slate-600 hover:border-indigo-400'
                        }`}
                      >
                        {isDone && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`tag ${
                            item.type === 'video' 
                              ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/25' 
                              : 'bg-amber-500/15 text-amber-400 border border-amber-500/25'
                          }`}>
                            {item.type === 'video' ? '▶ Video' : '🔬 Case'}
                          </span>
                          <span className="tag bg-white/5 text-slate-500 border border-white/10">
                            {item.phase}
                          </span>
                        </div>
                        <p className={`text-sm font-medium ${isDone ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                          {item.title}
                        </p>
                        {item.desc && (
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        )}
                        {item.url && (
                          <a 
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 mt-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Watch
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Reading Section */}
      <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
        <div className="p-3 bg-amber-500/10 rounded-xl">
          <BookOpen className="w-6 h-6 text-amber-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">Daily Reading</h3>
          <p className="text-sm text-slate-400">
            Target: <span className="text-amber-400 font-semibold">+15 halaman</span> setiap hari
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-3 mr-3">
          {books.slice(0, 2).map(book => (
            <div key={book.id} className="text-right">
              <p className="text-xs text-slate-500">{book.title}</p>
              <p className="text-sm font-semibold text-white">
                {Math.round((book.currentPage / book.totalPages) * 100)}%
              </p>
            </div>
          ))}
        </div>
        <button 
          onClick={onLogReading}
          className="btn-primary"
          style={{ 
            background: 'linear-gradient(135deg, #d97706, #f59e0b)',
            width: 'auto',
            padding: '10px 18px',
            fontSize: '14px'
          }}
        >
          <Plus className="w-4 h-4" />
          Log Reading
        </button>
      </div>
    </div>
  );
}
