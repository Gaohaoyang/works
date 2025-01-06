import { InstagramEmbed } from './components/InstagramEmbed';
import { data } from './data';

export default function InstagramPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Instagram 展示墙</h1>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="w-full bg-gray-50 rounded-lg shadow-sm mb-6 break-inside-avoid">
            <InstagramEmbed url={item.link} />
          </div>
        ))}
      </div>
    </div>
  );
}
