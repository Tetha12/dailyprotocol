import { useLocalStorage } from './useLocalStorage';
import type { RoadmapProgress, ExerciseProgress, WeightData, CalorieEntry, Book } from '@/types';

export function useProgress(uid: string | null) {
  const prefix = uid ? `friday_${uid}_` : '';

  // Roadmap progress - flexible checklist
  const [roadmapProgress, setRoadmapProgress] = useLocalStorage<RoadmapProgress>(
    `${prefix}roadmap`,
    {}
  );

  // Exercise progress
  const [exerciseProgress, setExerciseProgress] = useLocalStorage<ExerciseProgress>(
    `${prefix}exercises`,
    {}
  );

  // Weight data
  const [weightData, setWeightData] = useLocalStorage<WeightData>(
    `${prefix}weight`,
    { start: 76, current: 76, target: 65 }
  );

  // Calorie entries
  const [calories, setCalories] = useLocalStorage<CalorieEntry[]>(
    `${prefix}calories`,
    []
  );

  // Books library
  const [library, setLibrary] = useLocalStorage<Book[]>(
    `${prefix}library`,
    [
      {
        id: 1,
        title: 'Atomic Habits',
        author: 'James Clear',
        totalPages: 320,
        currentPage: 0,
        coverUrl: 'https://m.media-amazon.com/images/I/81wgcld4wxL.jpg'
      },
      {
        id: 2,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        totalPages: 464,
        currentPage: 0,
        coverUrl: 'https://m.media-amazon.com/images/I/41-sN-mzwKL.jpg'
      }
    ]
  );

  // Challenge start date
  const [startDate] = useLocalStorage<string>(
    `${prefix}startDate`,
    '2026-02-19T00:00:00.000Z'
  );

  // Toggle roadmap item
  const toggleRoadmapItem = (id: string) => {
    setRoadmapProgress(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Toggle exercise
  const toggleExercise = (dateKey: string, dayName: string, exerciseName: string) => {
    const key = `${dateKey}-${dayName}-${exerciseName}`;
    setExerciseProgress(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Check if exercise is done
  const isExerciseDone = (dateKey: string, dayName: string, exerciseName: string) => {
    const key = `${dateKey}-${dayName}-${exerciseName}`;
    return !!exerciseProgress[key];
  };

  // Add calories
  const addCalories = (date: string, amount: number) => {
    setCalories(prev => [...prev, { date, amount }]);
  };

  // Get calories for date
  const getCaloriesForDate = (date: string) => {
    return calories.filter(c => c.date === date).reduce((sum, c) => sum + c.amount, 0);
  };

  // Update weight
  const updateWeight = (newWeight: number) => {
    setWeightData(prev => ({ ...prev, current: newWeight }));
  };

  // Add/update book
  const saveBook = (book: Book) => {
    setLibrary(prev => {
      const exists = prev.find(b => b.id === book.id);
      if (exists) {
        return prev.map(b => b.id === book.id ? book : b);
      }
      return [...prev, { ...book, id: Date.now() }];
    });
  };

  // Delete book
  const deleteBook = (id: number) => {
    setLibrary(prev => prev.filter(b => b.id !== id));
  };

  // Update book progress
  const updateBookProgress = (id: number, pages: number) => {
    setLibrary(prev =>
      prev.map(b =>
        b.id === id
          ? { ...b, currentPage: Math.min(b.totalPages, b.currentPage + pages) }
          : b
      )
    );
  };

  return {
    roadmapProgress,
    toggleRoadmapItem,
    exerciseProgress,
    toggleExercise,
    isExerciseDone,
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
  };
}
