export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number'
      },
      {
        name: 'discount',
        title: 'Discount',
        type: 'number'
      },
      {
        name: 'offerEnd',
        title: 'Offer End',
        type: 'datetime'
      },
      {
        name: 'new',
        title: 'New',
        type: 'boolean'
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number'
      },
      {
        name: 'saleCount',
        title: 'Sale Count',
        type: 'number'
      },
      {
        name: "category",
        title: "Category",
        type: "reference",
        to: {
          type: "category"
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'tag',
        title: 'Tag',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'variation',
        title: 'Variation',
        type: 'array',
        of: [
          {
            name: 'variationItem',
            type: 'object',
            title: 'Variation Item',
            fields: [
              {
                name: 'color',
                title: 'Color',
                type: 'string',
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image'
              },
              {
                name: 'size',
                title: 'Size',
                type: 'array',
                of: [
                  {
                    name: 'sizeItem',
                    type: 'object',
                    title: 'Size Item',
                    fields: [
                      {
                        name: 'name',
                        title: 'Name',
                        type: 'string'
                      },
                      {
                        name: 'stock',
                        title: 'Stock',
                        type: 'number'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{type: 'image'}]
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'string'
      },
      {
        name: 'fullDescription',
        title: 'Full Description',
        type: 'text'
      }
    ]
  };