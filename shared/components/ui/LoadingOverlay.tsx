interface LoadingOverlayProps {
  isVisible: boolean;
  text: string;
}

export function LoadingOverlay({ isVisible, text }: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 flex flex-col items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        <p className="mt-2 text-gray-700">{text}</p>
      </div>
    </div>
  );
}
