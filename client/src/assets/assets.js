import credit from './credit.png'
import cross from './cross.png'
import download from './download.png'
import email from './email.png'
import facebook from './facebook.png'
import favicon from './favicon.png'
import instagram from './instagram.png'
import lock from './lock.png'
import logo from './logo.png'
import profile from './profile.png'
import rating_star from './rating_star.png'
import react from './react.svg'
import star_group from './star_group.png'
import step1 from './step1.png'
import step2 from './step2.png'
import step3 from './step3.png'
import twitter from './twitter.png'
import butterfly from './butterfly.jpg'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'


export const assets = {
  credit,
  cross,
  download,
  email,
  facebook,
  favicon,
  instagram,
  lock,
  logo,
  profile,
  rating_star,
  react,
  star_group,
  step1,
  step2,
  step3,
  twitter,
  butterfly
}

export const stepsData = [
  {
    title: 'Describe Your Vision',
    description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
    icon: step1,
  },
  {
    title: 'Watch the Magic',
    description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
    icon: step3,
  },
  {
    title: 'Download & Share',
    description: 'Instantly download your creation or share it with the world directly from our platform.',
    icon: step2,
  },
]

export const testimonialsData = [
  {
    image: image1,
    name: 'Sam Jackman',
    role: 'Graphic Designer',
    stars: 5,
    text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`,
  },
  {
    image: image3,
    name: 'Richard Nelson',
    role: 'Content Creator',
    stars: 5,
    text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`,
  },
  {
    image: image2,
    name: 'Janny Jackman',
    role: 'Graphic Designer',
    stars: 5,
    text: `I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`,
  },
]

export const plans = [
  {
    id: 'Basic',
    price: 10,
    credits: 100,
    desc: 'Best for personal use.'
  },
  {
    id: 'Advanced',
    price: 50,
    credits: 500,
    desc: 'Best for business use.'
  },
  {
    id: 'Business',
    price: 250,
    credits: 5000,
    desc: 'Best for enterprise use.'
  },
]
