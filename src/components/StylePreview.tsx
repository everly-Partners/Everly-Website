interface StylePreviewProps {
  style: string;
  className?: string;
}

const getStyleBackground = (style: string) => {
  switch (style) {
    case 'Élégance':
      return 'bg-gradient-to-br from-slate-800 to-slate-600';
    case 'Romantique':
      return 'bg-gradient-to-br from-pink-400 to-rose-300';
    case 'Fantasy':
      return 'bg-gradient-to-br from-purple-500 to-indigo-400';
    case 'Soft':
      return 'bg-gradient-to-br from-blue-200 to-cyan-100';
    default:
      return 'bg-gray-200';
  }
};

const getStyleFont = (style: string) => {
  switch (style) {
    case 'Élégance':
      return 'font-serif';
    case 'Romantique':
      return 'font-cursive';
    case 'Fantasy':
      return 'font-fantasy';
    case 'Soft':
      return 'font-sans';
    default:
      return 'font-sans';
  }
};

export default function StylePreview({ style, className = '' }: StylePreviewProps) {
  return (
    <div 
      className={`
        ${getStyleBackground(style)}
        ${getStyleFont(style)}
        w-full h-full flex items-center justify-center
        ${className}
      `}
    >
      <h3 className="text-4xl text-white font-bold text-center drop-shadow-lg">
        {style}
      </h3>
    </div>
  );
} 