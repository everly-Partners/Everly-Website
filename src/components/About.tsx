import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Everly
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are passionate about creating unique wedding websites that perfectly reflect
              the love and personality of each couple. Our mission is to provide you with an
              elegant platform to share your love story and all the details of your big day.
            </p>
            
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg className="absolute left-1 top-1 h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Custom design.
                </dt>
                <dd className="inline"> Each template is fully customizable to match your style.</dd>
              </div>
              
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg className="absolute left-1 top-1 h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Responsive support.
                </dt>
                <dd className="inline"> Our team is here to assist you every step of the way.</dd>
              </div>
              
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg className="absolute left-1 top-1 h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Quick launch.
                </dt>
                <dd className="inline"> Your site will be ready in just a few days.</dd>
              </div>
            </dl>
          </div>
          
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="relative w-full max-w-full overflow-hidden rounded-lg">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/gadrudyyoeli.png"
                  alt="Our team at work"
                  fill
                  className="object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 