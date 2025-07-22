export default function Swimming() {
  return (
    <div className="flex flex-col items-center p-8 gap-10">
      <h2 className="text-2xl font-bold text-center mb-4">Swimming Course</h2>

      <p className="text-lg text-shadow-white mb-4 text-center">
        Learn the importance of proper swimming techniques for safety, health,
        and confidence in the water.
      </p>

      <ul className="list-disc list-inside text-gray-400 mb-4 text-left max-w-md mx-auto">
        <li>Breathing control and coordination</li>
        <li>Fundamental swimming techniques</li>
        <li>Popular styles: freestyle, breaststroke, backstroke, and more</li>
      </ul>

      <p className="text-md text-gray-300 text-center">
        <span className="font-semibold">Who is this for?</span> Suitable for all
        ages and skill levels — from beginners to those looking to refine their
        technique.
      </p>
    </div>
  );
}
