import { Map, ExternalLink, CheckCircle2, Play } from 'lucide-react';
import { ProgressBar } from '@/components/ProgressBar';
import { ROADMAP_DATA } from '@/data/roadmap';
import type { RoadmapProgress, Phase } from '@/types';

interface RoadmapTabProps {
  roadmapProgress: RoadmapProgress;
  onToggleItem: (id: string) => void;
  onOpenPhase: (phase: Phase) => void;
}

export function RoadmapTab({ roadmapProgress, onToggleItem, onOpenPhase }: RoadmapTabProps) {
  const totalItems = ROADMAP_DATA.reduce(
    (acc, p) => acc + p.videos.length + p.casestudies.length, 
    0
  );
  const totalDone = Object.values(roadmapProgress).filter(Boolean).length;

  return (
    <div className="animate-fade-in-up space-y-5">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-indigo-500/10 rounded-xl">
          <Map className="w-6 h-6 text-indigo-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white">Fullstack Curriculum</h2>
          <p className="text-slate-400 text-sm">
            4 fase · {totalItems} items · <span className="text-emerald-400">{totalDone} completed</span>
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="glass-card rounded-xl p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-500">Overall Progress</span>
          <span className="text-white font-semibold">{Math.round((totalDone/totalItems)*100)}%</span>
        </div>
        <ProgressBar current={totalDone} total={totalItems} />
      </div>

      {/* Phase Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {ROADMAP_DATA.map((phase, idx) => {
          const allItems = [...phase.videos.map(v => v.id), ...phase.casestudies.map(cs => cs.id)];
          const done = allItems.filter(id => roadmapProgress[id]).length;
          const pct = Math.round((done / allItems.length) * 100);
          
          return (
            <div
              key={phase.id}
              onClick={() => onOpenPhase(phase)}
              className="phase-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${phase.c[0]}, ${phase.c[1]})`,
                      boxShadow: `0 4px 16px ${phase.c[0]}40`
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                    <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
                      Week {phase.week} · {phase.videos.length} video · {phase.casestudies.length} case
                    </p>
                  </div>
                </div>
                <span className="text-3xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                  {pct}%
                </span>
              </div>
              
              <ProgressBar 
                current={done} 
                total={allItems.length}
                color={`linear-gradient(90deg, ${phase.c[0]}, ${phase.c[1]})`}
              />
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-slate-500">{done}/{allItems.length} selesai</span>
                <span className="text-sm text-slate-500 truncate max-w-[150px]">
                  {phase.desc.slice(0, 30)}...
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Access - All Videos */}
      <div className="glass-card rounded-2xl p-5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Play className="w-5 h-5 text-indigo-400" />
          Quick Access — All Videos
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[400px] overflow-y-auto pr-1">
          {ROADMAP_DATA.map(phase => (
            phase.videos.map(video => {
              const isDone = roadmapProgress[video.id];
              return (
                <div
                  key={video.id}
                  className={`video-card ${isDone ? 'completed' : ''}`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleItem(video.id);
                    }}
                    className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                      isDone 
                        ? 'bg-emerald-500 border-emerald-500' 
                        : 'border-slate-600 hover:border-indigo-400'
                    }`}
                  >
                    {isDone && <CheckCircle2 className="w-3 h-3 text-white" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${isDone ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                      {video.title}
                    </p>
                    <p className="text-xs text-slate-500">{phase.title}</p>
                  </div>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-1.5 hover:bg-indigo-500/20 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                  </a>
                </div>
              );
            })
          ))}
        </div>
      </div>
    </div>
  );
}
