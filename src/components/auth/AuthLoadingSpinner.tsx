export default function AuthLoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="m-auto">
        <p className="text-6xl animate-spin">📀</p>
      </div>
    </div>
  );
}
