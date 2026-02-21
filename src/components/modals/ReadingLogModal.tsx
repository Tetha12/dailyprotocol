import { BookOpen, Plus, X } from 'lucide-react';
import { ProgressBar } from '@/components/ProgressBar';
import type { Book } from '@/types';

interface ReadingLogModalProps {
  books: Book[];
  isOpen: boolean;
  onClose: () => void;
  onLogPages: (bookId: number, pages: number) => void;
}

export function ReadingLogModal({ books, isOpen, onClose, onLogPages }: ReadingLogModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content animate-fade-in-up max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-white/[0.02] rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/15 rounded-lg">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Log Reading</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="p-5 space-y-3 max-h-[60vh] overflow-y-auto">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex items-center gap-3 p-3 bg-slate-900/50 border border-white/5 rounded-xl"
            >
              <div className="w-12 h-16 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{book.title}</p>
                <p className="text-xs text-slate-500 mb-1.5">
                  {book.currentPage}/{book.totalPages} pages
                </p>
                <ProgressBar current={book.currentPage} total={book.totalPages} />
              </div>
              <button
                onClick={() => {
                  onLogPages(book.id, 15);
                  onClose();
                }}
                className="flex-shrink-0 p-2 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg text-amber-400 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/5 bg-white/[0.02]">
          <p className="text-xs text-center text-slate-500">
            Click + to add 15 pages to your progress
          </p>
        </div>
      </div>
    </div>
  );
}
