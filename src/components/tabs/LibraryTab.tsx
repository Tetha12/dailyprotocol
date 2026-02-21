import { BookOpen, Plus, Trash2, Edit3 } from 'lucide-react';
import { ProgressBar } from '@/components/ProgressBar';
import type { Book } from '@/types';

interface LibraryTabProps {
  books: Book[];
  onAddBook: () => void;
  onEditBook: (book: Book) => void;
  onDeleteBook: (id: number) => void;
}

export function LibraryTab({ books, onAddBook, onEditBook, onDeleteBook }: LibraryTabProps) {
  return (
    <div className="animate-fade-in-up space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-500/10 rounded-xl">
            <BookOpen className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Your Library</h2>
            <p className="text-slate-400 text-sm">{books.length} books · Track your reading</p>
          </div>
        </div>
        <button onClick={onAddBook} className="btn-primary" style={{ width: 'auto', padding: '10px 18px' }}>
          <Plus className="w-4 h-4" />
          Add Book
        </button>
      </div>

      {/* Books Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => {
          const progress = Math.round((book.currentPage / book.totalPages) * 100);
          return (
            <div key={book.id} className="book-card group">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-22 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
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
                  <h3 className="text-base font-bold text-white leading-tight mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-slate-500">{book.author}</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-indigo-400 font-bold tracking-wider uppercase">
                    {progress}% Complete
                  </span>
                  <span className="text-slate-500">
                    {book.currentPage}/{book.totalPages}
                  </span>
                </div>
                <ProgressBar current={book.currentPage} total={book.totalPages} />
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => onEditBook(book)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 rounded-lg text-indigo-400 text-sm font-medium transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => onDeleteBook(book.id)}
                  className="px-3 py-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {books.length === 0 && (
        <div className="glass-card rounded-2xl p-12 text-center">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No books yet</h3>
          <p className="text-slate-500 mb-4">Add your first book to start tracking</p>
          <button onClick={onAddBook} className="btn-primary" style={{ width: 'auto', margin: '0 auto' }}>
            <Plus className="w-4 h-4" />
            Add Book
          </button>
        </div>
      )}
    </div>
  );
}
