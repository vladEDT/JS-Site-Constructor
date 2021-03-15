import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JS', {
    tag: 'h1',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),

  new ColumnsBlock(
    [
      'This app is totally built on pure JavaScript without any frameworks or libraries',
      'Here we use OOP and Solid on Javascript',
      'JavaScript - is easy and so interesting! You could implement everything on it!',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),

  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '600px',
      height: 'auto',
    },
  }),

  new TextBlock(
    'PlaceholderText: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste odio rem assumenda dolor? Cupiditate, modi dolor corporis recusandae veritatis perferendis nemo iste libero neque consectetur aperiam ipsum, laudantium quos.',
    {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold',
      },
    }
  ),
]
