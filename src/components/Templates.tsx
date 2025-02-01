// import Image from 'next/image';
// import Link from 'next/link';
import { useState } from 'react';
import StylePreview from './StylePreview';

// Type pour notre template
interface Template {
  id: number;
  style: string;
  description: string;
  images: string[];
}

const templates: Template[] = [
  {
    id: 1,
    style: 'Élégance',
    description: 'Un design minimaliste et raffiné pour un mariage élégant',
    images: Array(3).fill('/placeholders/elegance.jpg')
  },
  {
    id: 2,
    style: 'Romantique',
    description: 'Une ambiance douce et florale pour un mariage romantique',
    images: ['/template2-1.png', '/template2-2.png', '/template2-3.png']
  },
  {
    id: 3,
    style: 'Fantasy',
    description: 'Un style féerique et enchanteur',
    images: ['/template3-1.png', '/template3-2.png', '/template3-3.png']
  },
  {
    id: 4,
    style: 'Soft',
    description: 'Une atmosphère délicate et épurée',
    images: ['/template4-1.png', '/template4-2.png', '/template4-3.png']
  }
];

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  return (
    <section id="templates" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Styles
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choisissez parmi nos styles soigneusement conçus
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {templates.map((template) => (
            <div 
              key={template.id} 
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="aspect-[9/16] w-full relative">
                <StylePreview 
                  style={template.style}
                  className="rounded-t-3xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 text-center">{template.style}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Popup */}
        {selectedTemplate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4 overflow-y-auto">
            <div 
              className="bg-white rounded-lg w-full max-w-4xl my-4 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <button 
                onClick={() => setSelectedTemplate(null)}
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md text-gray-500 hover:text-gray-700"
                aria-label="Fermer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Contenu */}
              <div className="p-4 md:p-6">
                <h3 className="text-2xl font-bold mb-2 pr-10">{selectedTemplate.style}</h3>
                <p className="text-gray-600 mb-4">{selectedTemplate.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {Array(3).fill(null).map((_, index) => (
                    <div 
                      key={index} 
                      className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md"
                    >
                      <StylePreview 
                        style={selectedTemplate.style}
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </div>

                {/* Bouton de fermeture en bas pour mobile */}
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="mt-6 w-full md:hidden bg-gray-100 text-gray-700 rounded-full py-3 font-medium hover:bg-gray-200 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 
