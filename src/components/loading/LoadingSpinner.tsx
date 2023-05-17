export default function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="m-auto">
        <p className="text-6xl animate-spin">📀</p>
      </div>
    </div>
  );
}
