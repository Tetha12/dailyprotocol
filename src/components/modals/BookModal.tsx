import { useState, useEffect } from 'react';
import { BookOpen, Trash2, Save, X } from 'lucide-react';
import type { Book } from '@/types';

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (book: Book) => void;
  onDelete?: (id: number) => void;
}

export function BookModal({ book, isOpen, onClose, onSave, onDelete }: BookModalProps) {
  const [formData, setFormData] = useState<Partial<Book>>({
    title: '',
    author: '',
    totalPages: 0,
    currentPage: 0,
    coverUrl: ''
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    } else {
      setFormData({
        title: '',
        author: '',
        totalPages: 0,
        currentPage: 0,
        coverUrl: ''
      });
    }
  }, [book, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: book?.id || Date.now(),
      title: formData.title || '',
      author: formData.author || '',
      totalPages: Number(formData.totalPages) || 0,
      currentPage: Number(formData.currentPage) || 0,
      coverUrl: formData.coverUrl || ''
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content animate-fade-in-up max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-white/[0.02] rounded-t-3xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/15 rounded-lg">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {book?.id ? 'Edit Book' : 'Add Book'}
            </h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-500 tracking-wider uppercase block mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="input-glass"
              placeholder="Book title"
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 tracking-wider uppercase block mb-2">
              Author
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="input-glass"
              placeholder="Author name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-500 tracking-wider uppercase block mb-2">
                Total Pages
              </label>
              <input
                type="number"
                min="1"
                value={formData.totalPages}
                onChange={(e) => setFormData({ ...formData, totalPages: Number(e.target.value) })}
                className="input-glass"
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 tracking-wider uppercase block mb-2">
                Current Page
              </label>
              <input
                type="number"
                min="0"
                value={formData.currentPage}
                onChange={(e) => setFormData({ ...formData, currentPage: Number(e.target.value) })}
                className="input-glass"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 tracking-wider uppercase block mb-2">
              Cover URL (optional)
            </label>
            <input
              type="url"
              value={formData.coverUrl}
              onChange={(e) => setFormData({ ...formData, coverUrl: e.target.value })}
              className="input-glass"
              placeholder="https://example.com/cover.jpg"
            />
          </div>

          <div className="flex gap-3 pt-2">
            {book?.id && onDelete && (
              <button
                type="button"
                onClick={() => {
                  onDelete(book.id);
                  onClose();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-500/10 hover:bg-red-500/20 rounded-xl text-red-400 font-semibold transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            )}
            <button
              type="submit"
              className="flex-[2] btn-primary"
            >
              <Save className="w-4 h-4" />
              Save Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
