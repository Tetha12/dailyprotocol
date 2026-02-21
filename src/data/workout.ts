import type { WorkoutDay } from '@/types';

export const WORKOUT: Record<string, WorkoutDay> = {
  'Senin': {
    type: 'Push Day (Gym)',
    focus: 'Dada, Bahu, Trisep',
    col: '#ef4444',
    exercises: [
      { name: 'Incline Dumbbell Press', detail: '3 x 10-12', target: 'Dada Atas' },
      { name: 'Scaption (Y-Raise)', detail: '3 x 10-12', target: 'Bahu Samping' },
      { name: 'Seated Cable Row', detail: '3 x 10-12', target: 'Punggung Tengah (Scapula)' },
      { name: 'Pec Fly Machine', detail: '2 x 15', target: 'Dada (Peregangan)' },
      { name: 'One Arm DB Row', detail: '3 x 10 (per sisi)', target: 'Punggung Sisi (Lats)' },
    ]
  },
  'Selasa': {
    type: 'Core (Home)',
    focus: 'Otot Inti & Stabilitas',
    col: '#10b981',
    exercises: [
      { name: 'Dead Bug', detail: '3 x 10-12 (Total)', target: 'Otot Perut Dalam (Deep Core)' },
      { name: 'Bird Dog', detail: '3 x 10 (Total)', target: 'Keseimbangan Kiri-Kanan' },
      { name: 'Plank Siku', detail: '3 x 30-45 Detik', target: 'Core Depan + Scapula' },
      { name: 'Side Plank', detail: '3 x 20-30 Detik (Per Sisi)', target: 'Pinggang Samping (Anti-Skoliosis)' },
      { name: 'Glute Bridge', detail: '3 x 12-15 Reps', target: 'Pantat (Glutes)' },
    ]
  },
  'Rabu': {
    type: 'Leg Day (Gym)',
    focus: 'Paha & Gluteus',
    col: '#8b5cf6',
    exercises: [
      { name: 'Goblet Squat', detail: '3 x 10-12', target: 'Paha & Postur' },
      { name: 'Bulgarian Split Squat', detail: '3 x 8-10 (per kaki)', target: 'Kaki (Unilateral)' },
      { name: 'Leg Curl Machine', detail: '3 x 12', target: 'Paha Belakang' },
      { name: 'Seated Cable Row', detail: '3 x 10-12', target: 'Punggung Tengah' },
      { name: 'Hammer Curl', detail: '3 x 12', target: 'Tangan (Bisep)' },
    ]
  },
  'Kamis': {
    type: 'Core (Home)',
    focus: 'Otot Inti & Stabilitas',
    col: '#10b981',
    exercises: [
      { name: 'Dead Bug', detail: '3 x 10-12 (Total)', target: 'Otot Perut Dalam (Deep Core)' },
      { name: 'Bird Dog', detail: '3 x 10 (Total)', target: 'Keseimbangan Kiri-Kanan' },
      { name: 'Plank Siku', detail: '3 x 30-45 Detik', target: 'Core Depan + Scapula' },
      { name: 'Side Plank', detail: '3 x 20-30 Detik (Per Sisi)', target: 'Pinggang Samping' },
      { name: 'Glute Bridge', detail: '3 x 12-15 Reps', target: 'Pantat (Glutes)' },
    ]
  },
  'Jumat': {
    type: 'Pull Day (Gym)',
    focus: 'Punggung & Bisep',
    col: '#6366f1',
    exercises: [
      { name: 'Lat Pulldown', detail: '3 x 10-12', target: 'Sayap (Lats)' },
      { name: 'Seated Cable Row', detail: '3 x 10-12', target: 'Punggung Tengah' },
      { name: 'One Arm DB Row', detail: '3 x 10 (per sisi)', target: 'Punggung Samping' },
      { name: 'Machine Reverse Fly', detail: '3 x 12-15', target: 'Bahu Belakang (Rear Delt)' },
      { name: 'Hammer Curl', detail: '3 x 12', target: 'Tangan (Bisep)' },
    ]
  },
  'Sabtu': {
    type: 'Core (Home)',
    focus: 'Otot Inti & Abs',
    col: '#f59e0b',
    exercises: [
      { name: 'Dead Bug', detail: '3 x 10-12 (Total)', target: 'Core Dalam' },
      { name: 'Bird Dog', detail: '3 x 10 (Total)', target: 'Stabilitas' },
      { name: 'Plank Siku', detail: '3 x 40-60 Detik', target: 'Core Depan' },
      { name: 'Side Plank', detail: '3 x 30 Detik (Per Sisi)', target: 'Obliques' },
      { name: 'Glute Bridge', detail: '3 x 15 Reps', target: 'Gluteus' },
    ]
  },
  'Minggu': {
    type: 'Rest Day',
    focus: 'Pemulihan & Persiapan',
    col: '#64748b',
    exercises: [
      { name: 'Full Sleep', detail: '9 jam', target: 'Pemulihan total' },
      { name: 'Meal Prep', detail: '1–2 jam', target: 'Persiapan makan sehat' },
      { name: 'Stretching ringan', detail: '15–20 menit', target: 'Fleksibilitas' },
      { name: 'Review progress & planning', detail: '30 menit', target: 'Mental reset' },
    ]
  }
};
