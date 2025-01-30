import Image from 'next/image';
import Link from 'next/link';

const templates = [
  {
    id: 1,
    name: 'Elegance',
    description: 'A minimalist and refined design for an elegant wedding',
    image: '/template1.png',
    features: ['Responsive design', 'Online RSVP', 'Photo gallery', 'Wedding registry']
  },
  {
    id: 2,
    name: 'Romantic',
    description: 'A romantic theme with pastel and floral tones',
    image: '/template2.png',
    features: ['Countdown timer', 'Location map', 'Contact form', 'Photo album']
  },
  {
    id: 3,
    name: 'Modern',
    description: 'A contemporary style with clean lines',
    image: '/template3.png',
    features: ['Interactive planning', 'Guest list', 'Blog', 'Social media sharing']
  },
  {
    id: 4,
    name: 'Rustic',
    description: 'A natural and bohemian atmosphere',
    image: '/template4.png',
    features: ['Online guestbook', 'Collaborative playlist', 'Customizable menu', 'Stories']
  }
];

export default function Templates() {
  return (
    <section id="templates" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Templates
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose from our carefully designed templates and customize them to your liking
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {templates.map((template) => (
            <div key={template.id} className="group relative bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className="aspect-[9/16] w-full relative">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{template.description}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-500">
                        <svg className="h-4 w-4 text-pink-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href={`/templates/${template.id}`}
                    className="block w-full rounded-full bg-pink-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 transition-colors duration-200"
                  >
                    View demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 