export default {
    title: 'Product',
    name: 'product',
    type: 'document',
    fields: [
        {
            title: 'Product Name',
            name: 'productName',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'A little description',
            name: 'productDesc',
            type: 'text',
            options: {
              maxLength: 200,
            },
            validation: Rule => Rule.required()
        },
        {
            title: "Price",
            name: "productPrice",
            type: "number",
            validation: Rule => Rule.required()
        },
        {
            title: "Discount",
            name: "productDiscount",
            type: "number",
        },
        {
            title: "Image",
            name: "productImage",
            type: "image",
            options: {
              hotspot: true,
            },
            validation: Rule => Rule.required()
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
    ]
  }