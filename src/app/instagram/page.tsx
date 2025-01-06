import { InstagramEmbed } from './components/InstagramEmbed';
import { data } from './data';

export default function InstagramPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Instagram 展示墙</h1>
      <div className="gap-6 columns-1 md:columns-2 lg:columns-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="mb-6 w-full break-inside-avoid rounded-lg bg-gray-50 shadow-sm"
          >
            <InstagramEmbed url={item.link} />
          </div>
        ))}
      </div>
    </div>
  );
}
