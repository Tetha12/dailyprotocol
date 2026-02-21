import { useState } from 'react';
import { 
  Zap, Activity, Map, BookOpen, LayoutGrid, 
  ChevronsLeft, ChevronsRight, LogOut, Cpu 
} from 'lucide-react';
import type { TabType } from '@/types';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  uid: string;
  dayN: number;
  pct: number;
  totalDone: number;
  totalItems: number;
  onLogout: () => void;
}

const tabs: { id: TabType; icon: typeof Zap; label: string }[] = [
  { id: 'daily', icon: Zap, label: 'Daily' },
  { id: 'fitness', icon: Activity, label: 'Fitness' },
  { id: 'roadmap', icon: Map, label: 'Roadmap' },
  { id: 'library', icon: BookOpen, label: 'Library' },
  { id: 'dashboard', icon: LayoutGrid, label: 'Overview' },
];

export function Sidebar({ 
  activeTab, onTabChange, uid, dayN, pct, totalDone, totalItems, onLogout 
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div 
      className="sidebar h-screen bg-slate-950/95 border-r border-white/5 backdrop-blur-2xl flex flex-col transition-all duration-300 z-40 flex-shrink-0"
      style={{ width: collapsed ? 80 : 280 }}
    >
      {/* Logo */}
      <div 
        className={`border-b border-white/5 flex items-center gap-3 ${
          collapsed ? 'p-4 justify-center' : 'p-5'
        }`}
      >
        <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
          <Cpu className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div>
            <div className="text-xl font-black text-white font-outfit">
              FRIDAY <span className="text-indigo-400">OS</span>
            </div>
            <div className="mono text-[11px] text-slate-600">v24.0 · 60-Day</div>
          </div>
        )}
      </div>

      {/* User Info */}
      {!collapsed && (
        <div className="mx-4 mt-4 p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center font-bold text-sm text-white flex-shrink-0">
            {uid.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="mono text-sm text-indigo-200 font-semibold truncate">
              {uid}
            </div>
            <div className="text-xs text-slate-500">
              Day {dayN} of 60 · {pct}%
            </div>
          </div>
          <div className="status-dot online animate-sync flex-shrink-0" />
        </div>
      )}

      {/* Progress */}
      {!collapsed && (
        <div className="mx-4 mt-3 p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/15">
          <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2">
            Roadmap Progress
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill bg-gradient-to-r from-emerald-500 to-emerald-400"
              style={{ width: `${(totalDone / totalItems) * 100}%` }}
            />
          </div>
          <div className="text-xs text-slate-500 mt-1.5">
            {totalDone}/{totalItems} items selesai
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 p-3 flex flex-col gap-1 mt-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`nav-item ${isActive ? 'active' : ''}`}
              style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : ''}`} />
              {!collapsed && <span>{tab.label}</span>}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-white/5">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="nav-item"
          style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
        >
          {collapsed ? (
            <ChevronsRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronsLeft className="w-5 h-5" />
              <span>Collapse</span>
            </>
          )}
        </button>
        <button
          onClick={onLogout}
          className="nav-item text-red-400 hover:text-red-300"
          style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}
