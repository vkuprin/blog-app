"use client";

interface HashtagFilterProps {
  selectedHashtag: string | null;
  onHashtagSelectAction: (hashtag: string | null) => void;
}

export default function HashtagFilter({
  selectedHashtag,
  onHashtagSelectAction,
}: HashtagFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        <span className="font-medium">Filter by hashtag:</span>
        {selectedHashtag && (
          <button
            onClick={() => onHashtagSelectAction(null)}
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            {selectedHashtag} ×
          </button>
        )}
      </div>
    </div>
  );
}
