import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Essential',
    id: 'tier-essential',
    price: '299',
    description: 'The essentials for your wedding website.',
    features: [
      'Template of your choice',
      'Color customization',
      'RSVP form',
      'Photo gallery (50 photos)',
      'Email support',
      '1 year hosting',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    price: '499',
    description: 'Our most popular offer with more features.',
    features: [
      'Everything in Essential',
      'Advanced custom design',
      'Unlimited photo gallery',
      'Integrated wedding registry',
      'Custom countdown timer',
      'Priority support',
      '2 years hosting',
      'Custom domain name',
    ],
    featured: true,
  },
  {
    name: 'Custom',
    id: 'tier-custom',
    price: '799',
    description: 'A fully customized solution for your wedding.',
    features: [
      'Everything in Premium',
      '100% custom design',
      'Custom features',
      'Exclusive animations',
      '24/7 dedicated support',
      '3 years hosting',
      'Included maintenance',
      'Admin training',
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Plans for your needs
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best matches your expectations and budget
          </p>
        </div>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={'flex flex-col rounded-3xl p-8 ring-1 min-h-[550px] ' + 
                (tier.featured ? 'bg-gray-900 ring-gray-900' : 'ring-gray-200 bg-white') + 
                ' xl:p-10'}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={'text-lg font-semibold leading-8 ' + 
                    (tier.featured ? 'text-white' : 'text-gray-900')}>
                    {tier.name}
                  </h3>
                </div>
                <p className={'mt-4 text-sm leading-6 ' + 
                  (tier.featured ? 'text-gray-300' : 'text-gray-600')}>
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className={'text-4xl font-bold tracking-tight ' + 
                    (tier.featured ? 'text-white' : 'text-gray-900')}>
                    {tier.price}€
                  </span>
                </p>
                <ul className={'mt-8 space-y-3 text-sm leading-6 ' + 
                  (tier.featured ? 'text-gray-300' : 'text-gray-600')}>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className={'h-6 w-5 flex-none ' + 
                          (tier.featured ? 'text-white' : 'text-pink-600')}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  className={'block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ' + 
                    (tier.featured
                      ? 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white'
                      : 'bg-pink-600 text-white hover:bg-pink-500 focus-visible:outline-pink-600')}
                >
                  Choose this plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 