import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Contacto directo',
    description: 'Puedes gestionar conversaciones telefónicas, por correo electrónico y por chat desde un único buzón.',
  },
  { name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'Keyboard shortcuts',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto  max-w-full py-16  px-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24">
        <div>
          <h2 className="text-lg font-semibold text-orange-2">Lo que necesitas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Todo en una plataforma</p>
          <p className="mt-4 text-lg text-gray-500">
          Somos una agencia de desarrollo de software especializada en soluciones personalizadas para empresas. Ofrecemos servicios de desarrollo web y móvil, consultoría y soporte técnico. Utilizamos las últimas tecnologías y contamos con un equipo altamente capacitado.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-orange-button" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}