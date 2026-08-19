import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'mediaType', 'order', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'mediaType',
      type: 'select',
      options: [
        { label: 'Video', value: 'video' },
        { label: 'Photo', value: 'photo' },
      ],
      defaultValue: 'photo',
      required: true,
      admin: {
        description: 'Select whether this item is a video or a photo',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Upload the photo or video file',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
      admin: {
        description: 'Optional image cover thumbnail (.jpg, .png, .webp) for videos. Leave blank to use the video directly.',
        condition: (data) => data?.mediaType === 'video',
      },
    },
    {
      name: 'caption',
      type: 'textarea',
      admin: {
        description: 'Short description or takeaway about this farm activity',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Highlight as a larger/featured card in the farm tour gallery',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Sort order (lower numbers appear first)',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'published',
      required: true,
    },
  ],
}
