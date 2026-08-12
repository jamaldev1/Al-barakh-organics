import type { CollectionConfig } from 'payload'

export const TrainingRegistrations: CollectionConfig = {
  slug: 'training-registrations',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'phone', 'session', 'status', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'farmSize',
      type: 'text',
      admin: { description: 'Optional — e.g. "5 acres"' },
    },
    {
      name: 'session',
      type: 'relationship',
      relationTo: 'training-sessions',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Registered', value: 'registered' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Attended', value: 'attended' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'registered',
      required: true,
    },
  ],
}
