import { useState, useMemo, useEffect } from 'react';
import { 
  Calendar, Scale, Zap, Activity, Map, BookOpen, LayoutGrid,
  LogOut, Cpu
} from 'lucide-react';
import { AuthGate } from '@/components/AuthGate';
import { Sidebar } from '@/components/Sidebar';
import { DailyTab } from '@/components/tabs/DailyTab';
import { FitnessTab } from '@/components/tabs/FitnessTab';
import { RoadmapTab } from '@/components/tabs/RoadmapTab';
import { LibraryTab } from '@/components/tabs/LibraryTab';
import { DashboardTab } from '@/components/tabs/DashboardTab';
import { PhaseModal } from '@/components/modals/PhaseModal';
import { BookModal } from '@/components/modals/BookModal';
import { ReadingLogModal } from '@/components/modals/ReadingLogModal';
import { BiometricsModal } from '@/components/modals/BiometricsModal';
import { useUser } from '@/hooks/useUser';
import { useProgress } from '@/hooks/useProgress';
import { WORKOUT } from '@/data/workout';
import { getTotalItems, getAllItemIds } from '@/data/roadmap';
import type { TabType, Phase, Book } from '@/types';

const tabs: { id: TabType; icon: typeof Zap; label: string }[] = [
  { id: 'daily', icon: Zap, label: 'Daily' },
  { id: 'fitness', icon: Activity, label: 'Fitness' },
  { id: 'roadmap', icon: Map, label: 'Roadmap' },
  { id: 'library', icon: BookOpen, label: 'Library' },
  { id: 'dashboard', icon: LayoutGrid, label: 'Overview' },
];

