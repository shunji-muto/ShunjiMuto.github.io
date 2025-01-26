export function Header() {
  return (
    <header className="relative h-64 md:h-96">
      <img
        src="/public/bg_img.jpg"
        alt="Yellow flower field"
        className="brightness-50 object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Shunji Muto
        </h1>
      </div>
    </header>
  );
}
