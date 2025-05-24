// apps/web/src/app/500.tsx
'use client';

export default function Error() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold text-red-600">500 - Server Error</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}