function App() {
  const { uid, login, logout } = useUser();
  const [activeTab, setActiveTab] = useState<TabType>('daily');
  const [isMobile, setIsMobile] = useState(false);
  
  // Modals
  const [phaseModal, setPhaseModal] = useState<Phase | null>(null);
  const [bookModal, setBookModal] = useState<Book | null>(null);
  const [readingLogModal, setReadingLogModal] = useState(false);
  const [biometricsModal, setBiometricsModal] = useState(false);

  // Progress data
  const {
    roadmapProgress,
    toggleRoadmapItem,
    isExerciseDone,
    toggleExercise,
    weightData,
    updateWeight,
    calories,
    addCalories,
    getCaloriesForDate,
    library,
    saveBook,
    deleteBook,
    updateBookProgress,
    startDate
  } = useProgress(uid);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle login
  const handleLogin = async (username: string): Promise<boolean> => {
    return await login(username);
  };

  // Date calculations
  const today = new Date();
  const start = new Date(startDate || '2026-02-19T00:00:00.000Z');
  const end = new Date(start);
  end.setDate(start.getDate() + 60);
  
  const dayN = Math.max(0, Math.floor((today.getTime() - start.getTime()) / 86400000));
  const pct = Math.round((dayN / 60) * 100);
  
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const dayName = days[today.getDay()];
  const dateKey = today.toISOString().split('T')[0];
  const fmtDate = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  // Workout data
  const workout = WORKOUT[dayName];
  const fitnessProgress = useMemo(() => {
    const exercises = workout?.exercises || [];
    return {
      done: exercises.filter(e => isExerciseDone(dateKey, dayName, e.name)).length,
      total: exercises.length
    };
  }, [workout, isExerciseDone, dateKey, dayName]);

  // Today's calories
  const todayCal = getCaloriesForDate(dateKey);

  // Total progress
  const totalItems = getTotalItems();
  const allItemIds = getAllItemIds();
  const totalDone = allItemIds.filter(id => roadmapProgress[id]).length;

  // Handle fitness toggle
  const handleToggleExercise = (exerciseName: string) => {
    toggleExercise(dateKey, dayName, exerciseName);
  };

  // Handle fitness check
  const handleIsExerciseDone = (exerciseName: string) => {
    return isExerciseDone(dateKey, dayName, exerciseName);
  };

  if (!uid) {
    return <AuthGate onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#030712] relative overflow-hidden flex">
      {/* Background Effects */}
      <div className="grid-bg" />
      <div 
        className="orb" 
        style={{ width: 700, height: 700, background: 'rgba(99, 102, 241, 0.07)', top: -250, left: -200 }} 
      />
      <div 
        className="orb" 
        style={{ width: 500, height: 500, background: 'rgba(16, 185, 129, 0.05)', bottom: -150, right: -100 }} 
      />

      {/* Sidebar (Desktop) */}
      {!isMobile && (
        <Sidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          uid={uid}
          dayN={dayN}
          pct={pct}
          totalDone={totalDone}
          totalItems={totalItems}
          onLogout={logout}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative z-10" style={{ paddingBottom: isMobile ? '80px' : '0' }}>
        {/* Header */}
        <header className="sticky top-0 z-30 bg-[#030712]/95 backdrop-blur-2xl border-b border-white/5 px-6 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              {isMobile && (
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-xl flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
              )}
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  Command Center
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-xs font-mono text-indigo-400">
                    {uid}
                  </span>
                </h1>
                <p className="text-sm text-slate-500 flex items-center gap-2">
                  <span>{fmtDate}</span>
                  <span className="text-slate-700">·</span>
                  <span className="text-indigo-400 font-semibold">Day {dayN}/60</span>
                  <span className="text-slate-700">·</span>
                  <span className="text-emerald-400 font-semibold">{weightData.current}kg → {weightData.target}kg</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Progress Button */}
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="glass glass-btn px-4 py-2.5 rounded-xl flex items-center gap-3"
              >
                <div>
                  <div className="text-xs font-bold text-indigo-400 tracking-wider uppercase">Progress</div>
                  <div className="text-xl font-black text-white">{pct}%</div>
                </div>
                <Calendar className="w-5 h-5 text-indigo-400" />
              </button>

              {/* Weight Button */}
              <button 
                onClick={() => setBiometricsModal(true)}
                className="glass glass-btn px-4 py-2.5 rounded-xl flex items-center gap-3"
              >
                <div>
                  <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Weight</div>
                  <div className="text-xl font-black text-white">{weightData.current}kg</div>
                </div>
                <Scale className="w-5 h-5 text-emerald-400" />
              </button>

              {/* Mobile Logout */}
              {isMobile && (
                <button 
                  onClick={logout}
                  className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-5 max-w-5xl mx-auto">
          {activeTab === 'daily' && (
            <DailyTab
              dayN={dayN}
              workout={workout}
              fitnessProgress={fitnessProgress}
              onStartWorkout={() => setActiveTab('fitness')}
              roadmapProgress={roadmapProgress}
              onToggleRoadmapItem={toggleRoadmapItem}
              books={library}
              onLogReading={() => setReadingLogModal(true)}
              totalDone={totalDone}
              totalItems={totalItems}
            />
          )}

          {activeTab === 'fitness' && (
            <FitnessTab
              dayName={dayName}
              workout={workout}
              fitnessProgress={fitnessProgress}
              isExerciseDone={(name) => handleIsExerciseDone(name)}
              onToggleExercise={handleToggleExercise}
            />
          )}

          {activeTab === 'roadmap' && (
            <RoadmapTab
              roadmapProgress={roadmapProgress}
              onToggleItem={toggleRoadmapItem}
              onOpenPhase={setPhaseModal}
            />
          )}

          {activeTab === 'library' && (
            <LibraryTab
              books={library}
              onAddBook={() => setBookModal({ id: 0, title: '', author: '', totalPages: 0, currentPage: 0, coverUrl: '' })}
              onEditBook={setBookModal}
              onDeleteBook={deleteBook}
            />
          )}

          {activeTab === 'dashboard' && (
            <DashboardTab
              dayN={dayN}
              pct={pct}
              endDate={end}
              weightData={weightData}
              fitnessProgress={fitnessProgress}
              roadmapProgress={roadmapProgress}
              todayCal={todayCal}
              books={library}
            />
          )}
        </div>
      </main>

      {/* Mobile Navigation */}
      {isMobile && (
        <nav className="mobile-nav">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`mobile-nav-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      )}

      {/* Modals */}
      <PhaseModal
        phase={phaseModal}
        isOpen={!!phaseModal}
        onClose={() => setPhaseModal(null)}
        roadmapProgress={roadmapProgress}
        onToggleItem={toggleRoadmapItem}
      />

      <BookModal
        book={bookModal}
        isOpen={!!bookModal}
        onClose={() => setBookModal(null)}
        onSave={saveBook}
        onDelete={deleteBook}
      />

      <ReadingLogModal
        books={library}
        isOpen={readingLogModal}
        onClose={() => setReadingLogModal(false)}
        onLogPages={updateBookProgress}
      />

      <BiometricsModal
        isOpen={biometricsModal}
        onClose={() => setBiometricsModal(false)}
        weightData={weightData}
        onUpdateWeight={updateWeight}
        todayCal={todayCal}
        onAddCalories={(amount) => addCalories(dateKey, amount)}
        calorieEntries={calories}
      />
    </div>
  );
}

export default App;
