
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-green-800 mb-4">404 - Page Not Found</h1>
      <img 
        src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg" 
        alt="404 Not Found" 
        className="max-w-xs h-auto mb-4" 
      />
      <Link href="/">
        <span className="text-green-600 hover:text-green-800 font-semibold underline">
          Volver al inicio
        </span>
      </Link>
    </div>
  );
}





