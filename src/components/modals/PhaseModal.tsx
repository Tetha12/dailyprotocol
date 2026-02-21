import { ExternalLink, Play, FlaskConical, CheckCircle2, X } from 'lucide-react';
import type { Phase, RoadmapProgress } from '@/types';

interface PhaseModalProps {
  phase: Phase | null;
  isOpen: boolean;
  onClose: () => void;
  roadmapProgress: RoadmapProgress;
  onToggleItem: (id: string) => void;
}

export function PhaseModal({ phase, isOpen, onClose, roadmapProgress, onToggleItem }: PhaseModalProps) {
  if (!isOpen || !phase) return null;

  const videoDone = phase.videos.filter(v => roadmapProgress[v.id]).length;
  const caseDone = phase.casestudies.filter(cs => roadmapProgress[cs.id]).length;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content animate-fade-in-up max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-white/[0.02] rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${phase.c[0]}, ${phase.c[1]})` }}
            >
              <Play className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{phase.title}</h3>
              <p className="text-sm text-slate-500">Week {phase.week}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="p-5 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Playlist Link */}
          <a
            href={phase.pl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl text-white"
            style={{ 
              background: `linear-gradient(135deg, ${phase.c[0]}, ${phase.c[1]})`,
              boxShadow: `0 8px 24px ${phase.c[0]}40`
            }}
          >
            <div>
              <div className="text-lg font-bold">Open YouTube Playlist</div>
              <div className="text-sm opacity-75">{phase.videos.length} videos · {phase.casestudies.length} case studies</div>
            </div>
            <div className="p-2 bg-black/20 rounded-full">
              <Play className="w-5 h-5" />
            </div>
          </a>

          <p className="text-slate-400">{phase.desc}</p>

          {/* Videos */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Play className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-bold text-slate-500 tracking-wider uppercase">
                Videos ({videoDone}/{phase.videos.length} completed)
              </span>
            </div>
            <div className="space-y-2">
              {phase.videos.map(video => {
                const isDone = roadmapProgress[video.id];
                return (
                  <div
                    key={video.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      isDone 
                        ? 'bg-emerald-500/5 border-emerald-500/20' 
                        : 'bg-slate-900/50 border-white/5 hover:border-indigo-500/30'
                    }`}
                  >
                    <button
                      onClick={() => onToggleItem(video.id)}
                      className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        isDone 
                          ? 'bg-emerald-500 border-emerald-500' 
                          : 'border-slate-600 hover:border-indigo-400'
                      }`}
                    >
                      {isDone && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </button>
                    <span className={`flex-1 text-sm ${isDone ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                      {video.title}
                    </span>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 rounded-lg text-indigo-400 text-xs font-semibold flex items-center gap-1 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Watch
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FlaskConical className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-amber-400 tracking-wider uppercase">
                Case Studies ({caseDone}/{phase.casestudies.length} completed)
              </span>
            </div>
            <div className="space-y-2">
              {phase.casestudies.map(cs => {
                const isDone = roadmapProgress[cs.id];
                return (
                  <div
                    key={cs.id}
                    onClick={() => onToggleItem(cs.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      isDone 
                        ? 'bg-amber-500/5 border-amber-500/20' 
                        : 'bg-slate-900/50 border-white/5 hover:border-amber-500/30'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleItem(cs.id);
                      }}
                      className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all mt-0.5 ${
                        isDone 
                          ? 'bg-amber-500 border-amber-500' 
                          : 'border-slate-600 hover:border-amber-400'
                      }`}
                    >
                      {isDone && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </button>
                    <div className="flex-1">
                      <span className={`text-sm font-semibold block ${isDone ? 'text-slate-500 line-through' : 'text-amber-200'}`}>
                        {cs.title}
                      </span>
                      <span className="text-xs text-slate-500">{cs.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
