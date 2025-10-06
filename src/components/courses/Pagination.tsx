interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);

  return (
    <nav className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-400">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-target rounded px-2 py-1 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>
      
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`cursor-target rounded px-2 py-1 hover:text-white transition-colors ${
            page === currentPage 
              ? "bg-zinc-900 text-white" 
              : "hover:bg-zinc-800"
          }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="cursor-target rounded px-2 py-1 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </nav>
  );
}


